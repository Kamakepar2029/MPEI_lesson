var config = {
    "AppName" : "MPT Lessons"
};

var html = document.documentElement;
var body = document.body;

const replaceHtml = function(elem, config){
    return [elem, config]
}

document.getElementsByClassName('navbar-brand')[0].innerText