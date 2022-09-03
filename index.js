const express = require('express')
const app = express()
const cors = require('cors');
const routes = require('./app');
const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(cors())
app.use(express.json())


app.use('/' , routes)




app.get('/', (req, res) => {
  res.send('Hello Server site is here!!!')
})

app.all("*", (req, res) => {
  res.status(404).send('route not found');
});

app.use((err, req, res ) => {
  if (err) {
    res.send("there is an error");
  }
});


app.listen(port , () => {
  console.log(`server is running at port ${port}`);
})