let semEnd = new Date(2022, 6 - 1, 30);
let dDay = new Date(2022, 7 - 1, 22);

let playlist = ['cinema', 'the-nights', 'this-feeling', 'the-city', 'high-on-life', 'no-sleep', 'sweat']
let max = playlist.length
let played = Math.floor(Math.random() * (max - 0) + 0)
let loaded = true

$(document).ready(() => {
    let audioPlayer = document.getElementById('music-player')

    $('#semendCountdown').countdown({ until: semEnd });
    $('#ddayCountdown').countdown({ until: dDay });

    document.addEventListener('mouseenter', function () {
        if(loaded) {
            audioPlayer.src = 'audio/' + playlist[played] + '.mp3'
            audioPlayer.pause()
            audioPlayer.load()
            audioPlayer.play()
            loaded = false
        }
    })

    audioPlayer.addEventListener('ended', function () {
        audioPlayer.src = 'audio/' + playlist[++played % max] + '.mp3'
        audioPlayer.pause()
        audioPlayer.load()
        audioPlayer.play()
    })
})
