class MigrosBase {
    indirimOrani = 20;

    /*
    urunler[
        {
            fiyat : 10,
            urunAdi:"SÜT",
        }
    ]
     */

    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla() {

        let odenecekTutar = 0;

        if (this.urunleriKontrolEt(this.urunler)) {
            //sepet dolu
            if (this.kartVarmi) {
                //money kart vardır
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100);
                })
            } else {
                //yoktur
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat;
                })
            }

        } else {
            alert("en az bir tane ürün satin almalisiniz")
        }
        return odenecekTutar;
    }

    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }

    getIsim(){
        return this.isim
    }

    getSoyisim(){
        return this.soyisim
    }
}