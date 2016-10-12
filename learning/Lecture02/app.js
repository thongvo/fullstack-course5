/**
 * Created by vhthong on 12/10/2016.
 */
var student = {
    name: "",
    type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
    document.getElementById('name').addEventListener("keyup", keyUp);
};

function keyUp(event) {
    calculateNumbericOutput();
};

function calculateNumbericOutput() {
    student.name = document.getElementById('name').value;

    var totalNameValue = 0;

    for (var i = 0; i < student.name.length; i++) {
        totalNameValue += student.name.charCodeAt(i);
    }

    //Insert result into page
    var output = "Total numberic value of person's name is " + totalNameValue;
    document.getElementById('output').innerText = output;
};