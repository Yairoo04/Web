var cardImg = document.querySelector('.cardImg');
var h2 = document.querySelector('.cardInfo h2');
var p = document.querySelector('.cardInfo p');
var button = document.querySelector('.cardInfo button');

fetch('https://backoffice.nodemy.vn/api/products?populate=*')
.then(res => res.json())
.then(res => {
    console.log(res.data[0]);
    let data = res.data[0];

    cardImg.classList.remove('loading');
    h2.classList.remove('loading');
    p.classList.remove('loading');
    button.classList.remove('loading');

    cardImg.innerHTML = `<img src="https://backoffice.nodemy.vn${data?.attributes?.image?.data[0]?.attributes?.url}">`;
    h2.innerHTML = data?.attributes?.name;
    p.innerHTML = data?.attributes?.description.substring(0, 120) + '...';
    button.innerHTML = 'Read More';
})