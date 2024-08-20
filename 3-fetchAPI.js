//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("----- Fetch Api ---- ")

//  try {
    
//  } catch (error) {
    
//  }  //* hata yakalama




//* veri cekmede kullanilir network islemlerinde -- dosya okuma yazma kullanilir 


//? fetch() zorunlu bir obje alir   http response status codes dondurur  200 - basarili  400 lu client error 500 luk hatalar server hatasi  fetch api arka tarafta istek atici dir bu responsu alip islersin 


fetch("https://api.github.com/users")

//* http.get  veri okuma islemidir
//* http.post  yeni kayit veri girisi
//* http.patch  kismi guncelleme
//* htpp put veri guncelleme tamamen
//*http delete silme



//! CRUD  islemleri   post - cread  - post-  read -get  update  patch put  -- delete  d   Veri tabani islemleri  