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

    checkValues(){
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
        
        peopleForm.classList.remove('error')
        errorPeople.innerText = ""
        valueForm.classList.remove('error')
        errorValue.innerText = "" 
    }

}

const buttons = document.querySelectorAll('[data-number]')
const custom = document.querySelector('[data-custom]')
const money = document.querySelector('[data-value]')
const people = document.querySelector('[data-persons]')
const reset = document.querySelector('[data-reset]')
const valueForm = document.querySelector('[data-value-form]')
const peopleForm = document.querySelector('[data-people-form]')
const errorValue = document.querySelector('[data-error-value]')
const errorPeople = document.querySelector('[data-error-people]')

const tipAmount = document.querySelector('#tipValue')
const totalAmount = document.querySelector('#totalValue')

const calculator = new TipCalculator(tipAmount,totalAmount)

function hasValue(item){
    if(item.value === '0'){
        valueForm.classList.add('error')
        errorValue.innerText = "Can't be zero" 
    }else{
        valueForm.classList.remove('error')
        errorValue.innerText = "" 
    }
}
function hasPeople(item){
    if(item.value === '0'){
        peopleForm.classList.add('error')
        errorPeople.innerText = "Can't be zero" 
    }else{
        peopleForm.classList.remove('error')
        errorPeople.innerText = ""
    }
}

$(window).ready(function() {
    $(peopleForm).on("keypress", function (event) {
        console.log("aaya");
        var keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            event.preventDefault();
            return false;
        }
    });
});
$(window).ready(function() {
    $(valueForm).on("keypress", function (event) {
        console.log("aaya");
        var keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            event.preventDefault();
            return false;
        }
    });
});
$(window).ready(function() {
    $('#customForm').on("keypress", function (event) {
        console.log("aaya");
        var keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            event.preventDefault();
            return false;
        }
    });
});

function cleanInput(){
    people.value = ''
    money.value = ''
}

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
    hasValue(money)
})

people.addEventListener('change',()=>{
    calculator.getPeople(people.value)
    hasPeople(people)
})

reset.addEventListener('click', ()=>{
    calculator.reset()
    cleanInput()
})
