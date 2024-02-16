// the main placeholder is Viewer and the smaller images are littlePic
// the same things that work for mouse over and mouseout should work here except we have to give littlePics a 
//tabindex.

//function assignTabIndex(){
  //const element = document.querySelector("littlePic");
  //element.setAttribute("tabindex","0"++); 

//Get the parent div element
const parentDiv = document.querySelector('.littlePics');
//Select all the image elements inside the parent div
const images=parentDiv.querySelectorAll('#littlePic');
//loop through the images and assign tabindex
images.forEach((image)=>{
  image.setAttribute('tabindex','0');
});

//for (let i = 1; i <= 6; i++) {
  //let image = document.getElementsById("#littlePic" + i);
 // image.setAttribute("tabIndex", i.toString());
  
 // console.log(image); 
//}


function upDate(previewPic) 
{
  old=document.getElementById("Viewer").innerHTML
  document.getElementById("Viewer").innerHTML=previewPic.alt
  document.getElementById("Viewer").style.background="url("+previewPic.src+")";
 
}
 

	function unDo()
{
  document.getElementById("Viewer").innerHTML=old
  document.getElementById("Viewer").style.background="#8e68ff";
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		
	}


