var mapDiv1=document.getElementById("map1");
var mapDiv2=document.getElementById("map2");
var pinImageDiv=document.getElementById("pin-image");
var actualImage=pinImageDiv.firstElementChild
var pin8=document.getElementById("pin8");

console.log(actualImage)

function displayImage(event){
	var selectedElement=event.target
	if(selectedElement.tagName==="IMG") {
		actualImage.src=selectedElement.parentElement.id+"Image.jpg"
	}
	console.log(selectedElement.tagName);
	console.log(selectedElement.parentElement.id);

}

mapDiv1.onclick=displayImage;

var x=0
var y=0

function putPlaceBeen(event) {
    var x = event.clientX;
	var y = event.clientY; 
	pin8.style.top=y-181+64+"px"
	pin8.style.left=x-45-30+"px"

	console.log(x);
	console.log(y);
}
 
map2.onclick=putPlaceBeen;






