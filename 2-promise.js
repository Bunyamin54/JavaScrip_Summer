//* =================================================
//*                2- Promises
//* =================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, reject ise
//*    basarisizlikla bittiginde isletilirler.

