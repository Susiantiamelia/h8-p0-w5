function hapusSimbol(str) {

  var cek = str.match(/[a-z, 0-9]/g) 
  var hasil = ''

  for(var a=0; a < cek.length; a++){

    if(cek[a] !== ' '){

    hasil += cek[a]
    
    }
  }

  return hasil;
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100

