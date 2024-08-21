//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

//! asyn -key word function onune veya arroda parentezin onune konulur

//! vefunctino ile yazilir-  syncron gozukur ama islemi asyncron yapar

//! await key wordu ise fetch(url) onune konur

//? ornek   -   const getNews = async function () { async function yazma
//?             const res = await fetch (url)    request atma
//?             const data = await res.JSON()   datayi cikarma
//?             updateDom (data)   gelen veriyi gonderdik.
// ?}