let discordBtn = document.querySelector('#discord')
let hiddened = document.querySelector('#hiddened')
console.log(hiddened)

discordBtn.addEventListener('click', function () {
	const text = 'imrasts'

	navigator.clipboard.writeText(text).then(function () {
		hiddened.id = 'show'
		let showed = document.querySelector('#show')
		setTimeout(function () {
			showed.id = 'hiddened'
		}, 2000)
	})
})
