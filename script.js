var TextFinal = [];

function ShowNames() {

    var text1 = document.getElementById("part1").value;
    var text2 = document.getElementById("part2").value;
    var text3 = document.getElementById("part3").value;
    var text4 = document.getElementById("part4").value;

    TextFinal.push(text1);
    TextFinal.push(text2);
    TextFinal.push(text3);
    TextFinal.push(text4);

    console.log(TextFinal);

    document.getElementById("Mainholder").innerHTML=TextFinal;
}