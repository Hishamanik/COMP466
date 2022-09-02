var photos = {
	"img": ["../shared/img1.jpg", "../shared/img2.jpg", "../shared/img3.jpg", 
	"../shared/img4.jpg", "../shared/img5.jpg", "../shared/img6.jpg", "../shared/img7.jpg"],
	"caption": ["Sunrise in a Village", "Dhaka", "National Flag of Bangladesh", 
	"Boat in a Bangladesh river", "Wedding cooking", "After fising", 
	"Vegetable market in Bangladesh"]
};

var shuffle = false;

var slideshow = document.getElementById('slideshow');
var pIndex = document.getElementById("pIndex");


var x = slideshow.getContext('2d');
var interval;
var index = 0;


window.onload = function()
{
	loadImage();
}

function loadImage()
{
    clearInterval(interval);
	x.clearRect(0,0, slideshow.width, slideshow.height);

	var pic = new Image();
	pic.onload = function() {
    	pEffect(pic)
    };
	
	pic.src = photos.img[index];

	caption();

}
function caption(){
 	var num = index + 1;
	pIndex.textContent = "Photo #" + num;
	pCaption.textContent = photos.caption[num -1 ];
 }
