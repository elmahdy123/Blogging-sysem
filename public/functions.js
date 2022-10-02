

let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");




let textIcon = document.querySelector('.text-icon');
let imageIcon = document.querySelector('.image-icon');
let textArea = document.querySelector('textarea');
let page = document.querySelector('.page');
let imageInput = document.querySelector(".image-input");
let textButton = document.querySelector('.text-done')
let imageButoon = document.querySelector('.image-done')
let uploadImage = document.getElementById("upfile");
let uploadText = document.querySelector('.upload-text');


textButton.addEventListener('click',(e)=>{

    var myContent = tinymce.get("textarea").getContent();

    let div = document.createElement('div');
    // let text = textArea.value;
    div.innerHTML = myContent;
    page.appendChild(div);

    
  console.log(myContent);

});



imageInput.addEventListener("change", function() {

  const reader = new FileReader();

  if (uploadImage.value) {

    uploadText.innerHTML = 'Image uploaded'
  }

  imageButoon.addEventListener("click", () => {

    const uploaded_image = reader.result;

    let image = document.createElement('div');
    image.style.backgroundImage = `url(${uploaded_image})`;
    image.style.height = '400px'
    image.style.width = '100%'
    image.style.backgroundSize = 'cover'
    image.style.backgroundRepeat= 'no-repeat'
    image.style.margin= '30px 0'
    page.appendChild(image)

  });


  reader.readAsDataURL(this.files[0]);

});


tinymce.init({
    selector: '#textarea',
    plugins: [
      'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
      'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
      'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
    ],
    toolbar: 'undo redo | formatpainter casechange blocks | bold italic backcolor | ' +
      'alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
});




function getFile() {
 uploadImage.click();
}

// console.log(uploadImage.value);

// imageButoon.addEventListener((e)=>{

//   if (uploadImage.value) {

//       uploadText.TEXT_NODE = 'Image uploaded'
//   }

// })
















/* function sendForm() {

  console.log("i work 🤞");
  console.log(form);

  const data = `name=${name.value}&email=${email.value}&password=${password.value}`;
  console.log(data);

  const xhr = new XMLHttpRequest();         


  xhr.open("POST", "http://localhost:5002/auth/register");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(data);

  console.log(xhr.responseText + "response text");
  console.log(xhr.status + "status");
  console.log(xhr.statusText);  
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendForm();
});



form.addEventListener("submit", (e) => {
  e.preventDefault();

});

*/




/*

    import EditorJS from '@editorjs/editorjs'; 
    import Header from '@editorjs/header'; 
    import List from '@editorjs/list'; 

  
    holder: 'editorjs', 
    
    
    tools: { 
        header: {
        class: Header, 
        inlineToolbar: ['link'] 
        }, 
        list: { 
        class: List, 
        inlineToolbar: true 
        } 
    }, 
    });

    const editorBtn = document.querySelector(".editor");

    editorBtn.addEventListener((e)=>{
        editor.saver().then((output)=>{
            console.log(output);
        })
    })

*/