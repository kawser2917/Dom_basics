document.title="Create Element"

const list=document.querySelector('ul')
const btn=document.querySelector("button")

const newElement = document.createElement('li')
const another=document.createElement('li')
newElement.textContent="Burger"
another.textContent="Juice"

btn.addEventListener('click',function(){
    list.appendChild(newElement)

})

btn.addEventListener('click',function(){
    list.prepend(another)

})


//adding class to list

list.classList.add('unordered_list')
