//carne  - 400gr por pessoa + de 6 horas - 650
//cerveja - 1200 por pessoa + 6h - 2000ml
//refrigerante/agua - 1000ml por pessoa + 6h 1500ml
//crianças valem por 1/2

    var adult = document.getElementById("adult");
    var children = document.getElementById("children");
    var time = document.getElementById("time");

    const beer = document.getElementById("beer");
    const coke = document.getElementById("coke");
    const meat = document.getElementById("meat");

function calcMeat(){
    if(time.value < 6){
        return adult.value*400 + children.value*200;
    }else{
        return adult.value*650 + children.value*325;
    }
}

function calcBeer(){
    if(time.value < 6){
        return adult.value*1200;
    }else{
        return adult.value*2000;
    }
}

function calcDrinks(){
    if(time.value < 6){
        return adult.value*1000 + children.value*500;
    }else{
        return adult.value*1500 + children.value*750;
    }
}

function setList(){
    let resultList = document.getElementById("resultList");

    let totalMeat = calcMeat();
    let totalBeer = calcBeer();
    let totalDrinks = calcDrinks();

    // resultList.innerHTML = `<li class="line"> ${totalMeat/1000}Kg de carne</li>`
    // resultList.innerHTML += `<li class="line">${totalBeer/1000}L de cerveja</li>`
    // resultList.innerHTML += `<li class="line">${totalDrinks/1000}L de refrigerante/suco</li>`

    beer.innerHTML += `<strong><p class="styleP">${totalBeer/1000}L de cerveja</p></strong>`;
    coke.innerHTML += `<strong><p class="styleP">${totalDrinks/1000}L de refri/suco</p></strong>`;
    meat.innerHTML += `<strong><p class="styleP">${totalMeat/1000}Kg de carne</p></strong>`;

}

function mouseOver(over){
    over.style.backgroundColor = "#ddd"
    over.style.width = "110px";
}

function mouseOut(out){
    out.style.backgroundColor = "#f2efdf"
    out.style.width = "100px";
}

function mouseOverCalc(over){
    over.style.backgroundColor = "#ddd";
    over.style.padding = "14px";
    over.style.marginTop = "25px";
    
}

function mouseOutCalc(out){
    out.style.backgroundColor = "#f2efdf"
    out.style.padding = "10px"
    out.style.marginTop = "30px";
}

function chooseFoodOption(elem){
    let elemento = document.getElementById("beer");
    console.log(elem);
}
