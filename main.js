const moviesearch = async () => {
  console.log(userinput.value);
  if (userinput.value) {
    const response = await fetch(`https://www.omdbapi.com/?t=${userinput.value}&apikey=e0c15d62`);
    console.log(response);
    if (response.status == 200) {
      const filimdetails = await response.json();
      console.log(filimdetails);
      // Check if the response is valid
      if (filimdetails.Response === "True") {
        document.getElementById("movie").innerHTML = `
          <img src=${filimdetails.Poster} alt="" class="mainimg">
          <div class="content">
            <div class="aboutmovie">
              <h1>${filimdetails.Title}</h1>
              <div class="time">
                <p><span>Release Date: </span> ${filimdetails.Released}</p>
                <p><span>Genre: </span>${filimdetails.Genre}</p>
              </div>
              <p><span>Language: </span>${filimdetails.Language}</p>
              <p>${filimdetails.Plot}</p>
              <p><span>Actors: </span>${filimdetails.Actors}</p>
              <div class="playmorebtn">
                <button>Play</button>
                <button>More Info</button>
              </div>
              <div class="time">
                <p><span>Country:</span> ${filimdetails.Country}</p>
                <p><span>Writer: </span>${filimdetails.Writer}</p>
                <p><span>Awards: </span>${filimdetails.Awards}</p>
              </div>
            </div>
            <div class="postermovie">
              <img src=${filimdetails.Poster} alt="">
            </div>
          </div>`;
      } else {
        alert("Enter a valid movie name!");
      }
    } else {
      alert("Something went wrong. Please try again.");
    }
  } else {
    alert("Please enter a movie name");
  }
};
