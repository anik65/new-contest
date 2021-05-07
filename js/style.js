// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


// Wrap every letter in a span
  var textWrapper = document.querySelector('.ml3');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
    .add({
      targets: '.ml3 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
     duration:900,
      delay: (el, i) => 150 * (i+1)
   }).add({
      targets: '.ml3',
      opacity: 0,
      duration: 700,
      easing: "easeOutExpo",
      delay: 1000
    });    

 
 
    $('.item_img').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      dots:false,
    });
$('.B-1').magnificPopup({
  type: 'inline',

  fixedContentPos: false,
  fixedBgPos: true,

  overflowY: 'auto',

  closeBtnInside: true,
  preloader: false,

  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-zoom-in'
});