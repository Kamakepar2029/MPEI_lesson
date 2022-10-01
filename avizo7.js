var extension = document.createElement('div');
extension.setAttribute('style', "position: fixed;left: 0px;bottom: 0px;z-index: 1000000000;background: #fff;padding: 10px 20px;border-radius: 5px;font-family: 'Roboto', sans-serif;");
extension.innerHTML = '<h1 style="text-align: center;padding-bottom: 7px;font-size: 20px;"> Aviso Autosurf</h1><div class="extension_enabled">Extension: <green style="border: 1px solid #01a101;background: #00c700;color: white;border-radius: 10px;padding: 4px 18px;">enabled</green></div>';
document.body.append(extension);

try{
var youtubes = document.querySelector('#capcha-tr-block').getAttribute('style');
}catch (e){
     console.log(e);
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getYoutubeLink(){
     let me = document.querySelector('#contentwrapper');
    let links = me.querySelectorAll('.work-serf');
    let index = 0;
    let random = randomIntFromInterval(0, 2);
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
    if (index < 1){
         return lastnormal;
    }
    return false;
}

function checkYoutube(){
    let block = document.querySelector('#capcha-tr-block');
    if (block.getAttribute('style') == youtubes){
        console.log('Everything ok');
    }else{
         document.querySelector('.extension_enabled').innerHTML = "Redirecting...";
         avizoJavascriptHandler.youtubeReady();
    }
}


function clickTimer(){
    try{
        let btns = document.documentElement.querySelector('frameset').querySelector('frame').contentDocument.querySelectorAll('a');
        for (let b in btns){
            try{
                let btn = btns[b];
                if (btn.innerText == 'Подтвердить просмотр'){
                    btn.click();
                    setTimeout(() => avizoJavascriptHandler.newAd(), 1000);
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
    let me = document.querySelector('#contentwrapper');
        me.querySelectorAll('.work-serf')[1].querySelector('a').click();
        setTimeout(() => me.querySelectorAll('.work-serf')[1].querySelector('a').click(), 2000); 
}

if (document.location.href.split('#')[0] == 'https://aviso.bz/work-youtube'){
    var youtube = getYoutubeLink();
        youtube.querySelector('td:nth-child(2)').querySelector('span').click();
        setTimeout(() => youtube.querySelector('td:nth-child(2)').querySelector('span').click(), 2000);
}

if (document.location.origin != 'https://aviso.bz'){
    setInterval(clickTimer, 3000);
    setInterval(checkYoutube, 1000);
    try{
         setTimeout(() => player.playVideo(), 3000);
    }catch (e){
         console.log(e);
    }
}
