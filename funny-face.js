var face = document.querySelector('body');
face.addEventListener('mousemove', eyeBall);
function eyeBall() {
  var eye = document.querySelectorAll('.eye');
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().left + eye.clientHeight / 2;
    let radian = Math.atan2(event.pagex - x, event.pagey - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = 'rotate(' + rot + 'deg)';
  });
}
