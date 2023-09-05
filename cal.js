
if (document.querySelector("#quantity").value > 0) {
    var quantity = document.querySelector("#quantity").value;
    var price = document.querySelector("#price").value;
    var totalPrice = price * quantity;
    document.querySelector("#inpoa").innerHTML = "Rs. " + totalPrice + "/-"
    var total = +totalPrice + +totalPrice1;
    var shipping = document.querySelector("#shipping").value;
    var total1 = +totalPrice + +totalPrice1 + +shipping;
    document.querySelector("#inpoa2").innerHTML = "Rs. " + total + "/-";
    document.querySelector("#inpoa3").innerHTML = "Rs. " + total1 + "/-";
}
else {
    document.querySelector("#inpoa").innerHTML = "Null"
}

function multiply() {

    if (document.querySelector("#quantity").value > 0) {
        var quantity = document.querySelector("#quantity").value;
        var price = document.querySelector("#price").value;
        var totalPrice = price * quantity;
        document.querySelector("#inpoa").innerHTML = "Rs. " + totalPrice + "/-"
        var total = +totalPrice + +totalPrice1;
        var shipping = document.querySelector("#shipping").value;
        var total1 = +totalPrice + +totalPrice1 + +shipping;
        document.querySelector("#inpoa2").innerHTML = "Rs. " + total + "/-";
        document.querySelector("#inpoa3").innerHTML = "Rs. " + total1 + "/-";
    }
    else {
        document.querySelector("#inpoa").innerHTML = "Null"
    }
}

// second element

if (document.querySelector("#quantity1").value > 0) {
    var quantity1 = document.querySelector("#quantity1").value;
    var price1 = document.querySelector("#price1").value;
    var totalPrice1 = price1 * quantity1;
    document.querySelector("#inpoa1").innerHTML = "Rs. " + totalPrice1 + "/-";
    var total = +totalPrice + +totalPrice1;
    var shipping = document.querySelector("#shipping").value;
    var total1 = +totalPrice + +totalPrice1 + +shipping;
    document.querySelector("#inpoa2").innerHTML = "Rs. " + total + "/-";
    document.querySelector("#inpoa3").innerHTML = "Rs. " + total1 + "/-";
}
else {
    document.querySelector("#inpoa1").innerHTML = "Null"
}

function multiplyy() {

    if (document.querySelector("#quantity1").value > 0) {
        var quantity1 = document.querySelector("#quantity1").value;
        var price1 = document.querySelector("#price1").value;
        var totalPrice1 = price1 * quantity1;
        document.querySelector("#inpoa1").innerHTML = "Rs. " + totalPrice1 + "/-";
        var total = +totalPrice + +totalPrice1;
        var shipping = document.querySelector("#shipping").value;
        var total1 = +totalPrice + +totalPrice1 + +shipping;
        document.querySelector("#inpoa2").innerHTML = "Rs. " + total + "/-";
        document.querySelector("#inpoa3").innerHTML = "Rs. " + total1 + "/-";
    }
    else {
        document.querySelector("#inpoa1").innerHTML = "Null"
    }
}



// function done() {
//     var total = +totalPrice + +totalPrice1;
//     var shipping = document.querySelector("#shipping").value;
//     var total1 = +totalPrice + +totalPrice1 + +shipping;
//     document.querySelector("#inpoa2").innerHTML = "Rs. " + total + "/-";
//     document.querySelector("#inpoa3").innerHTML = "Rs. " + total1 + "/-";
// }
