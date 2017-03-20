'use strict';

var productList = [];
var leftImage = document.getElementById('left-image');
var rightImage = document.getElementById('right-image');
var midImage = document.getElementById('mid-image');
var numClicks = 0;
var numClickSpan = document.getElementById('number-complete');

function MallProduct(name, location, id) {
  this.prodName = name;
  this.filePath = location;
  this.timesClicked = 0;
  this.timesShown = 0;
  this.pageID = id;
  productList.push(this);
}

var imgBag = new MallProduct('R2-D2 Rolling Luggage', 'images/bag.jpg', 'image-bag');
var imgBanana = new MallProduct('Banana Slicer', 'images/banana.jpg', 'image-banana');
var imgBathroom = new MallProduct('Toilet Paper and Tablet Holder', 'images/bathroom.jpg', 'image-bathroom');
var imgBoots = new MallProduct('Open Toe Rain Boots', 'images/boots.jpg', 'image-boots');
var imgBreakfast = new MallProduct('All-in-One Breakfast Machine', 'images/breakfast.jpg', 'image-breakfast');
var imgBubblegum = new MallProduct('Meatball Bubblegum', 'images/bubblegum.jpg', 'image-bubblegum');
var imgChair = new MallProduct('Weird Chair', 'images/chair.jpg', 'image-chair');
var imgCthulhu = new MallProduct('Cthulhu Figurine', 'images/cthulhu.jpg', 'image-cthulhu');
var imgDog = new MallProduct('Duck-bill Dog Muzzle', 'images/dog-duck.jpg', 'image-dog');
var imgDragon = new MallProduct('Canned Dragon Meat', 'images/dragon.jpg', 'image-dragon');
var imgPen = new MallProduct('Utensils Pen Caps', 'images/pen.jpg', 'image-pen');
var imgPet = new MallProduct('Pet Sweep', 'images/pet-sweep.jpg', 'image-pet');
var imgScissors = new MallProduct('Pizza Scissors', 'images/scissors.jpg', 'image-scissors');
var imgShark = new MallProduct('Shark Sleeping Bag', 'images/shark.jpg', 'image-shark');
var imgSweep = new MallProduct('Baby Floor-sweeping Onesie', 'images/sweep.png', 'image-sweep');
var imgTauntaun = new MallProduct('Tauntaun Sleeping Bag', 'images/tauntaun.jpg', 'image-tauntaun');
var imgUnicorn = new MallProduct('Canned Unicorn Meat', 'images/unicorn.jpg', 'image-unicorn');
var imgUsb = new MallProduct('Wriggling USB Tentacle', 'images/usb.gif', 'image-usb');
var imgWatercan = new MallProduct('Useless Watering Can', 'images/water-can.jpg', 'image-watercan');
var imgWine = new MallProduct('No-Spill Wine Glass', 'images/wine-glass.jpg', 'image-wine');
