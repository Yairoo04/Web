var upload = document.querySelector('#picture')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')

upload.addEventListener('change', function(e){

    var file = upload.files[0]

    if(!file)
        return

    if(!file.name.endsWith('.jpg')){
        error.innerHTML = `File phai co duoi la jpg`
        return
    }else{
        error.innerHTML = ``
    }

    if(!file.size / (1024 * 1024) > 5){
        error.innerHTML = `Anh upload phai < 5MB`
        return
    }else{
        error.innerHTML = ``
    }

    var img = document.createElement('img')


    // Cách khác dùng B64 đổi hệ nhị phân 
    // var fileReader = new FileReader()
    // fileReader.readAsDataURL(file)

    // fileReader.onloadend = function(e){
    //     console.log('load oke', e.target.result)
    //     img.src = e.target.result
    // }

    img.src = URL.createObjectURL(file)
    preview.appendChild(img)
})