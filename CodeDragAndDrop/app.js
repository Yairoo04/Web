var boxes = document.querySelectorAll('.box');
// var target = document.querySelector('.target')
var targetList = document.querySelectorAll('.target');

var currentarget = null;

targetList.forEach(target=>{
    target.addEventListener('dragstart', function(e){
    this.classList.add('dragging');
    currentarget = this
})

target.addEventListener('dragend', function(e){
    this.classList.remove('dragging');
})
})

boxes.forEach(box=>{
    box.addEventListener('dragover', function(e){
        e.preventDefault();
        // this.appendChild(currentarget);

    })
    box.addEventListener('drop', function(e){
        if(!box.querySelector('.target'))
        {
            this.appendChild(currentarget);
        }
    })

})