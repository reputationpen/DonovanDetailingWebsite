document.addEventListener("DOMContentLoaded", function(event) {
    var scrollpos = sessionStorage.getItem('scrollpos')
    if (scrollpos) {
        window.scrollTo(0,scrollpos);
        sessionStorage.removeItem('scrollpos')
    }
});

window.onbeforeunload = function(e) {
    sessionStorage.setItem('scrollpos', window.scrollY)
}
document.getElementById('scrolldown').onclick = function() {
    document.getElementById('price').scrollIntoView({behavior:'smooth'})}


const borderfollow = document.getElementsByClassName("borderfollow")

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    borderfollow.animate({
        left: `${clientX}px`,
        top: `${clientY+window.innerHeight}px`
    }, { duration: 500, fill: "forwards" });
}