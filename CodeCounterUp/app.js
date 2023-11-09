// var fb = document.querySelector('.facebook h2');
// var youtube = document.querySelector('.youtube h2');
// var tiktok = document.querySelector('.tiktok h2');

// function count(el, to){
//     var count = 0;
//     var time = 140;
//     var step = to / time;

//     let counting = setInterval(()=>  {
//         count += step;
//         if(count > to)
//         {
//             clearInterval(counting);
//             el.innerText = to;
//         }
//         else {
//             el.innerText = Math.round(count);
//         }
//     })
// }

// count(fb, 3400)
// count(youtube, 1000)
// count(tiktok, 9900)


// Đồng bộ hóa
var listCounter = document.querySelectorAll('.counter')

function count(el){
    var numberEl = el.querySelector('.number');
    var to = parseInt(numberEl.innerText);
    var count = 0;
    var time = 140;
    var step = to / time;

    let counting = setInterval(()=>  {
        count += step;
        if(count > to)
        {
            clearInterval(counting);
            numberEl.innerText = to;
        }
        else {
            numberEl.innerText = Math.round(count);
        }
    })
}

listCounter.forEach(item=>{
    count(item);
})