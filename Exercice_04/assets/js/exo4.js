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
  $('.color').on('click', function()
  {
    var newColor = $(this).attr('id');//On donne à la variable l'id correspondant à la couleur
    $('#text').css('color', newColor);//On affiche la couleur en utilisant la variable dans le css
  });
});
