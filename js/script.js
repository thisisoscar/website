function goHome() {
    window.location.href="index.html";
}

function showFindMe() {
    var element = document.querySelector('.dropdown-content');
    element.style.display = 'block';

    let referenceElement = document.getElementsByClassName('dropdown')[0];

    let referenceRect = referenceElement.getBoundingClientRect();
    let referenceTop = referenceRect.top;
    let referenceLeft = referenceRect.left;

    referenceTop += 23;

    element.style.position = 'absolute';
    element.style.top = referenceTop + 'px';
    element.style.left = referenceLeft + 'px';
}
  
function hideFindMe() {
    var element = document.querySelector('.dropdown-content');
    element.style.display = 'none';
}