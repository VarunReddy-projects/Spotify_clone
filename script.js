 async function getsongs(){
    let a=await fetch("http://127.0.0.1:5500/Songs/")
    let response=await a.text();
    let div=document.createElement("div");
    div.innerHTML=response;
    let as =div.getElementsByTagName("a");
    let songs= []
    for(let index=0;index<as.length; index++){
        const element=as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/Songs/")[1]);
        }
    }
    return songs;
 }
async function main(){
    let songs= await getsongs();
    console.log(songs);
    let songUL=document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML=songUL.innerHTML+`<li>
                            <img  class="invert" src="images/music.svg"  alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20"," ")}</div>
                                <div>Song</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="images/play.svg">
                            </div>   
                        </li>`;
    }
 }
 main()
