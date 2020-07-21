function tinhdientich(){
    let inputWidth;
    let inputHeight;
    let  area;

    inputWidth = prompt("Enter the width");
    inputHeight = prompt("Enter the height");

    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);

    area = width / height;
    document.write("The area is: " + area);
}
