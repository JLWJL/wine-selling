// JavaScript Document
      function initialize() {

        var myLatLng = new google.maps.LatLng(-45.87908914, 170.50215387);
        var mapCanvas = document.getElementById('location');
        var mapOptions = {
          center: myLatLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)

         var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Wall Street Wines!'
        });

         var contentString = "<div><h5>Wall Street Wines!</h5><a href = ''>Visit our website</a></div>";

         var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

     
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });



      }
      google.maps.event.addDomListener(window, 'load', initialize);


