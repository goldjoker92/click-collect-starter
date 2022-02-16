const PORT = 2021;
const express = require('express');
const cors = require('cors');
const app = express();
const mongoDBClient = require('./mongoClient');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/index');
// On connecte le tout puis on lance le serveur npm start
app.use(cors())



app.get('/', (req, res) => {
  res.send('Hello Express!')
})


// API rest (on creer un route produit avec mongoose qui va interagir avec la base de données )

const Product = require('./models/product'); // On se connecte au fichiers dans le models
app.get('/products', async (req,res) => {// On recupere les donnees via le base (products)
  const products = await Product.find({}) // Et on les recupere via l'objet schema dans le models fichiers product
  try {

    res.send(products) // On return les products qui sont dans la BD

  } catch (e) {
      res.status(500).send(err)
  }

})

 
app.get('/products/:category', async (req,res) => {// On recupere les donnees via le base (products).par categorie
  const category = req.params.category
  const products = await Product.find({ category: category}) // Et on les recupere via l'objet schema dans le models fichiers product
  
  try {

    res.send(products) // On return les products qui sont dans la BD

  } catch (e) {
      res.status(500).send(err)
  }

})


//Graphql UI accès a l' interface en connection avec index (schema)

app.use(
  '/graphql',
  graphqlHTTP({
    schema : schema,
    graphiql: true,
  }),
);
 

app.listen(PORT, () => {
  console.log(`Server up and running on port http://localhost:${PORT} 🎉🎉`)
  mongoDBClient.initialize()
})
