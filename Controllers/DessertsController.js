const Desserts = [

    {
        name: "Chocolate Lava Cake" ,
        description: "Indulgent individual chocolate cakes with a molten chocolate center",
        serving_portion: 1,
        presentation: "Served warm with a dusting of cocoa powder and a scoop of premium vanilla ice cream",
        price_s_size: 5.85,
        price_m_size: 6.35,
        price_l_size: 7.00
    },
    {
        name: "Tiramisu" ,
        description: "Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder",
        serving_portion: 1,
        presentation: "Garnished with chocolate shavings and served in elegant portions",
        price_s_size: 4.85,
        price_m_size: 5.35,
        price_l_size: 6.50
    },
    {
        name: "TiramCheesecake with Berry Compote" ,
        description: "Creamy New York-style cheesecake with a buttery graham cracker crust",
        serving_portion: 1,
        presentation: "Topped with a luscious mixed berry compote and a dollop of whipped cream",
        price_s_size: 7.85,
        price_m_size: 8.35,
        price_l_size: 10.50
    },
    {
        name: "Crème Brûlée" ,
        description: "Silky vanilla bean custard with a perfectly caramelized sugar crust",
        serving_portion: 1,
        presentation: "Served in ramekins with a delicate tuile cookie on the side",
        price_s_size: 8.00,
        price_m_size: 9.00,
        price_l_size: 10.00
    }

]

const getAllDesserts = (request,response) =>{

    response.send(Desserts)

}

const getDessertsById = (request,response) =>{
    response.send(Desserts[request.params.id])
}

module.exports = {

    getAllDesserts,
    getDessertsById
    
}