// ==UserScript==
// @name         video-element-rate-controller
// @namespace    https://github.com/mirnhoj/video-element-playbackrate-setter
// @version      0.1
// @description  add keyboard shortcuts that will increase/decrease the playback rate for video elements.
// @include      http*://*.youtube.com/*
// @include      http*://*.gfycat.com/*
// @include      http*://*.vimeo.com/*
// @include      https://www.facebook.com/video.php*
// @include      https://www.facebook.com/*/videos/*
// @include      https://www.kickstarter.com/*
// ==/UserScript==
// 
// if you want to extend the functionality of this script to other sites
// besides youtube, add additional @include keys to the metadata block.
//
// if you want change the granularity of the playback rate adjustment, change
// the line "var speedStep = 0.1;" to equal something other than 0.1, like 0.01
// for more granular adjustments, or 0.25 for less granular adjustments. 
// Rates will be rounded to 0.01.

var speedStep = 0.1;

var infobox = document.createElement("h1");
infobox.setAttribute("id", "playbackrate-indicator");
infobox.style.position = "absolute";
infobox.style.top = "10%";
infobox.style.right = "10%";
infobox.style.color = "rgba(255, 0, 0, 1)";
infobox.style.zIndex = "99999";  // ensures that it shows above other elements.
infobox.style.visibility = "hidden";

var hideTime = 0;

function modifyPlaybackRate(rateDiff) {
    // Grab the video elements and set their playback rate
    var videoElement = document.getElementsByTagName("video")[0];
    var newRate = Math.round((videoElement.playbackRate + rateDiff) * 100) / 100
    videoElement.playbackRate = newRate
    
    // Show infobox if not already added and update rate indicator.
    if (videoElement && !document.getElementById("playbackrate-indicator")) {
        videoElement.parentElement.appendChild(infobox);
    }
    
    // Show and then hide the infobox
    infobox.style.visibility = "visible";    
    infobox.innerHTML = newRate + "x";
    
    hideTime = new Date().getTime() + 1000;
    hideInfobox();
}

function hideInfobox() {
    if (new Date().getTime() > hideTime) {
        infobox.style.visibility = "hidden";
    } else {
        setTimeout(hideInfobox, 100);
    }
}


// Mimic vlc keyboard shortcuts
window.addEventListener('keydown', function(event) {
    var keycode = event.charCode || event.keyCode;

    // Decrease playback rate if '[' is pressed
    if (keycode === 91 || keycode === 123 || keycode === 219) {
        modifyPlaybackRate(-speedStep);
    }

    // Increase playback rate if ']' is pressed
    if (keycode === 93 || keycode === 125 || keycode === 221) {
        modifyPlaybackRate(speedStep);
    }
});
