//! Creating a div element from within JS:
//? We use the document object available in JavaScript:
const ball = document.createElement('div')
const body = document.body
body.appendChild(ball)

let bodyWidth = body.clientWidth
let bodyHeight = body.clientHeight

ball.classList.add('ball')
const ballHeight = ball.clientHeight
const ballWidth = ball.clientWidth


let x = 0
let y = 0

let id = null

let GR = true
let GD = true




// ball.innerHTML = 'hotpink'
// ball.style.color = 'hotpink'

// ball.style.backgroundColor = "lightgray"

// ball.style.borderRadius = "50%"
// ball.style.width = "100px"
// ball.style.height = "100px"






// ball.classList.add('center')
// ball.classList.remove('ball')

ball.addEventListener('mouseover', () => {
    ball.classList.add("hover")
    clearInterval(id)
})

ball.addEventListener('mouseout', () => {
    ball.classList.remove("hover")
    clearInterval(id)
    id = startTheGame()
})



console.log("BW:" + bodyWidth)
console.log("BH:" + bodyHeight)



// console.log(ballHeight, ballWidth)

// ball.style.left = "500px"
// ball.style.top = "500px"



id = startTheGame();


function startTheGame() {
    return setInterval(() => {

        bodyWidth = body.clientWidth
        bodyHeight = body.clientHeight

        // console.log("BW:" + bodyWidth)
        // console.log("BH:" + bodyHeight)

        ball.style.left = x + 'px';
        ball.style.top = y + 'px'

        // console.log(ball.offsetLeft)
        // console.log(ball.offsetTop)

        if (GR) {
            x++;
        } else {
            x--;
        }

        if (x + ballWidth >= bodyWidth && GR) {
            GR = false
        }

        if (x <= 0 && !GR) {
            GR = true
        }
        // from top to bottom
        if (GD) {
            y++;
        } else {
            y--;
        }

        if (y + ballHeight >= bodyHeight && GD) {
            GD = false
        }

        if (y <= 0 && !GD) {
            GD = true
        }

    }, 1)
}
