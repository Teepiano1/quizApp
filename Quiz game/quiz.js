const questions = [
  {
    question: "WHAT IS THE FULL MEANING OF SAIL?",
    answers: [
      { text: "Senator Abiru interval lab", correct: false },
      { text: "Senator Abiru Innovation Lab", correct: true },
      { text: "Senator Abiru international Lab", correct: false },
      { text: "Senator abayo Innovation Lab", correct: false },
    ],
  },

  {
    question: "WHAT IS BIOLOGY",
    answers: [
      { text: "the study of the gods", correct: false },
      { text: "the art of music", correct: false },
      { text: "the study of life", correct: true },
      { text: "the study of cells", correct: false },
    ],
  },

  {
    question: "WHAT DOES G.0.A.T STAND FOR??",
    answers: [
      { text: "greatest of anticipated time", correct: false },
      { text: "greates", correct: false },
      { text: "greatest on another time", correct: false },
      { text: "greatest of all time", correct: true },
    ]
  },

  {
    question: "_______ IS A NAME OF A PERSON, ANIMAL, PLACE OR THIGNS",
    answers: [
      { text: "verb", correct: false },
      { text: "ver", correct: false },
      { text: "vereb", correct: false },
      { text: "noun", correct: true },
    ]
  },

  {
    question: "WHEN DID NIGERIA GAIN INDEPENDENCE",
    answers: [
      { text: "1960", correct: false },
      { text: "1959", correct: false },
      { text: "1963", correct: true },
      { text: "1999", correct: false },
    ]
  },

  {
    question: "I.P.O.B STANDS FOR?",
    answers: [
      { text: "igbo peopel of biafra", correct: false },
      { text: "igbo people of biafra", correct: true },
      { text: "independent personel of biafra", correct: false },
      { text: "all of the above", correct: false },
    ]
  },

  {
    question: "WHO IS THE 4TH PRESIDENT OF NIGERIA?",
    answers: [
      { text: "goodluck ebele jonathan", correct: false },
      { text: "bola hammed tinubu", correct: false },
      { text: "olusegun obasanjo", correct: false },
      { text: "muhammudu buhari", correct: true },
    ]
  },

  {
    question: "HOW MANY STATE DO WE HAVE IN NIGERIA",
    answers: [
      { text: "37", correct: false },
      { text: "36", correct: true },
      { text: "40", correct: false },
      { text: "35", correct: false },
    ]
  },

  {
    question: "WE HAVE ___ MAJOR COMPONENTS OF A COMPUTER",
    answers: [
      { text: "4", correct: false },
      { text: "6", correct: false },
      { text: "3", correct: true },
      { text: "2", correct: false },
    ]
  },

  {
    question: "HOW MANY QUESTIONS HAVE YOU ANSWERED?",
    answers: [
      { text: "9", correct: true },
      { text: "10", correct: false },
      { text: "8 and half", correct: false },
      { text: "8 and half", correct: false },
    ]
  },
];

let quest = document.querySelector("#display")
let score = 0
let questionIndex = 0;
let answerButtons = document.querySelector(".answers")
let quesContainer = document.querySelector(".question")
let nextBtn = document.createElement("button")
nextBtn.textContent = "next"
nextBtn.classList.add("next")
nextBtn.style.display = "none"
quesContainer.appendChild(nextBtn)
let previousbtn = document.createElement("button")
previousbtn.textContent = "previous"
previousbtn.classList.add("next1")
previousbtn.style.display = "none"
quesContainer.appendChild(previousbtn)

let homepage = document.getElementById("click")
homepage.addEventListener("click", ()=>{
  startQuiz()
  quesContainer.removeChild(quesContainer.firstElementChild)
})

function startQuiz() {
  score = 0;
  questionIndex = 0;
  showQuestion()
}

