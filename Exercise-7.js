//1 Menyusun barisan bintang berdasarkan baris
for (var rows1=5;rows1>=1;rows1--) {
    console.log('*');
  } 


//2 Menyusun barisan bintang dengan nested looping
var rows=5;
var cols=5;
  
for(var i=1; i<=rows; i++)
{
  var star='';
 for(var j=1;j<=cols;j++)
 {
  star= star + '*';

 }
 console.log(star);
}


//3 Menyusun barisan tangga bintang dengan nested looping
height=5; 
for (var i = 1; i <= height; i++) {
var row = '';
  for (var j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
}