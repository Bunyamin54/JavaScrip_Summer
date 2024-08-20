//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.
//*  Api aplication programering interface
//* Synchronous islemler sira sira yapilir Asynchronous - sirasiz sekilde program thread  Web api sayesinde asyncron programlama yapar.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

// * Senkron
 //* ------------------------------------------------
// const delay = (waitingTime) => {
//   const startTime = new Date().getTime()

//   while (new Date().getTime() < startTime + waitingTime){}
// }


//  console.log("Hello")
//  alert("blocked") //? blocking 

// console.time ("gecikme")  //* debug amacli kullanilabilir

// delay(4000) //? blocking code- senkron
// console.timeEnd("gecikme")
// console.log("Hi")



//* Asyncron ( setTimeout())

console.log(" **** Set Timeout ***** ")
  console.time("timer")

setTimeout(() => {

  console.log("Data fetched.")
 console.timeEnd("timer")
}, 2000)

//* animasyonlarda belli bir sure bekletmek istiyorsaniz kullanabilirsiniz. 