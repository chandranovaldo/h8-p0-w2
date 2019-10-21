var nama ='Mikael';
var peran ='';

let deskripsiPeran = ' ';
if (peran ==='Ksatria'){
  deskripsiPeran = 'kamu dapat menyerang dengan senjatamu!"'
}  else if (peran ==='Tabib')
{
  deskripsiPeran = 'kamu akan membantu temanmu yang terluka"'
} else if (peran ==='Penyihir')
{
  deskripsiPeran = 'ciptakan keajaiban yang membantu kemenanganmu!"'
}

if (nama==='' && peran==='' )
{
  console.log('"Nama harus diisi!"')
} else if (nama==='Mikael' && peran==='')
{
  console.log(`"Halo Mikael, Pilih peranmu untuk memulai game!" `)
} else if (nama!=='Mikael') 
{
  console.log(`"Selamat datang di Dunia Proxytia,` + ` ` + nama + `"`)
  console.log(`"Halo` + ` ` + peran + ` ` + nama + `,` + ` ` + deskripsiPeran)
}