 //*** Arrays ****/

 //* ordered list

 const arr = [1,2, "true", 3]  

 //* literel methods  const arr = [100, "clarusway", true]  modern methods 

 //* with new keyword   

 const dizi = new Array (100, 'CW', true)

 console.log(dizi)

 //* son elemana length -1 kullanilarak buluruz


//  const colors = [ 'Red', 'Green', 'Blue']

//  console.log(colors[0])
//  console.log(colors[colors.length -1]) //* son elemana ulasim
//  console.log(colors[colors.length -2])  //* sondan ikinciye ulasim 

 //* Array is Array

 const colors = [ 'Red', 'Green', 'Blue']

 console.log(typeof colors)


 console.log(Array.isArray(colors)) //* true
 console.log(colors instanceof Array) //* true