// var http= new XMLHttpRequest();
// http.open("GET" , "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
// http.send();
// http.addEventListener("readystatechange" ,function(){

//     if(http.readyState == 4 ){
//         console.log(JSON.parse(http.response))
//     }
// })

var http= new XMLHttpRequest();
var catlist='';
var counter=``;
var navlist='';
var nav=``;
 craetenav()

function craetenav(){

    //1- haty l categories w 7otyha fy el nav list
 
 
    var myhttp= new XMLHttpRequest();
 
    myhttp.open("GET" , `https://www.themealdb.com/api/json/v1/1/categories.php`)
    myhttp.send();
    myhttp.addEventListener("readystatechange" ,function(){
        if(myhttp.readyState==4&& myhttp.status==200)
        {
 
       
         navlist =JSON.parse(myhttp.response);
      navlist= navlist.categories
         displaynav();
        
 
 
 
 
        }
 
    })
 
 
 
 }
 
 function  displaynav(){
     var nav=``
 
     for (let i = 0; i<navlist.length-1; i++) {
 
         nav+=` 
         
         <li class="nav-item ">
         <a class="nav-link" href="#" " id="navitem" onclick="test()">${navlist[i].strCategory} </a>
       </li>
 
         `
         
     }
 
 
     document.querySelector(".navbar-nav").innerHTML=nav
 }
 
 
 
 
 function test(){
     
  var navitem= document.querySelectorAll(".nav-link");//nodelistt
 
  for(var i=0 ; i<navitem.length ;i++)
  {
 
     navitem[i].addEventListener("click" , discon)
 
  }
 
 }
 
 function discon(einfo){
    catName= console.log(einfo.target.innerHTML)
    getCat(catName)
 }
 

getCat("Beef")

function getCat(cat){

    http.open("GET" , `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
    http.send();
    http.addEventListener("readystatechange" ,function(){
        if(http.readyState==4&& http.status==200)
        {
            catlist =JSON.parse(http.response);
            catlist= catlist.meals
            displaymeals();




        }

    })

}


function  displaymeals(){

for(var i=0 ; i<catlist?.length; i++){

counter+=`
<div class="col-md-4">

       <a href="${catlist[i].strMealThumb}"> <img class="img-fluid" src="${catlist[i].strMealThumb}"></a>
        
         
          <h2 class="text-center">${catlist[i].strMeal}</h2>
          <p class="text-center">${catlist[i].idMeal}</p>
        </div>
      </div>
    


`



    }
document.querySelector(".row").innerHTML=counter

}






