const div = document.getElementById('myDiv')
const btn = document.getElementById('page')

let page = 1
let limit = 3
let db = []

async function getPost() {
    let skip = (page - 1) * limit
    try {
        const response = await axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
        const data = response.data;
        db = data;
        db.forEach(item => {
            const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
                <img src="${item.image}" alt="">
                <h4>${item.title}</h4>
                <button onclick="addToCart(${item.id})">Add To Basket</button>
            `;
            div.appendChild(box);
        });
        page++;

    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

btn.addEventListener('click', getPost); 

function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}

window.onload = () => {
    getPost()
};