//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log ('----- Fetch Api ---- ');

//  try {

//  } catch (error) {

//  }  //* hata yakalama

//* veri cekmede kullanilir network islemlerinde -- dosya okuma yazma kullanilir

//? fetch() zorunlu bir obje alir   http response status codes dondurur  200 - basarili  400 lu client error 500 luk hatalar server hatasi  fetch api arka tarafta istek atici dir bu responsu alip islersin

//* default olarak read istegidir eger method belirtilmezse

// fetch ('https://api.github.com/users')  // * ham veriyi api istek atarak almak
//   .then (res => res.json())
//   .then (data => console.log (data));

//* birden fazla islem varsa 

fetch ('https://api.github.com/users')  // * ham veriyi api istek atarak almak
  
.then ((res) => {  //* return yazmamiz gerekiyor

    console.log(res.status)  //* 200
    console.log(res.ok)   //* true
    return res.json()
})
  .then (data => console.log (data));

//* http.get  veri okuma islemidir
//* http.post  yeni kayit veri girisi
//* http.patch  kismi guncelleme
//* htpp put veri guncelleme tamamen
//*http delete silme

//! CRUD  islemleri   post - cread  -  read -get  update  patch put  -- delete  d   Veri tabani islemleri
