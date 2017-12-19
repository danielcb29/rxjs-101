import Rx from 'rxjs/Rx';

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
// var genres = [];
// var r = new XMLHttpRequest();
// r.open("GET", "https://api.themoviedb.org/3/genre/movie/list?api_key=76f6b14f3a0fd2ed9f79af9b6db27612&language=en-US", true);
// r.onreadystatechange = function () {
//   if (r.readyState != 4 || r.status != 200) return;
//   //alert("Success: " + r.responseText);
//   genres = JSON.parse(r.responseText).genres;
//   console.log(genres.length);
// };
// r.send();

// let genres$ = Rx.Observable.create(observer => {
//     observer.next('genres.length');
// });

// // A stream
// var genres$ = Rx.Observable
//   .interval(500)
//   .take(1)
//   .map(i => genres[i]);

// genres$.subscribe(n => {
//     let box = document.getElementById('3');
//     box.innerHTML = n;
//     console.log(n);
// });