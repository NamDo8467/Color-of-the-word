const words = ['BLACK', 'RED', 'GREEN', 'YELLOW', 'BLUE', 'PURPLE', 'ORANGE', 'GRAY']
const colors = ['black', 'red', 'green', 'yellow', 'blue', 'purple', 'orange', 'gray']
let second = '15'

let time = document.querySelector('.time')
    time.innerHTML += second
let score = document.querySelector('.score')
    score.innerHTML = 0

let randomColor = generateRandomColor()

let time_played = 0

let word = document.querySelector('.word')
word.innerHTML = generateRandomWord()
word.style.color = randomColor

async function getAnswer() {
    let answer = document.querySelector('input').value
    if (answer != " ") {
        return answer
    } 
}

document.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        let answer = document.querySelector('input').value
        if (answer == randomColor) {
            score.innerHTML = parseInt(score.innerHTML) + 1
            randomColor = generateRandomColor()
            document.querySelector('input').value = ''
            word.innerHTML = generateRandomWord()
            word.style.color = randomColor
            
        } else{
            document.querySelector('input').value = ''
        }
        
    }
})

playTime()
async function playTime() {
    let answer = await getAnswer()
    // console.log(answer);
    if (answer != "" && time_played < 1) {
        const playtime = setInterval(() => {
            second--
            time.innerHTML = '0:' + second
            if (second == '0') {
                clearInterval(playtime)
                alert(`Congratulations, you got ${score.textContent} words right`)
                return
            }
        }, 1000)
        time_played += 1
    }
}


function generateRandomColor() {
    let random_color = colors[Math.floor(Math.random() * colors.length)]
    return random_color
}
function generateRandomWord() {
    let random_word = words[Math.floor(Math.random() * words.length)]
    return random_word
}
