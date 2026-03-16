const cards = document.querySelector("#cards");
const cardList = [
    {
        name: "pizza",
        price: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/1280px-Supreme_pizza.jpg"
    },
    
    {
        name: "sushi",
        price: 20,
        image: "https://imageproxy.wolt.com/assets/67332fb64d6df41fd76588a2"
    },
    {
        name: "salad",
        price: 8,
        image: "https://www.eatingwell.com/thmb/S2NGMEcgm11dtdBJ6Hwprwq-nVk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eat-the-rainbow-chopped-salad-with-basil-mozzarella-beauty-185-278133-4000x2700-56879ac756cd46ea97944768847b7ea5.jpg"
    },
    {
        name: "pasta",
        price: 12,
        image: "https://www.allrecipes.com/thmb/QiGptPjQB5mqSXGVxE4sLPMJs_4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-269500-creamy-garlic-pasta-Beauties-2x1-bcd9cb83138849e4b17104a1cd51d063.jpg"
    },
    {
        name: "burger",
        price: 15,
        image: "https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/4:3/w_2666,h_2000,c_limit/basically-burger-1.jpg"
    },
    {
        name: "steak",
        price: 25,
        image: "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.6669164481079056xw:1xh;center,top&resize=1200:*"
    }

]
for (let i = 0; i < cardList.length; i++) {
    cards.innerHTML += 
    `<div class="card">
        <img src="${cardList[i].image}" alt="photo">
        <h2>${cardList[i].name}</h2>
        <p>Price: $${cardList[i].price}</p>
    </div>`
    ;
}