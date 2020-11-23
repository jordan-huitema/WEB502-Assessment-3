
// setting up input and output objs containing selected elements
let inputElms = document.querySelectorAll("#_payment-ammount, #_payment-bike, #_payment-region");
let outputElms = document.querySelectorAll("#_payment-output-total, #_payment-output-gst, #_payment-output-region");
// setting paymentChange func
function paymentChange () {
    // set shipping value based on selected region, value = ammount * selected option's alt value
    switch (inputElms[2].value) {
        case 'North Island':
            outputElms[0].textContent = `$${Number(inputElms[2].options[0].attributes[0].value) * inputElms[0].value}`;
            break;
        case 'South Island':
            outputElms[0].textContent = `$${Number(inputElms[2].options[1].attributes[0].value) * inputElms[0].value}`;
    }
    // calc sum, value = (bike cost * ammount) + shipping
    let sum = (Number(inputElms[1].textContent.substring(1)) * inputElms[0].value) + Number(outputElms[0].textContent.substring(1));
    // calc gst, value = 15% of sum
    let gst = 0.15 * sum;
    // set gst elm value and total cost elm value
    outputElms[1].textContent = `$${gst}`;
    outputElms[2].textContent = `$${sum + gst}`;
}
// asign "on input" event listeners to each input element
inputElms.forEach(elm => {
    elm.addEventListener("input", paymentChange);
});
// run paymentChange func on load to set default cost
paymentChange();

console.log("ran payment-calc.js");

/*

This function uses an object of input and output elements to calculate a cost and then set the output elements at the ditermined values
This funciton is semi resuable but the calculations are custom and it is hard to read due to everything being done off var[0] instead of name's

*/