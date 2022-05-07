const btn=document.querySelectorAll('button')

btn[0].addEventListener('click',function(){
    btn.forEach(function(el){
        document.body.style.backgroundColor = "red";
    })
})

btn[1].addEventListener('click',function(){
    btn.forEach(function(el){
        document.body.style.backgroundColor = "green";
    })
})

btn[2].addEventListener('click',function(){
    btn.forEach(function(el){
        document.body.style.backgroundColor = "yellow";
    })
})

btn[3].addEventListener('click',function(){
    btn.forEach(function(el){
        document.body.style.backgroundColor = "blue";
    })
})

btn[4].addEventListener('click',function(){
    btn.forEach(function(el){
        document.body.style.backgroundColor = "gray";
    })
})

btn[5].addEventListener('click',function(){
    btn.forEach(function(el){
        document.body.style.backgroundColor = "initial";
    })
})