// Rumbling 20's Remake 
var i = 1;
var rumbling20RemakeImgs = ["/Photos/rumbling_20_s_remake.png","/Photos/facebook.png","/Photos/github.png","Photos/dirty_city.PNG"];
// Nightmare Before Eco Congress
var j = 1;
var nigthmareBeforeEcoCongressImgs = ["/Photos/nightmare_before_eco_congress.png","/Photos/facebook.png","/Photos/github.png","Photos/dirty_city.PNG"];
// Dirty City
var k = 1;
var dirtyCityImgs = ["/Photos/dirty_city.PNG","/Photos/blank-head-profile-pic-for-a-man.jpg","/Photos/github.png","Photos/dirty_city.PNG"];

function nextImage(id)
{
    let element = document.getElementById(id);
    // take the array with the right images
    switch(element.name)
    {
        case "Rumbling 20's Remake":
            changeImage(element,rumbling20RemakeImgs,i); 
            if(i >= rumbling20RemakeImgs.length - 1)   // check if last image is shown
            {
                i = 0; // first image
            } 
            else
            {
                i++; // next image
            }
            break;
        
        case "Nightmare Before Eco Congress":
            changeImage(element,nigthmareBeforeEcoCongressImgs,j);
            if(j >= nigthmareBeforeEcoCongressImgs.length - 1) // check if last image is shown
            {
                j = 0; // first image
            } 
            else
            {
                j++; // next image
            }
            break;
        
        case "Dirty City":
            changeImage(element,dirtyCityImgs,k);
            if(k >= dirtyCityImgs.length - 1) // check if last image is shown
            {
                k = 0; // first image
            } 
            else
            {
                k++; // next image
            }
            break;
        
        default:
            break;
    }
}

function changeImage(element, imagesArr, iterativeNumber)
{
    element.src = imagesArr[iterativeNumber]; // update image with the next one
}