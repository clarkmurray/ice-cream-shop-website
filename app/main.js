var regular = document.getElementById('regular');
var seasonal = document.getElementById('seasonal');

var products = {
  
  "regularflavors": [

    {
      "name": "Chocolate",
      "description": "Loved by kids of all ages!",
      "price": "2.00"
    },

    {
      "name": "Vanilla",
      "description": "Elegant and understated",
      "price": "2.00"
    },

    {
      "name": "Strawberry",
      "description": "A taste of summer...anytime!",
      "price": "2.00"
    }

  ],


  "seasonalflavors": [

    {
      "name": "Salted Caramel",
      "description": "Sweet and salty",
      "price": "3.00"
    },

    {
      "name": "Pumpkin Spice",
      "description": "Delightful any time of year, but especially now",
      "price": "3.00"
    }

  ],


  "servingoptions": [

    {
      "name": "Waffle Cone",
      "description": "Made fresh by hand in our store each day",
      "price": "1.25"
    },

    {
      "name": "Cup",
      "description": "Plenty of room for toppings",
      "price": "0.00"
    }

  ],


  "Toppings": [

    {
      "name": "Hot Fudge",
      "description": "Rich and chocolatey and just sweet enough",
      "price": "1.00"
    },

    {
      "name": "Marshmallows",
      "description": "Hand-made the old-fashioned way",
      "price": "1.50"
    },

    {
      "name": "Rainbow Sprinkles",
      "description": "Like a million tiny little smiles",
      "price": "0.75"
    }

  ]

};

for (i = products.regularflavors.length - 1; i >= 0 ; i--) {
    var table = document.getElementById("regular");
    var row1 = table.insertRow(0);
    var flavorName = row1.insertCell(0);
    var flavorPrice = row1.insertCell(1);
    var row2 = table.insertRow(1);
    var flavorDescription = row2.insertCell(0);
    var emptyRow = table.insertRow(2);
    var lineBreak = emptyRow.insertCell(0);
    flavorName.innerHTML = "<span class='flavorName'>" + products.regularflavors[i].name + "</span";
    flavorPrice.innerHTML = "<span class='flavorPrice'>" + "$" + products.regularflavors[i].price + "</span>";
    flavorDescription.innerHTML ="<span class='flavorDescription'>" + products.regularflavors[i].description + "</span>";

}

for (i = products.seasonalflavors.length - 1; i >= 0; i--) {
    var table = document.getElementById("seasonal");
    var row1 = table.insertRow(0);
    var flavorName = row1.insertCell(0);
    var flavorPrice = row1.insertCell(1);
    var row2 = table.insertRow(1);
    var flavorDescription = row2.insertCell(0);
    var emptyRow = table.insertRow(2);
    var lineBreak = emptyRow.insertCell(0);
    flavorName.innerHTML = "<span class='flavorName'>" + products.seasonalflavors[i].name + "</span";
    flavorPrice.innerHTML = "<span class='flavorPrice'>" + "$" + products.seasonalflavors[i].price + "</span>";
    flavorDescription.innerHTML ="<span class='flavorDescription'>" + products.seasonalflavors[i].description + "</span>";
};

for (i = products.Toppings.length - 1; i >= 0; i--) {
    var table = document.getElementById("toppings");
    var row1 = table.insertRow(0);
    var flavorName = row1.insertCell(0);
    var flavorPrice = row1.insertCell(1);
    var row2 = table.insertRow(1);
    var flavorDescription = row2.insertCell(0);
    var emptyRow = table.insertRow(2);
    var lineBreak = emptyRow.insertCell(0);
    flavorName.innerHTML = "<span class='flavorName'>" + products.Toppings[i].name + "</span";
    flavorPrice.innerHTML = "<span class='flavorPrice'>" + "$" + products.Toppings[i].price + "</span>";
    flavorDescription.innerHTML ="<span class='flavorDescription'>" + products.Toppings[i].description + "</span>";
};

for (i = products.servingoptions.length - 1; i >= 0; i--) {
    var table = document.getElementById("servingoptions");
    var row1 = table.insertRow(0);
    var flavorName = row1.insertCell(0);
    var flavorPrice = row1.insertCell(1);
    var row2 = table.insertRow(1);
    var flavorDescription = row2.insertCell(0);
    var emptyRow = table.insertRow(2);
    var lineBreak = emptyRow.insertCell(0);
    flavorName.innerHTML = "<span class='flavorName'>" + products.servingoptions[i].name + "</span";
    flavorPrice.innerHTML = "<span class='flavorPrice'>" + "$" + products.servingoptions[i].price + "</span>";
    flavorDescription.innerHTML ="<span class='flavorDescription'>" + products.servingoptions[i].description + "</span>";
};



