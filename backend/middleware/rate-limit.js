const rateLimit = require('express-rate-limit'); // package pour prévenir des attaques par force brute


const limiter = rateLimit({
        windowMs: 120 * 60 * 1000, // 1 hour
        max: 20, // limite l'utilisateur a 2 requetes par windowMs par heure
        message: "trop de tentative de connexions, rééssayer dans une heure! merci !"
      });

      
 module.exports = limiter;