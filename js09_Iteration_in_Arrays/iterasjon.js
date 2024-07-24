

//* Iterasjon   Array.forEach  objenin icindeki array elementi icin kullanilan methods  fonksiyon icersidne fonksiyon yazma 

//? callback funkcion

//* Foreach  -orjinal diziyi degistirmez  callback function alir 3 paramter alir 1. si deger 2. paramtere indisi. 3. paramtere arrayi gosterir  forEach sadece dizilerde kullanilir  array olmayan yerde dizi kullanilamaz


const prices = [ 250, 150, 300, 500]


for (let i=0; i< prices.length; i++) {  //* Klasik methods 
    console.log(prices[i])
}
  

 console.log("***********")

prices.forEach( p => console.log(p) )
prices.forEach( (p, i )=> console.log(p, i) ) //* indis