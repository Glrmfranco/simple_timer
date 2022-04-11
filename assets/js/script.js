const relogio = document.querySelector('.relogio')
let segundos = 0
let timer

function getHora(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' })
}

function iniciaRelogio() {
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = getHora(segundos)
    }, 1000);
}

document.addEventListener('click', (event) => {
    const et = event.target
    if (et.classList.contains('iniciar')) {
        clearInterval(timer)
        iniciaRelogio()
        relogio.classList.remove('pausado')
    }
    if (et.classList.contains('pausar')) {
        clearInterval(timer)
        relogio.classList.add('pausado')
    }
    if (et.classList.contains('zerar')) {
        clearInterval(timer)
        segundos = 0
        relogio.innerHTML = '00:00:00'
        relogio.classList.remove('pausado')
    }
})