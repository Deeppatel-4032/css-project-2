$(window).on('load',function(){
    $('#loding-wrap').delay(3000).fadeOut('fast')
    $('#load-wrap').delay(3000).fadeOut('fast')
})

var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove',function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  });