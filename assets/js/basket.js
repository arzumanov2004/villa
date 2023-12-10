
const div = document.getElementById('myDiv')

function getProducts () {
    div.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(cart);
    cart.map((item,index)=> {
        const box = document.createElement('div')
        box.className = 'myBox col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'
        box.innerHTML =`<div class = "mb">
                    <img src="${item.image}" alt="">
                    <h4>${item.title}</h4>
                    <button onclick="removeItem(${index})">REMOVE</button>
        
        </div>
          

        `
        div.appendChild(box)
    })
}

function removeItem (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}

window.onload = () => {
   getProducts()
}