const mongoose = require('mongoose');

// String de la base de donnees

const DB = "Cluster0"
const URI = `mongodb+srv://guillaumeragot92:Elisha2017!@cluster0.flrmj.mongodb.net/${DB}?retryWrites=true&w=majority`


// Connection avec la base de donnees

const MongoDBClient = {
    initialize: () => {
        try {
            const client = mongoose.connect(URI,
                {
                     useNewUrlParser: true, 
                     useUnifiedTopology:true
                })
            //Si c'est la connection a reussi 
            client.then(() => console.log(`Connecté à la base de donnée avec succès : 🎉${DB}🎉🎉🎉🎉`))
            
            // si la connection échoue on récupère l'erreur 
        } catch(e) {
            throw Error(e)
        }
    }
}

module.exports = MongoDBClient