let amongUsAd = document.querySelector('.among-us-ad');
let amongVid = document.querySelector('.among-vid');

amongUsAd.addEventListener('mouseover', () => {
    amongVid.src = '../assets/videoes/amongus2.mp4';
});

['mouseout', 'mouseleave'].forEach((eventType) => {
    amongUsAd.addEventListener(eventType, () => {
        amongVid.src = '../assets/videoes/amongus1.mp4'
    });
});