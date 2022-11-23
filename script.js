let inputText = document.getElementById('in')
let button = document.getElementById('btn')
let span = document.getElementById('span')
let img = document.getElementById('main')

const print=()=>{



if(inputText.value==20){
    console.log('this is pen')
    span.innerHTML='this is a pen'
    span.style.color="deeppink"
    document.getElementById('main').style.backgroundImage="url(https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)"
    document.getElementById('main').style.backgroundRepeat="no-repeat"
    document.getElementById('main').style.backgroundSize="cover"
    document.getElementById('main').style.backgroundPosition="center"
}
 else if (inputText.value==40){
    console.log('this is book')
    span.innerHTML='this is a book'
    // alert('we clicked this')
    span.style.color="red"
    img.style.backgroundImage="url(https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)"
    img.style.backgroundRepeat="no-repeat"
    img.style.backgroundPosition="center"
    img.style.backgroundSize="cover"
}
else{
    span.innerHTML="we not provide anything on this price"
    span.style.color="green"
}


}