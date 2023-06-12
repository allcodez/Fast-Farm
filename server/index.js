require("dotenv").config();
const express= require('express')
const app = express()
const mongoose = require("mongoose")
var jwt = require('jsonwebtoken');
const bodyParser = require("body-parser")
const bcrypt = require('bcryptjs');
const Contactmodel = require("./models/Contactus")
const UserRegmodel = require("./models/UserReg")
const Mycartmodel = require("./models/Mycart")
const cors = require('cors')
var multer = require('multer')


// required environmental variable
const PORT = process.env.PORT || 3001;
const URI = process.env.URI;
console.log("server is at ",process.env.PORT);
console.log("URI is : ",process.env.URI);

// .......................mongodb connect database............
mongoose.connect(URI,{
    useNewUrlParser:true,
}).then(
    console.log("database connected")
);




//............................................................

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("this is home page welcome to a2it online")
})

// .................get data by mongo db.............
app.get("/getcontact",async (req,res)=>{
    try {
        const articles = await Contactmodel.find({ });
        res.send(articles);
        // console.log(articles);
      } 
      catch (err) {
        console.log(err);
      }
})
//....................................................

app.post("/contactdata",async(req,res)=>{
    var name=req.body.username;
    var email=req.body.email;
    var phone=req.body.phone;
    var subject=req.body.subject;
    var message=req.body.message;

    const contact=new Contactmodel({
        userName:name,
        userEmail:email,
        userPhone:phone,
        userSubject:subject,
        userMessage:message
    });

    try{
        await contact.save()
        res.status(200).send("data save succesfully");
    }catch(err){
        console.log(err);
    res.status(200).send('Email Already exits');
    }
})
// ...................................user registration form...........

app.post("/userdata",async(req,res)=>{
    var name=req.body.username;
    var email=req.body.email;
    var phone=req.body.phone;
    var password=req.body.password;
    var cpassword=req.body.cpassword;

    if(password!=cpassword){
        return res.send("passwor does not matched")
    }

    var erptPassword=await bcrypt.hash(password,10);
    const user=new UserRegmodel({
        userName:name,
        userEmail:email,
        userPhone:phone,
        userPassword:erptPassword,
    });

    try{
        await user.save()
        res.status(200).send("Registration Succesfully Please Login");
    }catch(err){
        console.log(err);
    res.status(200).send('Registration successful');
    }
})

// .....................user Login Now.........
const JWT_SECRET="thisismynmefdvnnbascaglkbrmprgbpmrt|2123[]ibonswgugykippkpukpku";
app.post("/loginnow",async(req,res)=>{
    var email=req.body.email;
    var password=req.body.password;
    const user =await UserRegmodel.findOne({userEmail:email})

    if(!user){
        return res.send("user does not exits")
    }
   if(await bcrypt.compare(password,user.userPassword)){
        const token=jwt.sign({},JWT_SECRET)
        if(res.status(201)){
            return res.json({status:"success",token:token,usermail:email,userdata:user})
        }
        else{
            return res.json({status:"error"})
        }
   }
    res.json({status:"Invalid User Name and Password"})
})
// ..................login end..............

// .......................add new Product.........
app.post("/addproduct",async(req,res)=>{
    // console.log(req.body)
    var userid=req.body.userid;
    var image=req.body.image;
    var product_name=req.body.product_name;
    var product_category=req.body.product_category;
    var price=req.body.price;
    var or_price=req.body.or_price;

    const cart=new Mycartmodel({
        UserId:userid,
        ProductImage:image,
        ProductName:product_name,
        Product_Category:product_category,
        Price:price,
        Oprice:or_price,
    });

    try{
        await cart.save()
        res.status(200).send("Product add in your cart");
    }catch(err){
        console.log(err);
    res.status(200).send('Product already added');
    }

})
// .......................add new product.......
// ........................get add to cart start.........
app.get("/cartdata/:id",async(req,res)=>{
    var conid=req.params.id
    try{
        const usercart =await Mycartmodel.find(
            {UserId:conid},
        )
        res.send(usercart)

    }catch(err){
        res.send("data not found")
    }
})
// .......................get add to cart data end.......

// .................update start............
    app.post("/contupd/:id",async(req,res)=>{
        var conid=req.params.id
        var username=req.body.username
        var usermail=req.body.email
        console.log(conid)
        try{
        const updatecon=await Contactmodel.findByIdAndUpdate(
            {_id:conid},
            {
                userName: username,
                userEmail:usermail,
            },
        );
        console.log("updated")
        }
        catch(err){
            console.log(err)
        }
    })
// .................update end.............


app.post("/verfy-token",async(req,res)=>{
    const {token} =req.body
    console.log(token)
    try{
        const user=jwt.verify(token,JWT_SECRET)
        return res.json({status:"success"})
    }catch(err){
        return res.json({status:"failed"})
    }
})
// ....................image..........uplod.....
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
var upload = multer({ storage: storage }).single('file');


app.post("/userpro",(req,res)=>{
 console.log(req)
})
// ...................end image upload...........
//........................................
app.listen(PORT,()=>{
    if(process.env.PORT){
    console.log(`http://localhost:${PORT}`)
    }

    else {
        console.log(`server is running at https://localhost:3000`);
    }

});