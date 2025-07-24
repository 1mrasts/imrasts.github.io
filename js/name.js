const originalTitle = '@imrasts'
let currentText = ''
let index = 0
let increasing = true

function updateTitle() {
	const titleLength = originalTitle.length

	if (increasing) {
		// Добавляем следующую букву
		currentText = originalTitle.slice(0, index + 1)
		index++
		if (index >= titleLength) increasing = false
	} else {
		// Убираем последнюю букву
		currentText = originalTitle.slice(0, index)
		index--
		if (index === 0) increasing = true
	}

	document.title = currentText

	setTimeout(updateTitle, 400) // Скорость анимации (в миллисекундах)
}

updateTitle() // Запускаем анимацию

document.addEventListener('DOMContentLoaded', function () {
	const video = document.getElementById('bgVideo')
	const buffer = 1 // Буфер перед концом видео (в секундах)
	const rewindTime = 25 // Время отката (в секундах)

	// Дожидаемся загрузки метаданных (включая длительность видео)
	video.addEventListener('loadedmetadata', function () {
		const duration = video.duration

		// Проверяем, что длительность известна
		if (isNaN(duration)) return

		// Отслеживаем текущее время воспроизведения
		video.addEventListener('timeupdate', function () {
			// Если осталось меньше времени, чем buffer
			if (duration - video.currentTime <= buffer) {
				// Откатываем видео на 25 секунд назад
				video.currentTime = duration - rewindTime
			}
		})
	})
})
