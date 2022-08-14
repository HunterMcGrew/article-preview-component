// start of code

// hide hideOnShare on click

// show popout on click
// clickable buttons
const shareBtn = document.getElementById("share");
const shareBtn2 = document.getElementById("share2");
const fbBtn = document.getElementById("fbBtn");
const tweetBtn = document.getElementById("tweetBtn");
const pinBtn = document.getElementById("pinBtn");
const fbBtn2 = document.getElementById("fbBtn2");
const tweetBtn2 = document.getElementById("tweetBtn2");
const pinBtn2 = document.getElementById("pinBtn2");
// divs
const authorDetails = document.getElementById("hideOnShare");
const popout = document.getElementById("popout");
const popoutDesktop = document.getElementById("popoutDesktop");
let shareButtonPress = false;

let innerWindow;

const checkWindow = () => {
    innerWindow = window.innerWidth;
    // console.log("innerWindow", innerWindow);
}

const openShareMenu = () => {
    checkWindow();
    if (innerWindow <= 991) {
    authorDetails.style.display = "none";
    popout.style.display = "flex";
    } else {
        popoutDesktop.style.display = "flex";
    }
}

const closeShareMenu = () => {
    checkWindow();
    if (innerWindow <= 991) {
    popout.style.display = "none";
    authorDetails.style.display = "flex";
    } else {
        popoutDesktop.style.display = "none";
    }
}

shareBtn.addEventListener("click", () => {
    if (shareButtonPress === false) {
        openShareMenu();
        shareButtonPress = true;
    } else {
        closeShareMenu();
        shareButtonPress = false;
    }

})

shareBtn2.addEventListener("click", () => {
    closeShareMenu();
})

fbBtn.addEventListener("click", () => {
    closeShareMenu();
})

tweetBtn.addEventListener("click", () => {
    closeShareMenu();
})

pinBtn.addEventListener("click", () => {
    closeShareMenu();
})

fbBtn2.addEventListener("click", () => {
    closeShareMenu();
})

tweetBtn2.addEventListener("click", () => {
    closeShareMenu();
})

pinBtn2.addEventListener("click", () => {
    closeShareMenu();
})