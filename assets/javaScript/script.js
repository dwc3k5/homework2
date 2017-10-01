var getIndex = document.getElementById('indexFormat');
var getPortfolio = document.getElementById('portfolioFormat');
var getContact = document.getElementById('contactFormat');
function index(){
  getIndex.style.display = 'block';
  getPortfolio.style.display = 'none';
  getContact.style.display = 'none';
}
function portfolio(){
  getIndex.style.display = 'none';
  getPortfolio.style.display = 'block';
  getContact.style.display = 'none';
}
function contact(){
  getIndex.style.display = 'none';
  getPortfolio.style.display = 'none';
  getContact.style.display = 'block';
}
/*
test that js is connected and working
goes off the "David Cox" top left corner
*/
function demo() {
    document.getElementById("test").src= "assets/images/pikachu.jpg";
    document.getElementById("test2").innerHTML= "oh God Please Work";
}
function index2() {

}

/**/
