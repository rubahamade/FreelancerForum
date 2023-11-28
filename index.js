const randomNames = ["Jason", "Alice", "Kelly", "Ben", "Chelsea"];
const randomOccupations = ["illustrator", "designer", "teacher", "driver", "writer"];
const randomPrices = ["30", "25", "35", "50", "45"]

const freelancers = [
    { name: "Jason", price: 30, occupation: "illustrator" },
    { name: "Alice", price: 25, occupation: "designer" },
]

const container = document.querySelector(".container")
const averageTag = document.querySelector(".average")


function render() {
    const html = freelancers.map((freelancer) => {
        return `<div> ${freelancer.name} ${freelancer.occupation} $${freelancer.price} </div>`
    })
    container.innerHTML = html.join("")
    console.log(container.innerHTML)
}

function renderAverage(average) {
    const html = `<div><h3>The average starting price is $${average}</h3></div>`;
    averageTag.innerHTML = html;
}

render();

function addRandomFreelancer() {
    const name = Math.round(Math.random() * (randomNames.length - 1));
    const occupation = Math.round(Math.random() * (randomOccupations.length - 1));
    const price = Math.round(Math.random() * (randomPrices.length - 1));
    
    const freelancer = {
        name: randomNames[name],
        occupation: randomOccupations[occupation],
        price: randomPrices[price]
    }

    const averagePrice = Math.round(freelancers.reduce((accum, freelancer) => 
    accum + parseInt(freelancer.price), 0) / freelancers.length);
    renderAverage(averagePrice)
    freelancers.push(freelancer)
    render()
}

setInterval(addRandomFreelancer, 3000);