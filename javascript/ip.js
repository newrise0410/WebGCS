document.getElementById('add-ip').addEventListener('click', function() {
    var ipAddress = document.getElementById('ip-address').value;
    if (ipAddress) {
        var li = document.createElement('li');
        li.textContent = ipAddress;
        document.getElementById('ip-list').appendChild(li);
    }
});
