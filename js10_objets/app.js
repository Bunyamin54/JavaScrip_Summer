 //**  Reduce methods */

//  x.forEach (( value, item, array) => {
//     arr [] = value * 2
//  })

 //* for each  return ozelligi yok , 
 //* bir dizi icersinde doneriz  value zorunlu item ve array optional  bize array dondurur. forEach bitirme islemi yapar. 


//  * arr = [8,9,10,2]
// * const newArr = arr.map((x) => x  * x)    map return ozelligi var

//* arr. filter (( v, i,a) =>  condition)

//* grader [55, 23, 44, 48, 50, 90]

//* const bigger50  = grades.filter((g) => g>=50)'

//* filter bir dizi alip icinde dolasirirz.

//* pipline -chain  chain ozelliginin olmasi icin methodun return ozelligi olmalidir foreach methodu void methodudur


//* Reduce (Terminal)
//* Reduce -> Accumulative islemler yapar birikimli ardisik islem yapar
//*  reduce de iki zorunluluk var 

//* Array.reduce((acc.value, i,arr) => )

    //* Reduce dizi dondurmez deger number primitiv dondurur. dizi dondurmez.  cikisina filter map konulmaz cikisi sayidir. primitivdir. 

    //* reduce methods also consumingdir  baslangic degeri vermek gerekir. 

    const mayislar = [5500, 8000, 6500, 9000, 10000, 25000]

    const toplamMayis = mayislar.reduce( ( toplam, deger) => toplam + deger , 0)


    console.log("Toplam Mayis:", toplamMayis)