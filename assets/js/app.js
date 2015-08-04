// Закрывать главное меню при клике и нажатии на Esc.

$(document).on('click',function(){
	$('#mainmenu.collapse').collapse('hide');
})

$(document).on('keydown',function(key){
	if(key.keyCode == 27) {
		$('.collapse').collapse('hide');
	}
})


$(function(){

	// Выбор города на экране офомления заказа.
	$('li.choosecity').on('click', function(elem){
		$('.opencitylist').text($(this).text());
	});
  
  // Управление слайдером в фильтре товаров.
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $('#type0_name').val(ui.values[ 0 ]);
      $('#type0_name_2').val(ui.values[ 1 ]);
    }
  });

  // Механизм смены фотографий товара для карточки товара
  $('.image-list > div > img').on('click', function(){
    // console.log(this.data);
    $('#main-image > img').attr('src', $(this).data().bigImage);
    $('.image-list > div.active').removeClass('active');
    $(this).parent().addClass('active');
  })

  document.querySelector('.resolution').innerText = screen.width + " x " + screen.height;
})