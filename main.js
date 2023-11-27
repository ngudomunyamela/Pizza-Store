use pizza store
db.createCollection("menu")

db.menu.insertMany([
    {
        type: "dissert",
        name: "ice cream and cake",
        price:"56"
    },
    {
        type: "drinks",
        name: "juice",
        price:"33"    
    },{
        type: "side dish",
        name: "salad",
        price:"40"    
    },
    {
        type: "ingrediant",
        name: "chicken and vegies",
        price:"68"   
    }
])

// db.menu.find({}, {price: 1 , name: 1})

// db.posts.find( { drinks: "beer" } ) 


db.menu.find({})

db.menu.deleteOne({type: "ingrediant" })

db.menu.updateOne( { type: "drinks" }, { $set: { type:"beer"} } ) 