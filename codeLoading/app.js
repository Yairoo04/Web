const $i = document.querySelector('i');
let progress = 0;

setInterval(()=>{
    
    
    progress++;
    $i.innerText = `${progress}%`
    if(progress === 100)
    {
        progress = 0;
    }
},
);