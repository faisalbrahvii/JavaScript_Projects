function SetTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let session = "AM"; 

    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    if(h >= 12){
        h =  h - 12;
    }

    h = h < 10 ? "0" + h : h; 
    m = m < 10 ? "0" + m : m; 
    s = s < 10 ? "0" + s : s; 
      
    let time  = h + " : " + m + " : " + s + " " + session;
    document.getElementById("print").innerText = time;
    setTimeout(SetTime,1000)
}