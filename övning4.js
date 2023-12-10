var movies = [
    { title: "Batman Begins", year: 2005 },
    { title: "Batman", year: 1989 },
    { title: "Batman Returns", year: 1992 },
    { title: "Batman Forever", year: 1995 },
    { title: "Batman & Robin", year: 1997 },
    { title: "Batman: Under the Red Hood", year: 2010 },
    { title: "Batman: The Dark Knight Returns, Part 1", year: 2012 },
    { title: "Batman: Mask of the Phantasm", year: 1993 },
    { title: "Batman: The Movie", year: 1966 },
    { title: "Batman: The Dark Knight Returns, Part 2", year: 2013 }
];

var moviesYear = movies.filter(function(years) {
    return years.year > 2000;
})
.map(function(movie) {
    return movie;
})

console.log(moviesYear);