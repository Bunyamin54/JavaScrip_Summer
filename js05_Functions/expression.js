
//* Expression methods

//* Anonymous

//* Declarasyon 

// const yazdir = function(message) {
//     console.log(message)
// }

// yazdir("Hallo FS14")  //? invoke  function can be global whic is not so useful


//* ornek 2


// let oddEven = function(number) {


//    return number %2 === 0 ? "EVEN" : "ODD"
// }

// console.log(oddEven(5))
// console.log(oddEven(10))

//* Arrow Methods


// const kareAl = (num) => num * num

// const topla =(s1 , s2) => s1 + s2

// console.log("KARE", kareAl(4))
// console.log("TOPLA", topla(4, 5))

//*  ornek   3 sayinin en buyugu bulan fonks

  const findBiggest = (n1, n2, n3) => {

  let biggest = n1
  if(n2 >= biggest) {
    biggest = n2
  }

  if (n3 >= biggest) {
    biggest = 3
  }
    return biggest
  }

  console.log("BIGGEST", findBiggest(1, 2, 3))

  //! Arrow functionlarda suslu acilirsa otamatik return ozelligi kalkar