
let bill, percent, tip;


document.getElementById("btn").addEventListener("click", function(){
    bill = parseInt(document.getElementById("bill").value);
    let people = parseInt(document.getElementById("person").value);
    tipPercent(bill);
    document.getElementById("tipResult").innerHTML = tip;
    document.getElementById("netResult").innerHTML = tip + bill;
    document.getElementById("perPerson").innerHTML = (tip + bill)/people;
    
});

function tipPercent(x) {
    let percent = parseInt(document.getElementById("tip").value);
    
    tip = x * (percent/100);
    console.log(tip);
}
