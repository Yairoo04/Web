/* CÁCH 1: 
    Hiển thị toàn bộ data sau đó thì ẩn hiện theo topic

    Ưu điểm: Hiệu năng tốt 
    Nhược điểm: fix cứng 
*/

// var btnList = document.querySelectorAll('button');
// var imgList = document.querySelectorAll('img')

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
var container = document.querySelector('.container');

// Init data
var arr = [];
imgList.forEach(item=>{
    arr.push({
        src: item.src,
        type: item.getAttribute('type')
    })
})

//
btnList.forEach(btn=>{
    btn.addEventListener('click', e=>{
        let type = e.currentTarget.getAttribute('type');
        let filterData = arr.filter(food=>{
            return food.type == type;
        })

        render(filterData);
    })
})

function render(list) {
    container.innerHTML = '';
    list.forEach(item=>{
        let imgElement = document.createElement('img');
        imgElement.src = item.src;
        imgElement.setAttribute('type', item.type);
        container.append(imgElement);
    })
}