var Block=function (position) {
     // positon 是 [0, 0] 格式
    var p = position
    var image=imageFromPath('break.png')
    //参数封装对象
    var o={
        image:image,
        x:p[0],
        y:p[1],
        w:50,
        h:20,
        alive:true,
        lifes: p[2] || 1,
    }
    o.kill=function (argument) {
         o.lifes--
        if (o.lifes < 1) {
            o.alive = false
        }
    }
    o.collide=function (ball) {
        // log('block', o.alive, b)
        return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
    }
    return o
}