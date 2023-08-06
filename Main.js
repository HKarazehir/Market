
let mesaj =
    `
Migros'a Hoşgeldiniz 
Money kartınız var mı ?
1-EVET
2-HAYIR
`;
//TOPLAM 335 İNDİRİMLİ 268
const urunler = [
    {
        urunIsmi: "Süt",
        fiyat: 15
    },
    {
        urunIsmi: "Bebek Bezi",
        fiyat: 100
    },
    {
        urunIsmi: "Kuşbaşı",
        fiyat: 220
    },
]

//true veya false
let sonuc = confirm(mesaj);
let odenecekTutar;


if (sonuc) {
    //money kart var
    let isim = prompt("Adinizi Giriniz");
    let soyisim = prompt("Soyisminizi giriniz")

    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();

    alert(`
    Müşteri Bilgileri : ${musteri.getIsim()} ${musteri.getSoyisim()}
    Ödenecek Tutar : ${odenecekTutar}
    `);

} else {
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar}`)
}