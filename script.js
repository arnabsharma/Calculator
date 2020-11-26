
//This program is only for binary operations(a single operator at a time) and integers(non-fractional numbers).For mutiple operations at the same time we need to add some extra code(suitable for intermediate programmers).For Beginners,please try to first understand this basic code.
const calculatorScreen=document.querySelector(".calculator-screen");

const updateScreen=(number)=>{
    calculatorScreen.value=number;
}


let prevInput='0';
let calculationOperator='';
let currentInput='0';
let flag=true;

const inputNumber=(number)=>{
    if(currentInput==='0')
    {
        //for the first digit of  no.
        currentInput=number;
    }
    else
     {
        currentInput+=number;
    }
}

const numbers=document.querySelectorAll(".number");
numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        // 'click' is the type of event listener registered for the source('number' object)
        inputNumber(event.target.value);

        updateScreen(currentInput);


    });
});


const inputOperator=(operator)=>{
    prevInput=currentInput;
    currentInput='0';
    calculationOperator=operator;
};
const operators=document.querySelectorAll(".operator");

operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{

        inputOperator(event.target.value);

    })
});


const calculate=()=>{
    let result=0;
    switch (calculationOperator) {

        case '+':
            result=parseInt(prevInput)+parseInt(currentInput);
            break;
        case '-':
            result=parseInt(prevInput)-parseInt(currentInput);
            break;
        case '*':
            result=parseInt(prevInput)*parseInt(currentInput);
            break;
        case '/':
            if(currentInput=='0')
            {

                return false;
            }
            else
            {
                result=Number(prevInput)/Number(currentInput);
            }

            break;

    }

    currentInput=result.toString();// toString() converts integer to string

    return true;
};
const equalSign=document.querySelector(".equal-sign");

equalSign.addEventListener('click',()=>{

    flag=calculate();
    if(flag)
    {

        updateScreen(currentInput);
    }
    else
    {
        updateScreen('Cannot divide by Zero');
    }

});


clearAll=()=>{
    prevInput='0';
    calculationOperator='';
    currentInput='0';
};
const clearBtn=document.querySelector('.all-clear');
clearBtn.addEventListener('click',()=>{

    clearAll();
    updateScreen(currentInput);
});


//The code for dot(.) and percent(%) are not written in this program.
