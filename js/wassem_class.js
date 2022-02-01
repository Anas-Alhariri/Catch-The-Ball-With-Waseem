class Ball {
    //! Creating a div element from within JS:
    //? We use the document object available in JavaScript:
    ball = document.createElement('div')
    body = document.body
    bodyWidth
    bodyHeight
    ballHeight
    ballWidth
    x
    y
    color
    size
    stepSpeed
    id = null
    GR = true
    GD = true

    constructor(x = 0, y = 0, color = 'white', size = 100, stepSpeed = 1) {
        this.x = x
        this.y = y
        this.color = color
        this.size = size + "px"
        this.stepSpeed = stepSpeed
        this.body.appendChild(this.ball)
        this.ball.classList.add('ball')

        this.bodyWidth = this.body.clientWidth
        this.bodyHeight = this.body.clientHeight
        this.ballHeight = this.ball.clientHeight
        this.ballWidth = this.ball.clientWidth

        this.ball.addEventListener('mouseover', () => {
            this.ball.classList.add("hover")
            clearInterval(this.id)
        })

        this.ball.addEventListener('mouseout', () => {
            this.ball.classList.remove("hover")
            clearInterval(this.id)
            this.id = this.moveTheBall()
        })

        this.ball.style.backgroundColor = this.color
        this.ball.style.width = this.size
        this.ball.style.height = this.size
        this.id = this.moveTheBall()
    }


    moveTheBall() {
        return setInterval(() => {

            this.bodyWidth = this.body.clientWidth
            this.bodyHeight = this.body.clientHeight

            this.ball.style.left = this.x + 'px';
            this.ball.style.top = this.y + 'px'


            if (this.GR) {
                this.x = this.x + this.stepSpeed;
            } else {
                this.x = this.x - this.stepSpeed;
            }

            if (this.x + this.ballWidth >= this.bodyWidth && this.GR) {
                this.GR = false
            }

            if (this.x <= 0 && !this.GR) {
                this.GR = true
            }

            if (this.GD) {
                this.y = this.y + this.stepSpeed;
            } else {
                this.y = this.y - this.stepSpeed;
            }

            if (this.y + this.ballHeight >= this.bodyHeight && this.GD) {
                this.GD = false
            }

            if (this.y <= 0 && !this.GD) {
                this.GD = true
            }
        }, 1)
    }
}



const myBalls = []

function generateRandomNumber(maxLimit) {
    return Math.floor(Math.random() * maxLimit) + 70
}

function generateRandomSpeedUpTo(maxLimit) {
    return Math.floor(Math.random() * maxLimit) + 1
}

function randomRGB() {
    let r = generateRandomNumber(256)
    let g = generateRandomNumber(256)
    let b = generateRandomNumber(256)

    return `rgb(${r},${g},${b})`
}

for (let i = 0; i < 20; i++) {
    myBalls.push(new Ball(i * generateRandomNumber(200), i * generateRandomNumber(200), randomRGB(), generateRandomNumber(100), generateRandomSpeedUpTo(3)))
}

// const ball1 = new Ball(500, 500, "red", 10, 20)
// const ball2 = new Ball(100, 600, "yellow", 10, 20)
// const ball3 = new Ball(50, 900, "purple", 10, 20)
// const ball4 = new Ball(580, 500, "lightgreen", 10, 20)
// const ball5 = new Ball(180, 500, "hotpink", 10, 20)