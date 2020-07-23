$(document).ready(function(){
    $("#searchForm").on("submit", (e) => {
        let searchText = $("#searchText").val();
        getResult(searchText);
        e.preventDefault();
    })
});

function getResult(searchText){
   axios.get("https://api.themoviedb.org/3/search/movie?api_key=ba1da977a1a60ae13e3ab04ad3e37335&language=en-US&query=" + searchText)
    .then(function (response) {
      let movies = response.data.results;
      let output = '';
      $.each(movies, (index, movie) => {
        output+=`
          <div class="col-md-3">
            <div class="tmdb text-center">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
              <h5>${movie.title}</h5>
              <a onclick="movieSelected('${movie.id}')" class="btn btn-primary" href="#">Details</a>
            </div>
          </div>
                `
            });

            $("#movies").html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'details.html';
  return false;
}

function getMovie(){
  let movieId = sessionStorage.getItem('movieId');
  axios.get("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=ba1da977a1a60ae13e3ab04ad3e37335")
    .then(function (response) {
        let movie = response.data;
    let output = `
        <div class="row">
          <div class="col-md-4">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Rated:</strong> ${movie.vote_average}</li>
              <li class="list-group-item"><strong>Tagline:</strong> ${'"'+movie.tagline+'"'}</li>
              <li class="list-group-item"><strong>Genre:</strong> ${movie.genres[0].name}, ${movie.genres[1].name}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.release_date}</li>
              <li class="list-group-item"><strong>Runtime:</strong> ${movie.runtime} min.</li>
              <li class="list-group-item"><strong>Revenue:</strong> ${`$`+movie.revenue.toFixed(0)}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="tmdb">
            <h3>Plot</h3>
            ${movie.overview}
            <hr>
            <a href="http://imdb.com/title/${movie.imdb_id}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
    `;
    $('#movie').html(output);
    })
    .catch(function (error) {
      console.log(error);
    });
}
