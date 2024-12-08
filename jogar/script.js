const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const score = document.querySelector(".score--value")
const finalScore = document.querySelector(".final-score > span")
const menu = document.querySelector(".menu-screen")
const buttonPlay = document.querySelector(".btn-play")
const audio = new Audio("assets/audio.mp3")
const audiobg = new Audio("assets/audio-bg.mp3")

const snakeHeadImage = new Image()
snakeHeadImage.src = 'assets/face.webp'

const foodImages = ['assets/chave.webp']


function somdojogo() {
    audiobg.play()
}

const size = 30
const initialPosition = { x: 270, y: 240 }
let snake = [initialPosition]

const incrementScore = () => {
    score.innerText = +score.innerText + 1
}

const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const randomPosition = () => {
    const number = randomNumber(0, canvas.width - size)
    return Math.round(number / 30) * 30
}

const randomColor = () => {
    const red = randomNumber(128, 255)
    const green = randomNumber(0, 0)
    const blue = randomNumber(0, 0)

    return `rgb(${red}, ${green}, ${blue})`
}

const food = {
    x: randomPosition(),
    y: randomPosition(),
    color: randomColor(),
    image: new Image()
}

let direction, loopId


const setRandomFoodImage = () => {
    const randomIndex = Math.floor(Math.random() * foodImages.length)
    food.image.src = foodImages[randomIndex]
}

setRandomFoodImage();

const drawFood = () => {
    const { x, y, color } = food
    const randomIndex = Math.floor(Math.random() * foodImages.length)

    ctx.shadowColor = color
    ctx.shadowBlur = 6
    ctx.fillStyle = color
    ctx.fillRect(x, y, size, size)
    ctx.shadowBlur = 0
    ctx.drawImage(food.image, food.x, food.y, size, size)
}


const drawSnake = () => {
    snake.forEach((position, index) => {
        if (index == snake.length - 1) {

            ctx.drawImage(snakeHeadImage, position.x, position.y, size, size)
        } else {

            ctx.fillStyle = "#ddd"
            ctx.fillRect(position.x, position.y, size, size)
        }
    })
}

snakeHeadImage.onload = () => {
    gameLoop()
}

const moveSnake = () => {
    if (!direction) return

    const head = snake[snake.length - 1]

    if (direction == "right") {
        snake.push({ x: head.x + size, y: head.y })
    }

    if (direction == "left") {
        snake.push({ x: head.x - size, y: head.y })
    }

    if (direction == "down") {
        snake.push({ x: head.x, y: head.y + size })
    }

    if (direction == "up") {
        snake.push({ x: head.x, y: head.y - size })
    }

    snake.shift()
}

const drawGrid = () => {
    ctx.lineWidth = 1
    ctx.strokeStyle = "#191919"
    somdojogo()
    for (let i = 30; i < canvas.width; i += 30) {
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 600)
        ctx.stroke()

        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(600, i)
        ctx.stroke()
    }
}

const chackEat = () => {
    const head = snake[snake.length - 1]

    if (head.x == food.x && head.y == food.y) {
        incrementScore()
        snake.push(head)
        audio.play()

        let x = randomPosition()
        let y = randomPosition()

        while (snake.find((position) => position.x == x && position.y == y)) {
            x = randomPosition()
            y = randomPosition()
        }

        food.x = x
        food.y = y
        food.color = randomColor()
    }
}

const checkCollision = () => {
    const head = snake[snake.length - 1]
    const canvasLimit = canvas.width - size
    const neckIndex = snake.length - 2

    const wallCollision =
        head.x < 0 || head.x > canvasLimit || head.y < 0 || head.y > canvasLimit

    const selfCollision = snake.find((position, index) => {
        return index < neckIndex && position.x == head.x && position.y == head.y
    })

    if (wallCollision || selfCollision) {
        gameOver()
    }
}

const gameOver = () => {
    direction = undefined

    menu.style.display = "flex"
    window.open('gameover.html', '_blank'); // Abre a nova guia
    window.close(); // Fecha a guia atual
}

const gameLoop = () => {
    clearInterval(loopId)

    ctx.clearRect(0, 0, 600, 600)
    drawGrid()
    drawFood()
    moveSnake()
    drawSnake()
    chackEat()
    checkCollision()

    loopId = setTimeout(() => {
        gameLoop()
    }, 100)
}

gameLoop()

document.addEventListener("keydown", ({ key }) => {
    if (key == "ArrowRight" && direction != "left") {
        direction = "right"
    }

    if (key == "ArrowLeft" && direction != "right") {
        direction = "left"
    }

    if (key == "ArrowDown" && direction != "up") {
        direction = "down"
    }

    if (key == "ArrowUp" && direction != "down") {
        direction = "up"
    }
})

buttonPlay.addEventListener("click", () => {
    score.innerText = "00"
    menu.style.display = "none"
    canvas.style.filter = "none"


    snake = [initialPosition]
})

