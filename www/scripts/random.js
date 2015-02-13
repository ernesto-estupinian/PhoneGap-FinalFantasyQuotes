function getQuote()
{
	$("#theQuote").fadeOut('fast', function()
	{
		$("#theQuote").html(quotes[Math.floor(Math.random()*quotes.length)]);
	});
	
	$("#theQuote").fadeIn('fast');
}

function clearQuote()
{
	$("#theQuote").html("&nbsp;");
}