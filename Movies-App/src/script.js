// const api_key = 'f2ca7d8450237f670f4a8caa24806299';
// const img_path = 'https://image.tmdb.org/t/p/w500/';


// async function searchMovie(name) {
//     await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${name}`)
//         .then(response => response.json())
//         .then(data => {
//             return data.results;
//         })
// }

// function test(name) {
//     searchMovie(name)
//         .then(results => {
//             console.log(results);
//         })

// }
// // fetch(`https://api.themoviedb.org/3/movie/550?api_key=${api_key}&callback=test`)
// //     .then(response => {
// //         console.log(response);
// //         response.json()
// //     })
// //     .then(data => {
// //         console.log(data);
// //     })
// // i    .catch(err => {
// //         console.error(err);
// //     });
// const a = 12;
// console.log(a);
// console.log(func);

// function func() {
//     var a = 14;
//     console.log(a);
// }
// console.log('After definition', a);

// console.log(func());
// console.log(a);

// there cannot be a hero without becomming the villian of his life

// function main() {
//     var a = 12;
//     // i       this is scope chain and lexcical Environment   
//     var b = 15;

//     function child() {
//         console.log(a);
//     }

//     function fun1() {
//         child();
//         console.log(b);
//     }
//     fun1();
// }
// main();

// console.log(a);
// console.log(b);
// let a = 12;
// var b = 14;

// console.log(a);


// let a = 12;
// // console.log(a);

// let newfun = () => {
//     let a = 1232;

//     function fun2() {
//         a++;
//         console.log(a);
//     }
//     fun2();
//     return fun2;
// }
// let hidden = newfun();
// console.log(hidden);
// hidden();
// hidden();

// console.log(newfun);
// console.log(a);
// newfun();
// newfun();

//Printing 1 to 10 after 500ms interval

// function printAfter500() {
//     var count = 1;

//     let loop = setInterval(() => {
//         console.log(count);
//         count++;
//         if (count > 5)
//             clearInterval(loop);
//     }, 500);
// }

// function printAfter1() {
//     for (let i = 0; i < 10; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000);
//     }
// }

// let a = 12;

// function layer1() {
//     var a = 0;

//     function layer2() {
//         function closure() {
//             console.log(++a);
//         }
//         return closure;
//     }
//     return layer2();
// }

// let closure = layer1();

// console.log(a);

// let expression = function named() { console.log(named); };

// expression();
// // fun1();
// // there can be many things happening in this world and i choose not to care


function buttonCounter(btn_name) {
    let count = 0;
    let btn = document.getElementById(btn_name);
    btn.addEventListener('click', () => {
        btn.innerText = ++count;
    })
}

buttonCounter('button1');
buttonCounter('button2');