let semEnd = new Date(2022, 6 - 1, 30);
let dDay = new Date(2022, 7 - 1, 22);

let playlist = ['country-roads', 'sweet-home-alabama', 'this-feeling', 'the-city', 'high-on-life', 'no-sleep']
let max = playlist.length
let played = Math.floor(Math.random() * (max - 0) + 0)

$(document).ready(() => {
    let audioPlayer = document.getElementById('music-player')

    $('#semendCountdown').countdown({ until: semEnd });
    $('#ddayCountdown').countdown({ until: dDay });

    audioPlayer.src = 'audio/' + playlist[played] + '.mp3'
    audioPlayer.pause()
    audioPlayer.load()
    audioPlayer.play()

    audioPlayer.addEventListener('ended', function () {
        audioPlayer.src = 'audio/' + playlist[++played % max] + '.mp3'
        audioPlayer.pause()
        audioPlayer.load()
        audioPlayer.play()
    })
})
