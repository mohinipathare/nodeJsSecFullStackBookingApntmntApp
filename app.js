const express=require('express');
const body_parser=require('body-parser');
const path=require('path');
var cors=require('cors');
const app=express();
app.use(cors());
const PORT = 3000;

const userRoutes=require('./routes/User');
const User = require('./models/Users');

app.use(body_parser.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(body_parser.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/api',userRoutes);

User.sequelize.sync({force:false}).then(()=>{
    app.listen(PORT,()=>{
      console.log(`listening on http://localhost:${PORT}`)
    })
  })

