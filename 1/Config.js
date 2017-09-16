//一些设置系列的对象
var Config=function() {

    var g={
       //事件对应的动作 
        actions:{},
        //被注册的按键
        keydowns:{},
    }

    var canvas=document.querySelector('#id-canvas')
    var context=canvas.getContext('2d')
    g.canvas=canvas
    g.context=context
    g.drawImage=function (myImage) {
       context.drawImage(myImage.image,myImage.x,myImage.y)
    }
    //events
    window.addEventListener('keydown',function(event){
        g.keydowns[event.key]=true
    })
    window.addEventListener('keyup',function(event){
        g.keydowns[event.key]=false
    })
    //事件注册函数
    g.registerAction=function (key,callback) {
        g.actions[key]=callback
        
    }
    //定时更新实现稳定30fps timer
    window.fps=30
    var runloop = function() {
        //log(window.fps)
        // events
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if(g.keydowns[key]) {
                // 如果按键被按下, 调用注册的 action
                g.actions[key]()
            }
        }
        // update
        g.update()
        // clear
        context.clearRect(0, 0, canvas.width, canvas.height)
        // draw
        g.draw()
        // next run loop
        setTimeout(function(){
            runloop()
        }, 1000/(window.fps*2))
    }
    
    setTimeout(function(){
        runloop()
    }, 1000/(window.fps*2))
    return g
}