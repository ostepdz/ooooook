var canvas = document.getElementById('game')
var context = canvas.getContext('2d')

var x = 0
var y = 0
var direction = 'right'


function play() {
    context.clearRect(0, 0, 600, 500)
    context.fillRect(x, y, 20, 20)

    var button = keyboard.button()
    console.log(button)

    if(button == "ArrowRight"){
        x = x + 1
    }


    window.requestAnimationFrame(play)

}

play()

