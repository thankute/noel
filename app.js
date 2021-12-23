var flake = document.querySelector(".flake")
var container = document.querySelector('.container')
var yes = document.querySelector(".yes")
var no = document.querySelector('.no') 
var popup = document.querySelector('.popup')

no.onmouseenter = function() {
    this.style.top = Math.random() * window.innerHeight + "px"
    this.style.left = Math.random() * window.innerWidth + "px"

}


yes.onclick = function() {
    popup.classList.remove('hidden')
}

popup.onclick = function() {
    popup.classList.toggle('hidden')
}




function createFlake() {
    var clone = flake.cloneNode(true)

    clone.style.paddingLeft = Math.random() * 50 + "px"

    clone.style.animationDuration = Math.random() * 5 + 3 + "s";
    clone.opacity = Math.random() *1;
    container.append(clone);
}

var s = setInterval(createFlake, 100);

setTimeout(() => {
    clearInterval(s);
},3000)