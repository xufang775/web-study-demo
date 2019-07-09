module.exports  = function (css) {
  console.log(css);
  console.log(window.innerWidth);
  if(window.innerWidth >=800){
      return css.replace('#0b97c4','red');
  } else {
      return css.replace('#0b97c4','#000');
  }
};