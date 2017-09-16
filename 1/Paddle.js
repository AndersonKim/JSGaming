//封装一切和挡板有关的变量
//arg 是canves作为参数传入，用以限制挡板的移动范围
var Paddle=function (arg) {
    var image=imageFromPath('pad.png')
    //参数封装对象
    var o={
        image:image,
        x:100,
        y:250,
        speed:5,
    }
    o.moveLeft=function () {
        if (o.x>0) {
            o.x-=o.speed
        }
        
    }
     o.moveRight=function () {
        if (o.x<arg.width-image.width) { o.x+=o.speed}
       
    }
    o.moveUp=function () {
        if (o.y>0) { o.y-=o.speed}
       
    }
    o.moveDown=function () {
        if (o.y<arg.height-image.height) { o.y+=o.speed}
       
    }

    o.collide=function (ball) {
        if (ball.y+ball.image.height>o.y) {
            if (ball.x>o.x&&ball.x<o.x+o.image.width) {
                return true
            }
        }
        return false
    }

    return o
}

