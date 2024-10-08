 //*** Arrays ****/

 //* ordered list

//  const arr = [1,2, "true", 3]  

 //* literel methods  const arr = [100, "clarusway", true]  modern methods 

 //* with new keyword   

//  const dizi = new Array (100, 'CW', true)

//  console.log(dizi)

 //* son elemana length -1 kullanilarak buluruz


//  const colors = [ 'Red', 'Green', 'Blue']

//  console.log(colors[0])
//  console.log(colors[colors.length -1]) //* son elemana ulasim
//  console.log(colors[colors.length -2])  //* sondan ikinciye ulasim 

 //* Array is Array

//  const colors = [ 'Red', 'Green', 'Blue']

//  console.log(typeof colors)


//  console.log(Array.isArray(colors)) //* true
//  console.log(colors instanceof Array) //* true



//* String immutable   degistirelemez

// let str = 'Brown'

// console.log(str[0])
//     str[0]=' b'
//     console.log(str)

//     str = 'brown'


//  const colors = [ 'Red', 'Green', 'Blue']

// colors [1] = 'yellow'

// console.log(colors)

// colors [3] = 'White'

// console.log(colors)

//  let c = 'pink'

//  colors[4] = c

//  console.log(colors)


//  const colors = [ 'Red', 'Green', 'Blue' ]
//  colors [6] = 2
//  console.log(colors.length)

//* Const heap area - other property primitive stack area beholdes  primitives 

// let a = 5

// let b = a


// console.log(a)
// console.log(b)

// a = 6

// console.log(a)

//*  non primitivler

// let arr1 = [1, 2, 'Threee', false]

// const arr2 = arr1


// console.log(arr1)

// console.log(arr2)

// arr1[0]= 0

// console.log(arr1)

// console.log(arr2)

// ? Array methods

//* slice methods  bu method soldan saga dogru calisirir


// const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Brown' ]

// const cls = colors.slice()

// console.log(colors)
// console.log(cls)

// colors[0] = 'Black'

// console.log(colors)
// console.log(cls)


// console.log(colors.slice(2,4)) //* Blue and yellow

// console.log(colors.slice(-2)) //* Yellow and brown

// console.log(colors.slice(2)) //* ['Blue', 'Yellow', 'Brown']
// console.log(colors.slice(8)) //* []  bos array  limit disi olmayan array  hatali indexleme


//* push () methods   adds new elemenet to the end of an array

// const arr = [ 'red', 'blue']

// arr.push('orange')

//     console.log(arr)


//* 

// const car = ['Audi', 'Tesla']

// const car2 = [ 'Ford', 'Tesla']


// car.push(car2)  //*  [
//     "Audi",
//     "Tesla",
//     [
//         "Ford",
//         "Tesla"
//     ]


// car.push(...car2)  //* 
//     "Audi",
//     "Tesla",
//     "Ford",
//     "Tesla"


// console.log(car)

//* pop () en sondaki elemani siler

// const arr = ['red', 'blue', 'orange', 'black']   //* Black siler ve consola yazdirir. 


// console.log(arr.pop())

// const del = arr.pop()

// console.log(del) //* orange bu seferde en sondaki elemani sildi ve dondurdu.


//* unshift()  basa ekleme yapar

// const arr = ['red', 'blue', 'orange', 'black'] 

// const arr1 = ['kirmizi', 'beyaz']

// arr.unshift(...arr1)

// arr.unshift('Sari') //* basa ekler yeni olusan arrayin uzunlugunu verir

// console.log(arr)

//* shift

// const arr = ['red', 'blue', 'orange', 'black'] 

// console.log(arr.shift())  //* ilk elemani siler ve sildigi elemani dondurur. 


// ?  unshift + ekler  push ekler  // shift bastakini cikartir pop sondakini cikartir  cikartanlar silinen elemani dondurudur ekleyenler ise yeni arrayin uzunlugunu dondudur


//* splice  methods   2 parametre verioyruz 1. nereye gidecek 2. si kac tane silecek


// const arr = ['red', 'blue', 'orange', 'black'] 


// console.log(arr.splice(2,1))
// console.log(arr.splice(2,)) //* 2. indexe git geri kalanini siler
// console.log(arr)

//* element ekleme

// const arr = ['red', 'blue', 'orange', 'black'] 

// console.log(arr.splice(2,0 ,'White', 'Pink'))  //* 2. elemente git ve bu renkleri ekle

// console.log(arr)

// //* element degistirme

// console.log(arr.splice(3,1, 'Pink')) //* white git 1 eleman sil yerine 'Pink' ekler

// console.log(arr)


//* concat()  methods 

// const color1 = ['red', 'green']
// const color2 = ['blue', 'orange']
// const color3 = ['10', 'true']

// const birlestir = color1.concat(color2, color3)

// console.log(birlestir)

// const destr= color1.push(...color2, ...color3)  //* destructuin methods 

// console.log(destr)

// console.log(color1)

//* indexOf() && lastIndexOf()


//* Reverse methods  en sondaki arrayi en basa getirir siralar


// const arr = ['red', 'blue', 'orange', 'black'] 
// arr.reverse() //* sondan baslar siralama yapar  orjinal arrayi degistirir

// console.log(arr)


//* join methods orjinal arrayi bozmadan stringe cevirir

// const arr= ['C', 'l','a', 'r','u','s','w', 'a','y']

// console.log(arr.join()) // C,l,a,r,u,s,w,a,y¨

// console.log(arr.join('')) // Clarusway

// console.log(arr.join("-"))

// const genc = ['A','y','s','e']

// console.log(genc.join()) // A,y,s,e
// console.log(genc.join('')) // Ayse
// console.log(genc.join('*')) // A*y*s*e
// console.log(genc.join('-')) // A-y-s-e

//* sort methods  orginal array can change  number olarak siralamak icin 


//   const arr= [55, 5, 22, 2, 11, 1, 111 ]


    // arr.sort() //* string olarak siralar

    // console.log(arr)

    //* acending sorting

    // arr.sort((a,b) => a-b)  //* numeretik olarak siralar

    // console.log(arr)

    //* descending sorting

    // arr.sort((a,b) => b-a )

    // console.log(arr)


//* includes() methods  var mi yok mu deger dondurur boolean degeri 


// const arr = ['red', 'white',' yellow']

// console.log(arr.includes('white')) //* true

//* Nested Arrays 


// const arr=  [1, true, [3, 'red', 5], [6, 7, 8]]
// console.log(arr.length)


// console.log(arr[0]) //* 1
// console.log(arr[1]) //* true
// console.log(arr[2]) //* (3) [3, 'red', 5]
// console.log(arr[3]) //* (3) [6, 7, 8]
// console.log(arr[3][0])  //* 6

//* 