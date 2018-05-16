function naikAngkot(arrPenumpang) {

  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var hasil = []
  
  for(var a=0; a < arrPenumpang.length; a++){

    var objectTemp = {}

    objectTemp.penumpang = arrPenumpang[a][0]
    objectTemp.naikDari = arrPenumpang[a][1]
    objectTemp.tujuan = arrPenumpang[a][2]
    
    var biaya = (rute.indexOf(objectTemp.tujuan)-rute.indexOf(objectTemp.naikDari))*2000

    objectTemp.bayar = biaya
    
    hasil.push(objectTemp)

  }
  
  return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]