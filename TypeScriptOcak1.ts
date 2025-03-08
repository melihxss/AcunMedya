//Birinci Kısım

let sayi = Number(prompt("Bir sayı girin:"));

if (sayi > 0) {
    console.log("Pozitif");
} else if (sayi < 0) {
    console.log("Negatif");
} else {
    console.log("Sıfır");
}

//İkinci Kısım

//For döngüsü
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//While Döngüsü
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

//do-while döngüsü
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 10);

//Üçüncü Kısım
function asalMi(sayi:number) {
    if (sayi < 2) return false; 
    for (let i = 2; i <= Math.sqrt(sayi); i++) {
        if (sayi % i === 0) return false; 
    }
    return true;
}

let kullaniciSayisi = Number(prompt("Bir sayı girin:"));
console.log(asalMi(kullaniciSayisi) ? "Asal" : "Asal değil");
