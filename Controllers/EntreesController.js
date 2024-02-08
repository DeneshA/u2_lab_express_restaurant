const Entrees = [
    {
        name: "Grilled Salmon with Lemon-Dill Sauce" ,
        description: "Fresh Atlantic salmon fillets marinated in a lemon and herb blend, grilled to perfection.",
        serving_portion: 2,
        presentation: "Served with a side of creamy lemon-dill sauce and steamed asparagus",
        preparation_time: 35,
        price: 25.85
    },
    {
        name: "Chicken Marsala" ,
        description: "Tender chicken breasts sautéed in a Marsala wine reduction with mushrooms.",
        serving_portion: 2,
        presentation: "Accompanied by garlic mashed potatoes and roasted vegetables.",
        preparation_time: 25,
        price: 21.25
    },
    {
        name: "Vegetarian Risotto" ,
        description: "Creamy Arborio rice cooked with a medley of seasonal vegetables (asparagus, cherry tomatoes, and peas)",
        serving_portion: 2,
        presentation: "Finished with Parmesan cheese and fresh herbs",
        preparation_time: 15,
        price: 31.25
    },
    {
        name: "Beef Tenderloin Steak with Red Wine Reduction" ,
        description: "Succulent beef tenderloin steak seasoned with a blend of herbs and spices, grilled to your liking",
        serving_portion: 2,
        presentation: "Drizzled with a red wine reduction and served with truffle mashed potatoes and sautéed green beans",
        preparation_time: 35,
        price: 38.25
    },
    {
        name: "Pasta Carbonara" ,
        description: "Al dente spaghetti tossed in a rich and velvety sauce made with eggs, Parmesan cheese, pancetta, and black pepper",
        serving_portion: 2,
        presentation: "Garnished with fresh parsley and additional Parmesan.",
        preparation_time: 20,
        price: 38.25
    }
]

const getAllEntrees = (request,response) => {

    response.send(Entrees)

}

const getEntreesById = (request,response) => {

    response.send(Entrees[request.params.id])

}

module.exports = {

    getAllEntrees,
    getEntreesById
}