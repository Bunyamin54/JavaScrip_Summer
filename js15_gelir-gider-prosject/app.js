//? Selectors

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

//? Sonuc tablosu 
 const gelirinizTd= document.getElementById("geliriniz")


 //? harcama formu 

 const harcamaFormu = document.getElementById("harcama-formu")
 const harcamaAlaniInput = document.getElementById("harcama-alani")
 const tarihInput = document.getElementById("tarih")
 const miktarInput = document.getElementById("miktar")

//? Variables

let gelirler = 0




//? Events




//? formun submit butonuna basildiginda

ekleFormu.addEventListener("submit", (e) => { 
    
    e.preventDefault() // reload"u engeller
    gelirler = gelirler + Number ( gelirInput.value) //? string eklemeyi engelledik 


    localStorage.setItem("gelirler", gelirler)

    //? input degerini sifirladik... 
    ekleFormu.reset()


//? Degisiklikleri sonuc tablosuna yazan fonksiyon 



      hesaplaVeGuncelle()
})

//? harcama formu submit edildiginde calisir

  harcamaFormu.addEventListener("submit", () => {

     e.preventDefault()
     const yeniHarcama = { id: "" , tarih:"", alan: "", miktar: ""}


  })


//! Sayfa heryuklendikten sonra calisan event

window.addEventListener("load", () => {

  gelirler = Number( localStorage.getItem("gelirler"))
  hesaplaVeGuncelle()
   
})
//? Functions

const hesaplaVeGuncelle = () => {

 gelirinizTd.innerText = gelirler

}