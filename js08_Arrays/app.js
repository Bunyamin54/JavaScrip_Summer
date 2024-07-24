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

const arr = [ 'red', 'blue']

arr.push('orange')

    console.log(arr)
