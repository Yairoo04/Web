// // Cách 2.
// var p = document.querySelector('.typing-wrapper p');
// var originContent = p.innerHTML;
// var index = 0;
// var isForward = false;

// setInterval(function(){
//     if(isForward)
//     {
//         index++;
//         if(index >= originContent.length)
//         {
//             isForward = false;
//         }
//     }else {
//         index--;
//         if(index <= 0)
//         {
//             isForward = true;
//         }
//     }

//     p.innerHTML = originContent.substring(0, index)
// }, 100)


// function typeText(){
//     if (index < originContent.length && !isForward) {
//         p.innerHTML = originContent.slice(0, index + 1);
//         index++;
//     } else if (index >= 0 && isForward) {
//         originContent.innerText = text.slice(0, index);
//         index--;
//     } else {
//         isForward = !isForward;
//     }
    
//     const typingSpeed = isForward ? 30 : 90; // Adjust typing and revesing speed
//     setTimeout(typeText, typingSpeed)
// }

// typeText();