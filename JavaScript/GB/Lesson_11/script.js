const audioEl = document.querySelector('.audio');

audioEl.addEventListener('play', function (e) {
    console.log(`You pressed play`)
});

audioEl.addEventListener('pause', function (e) {
    console.log('You pressed pause')
});

audioEl.playbackRate = 2;
console.log(audioEl.playbackRate);
console.log(audioEl.src)
audioEl.volume = 0.5;
console.log(audioEl.volume)
