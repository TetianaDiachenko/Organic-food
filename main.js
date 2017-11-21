$('.accordion_item>.accordion_body').hide();
$('.accordion_item>.accordion_header').click(function() {
	var findAccordBody = $(this).next('.accordion_body');
	var findAccord = $(this).closest('.accordion');

	if (findAccordBody.is (':visible')) {
		findAccordBody.slideUp()
	}
	else {
		findAccord.find('.accordion_body').slideUp();
		findAccordBody.slideDown();
	}
});

