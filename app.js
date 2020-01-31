function close_menu() {
  const close = document.querySelector('#mobile_menu');
  close.style.height = "0";
  close.style.display = "none";
  }

function open_menu() {
  const open = document.querySelector('#mobile_menu');
  open.style.display = "flex";
  open.style.height = "350px";
}

//Animazione scena 1
var tlFirstScroll = new TimelineMax();

tlFirstScroll
  .to('#row_center', 2, { color: "#E71D36"});


var controller = new ScrollMagic.Controller();

//Scena 1

var scene1 = new ScrollMagic.Scene({
      triggerElement: '#trigger_1',
      triggerHook: 0,
      duration: "50%"

})

.setTween(tlFirstScroll)
.addTo(controller);


// Cambio colore link navbar
var tlColorScroll = new TimelineMax();
tlColorScroll
  .to('.nav_item', 0.3, {color: "#011627"})
  .to('#pathh', 1, { fill: "#011627"});
var sceneNavbar = new ScrollMagic.Scene({
      triggerElement: '.fascia_servizi',
      triggerHook: 0
})

.setTween(tlColorScroll)
.addTo(controller);

// Cambio colore link navbar_1
var tlColorScroll_1 = new TimelineMax();
tlColorScroll_1
  .set('.nav_item', {color: "#003C47"})
  .set('#pathh', {color: "#003C47"})
  .to('.nav_item', 0.1, { color: "#fff"})
  .to('#pathh', 1, { fill: "#fff"});

  var sceneNavbar = new ScrollMagic.Scene({
    triggerElement: '#trigger_2',
    triggerHook: 0
    })

.setTween(tlColorScroll_1)
.addTo(controller);


//Animazione Scena 2.1

var tlSecondScroll_1 = new TimelineMax();
tlSecondScroll_1
  .set('#title_1', { x: "50px", opacity: 0})
  .set('#text_1', { x: "50px", opacity: 0}) 
  .to('#title_1', 1, { x: "0" ,color: "#2EC4B6" , opacity: 1})
  .to('#text_1', 1, { x: "0" , opacity: 1});
  
//Scena 2.1

var scene2 = new ScrollMagic.Scene({
  triggerElement: '#trigger_2',
  triggerHook: 0,

})

.setTween(tlSecondScroll_1)
.addTo(controller);



//Animazione Scena 2.2
var tlSecondScroll_2 = new TimelineMax();
tlSecondScroll_2
  .set('#title_2', { x: "50px", opacity: 0})
  .set('#text_2', { x: "50px", opacity: 0})
  .to('#title_2', 1, { x: "0",color: "#2EC4B6" , opacity: 1})
  .to('#text_2', 2, { x: "0", opacity: 1});


  var scene3 = new ScrollMagic.Scene({
    triggerElement: '#titolo_fascia_concept',
    triggerHook: 0,
  
  })
  
  .setTween(tlSecondScroll_2)
  .addTo(controller);



//Animazione Scena 2.3
var tlSecondScroll_3 = new TimelineMax();
tlSecondScroll_3
  .set('#title_3', { x: "50px", opacity: 0})
  .set('#text_3', { x: "50px", opacity: 0})
  .to('#title_3', 1, { x: "0" ,color: "#2EC4B6" , opacity: 1})
  .to('#text_3', 2, { x: "0" , opacity: 1});


  var scene4 = new ScrollMagic.Scene({
    triggerElement: '#text_1',
    triggerHook: 0,
  
  })
  
  .setTween(tlSecondScroll_3)
  .addTo(controller);