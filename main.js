const soundFxArr = ['rain', 'brushing', 'crunching', 'fart', 'evil-laugh']

soundFxArr.forEach(soundFx => {
    const soundFxBtn = document.createElement('button')
    soundFxBtn.classList.add('sound-fx-btn')

    soundFxBtn.innerText = soundFx;

    soundFxBtn.addEventListener('click', () => {
        stopPlaying()

        document.getElementById(soundFx).play()
    })

    document.querySelector('.sound-effects').appendChild(soundFxBtn)
})

function stopPlaying() {
    soundFxArr.forEach(soundFx => {
        const audioClip = document.getElementById(soundFx)

        audioClip.pause()
        audioClip.currentTime = 0

        
    })
}