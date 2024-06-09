function updateTime() {
    let hrs = document.getElementById('hrs');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');

    let currentTime = new Date();   /*Get current time*/

    hrs.innerHTML = currentTime.getHours().toString().padStart(2,0);
    min.innerHTML = currentTime.getMinutes().toString().padStart(2,0);
    sec.innerHTML = currentTime.getSeconds().toString().padStart(2,0);
}

updateTime();

/*Repeatedly udpdate current time*/
setInterval(updateTime, 1000);