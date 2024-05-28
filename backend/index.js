const express = require('express');
const server = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

const user = require('./controller/User');

const PORT=process.env.PORT || 5000
const MONGODB_URL=process.env.MONGODB_URL


server.use(cors());
const router = express.Router();
server.use(express.json());
server.use(router);

router.get('/users',user.UserData)
router.post('/login',user.LoginUser );
router.post('/registration',user.CreateUser);



main().catch(error => console.log(error));

async function main() {
  await mongoose.connect(MONGODB_URL);
  console.log('Database connected');
}

server.listen(PORT, () => {
  console.log('Starting server at 8080');
});
