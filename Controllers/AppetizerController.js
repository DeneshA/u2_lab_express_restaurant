const appertizers = [
    {
        name: "Caprese Skewers" ,
        ingredients: ["Fresh mozzarella", "cherry tomatoes", "basil drizzled with aged balsamic glaze"],
        serving_portion: 2,
        presentation: "Served on bamboo skewers for a convenient and elegant presentation",
        price: 15.85
    },
    {
        name: "Spinach and Artichoke Dip" ,
        ingredients: ["Creamy blend of spinach", "artichokes",  "trio of cheeses (mozzarella, Parmesan, and cream cheese)"],
        serving_portion: 1,
        presentation: "Served warm with crispy tortilla chips.",
        price: 10.00
    },
    {
        name: "Stuffed Mushrooms" ,
        ingredients: ["Mushrooms", "savory mixture of seasoned breadcrumbs", "garlic", "thyme", " grated Parmesan"],
        serving_portion: 1,
        presentation: "Baked to perfection for a delightful appetizer",
        price: 19.65
    },
    {
        name: "Shrimp Cocktail" ,
        ingredients: ["Chilled jumbo shrimp","zesty homemade cocktail sauce"],
        serving_portion: 1,
        presentation: "Baked to perfection for a delightful appetizer",
        price: 12.15
    },
    {
        name: "Bruschetta" ,
        ingredients: ["Toasted baguette slices", "mixture of diced tomatoes", "garlic", "fresh basil","extra virgin olive oil"],
        serving_portion: 1,
        presentation: "Drizzled with a balsamic reduction for added depth of flavor",
        price: 14.30
    }
]


const getAllAppertizer = (request,response) =>{

    response.send(appertizers)

}

const getAppertizerById = (request,response) => {
    response.send(appertizers[request.params.id])
}

module.exports = {

    getAllAppertizer,
    getAppertizerById

}