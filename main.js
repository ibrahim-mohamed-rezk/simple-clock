let h = document.getElementsByClassName('h')[0]
let m = document.getElementsByClassName('m')[0]
let s = document.getElementsByClassName('s')[0]

const change =()=>{
    const date = new Date()

    const ho = date.getHours()
    const mn = date.getMinutes()
    const sec = date.getSeconds()

    h.style.transform = `rotate(${30 * ho + mn / 6}deg)`
    m.style.transform = `rotate(${6 * mn}deg)`
    s.style.transform = `rotate(${6 * sec}deg)`
}

setInterval(() => {
    change()
}, 1000);