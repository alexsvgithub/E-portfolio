
jQuery(function() {
  jQuery('#showall').click(function() {
    jQuery('.targetDiv').hide();
  });

$(document).ready(function() {
  $('#about').click();
});

  jQuery('.showSingle').click(function() {
    jQuery('.targetDiv').hide();
    jQuery('#div' + $(this).attr('target')).show();


  });
});


// $('body').click(function(evt){
//     if(!$(evt.target).is('#menu_content')) {
//         //event handling code
//         $('.right').scrollTop(0);
//     }
// });

function image(){
  location.href='images/resumedorx.docx';
}
