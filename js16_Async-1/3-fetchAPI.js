//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.



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

// console.log ('----- Fetch Api ---- ');


// fetch ('https://api.github.com/users') // * ham veriyi api istek atarak almak
//   .then (res => {
//     //* return yazmamiz gerekiyor

//     console.log (res.status); //* 200
//     console.log (res.ok); //* true
//     return res.json ();
//   })
//   .then (data => console.log (data))
//   .catch (err => console.log (err));


 // ? Datayi ekrana basma     -- async priroitere gore  once callstack sonra istek calisir

//  console.log(data)




//* http.get  veri okuma islemidir
//* http.post  yeni kayit veri girisi
//* http.patch  kismi guncelleme
//* htpp put veri guncelleme tamamen
//*http delete silme

//! CRUD  islemleri   post - cread  -  read -get  update  patch put  -- delete  d   Veri tabani islemleri

  //! Throw errror


// fetch ('https://api.github.com/user') //* throw error hata firlatma
//   .then (res => {
   //! error handling
//   if (!res.ok) {
//     throw new Error("Somethin wnet wrong", res.status)  //* 3-fetchAPI.js:55 
// //*    GET https://api.github.com/user 401 (Unauthorized)
// //*    3-fetchAPI.js:65 
// //*    Error: Somethin wnet wrong
// //*     at 3-fetchAPI.js:59:11
//    
   
//   }
   
//     return res.json ();
//   })
//   .then (data => console.log (data))
//   .catch (err => console.log (err));

  //* Prioritering async


  console.log("FETCH")

let veri = ""

fetch("https://api.github.com/users")
  .then((res) => {
    //! Error handling
    if (!res.ok) {
      throw new Error("Something went wrong", res.status)
      // console.log("Something went wrong")
    } else {
      return res.json()
    }
  })
  .then((data) => {
    // veri = data
    // console.log(veri)
    showUsers(data)
  })
  .catch((err) => {
    console.log(err)
    const usersDiv = document.getElementById("users")
    usersDiv.innerHTML = `<h2 class="text-warning">${err}</h2>`
  })

// console.log(veri)

const showUsers = (users) => {
  console.log(users)
  const usersDiv = document.getElementById("users")

  users.forEach((user) => {
    // console.log(user.login)
    usersDiv.innerHTML += `
        <h2>${user.login}</h2>
        <img class="w-25" src="${user.avatar_url}" alt="" />
    `
  })
}
