
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    $wikiElem.text("");
    $nytElem.text("");

var streetStr=$('#street').val();
var cityStr=$('#city').val();
var address= streetStr + ',' + cityStr;

$greeting.text('so, you want to live at ' + address + '?');

var streetviewUrl='http://maps.googleapis.com/maps/api/streetview?size=600x400&location='
+ address + '';
$body.append('<img class="bgimg" src= "' + streetviewUrl + '">');

var nytimesUrl='http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr +
'&sort=newest&api-key=996ce443d84a7d68d08397647fbbc140:19:72112541';

$.getJSON(nytimesUrl, function(data){
  $nytHeaderElem.text('New York Times Articles About ' + cityStr);

  articles = data.response.docs;

  for(var i=0; i< articles.length;i++){
    var article= articles[i];
    $nytElem.append('<li class= "article">' + '<a href= "' + articles.web_url + '">'
    + article.headline.main + '</a>' +  '<p>' + article.snippet + '</p>' + '</li>');
}

})
.error(function(e){
  $nytHeaderElem.text('New York Times Articles Could Not Be Found ');

})

var wikiUrl='http://en.wikipedia.org/w/api.php?action=opensearch&search=' + cityStr
 + '&format=json&callback=wikiCallback';

 var wikiRequestTimeout=setTimeout(function(){
   $wikiElem.text("Failed To Get Wikipedia Resources");
 },8000);

 $.ajax({
   url:wikiUrl,
   dataType:"jsonp",
  success: function(response ){
  var articleList = response[1];
  for(var i=0; i < articleList.length;i++)
     {
       articleStr = articleList[i];
       var url='http://en.wikipedia.org/wiki/' + articleStr;
       $wikiElem.append('<li><a href= "' + url + '">' + articleStr + '</a></li>');
     };
     clearTimeout(wikiRequestTimeout);
   }
 });
     return false;
}
//shows dialog box/alert when clicking the events using javascript/jquery
$(document).ready(function() {

 $('#search').click(function () {
  alert('search.click()');
  return true;
 });

});

function button_onClick() {
 $('#search').click();
}
function search_onClick() {
 alert('search_onClick');
}

//animations of animate+ button and animate- button

$(document).ready(function(){
    $(".btn1").click(function(){
        $("p").animate({wordSpacing: "+=15px"});
    });
    $(".btn2").click(function(){
        $("p").animate({wordSpacing: "-=15px"});
    });
});
$('#form-container').submit(loadData);
