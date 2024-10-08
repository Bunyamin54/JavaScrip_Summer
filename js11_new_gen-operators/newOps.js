
//   //* Destructuring ( Object)
   
//   console.log("*** New Operators ****")

//   //? JSON - JavaScript Object Notation 
//   //? JSON - Bir Arraydir. 

//   //? objeyi acma parcalama

//   const car = {
//       brand:  "BMW",
//       model:  2020,
//       engine: 2000,
//       colors : ["pink", "blue"],
    
//   }
//   //?  1. yontem . notasyonu ile ulasim 
//   const araba =car.brand  //* Degiskene aktarma
//   console.log(car.brand)
//   console.log(araba)


//   //? 2. yontem Square  brcket  []  koseli parentez ile ulasim

//     console.log(car["model"])


//     //? 3 methods. Destructure  parcalama bozma


//   const {brand, engine,colors } = car

//   console.log(engine, colors, name) //* Degiskenlerin isimi key lerin ismi ile ayni olmazi lazm   //? Destructuring object


//   const {model} = car  //* destructuring methods

//   console.log(model)


//   //* EXAMPLE: NESTED
// const cars = {
//     car1: {
//       name: "BMW",
//       model: 1990,
//       engine: 1.6,
//     },
//     car2: {
//       name: "Mercedes",
//       model: 2022,
//       engine: 2.0,
//     },
//     car3: ["anadol", "togg", "devrim"],
//     car4: "kağnı",
//   }


//   let {car1, car2, car3, car4} = cars

//   console.log(car2, car4)


//   const{name:c1Name, model:c1model} = car1  //? 2. seviye destructuring
//   const{name: c2name, model:c2model} = car2


//   console.log(c2name, c2model)


//   //* Example
// const team = [
//     {
//       name: "Josh",
//       surname: "Barry",
//       job: "developer",
//       age: 30,
//     },
//     {
//       name: "Josh",
//       surname: "Barry",
//       job: "tester",
//       age: 45,
//     },
//     {
//       name: "Hazel",
//       surname: "Nut",
//       job: "team lead",
//       age: 40,
//     } ]


//      //? Klasik methods

//     team.forEach(( t) => {


//         console.log("Name: ", t.name)
//         console.log("Surname: ", t.surname)
//         console.log("job: ", t["job"])
//         console.log("Name: ", t["age"])
//         console.log("************")
//     })

//     //? Destructurings methods


//     team.forEach((person) => {
//       const { name, surname,job, age}  = person 
//       console.log("Name: ", name)
//       console.log("Surname: ", surname)
//       console.log("job: ", job)
//       console.log("Name: ",age)
//       console.log("************")

//     })
  //? Function destructuring kullanimi 



  //? Functionun dondudurdugu obje dogrudan kullanilabilir.
//     const getProduct = () => {

//      return {
//      id: "123",
//      pName:  "NIKE",
//      price: 300,
//      stock: 1000,
//      }
//     }
//     console.log(getProduct())
//     let {pName, price, stock } = getProduct()
//     console.log("PRoduct Name:", pName, "Price:", price)
//     stock = stock  - 100
//     console.log("Remanining Stock : " , stock)


//    //? Parametre ile kullanimi 

//     const data ={ id: "123",
//         pName:  "NIKE",
//         price: 300,}

//         const print = function({pName, price})  {  //? Yolda havada deestructuring 
//             console.log(pName,price)
//         }  
        // print(data)


        //? Destructuring in Array


//         const names = ["Ahmet", "Mehmet", "Ismet" , "Saffet"]

//         //? Klasik yontem

//         const ismet = names[2]  //* siraya bagimli reactda useState hooku icin kullanimi var - ismin onemi yok siranin onemi var, bosluk birakarar istedigimiz indexe gideriz
//         console.log(ismet)

//         const [ahmo , , ismo, saffo] = names

//         console.log(ahmo, ismo, saffo)

//    //? Array destructuringde sira ve sayi onemli 
//    //? Rest array kullanimi 


//         //? Rest operatoru (...) - degerleri dizi icersinde kullanilir ...  geri kalaanlarini ayri dizi icersinde konumlandirir. restin en son element olmasi gerekerir. 

//         const araclar = ["bmw", "merso", "ferrari", "rover", "lambo"]

//         const [araba1,araba2, ...gerikalanlar] = araclar

//         console.log(araba1)
//         console.log(gerikalanlar)

  // ? Rest obje 
// 

//   const kisi = {
//     ad: "Canan",
//     soyad: "Cano",
//     yas: 33,
//     meslek:"tester"
//   }

//  const {meslek, yas, ...isim} = kisi

//  console.log(meslek, yas)
//  console.log(isim)

//  //? Rest in function 


//  const topla = (a, b) =>  a + b 

//  console.log("SONUC:", topla(2,5,10,4))

//  const toplaminiAl = (...sayilar) => {  //? none iterable olan sayilari iterable yani diziye rest (... operatoru ile )cevirdi 
//   console.log(sayilar)
//   return sayilar.reduce((t, v ) => t +v,0 )
//  }

//  console.log("SONUC:", toplaminiAl(2,5,10,4))

//  //? Spread (...)  iterabledan none iterable cevirir. 


//  const ucanAraclar  = ["drone", "heli", "ucak"]
//  const karaAraclar  = ["Tir", "Araba", "Kamyonet", "Bisiklet"]
 
//  const tasitlar = [ucanAraclar,karaAraclar]  //? bu sekilde nested oluyor 

//  console.log(tasitlar)  


//  //? spread methods ile

//   const tasitlar1 = [...ucanAraclar, ...karaAraclar]

//   console.log(tasitlar1)

 

//   const cumle = "Olmak yada olmamak"

//     const karakter = [...cumle]

//     console.log(karakter)
//     console.log(cumle)

    //? Array copy

//     const myNumbers= [4, 5, 6]

//     const herNumbers = [1,2,3, ...myNumbers]

//     const hisNumbers= [...herNumbers]


// console.log(herNumbers ,myNumbers)
// console.log(hisNumbers)


// hisNumbers.push(7)

// console.log("MY:",myNumbers)
// console.log("HER:",herNumbers)
// console.log("HIS:",hisNumbers)


//? Object copyings

// const firstObj= { a: 1, b:2, c:3}
// const secondObj= { a: 2, d:3, c:4}


// const copiedfirstObj = { ...firstObj}

// console.log(copiedfirstObj)

// copiedfirstObj.a = 44 //? nested olmadigi icin deep copy gibi davranir

// console.log(copiedfirstObj, firstObj)


// const combinedObjs = {...firstObj , ...secondObj}

// console.log(combinedObjs)


//? nested  objets  -- for in for of methods best praksis
const people = {
    person1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    person2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    person3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    },
  }


  console.log("MAAS:" , people.person3.salary)

  //! For  -In 
  //* for (key in object) {
  //* // code blovk to be executed}
   for ( let person in people) {
     
    
   console.log(person)
//    console.log(people[person])  // * square  bracket notasyon
   console.log(people[person].salary) 

   }

   //?  Objeler iterable degillerdir ancak for-in for of gibi dongu elemanlari ile ozel olarak itere edilebilirler


   //! For  -Of- 

   //* for ( x og iterable) {
   //* code block to be executed}

   console.log(Object.keys(people))
   console.log(Object.values(people))
   console.log(Object.entries(people))

   for ( let v of Object.values(people)) {
    console.log(v.job)
   }