const isValid = (req, res, next)=>{
    console.log(req.query.token);
    if(req.query.token == "123"){
        next();
    }
    else
        return res.status(401).json({message: 'Unauthorized'});
}

const checkUserAgent = (req, res, next)=>{
    const userAgent = req.headers['user-agent'];
    console.log(userAgent);
    if(!userAgent){
        return res.status(400).json({message: 'Bad Request'});
    }
    next();
}

module.exports = {isValid, checkUserAgent};