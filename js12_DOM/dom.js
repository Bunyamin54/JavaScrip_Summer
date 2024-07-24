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

  //* GetElementsByIdTagName


  //* Dom elemanlarina nasil erisilir  html elemanlari secemek icin methodlar

  //* Add butonu
   const addButon = document.getElementById("btn")

   console.log(addButon)


   addButon.style.backgroundColor ="#bebe"
   addButon.style.border = "none"
   addButon.style.padding = "0.6rem"
   addButon.style.borderRadius = "10px"


    // * deger atama  butona

    addButon.value= "Save"

    //* h1 
    const h1 = document.getElementById("heading1")

    console.log(h1)

    //* deger atama Yazi elementleri icindeki degeri okuyabilir veya deger atayabiliriz. 
   
    //? deger atama
    h1.textContent = "DOM  Introduction"
   

    //? deger okuma
    console.log(h1.textContent)
    console.log(h1.innerText)
    console.log(h1.innerHTML)

    //* GetElementsByTagName  ()

    const myInput =  document.getElementsByTagName("input")  //* html collection  -- etiketleri donduruyor-  arrayler grubu donduruyor- dizimsi bir grup 

    console.log(myInput)


     //* Arraye cevrilebilir

     const myList = document.getElementsByTagName("li") 

     const myListArr = [...myList]  //? Arraye cevirdik 

     console.log(myListArr)

     myListArr.forEach((li) => (li.style.color = "red"))

     //? Alternatif methods  --- objenin propertisini valuesini degistirdik. 

     const myListArr1= Array.from(myList) //?Arraye cevrir

     console.log(myListArr1)

     myListArr1.map((li) => (li.style.listStyleType = "none"))

     //* GetElementByClasName

     const lists= document.getElementsByClassName("list")

     console.log(lists)

     const listsArr = [...lists]

     listsArr.forEach((li) => console.log(li))

     //* inner html guvenli degil ama yazmasi kolay

     lists[2].innerHTML =`<h1> JavaScript</h1>`
     lists[3].innerText =`<h1> React </h1>`  //* metin olarak algilar
     lists[4].textContent =`<h1> Vue</h1>` //* metin olarak algilar
 

      //* Query sellectør () hem id hem tag hem clas secilebilir.  bu secici akista gordugu ilk elementi secer tek bir element secer
  
   //* id secildi   id seciyorsum  dies ile  (#)
      const header = document.querySelector("#header")

      console.log(header)

    //* clas secildi (.)
      const itemList = document.querySelector(".item-list")

      console.log(itemList)
     
      //* tag secilmis  tag ise hicbirsey koymuyorsun 
      const  h2= document.querySelector("h2")

      console.log(h2)

      //? CSS selector mantigi kullanilabilir

      const otherH2= document.querySelector("section h2")
      const otherH3= document.querySelector("section.add-item #btn")

      console.log(otherH2)
      console.log(otherH3)

      const react = document.querySelector("section.item-list ul li:nth-child(4)") //* detayli secim 

      console.log(react)