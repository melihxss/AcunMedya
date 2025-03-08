//Birinci Kısım


//var:Global değişken olarak tanımlanır.Diğer değişkenlerden farkı scope dışından erişilebilir olması ve aynı isimle tekrar tanımlanabilmesi.
if(true){
    var isim:String = "Melih"
}
console.log(isim)
var isim:String="Yusuf";

// ------------------------------------------------------------------------------------------------------


//let:Aynı isimle sadece 1 kere tanımlanabilir ve scope dışına çıkamaz.const dan farkı değiştirilebilir olmasıdır.
if(true){
    let soyisim:String="melih"
}

// console.log(soyisim) //hata verecektir.Scope dışından erişilemez.

let soyisim:String="Yusuf";
soyisim ="Ercan"
console.log(soyisim) //Ercan çıktısını alırız

// ------------------------------------------------------------------------------------------------------


//const:Scope dışına çıkamaz,aynı isimle sadece 1 kere tanımlanabilir.let den farkı değeri değiştirilemez sabit bir değer olmak zorundadır.

const nick:String="Melih";
// nick = "yusuf"; //hata verecektir çünkü const ile tanımlanmış bir değişken değiştirilemez.

// ------------------------------------------------------------------------------------------------------

//İkinci Kısım

let hayvan:string = "kedi";
let yas:number = 5;
let canliMi:boolean = true;
let sahip:undefined;
let nickName:null = null;
let tür:object = {kedi:"Sarman",köpek:"Golden"};
let miktar:number[] = [1,2,3,4,5,6];
let ses:() => void = function sesVer(){
    console.log("hav hav");
}
console.log(typeof(hayvan))
console.log(typeof(yas))
console.log(typeof(canliMi))
console.log(typeof(sahip))
console.log(typeof(nickName))
console.log(typeof(tür))
console.log(typeof(miktar))
console.log(typeof(ses))


// ------------------------------------------------------------------------------------------------------


//Üçüncü Kısım

let sayi1: number = Number(prompt("Birinci sayıyı girin:"));
let sayi2: number = Number(prompt("İkinci sayıyı girin:"));

let toplam: number = sayi1 + sayi2;

alert(`Toplam: ${toplam}`);

