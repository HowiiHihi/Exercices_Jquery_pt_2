$(function(){
  $('.color').on('mouseover', function(){
    var newColor = $(this).attr('id');
    $('#text').css('color', newColor);//Attention à ne pas mélanger la couleur et la variable
  });
  $('.color').on('mouseout', function(){
    $('#text').css('color', 'inherit');//inherit : par défaut
  });
});
