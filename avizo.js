function getYoutubeLink(){
    let links = me.querySelectorAll('.work-serf');
    for (let l in links){
        try{
            let link = links[l];
            if (link.querySelector('.serf-text').innerText == 'Просмотр видеоролика'){
                return link;
            }
        }catch{
        }
    }
    return false;
}

function clickTimer(){
    try{
        let btns = document.documentElement.querySelector('frameset').querySelector('frame').contentDocument.querySelectorAll('a');
        for (let b in btns){
            try{
                let btn = btns[b];
                if (btn.innerText == 'Подтвердить просмотр'){
                    btn.click();
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
        me.querySelector('.work-serf').querySelector('a').click();
        setTimeout(() => me.querySelector('.work-serf').querySelector('a').click(), 2000); 
}

if (document.location.href.split('#')[0] == 'https://aviso.bz/work-youtube'){
    var youtube = getYoutubeLink();
        youtube.querySelector('td:nth-child(2)').querySelector('span').click();
        setTimeout(() => youtube.querySelector('td:nth-child(2)').querySelector('span').click(), 2000);
}

if (document.location.origin != 'https://aviso.bz'){
    setInterval(clickTimer, 3000);
}
