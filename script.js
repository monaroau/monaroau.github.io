setInterval(function () {
  moveIt()
}, 10000);

function moveIt() {
  const titles = document.getElementsByClassName('title-flair');

  [].forEach.call(titles, function (title) {
    title.classList.toggle('center')
  })

}

moveIt()


// Get the div element
const cursorCircle = document.getElementById('cursor-circle');

// Add event listener for mouse movement
document.addEventListener('mousemove', (event) => {
  // Get the mouse position
  const x = event.pageX;
  const y = event.pageY;

  // Set the div's position to the mouse position
  cursorCircle.style.position = 'absolute';
  cursorCircle.style.left = `${x}px`;
  cursorCircle.style.top = `${y}px`;

  // Set the div's transform origin to the center
  cursorCircle.style.transformOrigin = 'center';

  // Add a transform to move the div to the mouse position
  cursorCircle.style.transform = `translate(-100px, -100px) rotate(45deg)`;
});

// Add CSS to make the div a circle
cursorCircle.style.width = '200px';
cursorCircle.style.height = '200px';
// cursorCircle.style.borderRadius = '50%';
cursorCircle.style.background = '#00c7eb66';