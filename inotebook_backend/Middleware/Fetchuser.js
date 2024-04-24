const jwt=require("jsonwebtoken");
// middleware function used for every loggedin user to authenticate him/her for the requested route
// fetching the user_id from auth token in req and adding it to req for next middleware function in req-res cycle
const SECRET_KEY="shhhhh";

const fetchuser = (req, res, next)=>{
    try{
        const authToken=req.header('auth-token');
        const data=jwt.verify(authToken,SECRET_KEY);
        req.userId=data.id;
        next();
    }
    catch(err){
        console.log(err.message);
        res.status(401).send("Access Denied! Please use valid token!");
    }
}

module.exports = fetchuser;