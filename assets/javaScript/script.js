/*
variables not working... need to figure them out for more concise code

var getIndex = document.getElementById('indexFormat');
var getPortfolio = document.getElementById('portfolioFormat');
var getContact = document.getElementById('contactFormat');
*/
function index(){
  document.getElementById('indexFormat').style.display = 'block';
  document.getElementById('portfolioFormat').style.display = 'none';
  document.getElementById('contactFormat').style.display = 'none';
}
function portfolio(){
  document.getElementById('indexFormat').style.display = 'none';
  document.getElementById('portfolioFormat').style.display = 'block';
  document.getElementById('contactFormat').style.display = 'none';
}
function contact(){
  document.getElementById('indexFormat').style.display = 'none';
  document.getElementById('portfolioFormat').style.display = 'none';
  document.getElementById('contactFormat').style.display = 'block';
}
/*
test function confirming js is connected and working
triggered by "David Cox" top left corner
*/
function demo() {
    document.getElementById("test").src= "assets/images/pikachu.jpg";
    document.getElementById("test2").innerHTML= "oh God Please Work";
}
function index2() {

}

/**/
