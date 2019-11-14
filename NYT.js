//SETUP VARIABLES
//===========================================
var authKey     = "E9B7iR6CwWNfkymAT1QCwbRZG2Lot6m6";
var searchTerm  = "";
var numRecords  = 0;
var startYear   = 0;
var endYear     = 0;

//Url Base
var urlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

//Variable to Track # of articles
var articleCounter = 0;

//FUNCTIONS
//===========================================

function runSearch(numArticles, queryURL){

    //AJAX Function
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(NYTData){

        //Logging to console
        console.log(NYTData);
        console.log(queryURL);
    });
};

//MAIN PROCESSES
//===========================================

$('#searchBtn').on('click', function() {

    searchTerm = $("#search").val().trim();
    console.log(searchTerm);
    
    //add in the search term
    var newURL =urlBase + "&q=" + searchTerm;
    
    
    // //Get the number of records

    // //Get the start year and end year
    startYear = $('#startYear').val().trim();
    endYear = $('#endYear').val().trim();
    
    if (parseInt(startYear)) {
    // //Add the date information to the URL
    newURL = newURL + "&begin_date=" + startYear;
    // //add the necessary fields if there is data in this input
    startYear = startYear + "0101";

    
    }
    if (parseInt(endYear)) {
    //Add the date information to the URL
    newURL = newURL + "&end_date=" + endYear;
    // //add the necessary fields if there is data in this input
    endYear = endYear + "0101";
    }

    // // //Send the AJAX call the newly assembled URL
    runSearch(10, newUrl);
    console.log(newURL);
    return false;
    
    
});
//
// 1) we need to be able to retrieve user inputs and convert to variables
// 2) use those variable to run an AJAX call to the New York Times
// 3) We will get a JSON object that we need to breakdown into usable dields
// 4) Then we will need to dynamically generate the content in our HTML that will generate the information

// 5) Dealing with "edge case" - - bugs or situations that are not obvious


