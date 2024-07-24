

//* Iterasjon   Array.forEach  objenin icindeki array elementi icin kullanilan methods  fonksiyon icersidne fonksiyon yazma 

//? callback funkcion

//* Foreach


const prices = [ 250, 150, 300, 500]


for (let i=0; i< prices.length; i++) {
    console.log(prices[i])
}
  

 console.log("***********")
prices.forEach( p => console.log(p) )