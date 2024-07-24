
  //* Destructuring ( Object)
   
  console.log("*** New Operators ****")

  //? JSON - JavaScript Object Notation 
  //? JSON - Bir Arraydir. 

  //? objeyi acma parcalama

  const car = {
      brand:  "BMW",
      model:  2020,
      engine: 2000,
      colors : ["pink", "blue"],
    
  }
  //?  1. yontem . notasyonu ile ulasim 
  const araba =car.brand  //* Degiskene aktarma
  console.log(car.brand)
  console.log(araba)


  //? 2. yontem Square  brcket  []  koseli parentez ile ulasim

    console.log(car["model"])


    //? 3 methods. Destructure  parcalama bozma


  const {brand, engine,colors } = car

  console.log(engine, colors, name) //* Degiskenlerin isimi key lerin ismi ile ayni olmazi lazm   //? Destructuring object


  const {model} = car  //* destructuring methods

  console.log(model)


  //* EXAMPLE: NESTED
const cars = {
    car1: {
      name: "BMW",
      model: 1990,
      engine: 1.6,
    },
    car2: {
      name: "Mercedes",
      model: 2022,
      engine: 2.0,
    },
    car3: ["anadol", "togg", "devrim"],
    car4: "kağnı",
  }