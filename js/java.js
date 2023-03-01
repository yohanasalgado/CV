
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}

let nav = document.querySelector('#navbar-example2'),
        navPosition = nav.offsetTop;
        navTop = nav.style.top;
    window.onscroll = () =>{
        (window.pageYOffset >= navPosition) ? nav.style.top = '0': nav.style.top = navTop;
    };