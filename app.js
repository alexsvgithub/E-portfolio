
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




function image(){
  location.href='images/resumedorx.docx';
}
