function Car(motor, kapi, yakit, rengi) {
  this.motor = motor;
  this.kapi = kapi;
  this.yakit = yakit;
  this.rengi = rengi;
}

var benimArabam = new Car(2000, 4, "Dizel", "Pembe");
console.log(benimArabam);

var onunArabasi = new Car(3000, 2, "Benzin", "Siyah");
console.log(onunArabasi);

//```````

console.log(
  `Benim arabam ${benimArabam.rengi} renkli. Özellikleri ${benimArabam.kapi} kapısı, ${benimArabam.motor} motoru ve ${benimArabam.yakit}`
);

var arabaGalerisi = [
  (araba1 = new Car(200, 2, "LPG", "Mor")),
  (araba2 = new Car(3000, 4, "Dizel", "Kırmızı")),
  (araba3 = new Car(5000, 2, "Hybrid", "Beyaz"))
];

var garajaGirebilirMi = function(araba) {
  if (araba.yakit === "LPG") {
    console.log("Giremezsiniz");
  } else {
    console.log("Giriniz");
  }
};

arabaGalerisi.forEach(function(x) {
  garajaGirebilirMi(x);
});
