




let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")



setInterval(() => {
    let time = new Date()

    hours.innerHTML = (time.getHours() < 10 ? "0" : "") + time.getHours()
    minutes.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes()
    seconds.innerHTML = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds()


}, 1000)


let date = new Date()
day.innerHTML = (date.getDate() < 10 ? "0" : "") + date.getDate()

let mon =  date.getMonth()
let mont = (Number.parseInt(mon))+1
month.innerHTML = mont
year.innerHTML = date.getFullYear()

console.log(typeof mont)



