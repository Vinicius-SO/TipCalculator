class TipCalculator{
    constructor(tipAmount,totalAmount){
        this.tipAmountTextElement = tipAmount
        this.totalAmountTextElement = totalAmount
    }

    getValues(porcentage, money, people){
        this.porcentage = parseInt(porcentage)/100
        this.money = parseFloat(money)
        this.people = parseInt(people)
        this.processValues()
    }

    processValues(){
        this.tipAmount = parseFloat((this.money*this.porcentage)/this.people)
        this.totalAmount = parseFloat((this.money/this.people) +  this.tipAmount)
        console.log(this.tipAmount,this.totalAmount,)
        this.updateDisplay();
    }

    updateDisplay(){
        this.tipAmountTextElement.innerText = this.tipAmount.toFixed(2)
        this.totalAmountTextElement.innerText = this.totalAmount.toFixed(2)
    }
    reset(){
        this.tipAmount = 0
        this.totalAmount = 0
        this.porcentage = 0
        this.people = 0
        this.money = 0
        this.updateDisplay()
    }

}

function cleanInput(){
    persons.value = ''
    money.value = ''
}

const buttons = document.querySelectorAll('[data-number]')
const customValue = document.querySelector('[data-custom]')
const money = document.querySelector('[data-value]')
const persons = document.querySelector('[data-persons]')
const reset = document.querySelector('[data-reset]')

const tipAmount = document.querySelector('#tipValue')
const totalAmount = document.querySelector('#totalValue')

const calculator = new TipCalculator(tipAmount,totalAmount)


buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.getValues(button.firstChild.innerText, money.value, persons.value)
    })
})

reset.addEventListener('click', ()=>{
    calculator.reset()
    cleanInput()
})
