   console.log("***Document Object Model***") //* Belge Nesne Modeli 
 //?   Dom DOCUMENT OBJECT MODEL

 //? API   client ile server arasinda calisan sistem  
 //? Aplication programering interface
 //? UI yoktur
 //? DOM BIR API DIR  BORWSERLAR  ORNEGIN DOM-API DIR 
 //? API ARA KATMANDIR   DOM API SI OBJE ILE CALISIR  HTML ELEEMANLARININ NESNELER OBJECT  PROPERTIES METHODSLAR EVENTS TANIMLAR

 //* Dom Objects- Properties, Methods, Eventler tanimlar


   //* GET ELEMENT BYID()

//    document.getElementById("header").style.border = "1px solid red"
  const myHeader = document.getElementById("header")  //* degiskene de atayabiliyoruz. myHeader orneginde oldugu gibi.

  console.log(myHeader)

  myHeader.style.backgroundColor = "red"
  myHeader.style.color = "white"

