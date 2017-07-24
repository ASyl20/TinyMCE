// $(document).ready(function(){
//   $('#get-data-form').submit(function(e){
//     alert(tinymce.get("texteditor").getContent());
//     var content = tinymce.get("texteditor").getContent();
//     alert(content);
//     $('#data-container').html(content);
//     return false;
//   })
// })



function affiche (){
        var content = tinymce.get("texteditor").getContent();
        alert(content);
         document.querySelector('#data-container').innerHTML =content;
     return false;
  }
