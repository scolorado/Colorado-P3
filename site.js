/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/

const vue_app = Vue.createApp({
  // This automatically imports your movies.json file and puts it into
  //   the variable: movies
  created () {
        fetch('movies.json').then(response => response.json()).then(json => {
              this.movies = json
        })
  },
  data() {
    return {
        // This holds your movies.json data.
        movies: [],
        /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
        trueMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        Title: "IMDB + Sofia's Top 8 Movies",
        owner: " Sofia Colorado",
        github: "https://github.com/scolorado/Colorado-P3",
     
  }
},
  methods: {
        /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
        getMonthText(dateArray) {
            var year = dateArray[0];
            var month = this.trueMonths[dateArray[1] - 1];
            var day = dateArray[2];
            return month + ' ' + day + ', ' + year;
        },

        like(index){
            this.movies[index].likes++;
        },
        dislike(index){
            this.movies[index].dislikes++;
        },
        posterClick(index){
            if(this.movies[index].posterindex < this.movies[index].posters.length) {
                  this.movies[index].posterindex++;
            };
            if(this.movies[index].posterindex >= this.movies[index].posters.length) {
                  this.movies[index].posterindex = 0;
            }
        },
        timeText(minutes){
            var hours = Math.floor(minutes/60);
            var minute = minutes % 60;
            return hours + ' hours ' + minute + ' minutes';
        },
  }
})

vue_app.mount("#vue_app")