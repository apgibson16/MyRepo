<script>
var dataLayer = [];
 window.addEventListener('unload', function(event) {
		dataLayer.push({
			'event': 'windowUnload',
			'eventCategory': 'Video',
			'eventAction': 'Stopped Watching',
			'eventLabel': 'Video Name'
            });
		console.log('Window unload event');
		console.log(dataLayer[0]);
});
</script>
