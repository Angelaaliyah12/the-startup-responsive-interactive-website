//stap:1 selecteer de container van de slides (want dit is het gedeelte dat kan scrollen)
let container = document.querySelector('.ul-slide');

//stap2: selecteer alle slides binnen de container
let slides = document.querySelectorAll('.ul-slide .slide');

//stap3: selecteer de nummer-counter
let counter = document.querySelector('.slide-counter');

//stap4: geef het een scroll event listner aan de container zelf (dit gebeurt elke keer wanneer je in de container scrollt)
container.addEventListener('scroll', function() {

// scrollAfstand = hoe ver de container naar beneden is gescrold (in pixels)
// 0 betekent: helemaal bovenaan
// hoe verder je scrollt, hoe groter het getal wordt (dus hoe groter de scrollAfstand)
    let scrollAfstand = container.scrollTop;

// Loop door alle slides heen ((pak elke slide één voor één) =foreach)
// de functie dus wat er gebeurt is welke slide het is via de index
// en voer de onderstaande code uit voor die slide
slides.forEach(function(slide, index) {

  // Als de volgende slide bereikt is, update de teller (de scrollafstand is dan dus groter of gelijk aan de)
  //index + 1 want je begint anders bij 0 en je wilt bij 1 beginnen
  if (scrollAfstand >= slide.offsetTop) {
    counter.textContent = (index + 1) + "/" + slides.length;
  }

});
});
