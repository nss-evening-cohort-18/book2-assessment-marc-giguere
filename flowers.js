const flowers = [
    {
        id: 1,
        color: 'white',
        species: 'Rose',
        price: 0.90
    },
    {
        id: 2,
        color: 'red',
        species: 'Tulip',
        price: 1.10
    }


]

const addFlower = (flowerObject) => {
        const lastIndex = flowers.length - 1
        const currentLastFlower = flowers[lastIndex]
        const maxId = currentLastFlower.id
        const idForNewFlower = maxId + 1
        flowerObject.id = idForNewFlower
        flowers.push(flowerObject)
    }



const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code

    for (const flower of flowers) {
        if (flower.price >= 1.0) {
            expensiveFlowers.push(flower);
        }
    }

    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