function showQuestion() {
  resetState()
  let currentQuestion = questions[questionIndex]
  let questionNo = questionIndex + 1
  quest.innerHTML = questionNo + ". " + currentQuestion.question
  
  currentQuestion.answers.forEach((ans) => {
    let button = document.createElement("button")
    button.textContent = ans.text;
    button.classList.add("button")
    answerButtons.appendChild(button)
    button.addEventListener("click", (event) => {
      let cor = ans.correct
      ans.text = " "
      switch (true) {
        case cor === true: score++
          button.style.backgroundColor = "green"
          break;
        default:button.style.backgroundColor = "red"
          break;
      }
      setTimeout(() => {
        resetState()
        showQuestion2()
        
      }, 1000);
    })
  })
  nextBtn.style.display = "grid"
  nextBtn.addEventListener("click", () => {
    resetState()
    showQuestion2()
  })
  previousbtn.style.display = "none"
}
function showQuestion2() {
  let currentQuestion = questions[1]
  let questionNo = questionIndex + 2
  quest.innerHTML = questionNo + ". " + currentQuestion.question

  currentQuestion.answers.forEach((ans) => {
    let button = document.createElement("button")
    button.textContent = ans.text;
    button.classList.add("button")
    answerButtons.appendChild(button)
    button.addEventListener("click", () => {
      let cor = ans.correct
      ans.text = " "
      switch (true) {
        case cor === true: score++
          button.style.backgroundColor = "green"
          break;
      
        default:button.style.backgroundColor = "red";
          break;
      }
      setTimeout(() => {
        resetState()
        showQuestion3()
      }, 1000);
    })
  })
  nextBtn.addEventListener("click", () => {
    resetState()
    showQuestion3()
  })
  previousbtn.style.display = "grid"
  previousbtn.addEventListener("click", ()=>{
    resetState()
    showQuestion()
  })
}
function showQuestion3() {
  let ques2 = questions[2]
  quest.innerHTML = "3. " + ques2.question

  ques2.answers.forEach((ans) => {
    let button = document.createElement("button")
    button.textContent = ans.text
    button.classList.add("button")
    answerButtons.appendChild(button)
    button.addEventListener("click", () => {
      let cor = ans.correct
      ans.text = " "
      switch (true) {
        case cor === true: score++
          button.style.backgroundColor = "green"
          break;
      
        default:button.style.backgroundColor = "red";
          break;
      }
      setTimeout(() => {
        resetState()
        showQuestion4()
      }, 1000);
    })
  })
  nextBtn.addEventListener("click", () => {
    resetState()
    showQuestion4()
  })
  previousbtn.addEventListener("click", ()=>{
    resetState()
    showQuestion2()
  })
}
function showQuestion4() {
  let ques2 = questions[3]
  quest.innerHTML = "4. " + ques2.question

  ques2.answers.forEach((ans) => {
    let button = document.createElement("button")
    button.textContent = ans.text
    button.classList.add("button")
    answerButtons.appendChild(button)
    button.addEventListener("click", () => {
      let cor = ans.correct
      ans.text = " "
      switch (true) {
        case cor === true: score++
          button.style.backgroundColor = "green"
          break;
      
        default:button.style.backgroundColor = "red";
          break;
      }
      setTimeout(() => {
        resetState()
        showQuestion5()
      }, 1000);
    })
  })
  nextBtn.addEventListener("click", () => {
    resetState()
    showQuestion5()
  })
  previousbtn.addEventListener("click", ()=>{
    resetState()
    showQuestion3()
  })
}
function showQuestion5() {
  let ques2 = questions[4]
  quest.innerHTML = "5. " + ques2.question

  ques2.answers.forEach((ans) => {
    let button = document.createElement("button")
    button.textContent = ans.text
    button.classList.add("button")
    answerButtons.appendChild(button)
    button.addEventListener("click", () => {
      let cor = ans.correct
      ans.text = " "
      switch (true) {
        case cor === true: score++
          button.style.backgroundColor = "green"
          break;
      
        default:button.style.backgroundColor = "red";
          break;
      }
      setTimeout(() => {
        resetState()
        showQuestion6()
      }, 1000);
    })
  })
  nextBtn.addEventListener("click", () => {
    resetState()
    showQuestion6()
  })
  previousbtn.addEventListener("click", ()=>{
    resetState()
    showQuestion4()
  })
}

