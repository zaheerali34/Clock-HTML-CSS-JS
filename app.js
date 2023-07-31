function GetTime() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let session  = "AM";
    
    if (h > 12) {
        h = h - 12
    }

    if (h >= 12) {
        session = "PM";
    }
   
    h = h < 10 ? "0"+h : h; 
    m = m < 10 ? "0"+m : m; 
    s = s < 10 ? "0"+s : s;

    let time = h + " : " + m + " : " +  s + " : " + session;
    document.getElementById("time-text").innerHTML = time;
    setTimeout(function () {
        GetTime();
    },1000)
}

GetTime();