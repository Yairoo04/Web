// var result = document.querySelector('#result');

// document.addEventListener('mousemove', function(e) {
//     result.style.top = `${e.clientY}px`;
//     result.style.left = `${e.clientX}px`;

// })

var imgList = document.querySelectorAll('.zoomer img');
var mirror = document.querySelector('#mirror');
let scope = 4;

imgList.forEach(function(img){
    img.addEventListener('mousemove', function(e) {
        mirror.classList.remove('hide');
        let percentMouseByW = (e.offsetX/this.offsetWidth) * 100;
        let percentMouseByH = (e.offsetY/this.offsetHeight) * 100;
        mirror.style.top = `${e.clientY}px`;
        mirror.style.left = `${e.clientX}px`;
    
        mirror.style.backgroundSize = `1000px 1000px`;
        
        // let w = this.offsetWidth;
        // let h = this.offsetHeight;
        // let mouseWithImgBorderX = e.pageX - this.offsetLeft;
        // let mouseWithImgBorderY = e.pageY - this.offsetTop;
        mirror.style.backgroundPosition = `${percentMouseByW}% ${percentMouseByH}%`;
    
    
        var soureImg = e.target.getAttribute('src');
        mirror.style.backgroundImage = `url(${soureImg})`;
    })

    img.addEventListener('mouseleave', function(e){
        mirror.classList.add('hide');
    })
})


