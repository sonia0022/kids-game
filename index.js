// fwCounting(){
//     var startNumber = prompt('Enter a start number: ')
//     var endNumber = prompt('Enter a start number: ')
//     for(var i = startNumber ; i <= endNumber ; i++){
//         document.write(i)
//     }
// } */}
function fwCounting() {
    var startNumber = parseInt(prompt('Enter a start number: '))
    var endNumber = parseInt(prompt('Enter an end number: '))
    var output = ''

    if (startNumber < endNumber) {

        for (var i = startNumber; i <= endNumber; i++) {
            output += i + ' '
        }
        document.getElementById('output').innerHTML = output
    } else {
        output = 'If you want to print backward counting click on backward button\nThank you!'
        document.getElementById('output').innerHTML = output
    }
}

function bwCounting() {
    var startNumber = parseInt(prompt('Enter a start number: '))
    var endNumber = parseInt(prompt('Enter an end number: '))
    var output = ''

    if (startNumber > endNumber) {
        for (var i = startNumber; i >= endNumber; i--) {
            output += i + ' '
        }
        document.getElementById('output').innerHTML = output
    } else {
        output = 'If you want to print Forward counting click on forward button\nThank you!'
        document.getElementById('output').innerHTML = output
    }
}

function printTable() {
    var number = parseInt(prompt('Enter a number which you want to print: '))
    var startNumber = parseInt(prompt('Enter a start number from where you want to print you table: '))
    var endNumber = parseInt(prompt('Enter a end number from where you want to print you table: '))
    var output = ' '

    
    if (isNaN(number) || isNaN(startNumber) || isNaN(endNumber)) {
        alert('Please enter valid numbers');
        return;
    }

    if (number <= 0) {
        alert('Number should be greater than zero');
        return;
    }

    if (startNumber < endNumber) {
        for (var i = startNumber; i <= endNumber; i++) {
            output += number + ' x ' + i + ' = ' + number * i + '</br> '
        }
        document.getElementById('output').innerHTML = output
    } else {
        for(var i = startNumber ; i >= endNumber; i--){
            output += number + ' x ' + i + ' = ' + number * i + '</br> '
        }
        document.getElementById('output').innerHTML = output
    }
}