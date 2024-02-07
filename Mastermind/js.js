for (let index = 0; index < 11; index++) {
    document.getElementById("divTipp").innerHTML+=`<ul class='tipp'><li class="tippSzin"></li><li class="tippSzin"></li><li class="tippSzin"></li><li class="tippSzin"></li>                <table>
    <tr>
        <td class='td1'>○</td>
        <td class='td2'>○</td>
    </tr>
    <tr>
        <td class='td3'>○</td>
        <td class='td4'>○</td>
    </tr>
</table></ul>`
}
//●○
szinek = ["rgb(0, 255, 255)", "rgb(0, 100, 1)", "rgb(255, 255, 0)", "rgb(0, 0, 254)", "rgb(254, 0, 0)","rgb(255, 195, 205)","rgb(255, 142, 1)", "rgb(149, 0, 214)"]

for (let index = 0; index < 8; index++) {
    document.getElementById("szinlista").innerHTML+=`<li onclick='katt(this)' style="background-color: ${szinek[index]};"></li>`
}
megoldas = [szinek[Math.floor(Math.random()*8)], szinek[Math.floor(Math.random()*8)], szinek[Math.floor(Math.random()*8)], szinek[Math.floor(Math.random()*8)]]


let szinIndex = 0
function katt(szin){
    pottyLista = document.getElementsByClassName("tippSzin")
    pottyLista[szinIndex].style.backgroundColor=szin.style.backgroundColor
    szinIndex++
    if (szinIndex%4==0){
        teszt()
    }

}
console.log(megoldas)

function teszt(){
    console.log("\n")
    tippLista = document.querySelectorAll(".tipp")

    if (tippLista[Math.ceil(szinIndex/4)-1].children[0].style.backgroundColor == megoldas[0]) {
        document.querySelectorAll(".td1")[Math.ceil(szinIndex/4)-1].innerHTML = "<td class='td1'>●</td>" 
    }
    else if(megoldas.includes(tippLista[Math.ceil(szinIndex/4)-1].children[0].style.backgroundColor)){
        document.querySelectorAll(".td1")[Math.ceil(szinIndex/4)-1].innerHTML = "<td style='background-color: white;' class='td1'>●</td>"
    }
    else{
        console.log(megoldas[0], tippLista[Math.ceil(szinIndex/4)-1].children[0].style.backgroundColor) 
    }

    if (tippLista[Math.ceil(szinIndex/4)-1].children[1].style.backgroundColor == megoldas[1]) {
        document.querySelectorAll(".td2")[Math.ceil(szinIndex/4)-1].innerHTML = "<td class='td2'>●</td>" 
    }
    else if(megoldas.includes(tippLista[Math.ceil(szinIndex/4)-1].children[1].style.backgroundColor)){
        document.querySelectorAll(".td2")[Math.ceil(szinIndex/4)-1].innerHTML = "<td style='background-color: white;' class='td2'>●</td>"
    }
    else{
        console.log(megoldas[1], tippLista[Math.ceil(szinIndex/4)-1].children[1].style.backgroundColor) 
    }

    if (tippLista[Math.ceil(szinIndex/4)-1].children[2].style.backgroundColor == megoldas[2]) {
        document.querySelectorAll(".td3")[Math.ceil(szinIndex/4)-1].innerHTML = "<td class='td3'>●</td>" 
    }
    else if(megoldas.includes(tippLista[Math.ceil(szinIndex/4)-1].children[2].style.backgroundColor)){
        document.querySelectorAll(".td3")[Math.ceil(szinIndex/4)-1].innerHTML = "<td style='background-color: white;' class='td3'>●</td>"
    }
    else{
        console.log(megoldas[2], tippLista[Math.ceil(szinIndex/4)-1].children[2].style.backgroundColor) 
    }

    if (tippLista[Math.ceil(szinIndex/4)-1].children[3].style.backgroundColor == megoldas[3]) {
        document.querySelectorAll(".td4")[Math.ceil(szinIndex/4)-1].innerHTML = "<td class='td4'>●</td>" 
    }
    else if(megoldas.includes(tippLista[Math.ceil(szinIndex/4)-1].children[3].style.backgroundColor)){
        document.querySelectorAll(".td4")[Math.ceil(szinIndex/4)-1].innerHTML = "<td style='background-color: white;' class='td4'>●</td>"
    }
    else{
        console.log(megoldas[3], tippLista[Math.ceil(szinIndex/4)-1].children[3].style.backgroundColor) 
    }






}

function visszavon(){
    if (szinIndex%4!=0) {
        tippLista[Math.ceil(szinIndex/4)-1].innerHTML = '<li class="tippSzin"></li><li class="tippSzin"></li><li class="tippSzin"></li><li class="tippSzin"></li>'
        szinIndex = (Math.ceil(szinIndex/4)-1)*4
    }

}
