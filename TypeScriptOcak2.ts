//Birinci Kısım

function topla(a:number, b:number) {
    return a + b;
}

console.log(topla(5, 10)); 

const toplaArrow = (a:number, b:number) => a + b;

console.log(toplaArrow(5, 10)); 

//İkinci kısım

function enBuyukEleman(dizi:number[]) {
    return Math.max(...dizi);
}

let sayilar = [12, 45, 78, 3, 99, 23];
console.log(enBuyukEleman(sayilar)); 

//Üçüncü Kısım

function muzunVarMi(dizi:string[], eleman:string) {
    return dizi.includes(eleman);
}

let meyveler = ["elma", "armut", "çilek", "muz"];
console.log(muzunVarMi(meyveler, "muz")); // Çıktı: true
console.log(muzunVarMi(meyveler, "kiraz")); // Çıktı: false

