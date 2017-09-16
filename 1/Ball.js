var Ball=function (arg) {
    var image=imageFromPath('ball.png')
    //参数封装对象
    var o={
        image:image,
        x:100,
        y:200,
        speedX:4,
        speedY:4,
        fired:false,
    }
    o.fire=function () {
        o.fired=true
    }
    o.move=function () {
        if (o.fired) {
            //console.log('move')
            if(o.x<0||o.x>arg.width-o.image.width){
                o.speedX=-o.speedX
            }
            if(o.y<0||o.y>arg.height-o.image.height){
                o.speedY=-o.speedY
            }
            //move
            o.x+=o.speedX
            o.y+=o.speedY
        }
    }
    o.bounce = function() {
        o.speedY *= -1
    }
    return o
}
