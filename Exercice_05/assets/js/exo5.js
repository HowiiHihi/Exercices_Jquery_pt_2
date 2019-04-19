// $(function()
// {
//   $('#lastName').on('focusin', function()
//   {
//     $('#lastName').css('border', '1px solid green');
//   });
//   $('#lastName').on('focusout', function()
//   {
//     $('#lastName').css('border', '1px solid red');
//   });
//   $('#firstName').on('focusin', function()
//   {
//     $('#firstName').css('border', '1px solid green');
//   });
//   $('#firstName').on('focusout', function()
//   {
//     $('#firstName').css('border', '1px solid red');
//   });
// });
$(function()
{
  $('input').on('focus', function(){
    $(this).css('border', '1px solid green');
  });
  $('input').on('blur', function(){
    $(this).css('border', '1px solid red');
  });
});
