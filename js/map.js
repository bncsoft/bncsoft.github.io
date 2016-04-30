var var_map;
var var_location = new google.maps.LatLng(37.510504, 127.045962);

function map_init() {		 	
	
	var var_mapoptions = {
	  center: var_location,
	  zoom: 17,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  mapTypeControl: false,
	  panControl:false,
	  rotateControl:false,
	  streetViewControl: false,
	};
	var_map = new google.maps.Map(document.getElementById("map-container"),
		var_mapoptions);

  var contentString = 
		'<div id="mapInfo">'+
		'<p><strong>(주) 비앤씨소프트</strong><br><br>'+
		'서울특별시 강남구 봉은사로 418<br>' +
		'(삼성동, 에이치에스타워 5층)<br>505호<br><br>'+
		'전화번호: 02-501-1767</p>'+
		'<a href="http://bncsoft.dothome.co.kr/#tf-contact" target="_blank">문의하기</a>'+
		'</div>';

  var var_infowindow = new google.maps.InfoWindow({
	content: contentString
  });
  
  var var_marker = new google.maps.Marker({
	position: var_location,
	map: var_map,
	animation:google.maps.Animation.BOUNCE,
	title:"클릭하시면 자세한 주소를 알 수 있습니다.",
		  maxWidth: 200,
		  maxHeight: 200
  });

  google.maps.event.addListener(var_marker, 'mouseover', function() {
	 var_infowindow.open(var_map,var_marker);
  }); 
  
}

google.maps.event.addDomListener(window, 'load', map_init);

//start of modal google map
$('#mapmodals').on('shown.bs.modal', function () {
  google.maps.event.trigger(var_map, "resize");
  var_map.setCenter(var_location);
});
