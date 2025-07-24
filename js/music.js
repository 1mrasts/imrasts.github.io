const audio = new Audio('music/OHWOW.mp3')
let stopSound = document.querySelector('#stop')
let nextSound = document.querySelector('#next')
let previousSound = document.querySelector('#previous')
let progressBar = document.querySelector('.progress-bar')
let duration = document.querySelector('.time')
let isStop = false
let isMusicPlay = true
audio.volume = 0.3
audio.loop = true
audio.play()
console.log(audio.currentTime)

stopSound.addEventListener('click', function () {
	if (isStop == true) {
		stopSound.src = 'img/stop-white.png'
		isStop = false
		toggleMusic()
	} else if (isStop == false) {
		stopSound.src = 'img/start-white.png'
		isStop = true
		toggleMusic()
	}
})
nextSound.addEventListener('click', function () {
	audio.currentTime = 0
})
previousSound.addEventListener('click', function () {
	audio.currentTime = 0
})

audio.addEventListener('loadedmetadata', () => {
	console.log('Длительность:', audio.duration)
})
audio.addEventListener('timeupdate', () => {
	const progressPercent = (audio.currentTime / audio.duration) * 100
	progressBar.style.width = progressPercent + '%'
	duration.textContent = formatTime(audio.currentTime)
})

function toggleMusic() {
	if (isMusicPlay) {
		audio.pause()
	} else {
		audio.play()
	}
	isMusicPlay = !isMusicPlay
}
function formatTime(seconds) {
	const mins = Math.floor(seconds / 60)
	const secs = Math.floor(seconds % 60)
	const minsStr = mins < 10 ? '0' + mins : mins
	const secsStr = secs < 10 ? '0' + secs : secs
	return `${minsStr}:${secsStr}`
}
