const ye_day=document.getElementById("ye_day")
const ye_hour=document.getElementById("ye_hour")
const ye_min=document.getElementById("ye_min")
const ye_sec=document.getElementById("ye_sec")

const die_day=document.getElementById("die_day")
const die_hour=document.getElementById("die_hour")
const die_min=document.getElementById("die_min")
const die_sec=document.getElementById("die_sec")

function countdown(){
    const now=new Date();
    const year_end=new Date(now.getFullYear(),11,31,23,59,59);
    const diff=year_end.getTime()-now.getTime(); //miliseconds

    const calcDay=Math.floor(diff/1000/86400);
    const calcHour=Math.floor(diff/1000/3600)%24;
    const calcMin=Math.floor(diff/1000/60)%60;
    const calcSec=Math.floor(diff/1000)%60;

    ye_day.innerHTML=calcDay<10 ? '0'+calcDay:calcDay;
    ye_hour.innerHTML=calcHour<10 ? '0'+calcHour:calcHour;
    ye_min.innerHTML=calcMin<10 ? '0'+calcMin:calcMin;
    ye_sec.innerHTML=calcSec<10 ? '0'+calcSec:calcSec;

    
    const year_end2=new Date(2080,12,31,23,59,59);
    const diff2=year_end2.getTime()-now.getTime(); //miliseconds

    const calcDay2=Math.floor(diff2/1000/86400);
    const calcHour2=Math.floor(diff2/1000/3600)%24;
    const calcMin2=Math.floor(diff2/1000/60)%60;
    const calcSec2=Math.floor(diff2/1000)%60;

    x_day.innerHTML=calcDay2<10 ? '0'+calcDay2:calcDay2;
    x_hour.innerHTML=calcHour2<10 ? '0'+calcHour2:calcHour2;
    x_min.innerHTML=calcMin2<10 ? '0'+calcMin2:calcMin2;
    x_sec.innerHTML=calcSec2<10 ? '0'+calcSec2:calcSec2;
    
}

countdown();
setInterval(countdown,1000);