function showQuestion6() {
  let ques2 = questions[5]
  quest.innerHTML = "6. " + ques2.question

  ques2.answers.forEach((ans) => {
    let button = document.createElement("button")
    button.textContent = ans.text
    button.classList.add("button")
    answerButtons.appendChild(button)
    button.addEventListener("click", () => {
      let cor = ans.correct
      ans.text = " "
      switch (true) {
        case cor === true: score++
          button.style.backgroundColor = "green"
          break;
      
        default:button.style.backgroundColor = "red";
          break;
      }
      setTimeout(() => {
        resetState()
        showQuestion7()
      }, 1000);
    })
  })
  nextBtn.addEventListener("click", () => {
    resetState()
    showQuestion7()
  })
  previousbtn.addEventListener("click", ()=>{
    resetState()
    showQuestion5()
  })
}

function showQuestion7() {
  let ques2 = questions[6]
  quest.innerHTML = "7. " + ques2.question

  ques2.answers.forEach((ans) => {
    let button = document.createElement("button")
    button.textContent = ans.text
    button.classList.add("button")
    answerButtons.appendChild(button)
    button.addEventListener("click", () => {
      let cor = ans.correct
      ans.text = " "
      switch (true) {
        case cor === true: score++
          button.style.backgroundColor = "green"
          break;
      
        default:button.style.backgroundColor = "red";
          break;
      }
      setTimeout(() => {
        resetState()
        showQuestion8()
      }, 1000);
    })
  })
  nextBtn.addEventListener("click", () => {
    resetState()
    showQuestion8()
  })
  previousbtn.addEventListener("click", ()=>{
    resetState()
    showQuestion6()
  })
}

function showQuestion8() {
  let ques2 = questions[7]
  quest.innerHTML = "8. " + ques2.question

  ques2.answers.forEach((ans) => {
    let button = document.createElement("button")
    button.textContent = ans.text
    button.classList.add("button")
    answerButtons.appendChild(button)
    button.addEventListener("click", () => {
      let cor = ans.correct
      ans.text = " "
      switch (true) {
        case cor === true: score++
          button.style.backgroundColor = "green"
          break;
      
        default:button.style.backgroundColor = "red";
          break;
      }
      setTimeout(() => {
        resetState()
        showQuestion9()
      }, 1000);
    })
  })
  nextBtn.addEventListener("click", () => {
    resetState()
    showQuestion9()
  })
  previousbtn.addEventListener("click", ()=>{
    resetState()
    showQuestion7()
  })
}

function showQuestion9(check) {
  let ques2 = questions[8]
  quest.innerHTML = "9. " + ques2.question
  
  ques2.answers.forEach((ans) => {
    let button = document.createElement("button")
    button.textContent = ans.text
    button.classList.add("button")
    answerButtons.appendChild(button)
    button.addEventListener("click", () => {
      let cor = ans.correct
      ans.text = " "
      switch (true) {
        case cor === true: score++
          button.style.backgroundColor = "green"
          break;
      
        default:button.style.backgroundColor = "red";
          break;
      }
      setTimeout(() => {
        resetState()
        showQuestion10()
      }, 1000);
    })
  })
  nextBtn.addEventListener("click", () => {
    resetState()
    showQuestion10()
  })
  previousbtn.addEventListener("click", ()=>{
    resetState()
    showQuestion8()
  })
}
function showQuestion10() {
  let ques2 = questions[9]
  quest.innerHTML = "10. " + ques2.question

  ques2.answers.forEach((ans) => {
    let button = document.createElement("button")
    button.textContent = ans.text
    button.classList.add("button")
    answerButtons.appendChild(button)
    button.addEventListener("click", () => {
      let cor = ans.correct
      ans.text = " "
      switch (true) {
        case cor === true: score++
          button.style.backgroundColor = "green"
          break;
      
        default:button.style.backgroundColor = "red";
          break;
      }
    })
  })
  previousbtn.addEventListener("click", ()=>{
    resetState()
    showQuestion9()
  })
  nextBtn.textContent = "Submit"
  nextBtn.addEventListener("click", () => {
    resetState()
    showQuestion11()
  })
}
function showQuestion11() {
  let ques2 = questions[9]
  let score1 = document.getElementById("score");
  score1.innerHTML = "your score is" + " " + score + " " + "out of 10"
  score1.style.animation = "modalKeyFrame 0.8s 1"
  quest.innerHTML = "Thanks for participating in the quiz"
  previousbtn.textContent = "Retake quiz"
  previousbtn.addEventListener("click", () => {
    document.location.reload()
  })
  nextBtn.style.display = "none"
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}








