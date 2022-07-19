class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

delete() {
this.currentOperand = this.currentOperand.toStrinf().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation) {
  if (this.currentOperant === '')return
if (this.previousOperand !== ''){
  this.compute()
}
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand = ''
}

compute() {
  let computation
  const prev = parseFloat(this.previousOperand)
  const current = parseFloat(this.currentOperand)
  if (isNaN(prev) || isNaN()) return
  switch (this.operation) {
    case '+':
        computation = prev + current
        break
    case '-':
        computation = prev - current
        break
    case '*':
        computation = prev * current
        break
    case '/':
        computation = prev / current
        break
    default:
      return
  }
  this.currentOperand = computation
  this.operation = undefined
  this,previousOperand = ''
}

updateDisplay() {
  this.currentOperandTextElement.innerText = this.currentOperand
  this.previousOperandTextElement.innerText = this.previousOperand 
 }
}


const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButton.foreach(button => {
  button.addEventlistener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButton.foreach(button => {
  button.addEventlistener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
    calculator.updateDisplay()
})
