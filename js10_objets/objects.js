
  console.log("*********  Objects ********")

//   //* Komplex veri yapisi  --  property(key) - value  

//   //* objeye erisism . notasyonu iel erisilir ---

  //? Object Literal ( En cok tercih edilen yontem )
//   const car =  {
     
//      brand: "Mercedes",
//      model:2020,
//      speed:5,
//      color: ["pink", "black", "blue", "green"],
//      engine: 2000
//   }


   //? Objenin okunmasi   ( read)

//    console.log(car.brand)  //* 1.yontem method . notasyonu

//    console.log(car.color[0]) //? pink

//    console.log(car) //! suslu ile gosterilirse objedir. 

//    console.log(car.color)

//    car.color.forEach((c)=> console.log(c))  //* diziyi donduk  


   //* key case sensetive yapilardir. 


   //? Obje degerinin degistirilmesi (write)  ekleme yazma yapiyoruz

//    car.speed = 7  //? writing  
//    car.color ="Morcivert"

//    car.class = "E"
//    console.log(car)


   //! Objeler none primitive yapidadir.   stack - heap 



   //* 2. yontem  Square Bracket yontemi ile erisim   objenin icindeki degiskenlereulasiyoruz  bu yotem ile  -- degisken yazmamiza izin veriyor, dinamik olarak obje erisimlerinde kullanilabilir. 


    // console.log("ENGINE:" , car["engine"])

    //   const myKey = prompt( "Araba ile ilgili neyi ogrenmek istersiniz: speed, color, engine ....")


    //     alert(car[myKey])


      //* " yontem Object(" classindan new operatoru ile   Object classindan turetme ile ayni zamandan 

      const myCar = new Object()  //* new operatoru ile  new Key word Object classi   object clasi temel objeden  myCar uretmis olduk

    //   myCar.brand = "Audi"
    //   myCar.model = 2022
    //   myCar.speed = 8

    //   console.log(myCar.speed)
    //   console.log(myCar["model"])

    //   //*  Object constructir u kullanrak 

    //   function Personel(id, name, age, salary) {

    //  this.id = id 
    //  this.age = age
    //  this.name = name
    //  this.salary = salary
    //   }

    //   const person1 = new Personel ("1234567", "Ahmet Can", 33, 30000)
    //   const person2 = new Personel ("1234567", "Mehmet Can", 30, 25000)

    //   console.log(person1)


       //? Object methods


    //    const personel = {


    //      name: "Ahmet",
    //      surname: "Canan",
    //      dob: 1990,
    //      salary: 30000,
    //      drivingLicense: true,

    //      calculateAge: function() {

    //         return new Date().getFullYear() - this.dob

    //      },

        //  summary: () => {
        //     return ` ${this.name} is ${this.calculateAge()} years old`
    //      summary: function () => {
    //         return ` ${this.name} is ${this.calculateAge()} years old`
    //          //* arrow callback icin kullanmak mantikli arrow function ana scope baglidir. Lexical scope  dur bulundugu scope gostermez , ana scope window gosterir
    //      }    }

    //       //* Objelerin icersindeki functonlari arrow ile yazmayalaim , expression function ile yazalim. 
   

    //    console.log(personel.name + " " + personel.surname)
    //    console.log(personel.calculateAge())

    //    console.log(personel.summary())

    //    //* browser icersindeki tum objeler windov interfacedindedir. 



    //* Json  => Javascript object notation  Dizi icersindeki obje YAPILARINA JSON DERIZ  [{}, {}, {}]  DIZI ICERSINDE   { name:
    //* surname: age : salary :}  normal obje