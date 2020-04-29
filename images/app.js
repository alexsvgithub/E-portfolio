
jQuery(function() {
  jQuery('#showall').click(function() {
    jQuery('.targetDiv').hide();
  });

$(document).ready(function() {
  $('#about').click();
});



//   jQuery(function(){
//     jQuery('.targetDiv').hide();
//   });
//
//   $(function() {
//   $('mybutton').focus();
// });




  // jQuery(function() {
  //   jQuery('.targetDiv').hide();
  //   jQuery('#hp').show();
  // });
    // jQuery('#showall').click(function() {
    //   jQuery('.targetDiv').show();
    // });
  jQuery('.showSingle').click(function() {
    jQuery('.targetDiv').hide();
    jQuery('#div' + $(this).attr('target')).show();


  });
});

// jQuery(document).click(function(){
//   if(evt.target.id == "menu_content")
//   {
//     return;
//   }
//
//      //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
//   else
//   {
//     $('.right').scrollTop(0);
//   }
//
// });

$('body').click(function(evt){
    if(!$(evt.target).is('#menu_content')) {
        //event handling code
        $('.right').scrollTop(0);
    }
});
function image(){
  location.href='images/resumedorx.docx';
}
