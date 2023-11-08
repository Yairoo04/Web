var animationElement = document.querySelectorAll('.show-on-scroll');

function toggleAnimationElementInWindow(element) {
    // 1 item
    var rect = element.getClientRects()[0];
    var heihtScreen = window.innerHeight;

    // Check xem element co ben trong man hinh hay khong
    if(!(rect.bottom < 0 || rect.top > heihtScreen))
    {
        // Neu element o ben trong
        element.classList.add('start');
    }else{
        // Neu element nam ben ngoai
        element.classList.remove('start');
    }
}

function checAnimation() {
    animationElement.forEach(el=>{
        toggleAnimationElementInWindow(el);
    })
}

window.onscroll = checAnimation;