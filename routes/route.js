
const home=function(req,res){
  res.render('home');
}

 const login=function(req,res){ 
    res.render('login');
}

module.exports = {home, login}