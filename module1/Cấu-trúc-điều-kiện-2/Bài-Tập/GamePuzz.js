let carA=document.getElementById("carA");
let carB=document.getElementById("carB");
let carC=document.getElementById("carC");
let carD=document.getElementById("carD");
let carE=document.getElementById("carE");
let a;
let b;
let c;
let d;
let e;
function onchangeImage(number) {
    switch (number) {
        case 1 : {
            if(carA.getAttribute('src') ==="Images/Hinh%201a.png") {
                carA.src = "Images/Hinh%202a.png";a="2";
            } else if(carA.getAttribute('src') ==="Images/Hinh%202a.png") {
                carA.src = "Images/Hinh%203a.png";a="3";
            }  else if(carA.getAttribute('src') ==="Images/Hinh%203a.png") {
                carA.src = "Images/Hinh%201a.png";a="1";
            }
            break;
        }
        case 2: {
            if(carB.getAttribute('src') ==="Images/Hinh%201b.png") {
                carB.src = "Images/Hinh%202b.png";b="2";
            } else if(carB.getAttribute('src') ==="Images/Hinh%202b.png") {
                carB.src = "Images/Hinh%203b.png";b="3";
            }  else if(carB.getAttribute('src') ==="Images/Hinh%203b.png") {
                carB.src = "Images/Hinh%201b.png";b="1";
            }
            break;
        }
        case 3 : {
            if(carC.getAttribute('src') ==="Images/Hinh%201c.png") {
                carC.src = "Images/Hinh%202c.png";c="2";
            } else if(carC.getAttribute('src') ==="Images/Hinh%202c.png") {
                carC.src = "Images/Hinh%203c.png";c="3";
            }  else if(carC.getAttribute('src') ==="Images/Hinh%203c.png") {
                carC.src = "Images/Hinh%201c.png";c="1";
            }
            break;
        }
        case 4 : {
            if(carD.getAttribute('src') ==="Images/Hinh%201d.png") {
                carD.src = "Images/Hinh%202d.png";d="2";
            } else if(carD.getAttribute('src') ==="Images/Hinh%202d.png") {
                carD.src = "Images/Hinh%203d.png";d="3";
            }  else if(carD.getAttribute('src') ==="Images/Hinh%203d.png") {
                carD.src = "Images/Hinh%201d.png";d="3";
            }
            break;
        }
        case 5 : {
            if(carE.getAttribute('src') ==="Images/Hinh%201e.png") {
                carE.src = "Images/Hinh%202e.png";e="2";
            } else if(carE.getAttribute('src') ==="Images/Hinh%202e.png") {
                carE.src = "Images/Hinh%203e.png";e="3";
            }  else if(carE.getAttribute('src') ==="Images/Hinh%203e.png") {
                carE.src = "Images/Hinh%201e.png";e="1";
            }
            break;
        }
    }
    checkImage();
}
function checkImage() {
    if(a===b&&a===c&&a===d&&a===e) {
        alert("Chúc Mừng bạn đã hoàn thành trò chơi");
        return;
    }
}