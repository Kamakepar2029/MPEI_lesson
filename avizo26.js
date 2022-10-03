var extension = document.createElement('div');
extension.setAttribute('style', "position: fixed;left: 0px;bottom: 0px;z-index: 1000000000;background: #fff;padding: 10px 20px;border-radius: 5px;font-family: 'Roboto', sans-serif;");
extension.innerHTML = '<h1 style="text-align: center;padding-bottom: 7px;font-size: 20px;"> Aviso Autosurf</h1><div class="extension_enabled">Extension: <green style="border: 1px solid #01a101;background: #00c700;color: white;border-radius: 10px;padding: 4px 18px;">enabled</green></div>';
document.documentElement.append(extension);

var nums = '';
const start = Date.now();
localStorage.pingSent = 'false';

try{
document.querySelector('#serf-link-48577').remove();
document.querySelector('.frame_table').append(extension);
var youtubes = document.querySelector('#capcha-tr-block').getAttribute('style');
}catch (e){
     console.log(e);
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkAvailibility(){
     if (document.location.href.split('/go/view-video.php').length > 1){
          let al = document.createElement('a');
         al.href="https://aviso.bz/work-youtube";
         setTimeout(() => al.click(), 1000);
     }
}

function getYoutubeLink(){
     let me = document.querySelector('#contentwrapper');
    let links = me.querySelectorAll('.work-serf');
    let index = 1;
    let random = randomIntFromInterval(1, 3);
    let lastnormal = '';
    for (let l in links){
        try{
            let link = links[l];
            if (link.querySelector('.serf-text').innerText == 'Просмотр видеоролика'){
                
                     lastnormal = link;
                     if (random == index){
                          return link;
                     }
                     index +=1;
                
            }
        }catch{
        }
    }
    if (index < 3){
         return lastnormal;
    }
    return false;
}

function ping(msf){
if (localStorage.pingSent == 'false'){
avizoJavascriptHandler.ping(msf);
localStorage.pingSent = 'true';
}
}

function checkYoutube(){
    let block = document.querySelector('#capcha-tr-block');
    if (player.getPlayerState() != 1){
         player.playVideo();
         ping('player');
    }
    if (document.querySelector('#timer-tr-block').innerText.split('\t')[0] == '0'){
        document.querySelector('.extension_enabled').innerHTML = "Redirecting...";
         let al = document.createElement('a');
         al.href="https://aviso.bz/work-youtube";
         setTimeout(() => al.click(), 1000);
         avizoJavascriptHandler.youtubeReady();
    }else{
         if (document.querySelector('#timer-tr-block').innerText.split('\t')[0] == nums){
              const millis = Date.now() - start;
              secondss = Math.floor(millis / 1000);
              if (secondss > 20){
                  let al = document.createElement('a');
                   al.href="https://aviso.bz/work-youtube";
                   setTimeout(() => al.click(), 1000); 
              }
         }
         /*
         if (Number(document.querySelector('#timer-tr-block').innerText.split('\t')[0]) > 30){
              let al = document.createElement('a');
                   al.href="https://aviso.bz/work-youtube";
                   setTimeout(() => al.click(), 1000);
         }
         */
         console.log('Everything ok');
    }
}


function clickTimer(){
    try{
        ping('timer');
        let btns = document.documentElement.querySelector('frameset').querySelector('frame').contentDocument.querySelectorAll('a');
        for (let b in btns){
            try{
                let btn = btns[b];
                if (btn.innerText == 'Подтвердить просмотр'){
                    btn.click();
                    avizoJavascriptHandler.newAd();
                    document.location.href = 'https://aviso.bz/work-youtube';
                }
            }catch (e) {
             // statements to handle any exceptions
             logMyErrors(e); // pass exception object to error handler
            }
        }
    }catch (e){
       console.log(e);
    }
}

if (document.location.href.split('#')[0] == 'https://aviso.bz/work-serf'){
    ping('work-surf');
    let me = document.querySelector('#contentwrapper');
        if (me.querySelectorAll('.work-serf').length > 3){
            let gNumber = randomIntFromInterval(0,3);
        }else{
            let gNumber = 1;
        }
        me.querySelectorAll('.work-serf')[gNumber].querySelector('a').click();
        setTimeout(() => me.querySelectorAll('.work-serf')[gNumber].querySelector('a').click(), 2000); 
        setTimeout(() => me.querySelectorAll('.work-serf')[gNumber].querySelector('a').click(), 4000); 
}

if (document.location.href.split('#')[0] == 'https://aviso.bz/work-youtube'){
     ping('work-youtube');
     var youtube = getYoutubeLink();
     console.log(youtube);
        youtube.querySelector('td:nth-child(2)').querySelector('span').click();
        setTimeout(() => youtube.querySelector('td:nth-child(2)').querySelector('span').click(), 2000);
        setTimeout(() => youtube.querySelector('td:nth-child(2)').querySelector('span').click(), 4000);
}

if (document.location.href.split('#')[0].split('/go/view-video.php').length > 1){
     setTimeout(checkAvailibility, 2000);
}

if (document.location.origin != 'https://aviso.bz'){
    if (document.location.origin == 'https://youtube.com'){
         let al = document.createElement('a');
         al.href="https://aviso.bz/work-youtube";
         al.click();
    }else{
         setInterval(clickTimer, 3000);
         setInterval(checkYoutube, 1000);
         setTimeout(() => console.log(nums = document.querySelector('#timer-tr-block').innerText.split('\t')[0]) ,3000); 
    }
}
