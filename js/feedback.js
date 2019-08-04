const scoreInput = document.getElementById('score')
const score = document.getElementById('score')

const giveScore = (s) => {
  score.value = s
}

const createScoreButtons = () => {
  const buttonRow = document.getElementById('button-row')
  for(let i=1; i<=5; i++) {
    const column = document.createElement('DIV')
    column.classList.add('col-2','text-center')

    const scoreButton = document.createElement('BUTTON')
    scoreButton.classList.add('btn','btn-primary')
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
