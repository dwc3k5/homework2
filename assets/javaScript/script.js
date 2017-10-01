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
/* goes off the index button
function index() {
    document.getElementById("demo").src= "assets/images/pikachu.jpg";
}
function index2() {
  document.getElementById("demo2").innerHTML= "oh God Please Work";
}

/**/
