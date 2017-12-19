import Rx from 'rxjs/Rx';

var observable = Rx.Observable.create(observer => {
    observer.next('Hello World');
});

observable.subscribe(result => {
    let box = document.getElementById('1');
    box.innerHTML = result;
    console.log(result);
}); 

var numbers = [1,2,3,4,5,6,7,8,9,10];
// A stream
var numbers$ = Rx.Observable
  .interval(500)
  .take(10)
  .map(i => numbers[i]);

numbers$.subscribe(n => {
    let box = document.getElementById('2');
    box.innerHTML = n;
    console.log(n);
});

//List of Genres
// var r = new XMLHttpRequest();
// r.open("GET", "https://api.themoviedb.org/3/genre/movie/list?api_key=76f6b14f3a0fd2ed9f79af9b6db27612&language=en-US", true);
// r.onreadystatechange = function () {
//   if (r.readyState != 4 || r.status != 200) return;
//   //alert("Success: " + r.responseText);
//   genres = JSON.parse(r.responseText).genres;
//   console.log(genres.length);
// };
// r.send();

let btnViewGenres = document.querySelector('.view-genres');

let requests$ = Rx.Observable
  .fromEvent(btnViewGenres, 'click')
  .map( _ => 'https://api.themoviedb.org/3/genre/movie/list?api_key=76f6b14f3a0fd2ed9f79af9b6db27612&language=en-US');
  //.startWith('https://api.themoviedb.org/3/genre/movie/list?api_key=76f6b14f3a0fd2ed9f79af9b6db27612&language=en-US');

let responses$ = requests$
  .flatMap(url => Rx.Observable.fromPromise(fetch(url)))
  .flatMap(r => Rx.Observable.fromPromise(r.json()));

let genres$ = responses$.map(getGenres);

function getGenres(res){
    return res.genres;
}

genres$.subscribe(response => {
    response.forEach((genre) => {
        // let box = document.getElementById('3');
        // box.innerHTML = genre.name;
        appendGenresToDOM(genre);
    });
});

function toTemplate(genre){
  var a = document.createElement("a");
  a.textContent = genre.name;
  var div = document.createElement("div");
  div.appendChild(a);
  return div;
}

function appendGenresToDOM(genre){
  var t = toTemplate(genre);
  var g = document.getElementById('3');
  g.appendChild(t);
}

// var mouseMove = Rx.Observable.fromEvent(document, "mousemove");
// var text = "RxJs experiment";
// var container = document.getElementById('container');

// for(var i=0; i <text.length; i++){
//     (function(i){
//         var s = document.createElement("span");
//         s.innerHTML = text.charAt(i);
//         s.style.position = "absolute";
//         container.appendChild(s);

//         mouseMove.delay(i*100).subscribe(function(mouseEvent){
//             s.style.top = mouseEvent.clientY + "px";
//             s.style.left = mouseEvent.clientX + i * 10 + 15 + "px";
//         });
//     })(i);
// }