
// console.log(document.title)
document.title = 'mushaddiq'

const product = [
    {
      id: 0,
      image: "image/1.jpg",
      tittle: "ayam",
      categories:'',
      price: '20000',
    },
    {
      id: 1,
      image: "image/2.jpg",
      tittle: "coffee 2",
      categories:'',
      price: 20000,
    },
    {
      id: 2,
      image: "image/3.jpg",
      tittle: "Coffee 3",
      categories:'',
      price: 10000,
    },
    {
      id: 4,
      image: "image/4.jpg",
      tittle: "coffee 4",
      categories:'',
      price: 10000,
    },
    {
      id: 5,
      image: "image/5.jpg",
      tittle: "Coffee 6",
      categories:'',
      price: 10000,
    },
    {
      id: 6,
      image: "image/6.jpg",
      tittle: "Coffee 6",
      categories:'',
      price: 10000,
    },
  ]

const categories = product.map(item => {
    return item})

const displayItem = (items)=> {
    document.getElementById('root').innerHTML=items.map((item)=>{
        var{image, tittle, categories, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class= 'bottom'>
                <p>${tittle}</p>
                <p>${categories}</p>
                <h2>Rp. ${price}.00</h2>
                <button> More </button>
                </div>
            </div>`
        )
}).join('')
}
displayItem(categories)

const searchcategories = document.getElementById('searchBar')
searchcategories.addEventListener('keyup', (e)=>{
    let searchData = e.target.value;
    let filterData = categories.filter(item => {
        return(
            item.tittle.includes(searchData));
    
    });
    displayItem(filterData)
  });

