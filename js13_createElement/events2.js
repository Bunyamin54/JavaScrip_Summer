console.log("*** Events ***")

//* Onclick , Onload, Onmouseover, Onmouseout, Onchange, Onsubmit,Onkeyup

//* Inline Events

const heading1 = document.querySelector("header h1")

heading1.onmouseover = function () { 
  heading1.style.color = "red"
} 


heading1.onmouseout= function() {
    heading1.style.color = "black"
}

//* onload event i tum html ve css kodlarinin yuklenmesini bekler

window.onload = printHello()