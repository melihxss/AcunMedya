//Birinci Kısım
let yas: number = 25;

let isim: string = "Melih";

let öğrenciMi: boolean = true;

let sayilars: number[] = [1, 2, 3, 4, 5];

let kişi: [string, number] = ["Ahmet", 30];

// enum (sabit değerler kümesi)
enum Renk {
    Kırmızı = "KIRMIZI",
    Mavi = "MAVİ",
    Yeşil = "YEŞİL"
}
let benimRenk: Renk = Renk.Mavi;

// any (herhangi bir veri türüne izin verir, önerilmez)
let rastgele: any = 42;
rastgele = "Merhaba";  // Hata vermez!

// void (geri dönüş değeri olmayan fonksiyonlar için)
function selamVer(): void {
    console.log("Merhaba!");
}


//İkinci Kısım

interface Kisi {
    isim: string;
    yas: number;
    öğrenciMi: boolean;
}

let kişi1: Kisi = {
    isim: "Melih",
    yas: 22,
    öğrenciMi: true
};

console.log(kişi1.isim);  // Çıktı: Melih

// Hatalı kullanım (isim number olamaz!)
// let kişi2: Kisi = { isim: 42, yas: 25, öğrenciMi: false }; // Hata verir!

