//? Selectors

const ekleBtn = document.getElementById ('ekle-btn');
const gelirInput = document.getElementById ('gelir-input');
const ekleFormu = document.getElementById ('ekle-formu');

//? Sonuc tablosu
const gelirinizTd = document.getElementById ('geliriniz');
const giderinizTd = document.getElementById ('gideriniz');
const kalanTd = document.getElementById ('kalan');

//? harcama formu

const harcamaFormu = document.getElementById ('harcama-formu');
const harcamaAlaniInput = document.getElementById ('harcama-alani');
const tarihInput = document.getElementById ('tarih');
const miktarInput = document.getElementById ('miktar');



 //? Harcama tablosu 

 const harcamBody = document.getElementById("harcama-body")











//? Variables

let gelirler = 0;

let harcamaListesi = []

//? Events

// ! formun submit butonuna basildiginda

ekleFormu.addEventListener ('submit', e => {
  e.preventDefault (); // ? reload"u engeller
  gelirler = gelirler + Number (gelirInput.value); //? string eklemeyi engelledik

  localStorage.setItem ('gelirler', gelirler);

  //? input degerini sifirladik...
  ekleFormu.reset ();

  //? Degisiklikleri sonuc tablosuna yazan fonksiyon

  hesaplaVeGuncelle ();
});

//! Harcama formu submit edildiginde calisir

harcamaFormu.addEventListener ('submit', (e) => {
  e.preventDefault ();

  const yeniHarcama = {
    id: new Date().getTime(),
    tarih: tarihInput.value,
    alan: harcamaAlaniInput.value,
    miktar: miktarInput.value,
   

  };
  

  //? Yeni harcama objesini diziye ekleyecek
  harcamaListesi.push(yeniHarcama)


  //? dizinin son halini local stoarage gonder 
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))



   harcamayiDomaYaz(yeniHarcama)

   hesaplaVeGuncelle()

  //? Forumdaki verileri siler 

  harcamaFormu.reset()
  tarihInput.valueAsDate = new Date()

});

//! Sayfa heryuklendikten sonra calisan event

window.addEventListener ('load', () => {
  gelirler = Number (localStorage.getItem ('gelirler'));
  tarihInput.valueAsDate = new Date()

  hesaplaVeGuncelle ();
});



//? Functions

const hesaplaVeGuncelle = () => {
  gelirinizTd.innerText = gelirler;
};


const harcamayiDomaYaz = ({id, miktar,tarih, alan}) => {

 

  harcamBody.innerHTML += ` 
<tr>
<td>${tarih}</td>
<td>${alan}</td>
<td>${miktar}</td>
<td> <i id=${id} class="fa-solid fa-trash-can text-danger"> </i> </td>
</tr>
  
  
  
  
  
  `

}

