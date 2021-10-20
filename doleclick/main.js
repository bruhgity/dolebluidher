
// VARIABLES 

var data = {
    money: 0
}

var upgrade = {
    clickpower: 1,
    clickpowerprice: 100,
    rat: 0,
    ratprice: 10,
    finnley: 0,
    finnleyprice: 100,
    bulldozer: 0,
    bulldozerprice: 600,
}

// MONEY FUNCTIONS 

function money() {
    data.money = data.money + upgrade.clickpower;
    document.getElementById("harrison").innerHTML = prettify(data.money)
}

function ratmoney() {
    data.money = data.money + 1 * upgrade.rat;
    document.getElementById("harrison").innerHTML = prettify(data.money)
}

function finnleymoney() {
    data.money = data.money + 3 * upgrade.finnley;
    document.getElementById("harrison").innerHTML = prettify(data.money)
}

function bulldozermoney() {
    data.money = data.money + 6 * upgrade.bulldozer;
    document.getElementById("harrison").innerHTML = prettify(data.money)
}

// UPGRADE FUNCTIONS 

function clickpower() {
    if (data.money >= upgrade.clickpowerprice) {
        data.money = data.money - upgrade.clickpowerprice;
        upgrade.clickpower = upgrade.clickpower + 1;
        upgrade.clickpowerprice = upgrade.clickpowerprice * 2;
        document.getElementById("clickpower").innerHTML = upgrade.clickpower;
        document.getElementById("clickpowerprice").innerHTML = upgrade.clickpowerprice;
    } else {
        document.getElementById("error").innerText = "maaaate your gunnna need $" + prettify(upgrade.clickpowerprice) + " fora packa ice mate";
    }
    document.getElementById("harrison").innerHTML = prettify(data.money);
}

function rat() {
    if (data.money >= upgrade.ratprice) {
        data.money = data.money - upgrade.ratprice;
        upgrade.rat = upgrade.rat + 1;
        upgrade.ratprice = upgrade.ratprice * 1.4;
        document.getElementById("ambrose").innerHTML = upgrade.rat;
        document.getElementById("ratprice").innerHTML = prettify(upgrade.ratprice);
    } else {
        document.getElementById("error").innerText = "squeak squeak cunt gimme " + prettify(upgrade.ratprice) + " big ones ya ranga";
    }
    document.getElementById("harrison").innerHTML = prettify(data.money);
}

function finnley() {
    if (data.money >= upgrade.finnleyprice) {
        data.money = data.money - upgrade.finnleyprice;
        upgrade.finnley = upgrade.finnley + 1;
        upgrade.finnleyprice = upgrade.finnleyprice * 1.4;
        document.getElementById("finnley").innerHTML = upgrade.finnley;
        document.getElementById("finnleyprice").innerHTML = prettify(upgrade.finnleyprice);
    } else {
        document.getElementById("error").innerText = "i need atleast " + prettify(upgrade.finnleyprice) + " bucks until i work for u ba"
    }
    document.getElementById("harrison").innerHTML = prettify(data.money);
}

function bulldozer() {
    if (data.money >= upgrade.bulldozerprice) {
        data.money = data.money - upgrade.bulldozerprice;
        upgrade.bulldozer = upgrade.bulldozer + 1;
        upgrade.bulldozerprice = upgrade.bulldozerprice * 1.4;
        document.getElementById("bulldozer").innerHTML = upgrade.bulldozer;
        document.getElementById("bulldozerprice").innerHTML = prettify(upgrade.bulldozerprice);
    } else {
        document.getElementById("error").innerText = "honk honk mate i need " + prettify(upgrade.bulldozerprice) + " for gas bah im runnin on fumes"
    }
    document.getElementById("harrison").innerHTML = prettify(data.money);
}

// INTERVALS

setInterval(ratmoney,1000)
setInterval(finnleymoney,1000)
setInterval(bulldozermoney,1000)

// OTHER FUNCTIONS

function prettify(input){
    var output = Math.trunc(input)
    return output;
}


