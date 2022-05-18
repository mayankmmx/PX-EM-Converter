function myFunction() {
  var defaultPixelSize = document.querySelector(".pxsize").value;
  var em = document.querySelector(".em-px").value;

  if (em !== '') {
    var px = parseInt(em) * defaultPixelSize;

    document.querySelector(".result").innerHTML = px.toString() + " px";
  }

}

function myFunction2() {
  var defaultPixelSize = document.querySelector(".pxsize").value;
  var px = document.querySelector(".px-em").value;

  if (px !== '') {
    var em = parseInt(px) / defaultPixelSize;

    document.querySelector(".result").innerHTML = em.toString() + " em";
  }
}

function blury(){
  document.querySelector(".px-em").setAttribute("disabled","disabled");
}

function blury2(){
  document.querySelector(".em-px").setAttribute("disabled","disabled");
}

  function focus1(){
    document.querySelector(".px-em").removeAttribute("disabled");
  }

function focus2(){
  document.querySelector(".em-px").removeAttribute("disabled");
}
