

//* Iterasjon   Array.forEach  objenin icindeki array elementi icin kullanilan methods  fonksiyon icersidne fonksiyon yazma 

//? Callback function

// //* Foreach  -orjinal diziyi degistirmez  callback function alir 3 paramter alir 1. si deger 2. paramtere indisi. 3. paramtere arrayi gosterir  forEach sadece dizilerde kullanilir  array olmayan yerde dizi kullanilamaz. Array disi yapilar ile calismaz. klasik yontemlere gore daha yavas calisirlar. jenerik bir yapi genel bir ifade ile yazildigindan dolayi


// const prices = [ 250, 150, 300, 500]


// for (let i=0; i< prices.length; i++) {  //* Klasik methods 
//     console.log(prices[i])
// }
  

//  console.log("***********")

// prices.forEach( p => console.log(p) )
// prices.forEach( (p, i )=> console.log(p, i) ) //* indis



//* ornek foreach 

//* ForEach returnsuz veri tipi olmayan bir fonksiyondur void methoddur dir. her hangi bir deger dondurmez.
//* FroEach ile dongu icersinde herhangi bir item okunabilir, listelenebilir, veya yazdirilabilir. Ancak bu degeri dondurmek mumkun degildir. 

// const prices = [ 250, 150, 300, 500]

// let sum = 0

//  prices.forEach (price => (sum += price))

//    console.log("SUM", sum)
//* Map() methods  Array.map()  orjinal diziyi degistirmez paramatre olarak icerisine  callback alirlar - deger- indis- dizi   map return ozelligi vardir. modifiye transformasyona ugratir. 

//* Map transform eder return ozelligi vardir . bir diziyi manipule edebiliriz

// let names = ['Mustafa', 'Murat',' Ahmnet', ' Mustafa', 'Ayse', 'canan']

// const upperName = names.map( name => name.toLocaleUpperCase())

// console.log(upperName)
// console.log(names)

//* eksempel  2


const euro = 21.78
const dolar =19.80

const tlPrices = [100, 150, 100, 50, 80]

const dolarPrices = tlPrices.map((tl) => Number ((tl/dolar).toFixed(2)))
const euroPrices = tlPrices.map((tl) => Number ((tl/euro).toFixed(2)))

console.log(dolarPrices)
console.log(euroPrices)
console.log(tlPrices)