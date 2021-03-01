const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');
const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors');

require('dotenv').config();
const URI = process.env.ATLAS_URI;

const app = express()
const port = process.env.PORT || 5000


//middleware 
app.use(cors()); //providing a Connect/Express middleware
app.use(express.json()); //parses json for POST and PUT methods
//

//MongoDB set up with mongoose
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.get('/', (req, res) => { res.send('Hello World!') })
app.use('/exercises', exercisesRouter)
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})