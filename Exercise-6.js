//1. Melakukan Looping Menggunakan While
//Looping Pertama
var angka=2;

console.log('LOOPING PERTAMA');
while (angka<21 && angka%2 == 0) {
  console.log(angka + ' - I love coding ');
 angka +=2;

//Looping Kedua
var angka=20;

console.log('LOOPING KEDUA');
while (angka>0 && angka<21 && angka%2 == 0)
{
  console.log(angka + ' - I will become fullstack developer')
  angka -=2;
};


//2. Melakukan Looping Menggunakan For
//Looping Pertama
for (var angka=0;angka<21;angka++)
{
  console.log(angka + ' - I love coding')
}

//Looping Kedua
for (var angka=20;angka>0;angka--)
{
  console.log(angka + ' I will become fullstack developer')
}

//3. Angka ganjil genap
for (var counter=1;counter<101;counter++)
{
  if (counter%2 == 0){
    console.log('GENAP')
  } else {
    console.log('GANJIL')
  }
};

//pertambahan counter 2
for (var counter=1;counter<=100;counter+=2)
{
  if (counter %3==0)
  {
    console.log(counter + ' kelipatan 3')
  }
};


//pertambahan counter 5
for (var counter=1;counter<=100;counter+=5)
{
  if (counter %6==0)
  {
    console.log(counter + ' kelipatan 6')
  }
};

//pertambahan counter 9

for (var counter=1;counter<=100;counter+=9)
{
  if (counter %10==0){
    console.log(counter + ' kelipatan 10')
  } 
};
