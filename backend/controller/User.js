const {User}=require('../model/User')


exports.CreateUser=async (req,res)=>{
    try{
        const user=new User({...req.body})
        const doc=await user.save();
        res.status(201).json(doc);  
    }catch(err){
        console.log(err);
        res.status(400).json('error in signup');
    }
}

exports.LoginUser=async (req,res)=>{
    try{
        const {email,password}=req.body;
        const userdata=await User.findOne({email:email});
        if(userdata ){
            if(userdata.password===password){
                res.status(200).json(userdata);
            }
            else{
                res.status(400).json('Wrong credentials');
            }
        }    
    }catch(err){
        console.log(err);
        res.status(400).json('error in login');
    }
}
exports.UserData=async (req,res)=>{
    try{
        const userdata=await User.find();
        res.status(200).json(userdata);
    }catch(err){
        res.status(400).json('error in fetching data');
    }
}
