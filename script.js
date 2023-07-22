let set = () => {

    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let d = a.getDate()
    let year = a.getFullYear()
    let month = a.getMonth() + 1

    document.getElementById("hr").innerHTML = h
    document.getElementById("mn").innerHTML = m
    document.getElementById("dat").innerHTML = d
    document.getElementById("year").innerHTML = year
    document.getElementById("month").innerHTML = month
}

let kr = setInterval(set(),0.0001)