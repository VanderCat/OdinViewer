// ==UserScript==
// @name         Odin.Study userscript
// @namespace    http://vandercat.github.io/
// @version      0.1
// @description  allows you to share videos
// @author       You
// @match        https://www.odin.study/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=odin.study
// @grant        none
// @updateURL    http://vandercat.github.io/OdinViewer/script.user.js
// @downloadURL    http://vandercat.github.io/OdinViewer/script.user.js
// @run-at      document-end
// ==/UserScript==
const __uuidRegexp = /[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/
function inject(result) {
    [...result].forEach((element)=>{
        //console.log(element)
        const controls = element.getElementsByClassName("plyr__controls")[0]
        //console.log(controls)
        const video = element.getElementsByClassName("plyr__video-wrapper")[0].getElementsByTagName("video")[0]
        //console.log(video)
        //console.log(video.getAttribute("poster"))
        const uuid = video.getAttribute("poster").match(__uuidRegexp)[0]
        const funnyBtnWrapper = document.createElement("div")
        funnyBtnWrapper.className="plyr__controls__item"
        const funnyBtn = document.createElement("button")
        funnyBtn.setAttribute("type", "button")
        funnyBtn.className="plyr__control"
        funnyBtn.innerHTML = '<svg style="width:18px;height:18px" viewBox="0 0 24 24"><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" /></svg>'
        funnyBtnWrapper.appendChild(funnyBtn)
        const fullscreenBtn = controls.getElementsByTagName("button")[2]
        fullscreenBtn.before(funnyBtnWrapper)
        funnyBtn.addEventListener("click", ()=>{
            navigator.clipboard.writeText("http://vandercat.github.io/OdinViewer/#/play?uuid="+uuid+"&quality=1")
        })
    })
}

(function() {
    'use strict'
    let counter = 0
    const interval = setInterval(()=>{
        console.log("searching for plyr");
        const result = document.getElementsByClassName("plyr")
        console.log(result);
        if (result.length>0) {
            console.log("Plyr found");
            inject(result)
            clearInterval(interval)
        }
        counter++
        if (counter>60) {
            console.log("give up")
            clearInterval(interval)
        }
    },1000)
})();