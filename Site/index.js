document.getElementById('proxy-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const url = document.getElementById('url-input').value;
    const iframe = document.getElementById('proxy-frame');
    
    // Adding 'https://' if the user doesn't include it
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    iframe.src = url;
});
