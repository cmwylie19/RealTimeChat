// var form  = document.getElementsByTagName('form')[0]
// var email = document.getElementById('mail');
// var file = document.getElementById('file');
// var avatar = document.getElementById('avatar');
// let link = document.createElement('a');

let myForm = document.getElementById('myForm');
let formData = new FormData(myForm);

// Display the key/value pairs
let imgs= document.body.querySelector("imgs");
let files=document.body.querySelector('input');
imgs[0].src=files[0].file
imgs[1].src=files[1].file

function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }
for(var pair of formData.entries()) {


   children.getElementById(pair[0]).src=pair[1];//userFile").src=
     
    formData.pair[0].src.innerHTML=pair[1]
   console.log(pair[0]+ ', '+ pair[1])
}
//