console.log('window.location.href', window.location.href)
fetch('https://www.google.com')
    .then(x => console.log('success', x.text()))
    .catch(x => console.log('error', x))