document.addEventListener("DOMContentLoaded", function () {
    //地図作成
    const map = L.map('map').setView([35.46885, 139.52191], 18)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const marker = L.marker([35.46885, 139.52191]).addTo(map);
    var name="ふみか";
    var date=new Date();
    var datetime=date.getMonth()+"月"+date.getDate()+"日"+date.getHours()+':'+date.getMinutes();
    marker.bindPopup(name + '<b>さんはここにいます</b><br>'+datetime).openPopup();
})