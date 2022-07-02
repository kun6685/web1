var Links = {
  LinkSetColor(color) {
    //var alist = document.querySelectorAll('a');
    //var i = 0;
    //while(i<alist.length) {
      //alist[i].style.color = color;
      //i++;
    //}
    $('a').css('color', color);
  }
}
var Body = {
  BodySetColor : function (color) {
  //document.querySelector('body').style.color = color;
  $('body').css('color', color);
},

  BackgroundSetColor : function (color) {
  //document.querySelector('body').style.backgroundColor = color;
  $('body').css('backgroundColor', color);  
}
}

var BtnHandler1 = {
  BtnColor : function(color) {
    document.querySelector('.btn').style.color = color;
    document.querySelector('.btn').style.border = color;
  }
  
}

var BtnHandler2 = {
 BtnBorder : function(style) {
  document.querySelector('.btn').style.border = style;
 } 
}

function handler(self) {
var target = document.querySelector('body');

if(self.value === 'night') {
Body.BackgroundSetColor('black');
Body.BodySetColor('white');
self.value = 'day';
Links.LinkSetColor('white');
BtnHandler1.BtnColor('white');
BtnHandler2.BtnBorder('1px solid white');
document.querySelector('h1').style.borderBottom = '1px solid white';
document.querySelector('#grid ol').style.borderRight = '1px solid white';
  if(matchMedia("screen and (max-width: 800px)")) {
    document.querySelector('h1').style.borderBottom = 'none';
    document.querySelector('#grid ol').style.borderRight = 'none';
  }
}
else if (self.value === 'day') {
Body.BackgroundSetColor('white');
Body.BodySetColor('black');
self.value = 'night';
Links.LinkSetColor('black');
BtnHandler1.BtnColor('black');
BtnHandler2.BtnBorder('1px solid black');
document.querySelector('h1').style.borderBottom = '1px solid black';
document.querySelector('#grid ol').style.borderRight = '1px solid black';
  if(matchMedia("screen and (max-width: 800px)")) {
    document.querySelector('h1').style.borderBottom = 'none';
    document.querySelector('#grid ol').style.borderRight = 'none';
  }
  }
}





