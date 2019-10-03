//Objeler
var insan = {
  ismi: "Ömer", //property
  soyismi: "Eren",
  yasi: 35,
  gozrengi: "siyah",
  meslek: "Proğramcı",
  Tamismi: function() {
    return this.ismi + " " + this.soyismi;
  }
};

var toplama = function(a, b) {};

// console.log(insan);
console.log(insan.ismi);
console.log(insan.soyismi);
console.log(insan.yasi);
console.log(insan.meslek);

// insan.ismi = "Mehemt";

console.log(insan);

console.log(Object.keys(insan)); // obejnin özelliklerini sıralar

console.log(insan.Tamismi());

//Obje
// tipi - renkler
// renklerin yazdiği bir array olsun
// function - array içinde bize print etsin console.log
var renk = {
  tipi: "Renkler",
  renkListesi: ["kirmizi", "Siyah", "Mavi"],
  renkleriYazdir: function() {
    for (var i = 0; i < this.renkListesi.length; i++) {
      console.log(this.renkListesi[i]);
    }
  },
  secileniYazdir: function(x) {
    console.log(this.renkListesi[x]);
  }
};

renk.renkleriYazdir();
renk.secileniYazdir(1);

renk.yeniOzellik = "Test"; //Dynamic - Dinamik
console.log(renk);

console.log(`Bu çocuğun adı: ${insan.ismi}.`);
console.log("Bu çocuğun adı: " + insan.ismi + ".");

console.log(
  `Bu insanın özellikleri: \nİsmi: ${insan.ismi} \nSoyismi: ${insan.soyismi} \nmesleği: ${insan.meslek}`
);

console.log("\n");

console.log(`Bu insan özellikleri
İsmi: ${insan.ismi},
Soyadı: ${insan.soyismi},
Mesleği: ${insan.meslek},
Bu böyle devam eder.
`);

//Bu hata da burada kalsın
// console.log("Bu insan özellikleri
// İsmi: Ömer,
// Soyadı: Eren,
// Mesleği: Programcı,
// Bu böyle devam eder.");

//2 tane kitap objesi içine ismi ve yazarı yazalım
//1. Kitap: Frank Herbert => Dune
//2. Kitap: George Orwell  => 1984
// Dune kitabı Frank Herbert tarfından yazılmıştır.
// Bonus objenin içinde bunu yapan bir fonksiyon olsun
var kitap1 = {
  Yazar: "Frank Herbert",
  Kitap: "Dune",
  Sayfa: 287
};
var kitap2 = {
  Yazar: "George Orwell",
  Kitap: "1984",
  Sayfa: 350
};
console.log(`${kitap1.Kitap} kitabı ${kitap1.Yazar} tarafından yazılmıştır.`);
console.log(`${kitap2.Kitap} kitabı ${kitap2.Yazar} tarafından yazılmıştır.`);

var kitapOzellikleri = function(ktp) {
  return {
    ozet: `${ktp.Kitap}'ı ${ktp.Sayfa} sayfa ve ${ktp.Yazar} tarafından yazılmıştır.`,
    uzunluk: `${ktp.Kitap}'ı ${ktp.Sayfa} sayfadır.`
  };
};

var kitap1Ozellik = kitapOzellikleri(kitap1);
var kitap2Ozellik = kitapOzellikleri(kitap2);

console.log(kitap1Ozellik.ozet);
console.log(kitap1Ozellik.uzunluk);
console.log(kitap2Ozellik.ozet);
console.log(kitap2Ozellik.uzunluk);

var Hesabim = {
  hesapIsmi: "Ömer Eren",
  gelir: 0,
  gider: 0
};

var gelirEkle = function(hesap, miktar) {
  hesap.gelir += miktar;
};

var giderEkle = function(hesap, miktar) {
  hesap.gider += miktar;
};

var durumGoster = function(hesap) {
  var hesapSonu = hesap.gelir - hesap.gider;
  return `Hesabınızda ${hesapSonu} TL var.
            Geliriniz: ${hesap.gelir}
            Giderleriniz: ${hesap.gider}`;
};

giderEkle(Hesabim, 1000);
gelirEkle(Hesabim, 8000);
console.log(durumGoster(Hesabim));

//Obje oluşturma farklı yöntemi
var kisi = new Object();
kisi.isim = "Ömer";
kisi.soyad = "Eren";
kisi.yas = 35;
kisi.meslek = " Programcı";

console.log(kisi);
