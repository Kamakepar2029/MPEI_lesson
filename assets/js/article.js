var config = {
    "AppName" : "MPT Lessons"
};

var html = document.documentElement;
var body = document.body;
var lesson_param = params["lesson_name"];
var article_param = params["article_param"];

var lesson_container = document.getElementsByClassName('containers')[0];

const renderArticle = function(xhrJSONResult){
    converter = new showdown.Converter();
    lhtml = converter.makeHtml(xhrJSONResult);
    console.log(lhtml);
    lesson_container.innerHTML = lhtml;
}

fetch('/lessons/'+lesson_param+'/'+article_param)
  .then(response => response.text())
  .then(response => renderArticle(response));