//birden 50 ye kadar olan sayıları çarpıp sonucu ekrana yazdıran fonksiyon.
function sum1To50(){
    let toplam:number = 0;
    for(let i:number = 1;i <= 50; i++){
        if(i%2 == 0){
            toplam += i;
        }
        
    }
    console.log(toplam);
}


//7 sayısının 1'den 10'a kadar olan çarpım tablosunu ekrana yazdıran fonksiyon.
function carpımTablosu(){
    let sayi:number = 7;

    for(let i:number = 0;i < 10;i++){
        console.log(`${sayi} X ${i} = ${sayi * i}`)
    }
}

carpımTablosu();
sum1To50();
