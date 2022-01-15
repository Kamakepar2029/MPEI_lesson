var config = {
    "AppName" : "MPT Lessons"
};

var html = document.documentElement;
var body = document.body;

var lessons = document.getElementsByClassName('content-lessons')[0];

const renderAllArticles = function(xhrJSONResult){
    var template = `<div class="card-body">
                        <h5 class="card-title">%author%</h5>
                        <p class="card-text">%title%</p>
                        <a href="blog.html?lesson_name=%path%" class="btn btn-primary">Открыть серию уроков</a>
                    </div>`;
    for (let i in xhrJSONResult){
        let ielem = xhrJSONResult[i];
        let doc = document.createElement('div');
        doc.className = 'card mb-3';
        doc.innerHTML = template.replace('%author%', ielem["teacher"]).replace('%title%', ielem["description"]).replace("%path%", ielem["name"]);
        lessons.innerHTML = '';
        lessons.append(doc);
    }
}

fetch('/lessons/index.json'+'?'+makeid(6))
  .then(response => response.json())
  .then(response => renderAllArticles(response));