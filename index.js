const userInfo = require('./information.js');

let  cowsay  =  require("cowsay") ;

console.log(cowsay.say({ 
    text : `I'm ${userInfo.name} doe from ${userInfo.campus} campus !` , 
    e : " oO " , 
    T : " U " 
})) ;