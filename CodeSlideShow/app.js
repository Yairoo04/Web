var imgFeature = document.querySelector('.img_feature');
var listImg = document.querySelectorAll('.list_img img');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');
var listImgDiv = document.querySelectorAll('.list_img div');

var currentIndex = 0;
// Hàm thay đổi ảnh và padding với index
function updateImageByIndex(index)
{
    listImgDiv.forEach(item=>{
        item.classList.remove('active');
    })

    currentIndex = index;
    imgFeature.src = listImg[index].getAttribute('src');
    listImg[index].parentElement.classList.add('active');
}

// Thay dổi ảnh sau khi click
listImg.forEach((imgElement, index)=>{
    imgElement.addEventListener('click', e=>{

        imgFeature.style.opacity = '0'
        setTimeout(()=>{
            updateImageByIndex(index);
            imgFeature.style.opacity = '1';
        }, 400)
    })
})

// Thay ảnh sau khi dùng button
prevBtn.addEventListener('click', e=>{
    if(currentIndex == 0)
    {
        currentIndex = listImg.length -1;
    }else{
        currentIndex--
    }
    imgFeature.style.animation = '';
    setTimeout(()=>{
        updateImageByIndex(currentIndex);
        imgFeature.style.animation = 'slideLeft 1s ease-in-out forwards';
    }, 200)
    
})

nextBtn.addEventListener('click', e=>{
    if(currentIndex == listImg.length -1)
    {
        currentIndex = 0;
    }else{
        currentIndex++
    }
    imgFeature.style.animation = '';
    setTimeout(()=>{
        updateImageByIndex(currentIndex);
        imgFeature.style.animation = 'slideRight 1s ease-in-out forwards';
    }, 200)

})

updateImageByIndex(0)