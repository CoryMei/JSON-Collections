let mhFridgeElement = document.getElementById('mhFridge');
let bkFridgeElement = document.getElementById('bkFridge');

//-----------------------------------------------------------------------------
let allFridges = [
  {
    "type": "mh",
    "name": "Chelsea Fridge",
    "picture": "IMG_7276.jpg",
    "neighborhood": "Neighborhood: Chelsea",
    "location": "https://www.google.com/maps/dir/?api=1&destination=40.73788529999999,-73.995525"
  },

  {
    "type": "mh",
    "name": "East Village Community Fridge",
    "picture": "IMG_7277.jpg",
    "neighborhood": "Neighborhood: East Village",
    "location": "https://www.google.com/maps/dir/?api=1&destination=40.730212,-73.983724"
  },

  {
    "type": "mh",
    "name": "6th St Fridge",
    "picture": "IMG_7279.jpg",
    "neighborhood": "Neighborhood: Alphabet City",
    "location": "https://www.google.com/maps/dir/?api=1&destination=40.7236486,-73.98027789999999"
  },

  {
    "type": "mh",
    "name": "Broome + Bowery Fridge",
    "picture": "IMG_7280.jpg",
    "neighborhood": "Neighborhood: Chinatown",
    "location": "https://www.google.com/maps/dir/?api=1&destination=40.71910099999999,-73.9938676"
  },

  {
    "type": "mh",
    "name": "LES Community Fridge",
    "picture": "IMG_7281.jpg",
    "neighborhood": "Neighborhood: Lower East Side",
    "location": "https://www.google.com/maps/dir/?api=1&destination=40.71532759999999,-73.9837835"
  },

  {
    "type": "mh",
    "name": "West End Community Fridge",
    "picture": "IMG_7284.jpg",
    "neighborhood": "Neighborhood: Upper west side",
  },

  {
    "type": "bk",
    "name": "NYU FREEdge",
    "picture": "IMG_7285.jpg",
    "neighborhood": "Neighborhood: NYU Tandon",
    "location": "https://www.google.com/maps/place/New+York+University+Tandon+School+of+Engineering/@40.6942036,-73.9887677,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a4a4d8396f3:0xda9b313d596491f7!8m2!3d40.6942036!4d-73.986579"
  },

  {
    "type": "bk",
    "name": "Downtown BK Fridge",
    "picture": "IMG_7286.jpg",
    "neighborhood": "Neighborhood: Downtown Brooklyn",
    "location": "https://www.google.com/maps/dir/?api=1&destination=40.6920701,-73.98651819999999"
  },

  {
    "type": "bk",
    "name": "Fort Greene Community Fridge",
    "picture": "IMG_7287.jpg",
    "neighborhood": "Neighborhood: Fort Greene",
    "location": "https://www.google.com/maps/dir/?api=1&destination=40.6934011,-73.97174009999999"
  },

  {
    "type": "bk",
    "name": "Hashtag Lunchbag BK Community Fridge",
    "picture": "IMG_7288.jpg",
    "neighborhood": "Neighborhood: Red Hook",
    "location": "https://www.google.com/maps/dir/?api=1&destination=40.6794914,-74.0051658"
  },

  {
    "type": "bk",
    "name": "Gowanus Community Fridge",
    "picture": "IMG_7289.jpg",
    "neighborhood": "Neighborhood: Gowanus",
    "location": "https://www.google.com/maps/dir/?api=1&destination=40.6770146,-73.9915541"
  },

  {
    "type": "bk",
    "name": "Gowanus Postmark Fridge",
    "picture": "IMG_7290.jpg",
    "neighborhood": "Neighborhood: Gowanus",
    "location": "https://www.google.com/maps/dir/?api=1&destination=40.671069,-73.9851953"
  },

];

for (var i = 0; i < allFridges.length; i++) {
  createElementProper(allFridges[i]);
}

function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let googleMap = document.createElement("A");
  googleMap.href = incomingJSON['location'];
  newContentElement.appendChild(googleMap);

  let newContentName = document.createElement("H2");
  newContentName.classList.add("placeName");
  newContentName.innerText = incomingJSON['name'];
  googleMap.appendChild(newContentName);

  let newImage = document.createElement("IMG");
  newImage.classList.add("image");
  newImage.src = incomingJSON['picture'];
  newContentElement.appendChild(newImage);

  let newText = document.createElement("H4");
  newText.classList.add("placeNeighborhood");
  newText.innerText = incomingJSON['neighborhood'];
  newContentElement.appendChild(newText);

  if (incomingJSON['type'] == 'mh'){
    mhFridgeElement.appendChild(newContentElement);
  }
  else if (incomingJSON['type'] == 'bk') {
    bkFridgeElement.appendChild(newContentElement);
  }


};
