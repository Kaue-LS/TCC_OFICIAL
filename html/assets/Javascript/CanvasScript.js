var CanvasElement = document.getElementById("target");
var CanvasContext = CanvasElement.getContext("2d");
var NewCircleAnimation = new CircleAnimation();
var CanRunAnimation = true;
var TimesOfVisibilityChange = 0;

var IntervalOfCircleCreation = setInterval(() => {
    NewCircleAnimation.CreateCircle();
},600);

function RunAnimation(){
    if(CanRunAnimation){
        CanvasContext.beginPath();
        CanvasContext.clearRect(0,0,CanvasElement.width,CanvasElement.height);
        CanvasContext.closePath();
        NewCircleAnimation.RunAnimation();
    }

    window.requestAnimationFrame(RunAnimation);
    
}

RunAnimation();

window.addEventListener("visibilitychange", () => {
    switch(TimesOfVisibilityChange.toString()){
        case "0":
            CanRunAnimation = false;
            clearInterval(IntervalOfCircleCreation);
            TimesOfVisibilityChange += 1;
            break;
        case "1":
            CanRunAnimation = true;
            IntervalOfCircleCreation = setInterval(() => {
                NewCircleAnimation.CreateCircle();
            },600);
            TimesOfVisibilityChange -= 1;
            break;
    }
});