var btnsearch = document.querySelector('.search-box_btn')

btnsearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus();
})