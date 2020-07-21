function ChangeTemp() {
    let DoC;
    DoC = prompt("Do C want to change to F");
     C=parseInt(DoC);
     let F = ((C*1.8)+32);
     document.write("Do C: "+C+" chuyen doi thanh do F la: " + F);
}