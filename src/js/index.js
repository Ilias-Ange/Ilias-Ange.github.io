let pics_terrain=new Array("../img/Portfolio/terrain1.png","../img/Portfolio/terrain2.png");
let num_terrain=-1;

function slideshow(){
    if (num_terrain=1){
        num_terrain=0;
    } else {
        num_terrain++;
    }
    document.getElementsByClassName("portfolio-img").src=pics_terrain[num_terrain];
    setTimeout("slideshow()",1000);
}

slideshow();