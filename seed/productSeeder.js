var Product = require('../models/product');

/*
  This seeder is not normal part of our app.
  We need to connect it and run individually to load our data.
*/
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
  new Product({
    imagePath: 'https://img.jpcycles.com/zoom/630-226_A.jpg',
    title: 'Ball Bearing 12mm O.D.',
    description: 'This ball bearing has very low coefficient of friction, use this on any 12mm race to improve efficiency of the driven shaft.',
    price: 7.25
  }),
  new Product({
    imagePath:'https://ae01.alicdn.com/kf/HTB1iy2TIVXXXXbqapXXq6xXFXXXd/AKRAPOVIC-Titanium-carbon-fiber-motorcycle-exhaust-pipe-GP-Force-motobike-muffler-silencieux-moto-escape-silenciador-modificada.jpg_640x640.jpg',
    title:'Titanium Exhaust Pipe',
    description:'Throw this bad boy on to make you bike rip it!',
    price: 949.98
  }),
  new Product({
    imagePath:'http://www.howrah.org/images/articles/camshaft/camshaft-5.jpg',
    title:'Lightweiht Camshaft',
    description:'Get to redline faster. Pin it to win it with these lightweight camshafts.',
    price: 256.67
  }),
  new Product({
    imagePath:'http://www.balmainmotorcycles.com.au/images/Michelin-power-cup_tyre.jpg',
    title:'Michellin Power CUP',
    description:'Stay sticky all weekend, this tire profile lets your bike fall into turns, while getting on the gas coming out. Includes 120/70 Front, and 180/70 Rear.',
    price: 412.99
  }),
  new Product({
    imagePath:'https://content.motosport.com/images/items/900/SSX/SSX0006/X001.jpg',
    title:'Sprocket and Chain Kit',
    description:'Aluminum sprockets and lightweight 520 chain.',
    price: 176.78
  }),
  new Product({
    imagePath:'https://images.homedepot-static.com/productImages/98edf106-f2f0-4a78-bb26-9b7eaabe343b/svn/crc-car-cleaners-de-icers-05089-64_1000.jpg',
    title:'Brake Cleaner',
    description:'Spray your parts to like new condition.',
    price: 2.14
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    if (++done === products.length) {
      exit();
    }
  });
}

function exit() {
  // Disconnect our client
  mongoose.disconnect();
}

