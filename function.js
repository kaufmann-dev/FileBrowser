$(document).ready(function() {
	$('li').click(function() {
		let folder = $(this).data('path');
		$('iframe').attr("src", folder);
		$('main div').remove();
	});
});