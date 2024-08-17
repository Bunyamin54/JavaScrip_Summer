//? Selectors

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

//? Sonuc tablosu 
 const gelirinizTd= document.getElementById("geliriniz")


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

//! Sayfa heryuklendikten sonra calisan event

window.addEventListener("load", () => {

  gelirler = Number( localStorage.getItem("gelirler"))
  hesaplaVeGuncelle()
   
})
//? Functions

const hesaplaVeGuncelle = () => {

 gelirinizTd.innerText = gelirler

}