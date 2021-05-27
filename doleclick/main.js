
// VARIABLES 

var data = {
    money: 0
}

var upgrade = {
    clickpower: 1,
    clickpowerprice: 50,
    rat: 0,
    ratprice: 20,
    finnley: 0,
    finnleyprice: 100
}

// MONEY FUNCTIONS 

function money() {
    data.money = data.money + upgrade.clickpower;
    document.getElementById("harrison").innerHTML = prettify(data.money)
}

function ratmoney() {
    data.money = data.money + 0.1 * upgrade.rat;
    document.getElementById("harrison").innerHTML = prettify(data.money)
}

function finnleymoney() {
    data.money = data.money + 1.2 * upgrade.finnley;
    document.getElementById("harrison").innerHTML = prettify(data.money)
}

// UPGRADE FUNCTIONS 

function clickpower() {
    if (data.money >= upgrade.clickpowerprice) {
        data.money = data.money - upgrade.clickpowerprice;
        upgrade.clickpower = upgrade.clickpower + 5;
        upgrade.clickpowerprice = upgrade.clickpowerprice * 2;
        document.getElementById("clickpowerprice").innerHTML = upgrade.clickpowerprice;
    } else {
        document.getElementById("error").innerText = "You need " + upgrade.clickpowerprice;
    }
    document.getElementById("harrison").innerHTML = prettify(data.money);
}

function rat() {
    if (data.money >= upgrade.ratprice) {
        data.money = data.money - upgrade.ratprice;
        upgrade.rat = upgrade.rat + 1;
        upgrade.ratprice = upgrade.ratprice * 1.5;
        document.getElementById("ambrose").innerHTML = upgrade.rat;
        document.getElementById("ratprice").innerHTML = prettify(upgrade.ratprice);
    } else {
        document.getElementById("error").innerText = "You need " + prettify(upgrade.ratprice);
    }
    document.getElementById("harrison").innerHTML = prettify(data.money);
}

function finnley() {
    if (data.money >= upgrade.finnleyprice) {
        data.money = data.money - upgrade.finnleyprice;
        upgrade.finnley = upgrade.finnley + 1;
        upgrade.finnleyprice = upgrade.finnleyprice * 2;
        document.getElementById("finnley").innerHTML = upgrade.finnley;
        document.getElementById("finnleyprice").innerHTML = upgrade.finnleyprice;
    } else {
        document.getElementById("error").innerText = "i need atleast " + upgrade.finnleyprice + " bucks until i work for u ba"
    }
    document.getElementById("harrison").innerHTML = prettify(data.money);
}

// INTERVALS

setInterval(ratmoney,1000)
setInterval(finnleymoney,1500)

// OTHER FUNCTIONS

function prettify(input){
    var output = Math.round(input * 100)/100;
    return output;
}


