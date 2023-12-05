/* CÁCH 1: 
    Hiển thị toàn bộ data sau đó thì ẩn hiện theo topic

    Ưu điểm: Hiệu năng tốt 
    Nhược điểm: fix cứng 
*/

// var btnList = document.querySelectorAll('button');
// var imgList = document.querySelectorAll('img')
// var container = document.querySelector('.foodContainer');


// btnList.forEach(btn=>{
//     btn.addEventListener('click', e=>{
//         let type = e.currentTarget.getAttribute('type');
//         console.log(type);
//         imgList.forEach(img=>{
//             let foodType = img.getAttribute('type');
//             //console.log(foodType);

//             if(type == 'all' || foodType == type)
//             {
//                 img.classList.remove('hide');
//             }
//             else {
//                 img.classList.add('hide');
//             }
//         })
//     })
// })


/* CÁCH 2:
    var arr = ['rau', 'thit', 'rượu']
    function render()
    var filterData = arr.filter

    Ưu điểm: logic, dễ hiểu, linh động
    Nhược điểm: code dài
*/

var btnList = document.querySelectorAll('button');
var imgList = document.querySelectorAll('img');
var container = document.querySelector('.foodContainer');

// Init data
var arr = [];
imgList.forEach(item=>{
    arr.push({
        src: item.src,
        type: item.getAttribute('type')
    })
})

function activeButton(buttonActive) {
    btnList.forEach(btn=>{
        btn.classList.remove('active');
    })

    buttonActive.classList.add('active');
}

//
btnList.forEach(btn=>{
    btn.addEventListener('click', e=>{
        // Active button
        activeButton(btn);

        
        // Filter Data
        let type = e.currentTarget.getAttribute('type');
        if (type == 'all') {
            render(arr);
            return;
        }

        let filterData = arr.filter(food=>{
            // {src: link, type: 'drink'}
            return food.type == type;
        })

        render(filterData);
    })
})

function render(list) {
    container.innerHTML = '';
    // [{src: link, type: 'drink'}, {src: link, type: 'meat'}]
    list.forEach(item=>{
        let imgElement = document.createElement('img');
        imgElement.src = item.src;
        imgElement.setAttribute('type', item.type);
        // <img src = "drink1.png" type = "drink" />
        let divElement = document.createElement('div');
        divElement.classList.add('food');
        divElement.append(imgElement)
        container.append(divElement);
    })
}