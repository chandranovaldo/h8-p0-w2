function konversiMenit(menit) {

  var hitungDetik = menit %60;
  var hasilHitungDetik = hitungDetik;

  // condition nambahin 0
  if (hasilHitungDetik <10){
    hasilHitungDetik = '0'+hasilHitungDetik;
  } else if (hasilHitungDetik == 0) {
    hasilHitungDetik = '00'
  }

  // rounding supaya hasilnya ga desimal
  //floor supaya rounding kebawah
  var hitungMenit = Math.floor(menit /60);

  return (hitungMenit + ':' + hasilHitungDetik); 
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
