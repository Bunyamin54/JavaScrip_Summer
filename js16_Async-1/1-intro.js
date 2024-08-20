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

// console.log(" **** Set Timeout ***** ")
//   console.time("timer")

// setTimeout(() => {

//   console.log("Data fetched.")
//  console.timeEnd("timer")
// }, 2000)

//* animasyonlarda belli bir sure bekletmek istiyorsaniz kullanabilirsiniz. 

//? Callstack kuyrugu java scriptin kodlarinin onceligini belirler

//* asyncron kodlar arka planda kuyrukda calisirlar..  macrotask kuyrugu 

// setTimeout(() => { 
//   console.log("Whats up!")
// },1000)  //* setTimeOut 1000 sn sonra bu kodu calistir demek

// setTimeout(() => {
//   console.log("Im fine")
// }, 2000)


// console.log("Start")

//* Async (setInterval , clearInterval)  periyoduk bir zaman olusturmak icin 

// console.log(" Async (setInterval , clearInterval)")
  // let count = 0;

// const sec1 = setInterval(() => { //* periodik zaman araligi olusturmak icin 
  


  //  console.log(++count)
  //  if(count > 9 ) {
  //   clearInterval(sec1)  //* clearInterval yardimiyla surekli devam interval pasif hale getirilir
  //  }

  
// },1000);  //* setInterval ise her 1000 sn de bu kodu calistir anlamina gelir.

//* Callback  birbirne bagimli async kodlarin yazilmasi nested callback

setTimeout(() => {
  console.log("john:Hi")
  setTimeout(() => {
    console.log("Sarah: Hello")
    setTimeout(() => {
      console.log("John: How Are you?")
      setTimeout(() => {
        console.log("Sarah:Fine and you?")
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)


//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
