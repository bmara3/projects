const numberOfFilms = +prompt('Сколько фильмов ты посмотрел?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
const lastFilm = prompt('Один из последних просмотренных фильмов?');
const ratingLastFilm = prompt('На сколько оцените его?');
personalMovieDB.movies.push(`'${lastFilm}': '${ratingLastFilm}'`);
console.log(personalMovieDB);