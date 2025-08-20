import jwt from 'jsonwebtoken';

const auth = async(req, res, next)=>{
    const authHeader = req.headers['authorization'];

    if(!authHeader ||!authHeader.startsWith('Bearer ')){
        return res.status(401).json({message:'no token authorization Denied'});
    }

    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(e){
        console.error('token verification error',e.message);
        res.status(401).json({msg:'token is not valid'})
    }
 
};

export {auth};