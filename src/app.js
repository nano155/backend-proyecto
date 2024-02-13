import express from 'express'
import productsRoutes from './routes/products.routes.js'
import cartRoutes from'./routes/carts.routes.js'
import __dirname from '../utils.js'


const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/ping", (req, res) => {
  console.log(__dirname);
  res.send({ status: "ok" })
})


// Punto de entrada Productos
app.use("/api/products", productsRoutes)
app.use("/api/carts", cartRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})














