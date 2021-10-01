class CircleAnimation{
    CanvasElement = null;
    CanvasWidth = 0;
    CanvasHeight = 0;
    GroupOfCircles = [];
    MaxCircleSize = 40;
    CanvasContext = null;
    ArrayOfColors = ["#00adb5 ", "#191919","darkslateblue", "#01dde9", "#414040","#9a9a9a"];

    constructor(){
        
        this.CanvasResize();
        window.addEventListener("resize", () => {
            this.CanvasResize();
        })
    }
    DrawCircle(CurrentElement){
        CanvasContext.beginPath();
        CanvasContext.strokeStyle = CurrentElement.SomeColor;
        CanvasContext.fillStyle = CurrentElement.SomeColor;
        CanvasContext.arc(CurrentElement.Xposition,CurrentElement.Yposition,CurrentElement.CurrentValue,0,260);
        CanvasContext.fill();
        CanvasContext.closePath();
    }
    RunAnimation(){
        let SizeOfGroupOfCircles = this.GroupOfCircles.length;
        let i = 0;
        while(i < SizeOfGroupOfCircles){
            if(this.GroupOfCircles[i].Status == "BeBig!"){
                if(this.GroupOfCircles[i].CurrentValue != this.MaxCircleSize){
                    this.GroupOfCircles[i].CurrentValue += 0.2;
                    this.GroupOfCircles[i].CurrentValue = Number(this.GroupOfCircles[i].CurrentValue.toFixed(1));
                }
                else{
                    this.GroupOfCircles[i].Status = "BeSmall!";
                }
                this.DrawCircle(this.GroupOfCircles[i]);
            }
            else{
                if(this.GroupOfCircles[i].CurrentValue != 0){
                    this.GroupOfCircles[i].CurrentValue -= 0.2;
                    this.GroupOfCircles[i].CurrentValue = Number(this.GroupOfCircles[i].CurrentValue.toFixed(1));
                    this.DrawCircle(this.GroupOfCircles[i]);
                }
                else{
                    this.GroupOfCircles.splice(i,1);
                    SizeOfGroupOfCircles -= 1;
                    i -= 1;
                }
            }
            i += 1;
        }
    }
    CreateCircle(){
        let PosX = Math.floor(Math.random() * (CanvasElement.width - 0));
        let PosY = Math.floor(Math.random() * (CanvasElement.height - 0));
        let NewCircleObject = {
            Xposition : PosX,
            Yposition : PosY,
            CurrentValue : 0,
            Status : "BeBig!",
            SomeColor : this.ArrayOfColors[Number((Math.random() * (this.ArrayOfColors.length - 0)).toFixed(0))]
        }
        this.GroupOfCircles.push(NewCircleObject);
    }
    CanvasResize(){
        let SizeQuery = window.getComputedStyle(CanvasElement);
        let CanvasWidthAsString = SizeQuery.getPropertyValue("width");
        let CanvasHeightAsString = SizeQuery.getPropertyValue("height");
        this.CanvasWidth = CanvasWidthAsString.substr(0,CanvasWidthAsString.length - 2);
        this.CanvasHeight = CanvasHeightAsString.substr(0,CanvasHeightAsString.length - 2);
        CanvasElement.width = this.CanvasWidth;
        CanvasElement.height = this.CanvasHeight;
    }
}