class TipCalculator{
    constructor(tipAmount,totalAmount){
        this.tipAmountTextElement = tipAmount
        this.totalAmountTextElement = totalAmount
        this.reset()
    }

    getPorcentage(porcentage){
        this.porcentage = parseInt(porcentage)/100
        this.checkValues()
    }

    getMoney(money){
        this.money = parseFloat(money)
        this.checkValues()
    }
    getPeople(people){
        this.people = parseInt(people)
        this.checkValues()
    }

    checkValues(porcentage, money, people){
        if(this.porcentage!=0 && this.money!=0 && this.people!=0){
            this.processValues()
        }
        
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
const custom = document.querySelector('[data-custom]')
const money = document.querySelector('[data-value]')
const people = document.querySelector('[data-persons]')
const reset = document.querySelector('[data-reset]')

const tipAmount = document.querySelector('#tipValue')
const totalAmount = document.querySelector('#totalValue')

const calculator = new TipCalculator(tipAmount,totalAmount)


buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.getPorcentage(button.firstChild.innerText)
    })
})

custom.addEventListener('change',()=>{
    calculator.getPorcentage(custom.value)
})

money.addEventListener('change',()=>{
    calculator.getMoney(money.value)
})

people.addEventListener('change',()=>{
    calculator.getPeople(people.value)
})


reset.addEventListener('click', ()=>{
    calculator.reset()
    cleanInput()
})
