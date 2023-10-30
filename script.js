var txt = document.getElementById("Answer")
var result = 0.0, num1 = 0.0, num2 = 0.0, operand, equalIsPressed = 0
function EnterNumber(num) {
    if (equalIsPressed) {
        txt.value = ""
        equalIsPressed = 0
    }
    txt.value += num
    num1 = num
}

function EnterOperator(op) {
    num2 = parseFloat(num1)
    num1 = 0
    txt.value += " " + op + " "
    operand = op
}

function EnterClear() {
    txt.value = ""
}

function EnterEqual() {
    equalIsPressed = 1
    switch (operand) {
        case '+':
        case '-':
            result = parseFloat(num2) + parseFloat(operand + num1)
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2)
            break;
        case '/':
            if (num1 === 0) {
                result = "Math Error"
                break;
            }
            result = parseFloat(num2) / parseFloat(num1)
            break;
    }
    txt.value = ""
    txt.value += result
    result = 0
}