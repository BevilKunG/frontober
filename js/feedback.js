const scoreInput = document.getElementById('score')
const score = document.getElementById('score')
let selectedScore = 1

const giveScore = (s) => {
  const scoreButtons = document.querySelectorAll('.btn.btn-primary.feedback-text')
  scoreButtons[selectedScore - 1].classList.remove('active')
  scoreButtons[s - 1].classList.add('active')
  selectedScore = s
  score.value = s
}

const createScoreButtons = () => {
  const buttonRow = document.getElementById('button-row')
  for(let i=1; i<=5; i++) {
    const column = document.createElement('DIV')
    column.classList.add('col-2','text-center')

    const scoreButton = document.createElement('BUTTON')
    scoreButton.classList.add('btn', 'btn-primary', 'feedback-text')
    scoreButton.innerText = i;
    scoreButton.addEventListener('click', (e) => {
      e.preventDefault()
      giveScore(i)
    })

    column.appendChild(scoreButton)
    buttonRow.appendChild(column)
  }
}

createScoreButtons()
