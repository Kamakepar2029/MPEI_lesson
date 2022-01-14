var config = {
    "AppName" : "MPT Lessons"
};

var html = document.documentElement;
var body = document.body;
var lesson_param = params["lesson_name"];
var article_param = params["article_param"];

var lesson_container = document.getElementsByClassName('container')[0];

const renderArticle = function(xhrJSONResult){
    converter = new showdown.Converter(),
    html = converter.makeHtml(xhrJSONResult);
    lesson_container.innerHTML = html;
}

fetch('/lessons/'+lesson_param+'/'+article_param)
  .then(response => response.text())
  .then(response => renderArticle(response));