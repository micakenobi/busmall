'use strict';

var productList = [];

function CookieShop(name, location, id) {
  this.prodName = name;
  this.filePath = location;
  this.timesClicked = 0;
  this.timesShown = 0;
  this.pageID = id;
  productList.push(this);
}
