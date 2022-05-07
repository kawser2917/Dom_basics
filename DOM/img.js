const img = document.querySelector('img')
const btn = document.querySelectorAll('button')

btn[0].addEventListener('click',function(){
    img.setAttribute('src','https://www.cricketsoccer.com/wp-content/uploads/2020/09/i.jpg')
})

btn[1].addEventListener('click',function(){
    img.setAttribute('src','https://cdn.britannica.com/34/212134-050-A7289400/Lionel-Messi-2018.jpg')
})