
function displayPage(page){
 console.log('Display page "'+page+'"');
 var pages = document.getElementsByName('page');
 for (var i=0 ; i < pages.length ; i++){
  pages[i].style.display = pages[i].id==page ? '' : 'none';
 }
}

console.log('Main JS file is loaded.');

$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();   

});
