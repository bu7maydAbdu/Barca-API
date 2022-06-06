const express = require("express")
const app = express()
const PORT = 8000
const cors = require("cors")
const { request } = require("express")
const { response } = require("express")


app.use(cors())


let barcaPlayers = {
    "iniesta": {
        "full name":"andres iniesta",
        "shirt number": 8,
        "description": "picasso"
    },

    "messi": {
        "full name":"leonel andres messi",
        "shirt number":10,
        "goals": 700,
        "assists": 400,
        "description":"greatest player of all times"
    },

    "suarez": {
        "full name":"luis suarez",
        "shirt number": 9,
        "describtion": "el pistolero"
    },
    "puyol":{
        "full name":"carles puyol",
        "shirt number": 5,
        "describtion": "the heart of the lion"
    },
    "mascherano":{
        "full name":"javier mascherano",
        "shirt number": 4,
        "describtion": "beast"
    },
    "etoo":{
        "full name":"samuel etoo",
        "shirt number": 9,
        "describtion": "general"
    },
    "henry":{
        "full name":"thierry henry",
        "shirt number": 14,
        "describtion": "finesse king"
    },
    "unknown":{
        "full name":"unknown",
        "shirt number": 0,
        "describtion": "unknown"
    }
}



app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
    console.log("get main working")
    
})



app.get('/api', (request, response)=>{
    response.json(barcaPlayers)
    console.log(barcaPlayers)
})

app.get('/api/:name', (request, response)=>{
    const playersName = request.params.name.toLowerCase()
    if(barcaPlayers[playersName]){
        response.json(barcaPlayers[playersName])
    }else{
       response.json(barcaPlayers["unknown"])
    }
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(" server working")
})