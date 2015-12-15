var slider = document.getElementById('test5');
console.log('ready')
 noUiSlider.create(slider, {
  start: [20, 80],
  connect: true,
  step: 1,
  range: {
    'min': 0,
    'max': 100
  },
  format: wNumb({
    decimals: 0
  })
 });


$('form').on('submit', function(e){
 e.preventDefault();
 console.log('test', $('#test5').val());

});