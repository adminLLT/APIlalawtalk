
const express = require('express');
const cors = require('cors');
// const config = require('./db/connectMongo')
const user = require('./route/user/user')
const random = require('./route/randomLaw')
const Apt = require('./route/apt/addAptitude')
const ActiveWork = require('./route/user/activeStatusWork')


const app = express() ;
app.use(cors());
app.use(express.json())

app.get('/lalawtalk', (req, res) => {
    res.json({ message: 'it,s work'});
});

app.use('/lalawtalk', user)
app.use('/lalawtalk', random)
app.use('/lalawtalk',Apt)
app.use('/lalawtalk',ActiveWork)


app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
