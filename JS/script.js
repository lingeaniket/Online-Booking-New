$(document).ready(function () {
        $("#header").load('HeaderFooter/header.html');
        $("#header1").load('/HeaderFooter/header.html');
        //Avatar2
        $("#cityPrideSataraRoadAvatar2-3Jan23").load('/Theaters/3Jan23/cityPrideSataraRoad.html #showSpaceAvatar2');
        $("#cinePolisSeasonsAvatar2-3Jan23").load('/Theaters/3Jan23/cinePolisSeasons.html #showSpaceAvatar2');

        $("#cityPrideSataraRoadAvatar2-4Jan23").load('/Theaters/4Jan23/cityPrideSataraRoad.html #showSpaceAvatar2');
        $("#cinePolisSeasonsAvatar2-4Jan23").load('/Theaters/4Jan23/cinePolisSeasons.html #showSpaceAvatar2');

        //Drishyam2
        $("#cityPrideSataraRoadDrishyam2-3Jan23").load('/Theaters/3Jan23/cityPrideSataraRoad.html #showSpaceDrishyam2');
        $("#cinePolisSeasonsDrishyam2-3Jan23").load('/Theaters/3Jan23/cinePolisSeasons.html #showSpaceDrishyam2');

        $("#cityPrideSataraRoadDrishyam2-4Jan23").load('/Theaters/4Jan23/cityPrideSataraRoad.html #showSpaceDrishyam2');
        $("#cinePolisSeasonsDrishyam2-4Jan23").load('/Theaters/4Jan23/cinePolisSeasons.html #showSpaceDrishyam2');
});
var movieName = "";
$(document).ready(function loadMovieInfoAvatar2() {
        $('#openAvatar2Info').load('/MovieInfo/movie.html #avatar2');
});


$(document).ready(function loadMovieInfoVed() {
        $('#openVedInfo').load('/MovieInfo/movie.html #ved');
});

$(document).ready(function loadMovieInfoDrishyam2() {
        movieName = "drishyam2"
        $('#openDrishyam2Info').load('/MovieInfo/movie.html #drishyam2');
});

$(document).ready(function loadMovieInfoConnect() {
        $('#openConnectInfo').load('/MovieInfo/movie.html #connect');
});

$(document).ready(function loadMovieInfoHit2() {
        $('#openHit2Info').load('/MovieInfo/movie.html #hit2');
});

$(document).ready(function loadMovieInfoAnActionHero() {
        $('#openAnActionHeroInfo').load('/MovieInfo/movie.html #anActionHero');
});

$(document).ready(function loadMovieInfoProjapati() {
        $('#openProjapatiInfo').load('/MovieInfo/movie.html #projapati');
});




