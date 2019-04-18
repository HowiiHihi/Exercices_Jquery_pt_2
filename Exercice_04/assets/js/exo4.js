// $(function()
// {
//   $('#green').on('click', function()
//   {
//     $('#text').css('color', 'green')
//   });
//   $('#red').on('click', function()
//   {
//     $('#text').css('color', 'red')
//   });
//   $('#blue').on('click', function()
//   {
//     $('#text').css('color', 'blue')
//   });
// });
//chercher une méthode plus "light"
$(function()
{
  $('#text', function()
  {
    $('#green').on('click').css('color', 'green');

  });
});
