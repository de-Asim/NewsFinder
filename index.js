function prevFun(prev){
    if(prev != undefined){
        let prevContent = document.getElementById(`mycontent${prev}`);
        prevContent.classList.remove("showcontent");
    }
}
let prev;
function collapseFun(index){
    console.log(prev);
    if(prev != index){
        prevFun(prev);
    }
    let now = document.getElementById(`mycontent${index}`);
    now.classList.toggle("showcontent");
    prev = index;
    console.log(prev);
}


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/everything?q=tesla&from=2021-06-23&sortBy=publishedAt&apiKey=869dbd2c6dc64e2bb5099c149101c257',true);
xhr.getResponseHeader('content-type','application/json');

xhr.onload = function(){
    if (this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let mycollapse = document.getElementById("mycollapse");
        let allnews ='';
        articles.forEach(function (element,index) {
            let news =`<div class="myheading" id="myheading${index}}" onclick="collapseFun(${index})">${element.title}</div>
            <div class="mycontent" id="mycontent${index}">${element.content}. For more <a href=${element.url} target ="_blank">click here</a></div>`
            allnews += news;
        });
        mycollapse.innerHTML = allnews;
    }
    else{
        console.log("error occured");
    }
}

xhr.send()

