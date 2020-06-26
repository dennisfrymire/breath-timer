const container = document.querySelector('.container')
const text = document.querySelector('#text')
const pointer = document.querySelector('.pointer-container')

const totalTime = 19000
const breathetime = 4000
const holdTime = 7000
const breathOutTime = 8000

container.addEventListener('click', breatheAnimation);

// breatheAnimation()

function breatheAnimation () {
    text.innerHTML = 'Breathe in'
    container.className = 'container grow'
    pointer.className = 'pointer-container animate'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe out'
            container.className = 'container shrink'
        }, breathOutTime)
    }, breathetime)
}

setInterval(breatheAnimation, totalTime)

