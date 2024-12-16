document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    /*   L.Routing.control({
       waypoints:[
           L.latLng(35.463873, 139.532719),
           L.latLng(35.464569, 139.532322),
           L.latLng(35.465201, 139.531942),
           L.latLng(35.465851, 139.531054),
           L.latLng(35.466748, 139.530364),
           L.latLng(35.467744, 139.529556),
           L.latLng(35.467969, 139.528320),
           L.latLng(35.467293, 139.526925),
           L.latLng(35.467911, 139.523743),
           L.latLng(35.468558, 139.521437),
           L.latLng(35.469345, 139.522095)
       ],
       routeWhileDragging: true,
       createMarker: function() { return null; }
   }).addTo(map);
   map.fitBounds(polyline.getBounds());*/

    //経由地を線でつないだけのやつ
    var latlngs = [
        [35.463873, 139.532719],
        [35.464569, 139.532322],
        [35.465201, 139.531942],
        [35.465851, 139.531054],
        [35.466748, 139.530364],
        [35.467744, 139.529556],
        [35.467969, 139.528320],
        [35.467293, 139.526925],
        [35.467911, 139.523743],
        [35.468558, 139.521437],
        [35.469345, 139.522095]
    ]
    var polyline = L.polyline(latlngs, { color: 'gray' }).addTo(map);
    var count = 1;
    var waypoints = [
        { lat: 35.463873, lng: 139.532719 },
        { lat: 35.464569, lng: 139.532322 },
        { lat: 35.465201, lng: 139.531942 },
        { lat: 35.465851, lng: 139.531054 },
        { lat: 35.466748, lng: 139.530364 },
        { lat: 35.467744, lng: 139.529556 },
        { lat: 35.467969, lng: 139.528320 },
        { lat: 35.467293, lng: 139.526925 },
        { lat: 35.467911, lng: 139.523743 },
        { lat: 35.468558, lng: 139.521437 },
        { lat: 35.469345, lng: 139.522095 }
    ]
    waypoints.forEach(function (waypoint) {
        L.marker([waypoint.lat, waypoint.lng]).addTo(map)
            .bindPopup(waypoint.text);
    });
    map.fitBounds(polyline.getBounds());
})
