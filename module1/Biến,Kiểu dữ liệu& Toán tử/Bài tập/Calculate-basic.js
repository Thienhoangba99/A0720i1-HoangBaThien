function cal(n) {
    let A = document.getElementById("Anumber").value;
    var n;
    let B = document.getElementById("Bnumber").value;
    let C = document.getElementsByName("calculate")[n].value;
    var aa=parseInt(A);
    var bb=parseInt(B);
    var cc = C;
    let ss = aa + cc + bb;
    var S = eval(ss);
    document.getElementById("x").innerHTML=S;

}