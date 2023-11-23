function movieGenerator(random) {
  var movieArry = movie();
  var arrayElement = movieArry[random];

  return arrayElement;
}

function randomNumberGenerator() {
  var random = Math.floor(Math.random() * movie().length);
  return random;
}

function getMovie() {
  let title = document.getElementById("displayMovieTitle");
  let name = document.getElementById("displayMovieName");
  let id = document.getElementById("displayMovieId");
  let image = document.getElementById("img");

  var random = randomNumberGenerator();

  while (random === parseInt(id.innerHTML)) {
    random = randomNumberGenerator();
  }
  var arrayElement = movieGenerator(random);

  id.innerHTML = random;
  title.innerHTML = arrayElement.movie;
  name.innerHTML = arrayElement.title;
  image.src = "./img/" + arrayElement.image;
}

function userDetails() {
  let registerNumber = document.getElementById("r_num");
  let registerName = document.getElementById("r_name");

  registerNumber.innerHTML = "SOF/22/B2/03";
  registerName.innerHTML = "Mahesh Dissanayaka";
}
