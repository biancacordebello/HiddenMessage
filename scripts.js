var isMouseDown = false;
var isMouseUp = false;

function mouseMove(e){
    if (isMouseDown) {
        var topbackground = document.getElementById('topbackground');
        var x = e.clientX;
        var y = e.clientY;
        topbackground.style.maskImage = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, transparent 8%, white 9%)';
}
    else if (isMouseUp){
        var topbackground = document.getElementById('topbackground');
        var x = e.clientX;
        var y = e.clientY;
        topbackground.style.maskImage= 'radial-gradient(circle at ' + x + 'px ' + y + 'px, transparent 1%, white 2%)';
 
    }
}
  
function mouseDown() {
    isMouseDown = true;
}

function mouseUp() {
    isMouseDown = false;
    isMouseUp = true;
    }


document.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseup', mouseUp);
document.addEventListener('mousemove', mouseMove);