
  console.log("*********  Objects ********")

  //* Komplex veri yapisi  --  property(key) - value  

  //* objeye erisism . notasyonu iel erisilir ---

  //? Object Literal ( En cok tercih edilen yontem )
  const car =  {
     
     brand: "Mercedes",
     model:2020,
     speed:5,
     color: ["pink", "black", "blue", "green"],
     engine: 2000
  }


   //? Objenin okunmasi   ( read)

   console.log(car.brand)  //* 1.yontem method . notasyonu

   console.log(car.color[0]) //? pink

   console.log(car) //! suslu ile gosterilirse objedir. 

   console.log(car.color)

   car.color.forEach((c)=> console.log(c))  //* diziyi donduk  


   //* key case sensetive yapilardir. 


   //? Obje degerinin degistirilmesi (write)  ekleme yazma yapiyoruz

   car.speed = 7  //? writing  
   car.color ="Morcivert"

   car.class = "E"
   console.log(car)


   //! Objeler none primitive yapidadir.   stack - heap 



   //* 2. yontem  Square Bracket yontemi ile erisim   objenin icindeki degiskenlereulasiyoruz  bu yotem ile  -- degisken yazmamiza izin veriyor, dinamik olarak obje erisimlerinde kullanilabilir. 


    console.log("ENGINE:" , car["engine"])

    //   const myKey = prompt( "Araba ile ilgili neyi ogrenmek istersiniz: speed, color, engine ....")


    //     alert(car[myKey])


      //* " yontem Object(" classindan new operatoru ile   Object classindan turetme ile ayni zamandan 

      const myCar = new Object()  //* new operatoru ile  new Key word Object classi   object clasi temel objeden  myCar uretmis olduk

      myCar.brand = "Audi"
      myCar.model = 2022
      myCar.speed = 8

      console.log(myCar.speed)
      console.log(myCar["model"])