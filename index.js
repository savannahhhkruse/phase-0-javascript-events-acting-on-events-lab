// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor ="purple";
dodger.style.bottom = "100px";
function moveDodgerRight(){
    const number = dodger.style.left.replace('px', '');
    const left = parseInt(number, 10);

    if(left > 0){
        dodger.style.left = `${left + 1}px`; 
    }
}
function moveDodgerLeft(){
    const number = dodger.style.left.replace("px", "")
    const left = parseInt(number, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (e.key ==="ArrowRight") {
        moveDodgerRight();
    }
});