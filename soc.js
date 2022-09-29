var socarr = [];
let list = document.querySelector('.letter-list');
let all_list = list.querySelectorAll('.letter');
for (let l in all_list){
    try{
        let soc = {};
        let al = all_list[l];
        if (al.classList.contains('visit-redirect')){
            soc["type"] = "redirect";
        }else{
            soc["type"] = "frame";
        }
        soc["link"] = al.querySelector('a').href;
        soc["title"] = al.querySelector('a').innerText;
        socarr[socarr.length] = soc;
    }catch{
        console.log('error');
    }
}
socpublicJavascriptHandler.loadArray(JSON.stringify(socarr));
