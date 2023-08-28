window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 100)
};

window.onload = function(event) {
    document.querySelector('body').style.opacity = 1
};