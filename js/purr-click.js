$(function(){
  var player1 = document.getElementById('player1');
  $('img').click(function(){
    player1.play();
  });
});

// const yo = document.querySelector("#yo");

// document.querySelector("#yo").addEventListener('mouseover', e => (console.log(e)))

// document.querySelector("body > div > img.kitty-1").addEventListener('click', e => {
//   const x = e.screenX;
//   const y = e.screenY;
//   // debugger;
//   e.target.style.left = "300px"
//   setInterval(function() {
//     e.target.style.left = `${x/2}px`;
//   },1000)
// })


