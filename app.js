'use strict';

var productList = [];
var leftImage = document.getElementById('left-image');
var rightImage = document.getElementById('right-image');
var midImage = document.getElementById('mid-image');
var numClicks = 0;
var numClickSpan = document.getElementById('number-complete');
var picBox = document.getElementById('picture-box');
var lastImages = [];

function MallProduct(name, location, id) {
  this.prodName = name;
  this.filePath = location;
  this.timesClicked = 0;
  this.timesShown = 0;
  productList.push(this);
}

var imgBag = new MallProduct('R2-D2 Rolling Luggage', 'images/bag.jpg');
var imgBanana = new MallProduct('Banana Slicer', 'images/banana.jpg');
var imgBathroom = new MallProduct('Toilet Paper and Tablet Holder', 'images/bathroom.jpg');
var imgBoots = new MallProduct('Open Toe Rain Boots', 'images/boots.jpg');
var imgBreakfast = new MallProduct('All-in-One Breakfast Machine', 'images/breakfast.jpg');
var imgBubblegum = new MallProduct('Meatball Bubblegum', 'images/bubblegum.jpg');
var imgChair = new MallProduct('Weird Chair', 'images/chair.jpg');
var imgCthulhu = new MallProduct('Cthulhu Figurine', 'images/cthulhu.jpg');
var imgDog = new MallProduct('Duck-bill Dog Muzzle', 'images/dog-duck.jpg');
var imgDragon = new MallProduct('Canned Dragon Meat', 'images/dragon.jpg');
var imgPen = new MallProduct('Utensils Pen Caps', 'images/pen.jpg');
var imgPet = new MallProduct('Pet Sweep', 'images/pet-sweep.jpg');
var imgScissors = new MallProduct('Pizza Scissors', 'images/scissors.jpg');
var imgShark = new MallProduct('Shark Sleeping Bag', 'images/shark.jpg');
var imgSweep = new MallProduct('Baby Floor-sweeping Onesie', 'images/sweep.png');
var imgTauntaun = new MallProduct('Tauntaun Sleeping Bag', 'images/tauntaun.jpg');
var imgUnicorn = new MallProduct('Canned Unicorn Meat', 'images/unicorn.jpg');
var imgUsb = new MallProduct('Wriggling USB Tentacle', 'images/usb.gif');
var imgWatercan = new MallProduct('Useless Watering Can', 'images/water-can.jpg');
var imgWine = new MallProduct('No-Spill Wine Glass', 'images/wine-glass.jpg');

function randProduct() {
  return Math.floor(Math.random() * productList.length);
}

function drawImages() {
  var newImages = [];
  while (newImages.length < 3) {
    var newImg = randProduct();
    if (!lastImages.includes(newImg) && !newImages.includes(newImg)) {
      newImages.push(newImg);
    }
  }
  leftImage.src = productList[newImages[0]].filePath;
  leftImage.className = newImages[0];
  midImage.src = productList[newImages[1]].filePath;
  midImage.className = newImages[1];
  rightImage.src = productList[newImages[2]].filePath;
  rightImage.className = newImages[2];
  lastImages = newImages;
}
drawImages();

function showNewImages() {
  event.preventDefault();
  var clickedImg = event.target;
  productList[clickedImg.className].timesClicked++;
  drawImages();
  numClicks++;
  numClickSpan.innerText = numClicks;
  if (numClicks < 25) {
    productList[leftImage.className].timesShown++;
    productList[midImage.className].timesShown++;
    productList[rightImage.className].timesShown++;
  }
  else if (numClicks === 25) {
    renderData();
    leftImage.removeEventListener('click', showNewImages);
    midImage.removeEventListener('click', showNewImages);
    rightImage.removeEventListener('click', showNewImages);
    picBox.style.display = 'none';
  }
}

function renderData() {
  var dataList = document.getElementById('data-list');
  var newUL = document.createElement('ul');
  for (var i = 0; i < productList.length; i++) {
    var newLI = document.createElement('li');
    newLI.innerText = productList[i].timesClicked + ' votes for ' + productList[i].prodName + ' (Total times shown: ' + productList[i].timesShown + ')';
    newUL.appendChild(newLI);
  }
  dataList.appendChild(newUL);
}

leftImage.addEventListener('click', showNewImages);
midImage.addEventListener('click', showNewImages);
rightImage.addEventListener('click', showNewImages);
