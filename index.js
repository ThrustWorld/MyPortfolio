// Rumbling 20's Remake 
var i = 1;
var rumbling20RemakeImgs = ["Photos/Rumbling20'sRemake/rumbling_20_s_remake_0.png","Photos/Rumbling20'sRemake/rumbling_20_s_remake_1.jpg",
                            "Photos/Rumbling20'sRemake/rumbling_20_s_remake_2.jpg","Photos/Rumbling20'sRemake/rumbling_20_s_remake_3.jpg",
                            "Photos/Rumbling20'sRemake/rumbling_20_s_remake_4.jpg"];
// Nightmare Before Eco Congress
var j = 1;
var nigthmareBeforeEcoCongressImgs = ["Photos/NightmareBeforeEcoCongress/nightmare_before_eco_congress_0.png","Photos/NightmareBeforeEcoCongress/nightmare_before_eco_congress_1.jpg",
                                      "Photos/NightmareBeforeEcoCongress/nightmare_before_eco_congress_2.jpg","Photos/NightmareBeforeEcoCongress/nightmare_before_eco_congress_3.jpg",
                                      "Photos/NightmareBeforeEcoCongress/nightmare_before_eco_congress_4.jpg","Photos/NightmareBeforeEcoCongress/nightmare_before_eco_congress_5.jpg",
                                      "Photos/NightmareBeforeEcoCongress/nightmare_before_eco_congress_6.jpg","Photos/NightmareBeforeEcoCongress/nightmare_before_eco_congress_7.jpg"];
// Dirty City
var k = 1;
var dirtyCityImgs = ["Photos/DirtyCity/dirty_city_0.jpg","Photos/DirtyCity/dirty_city_1.jpg",
                     "Photos/DirtyCity/dirty_city_2.jpg","Photos/DirtyCity/dirty_city_3.jpg",
                     "Photos/DirtyCity/dirty_city_4.jpg","Photos/DirtyCity/dirty_city_5.PNG"];

function nextImage(id)
{
    let element = document.getElementById(id);
    // take the array with the right images
    switch(element.name)
    {
        case "Rumbling 20's Remake":
            changeImage(element,rumbling20RemakeImgs,i);
            i>= rumbling20RemakeImgs.length - 1 ? i = 0 : i++; // if we reached last image, we restart the count
            break;
        
        case "Nightmare Before Eco Congress":
            changeImage(element,nigthmareBeforeEcoCongressImgs,j);
            j>= nigthmareBeforeEcoCongressImgs.length - 1 ? j = 0 : j++; // if we reached last image, we restart the count
            break;
        
        case "Dirty City":
            changeImage(element,dirtyCityImgs,k);
            k>= dirtyCityImgs.length - 1 ? k = 0 : k++; // if we reached last image, we restart the count
        default:
            break;
    }
}

function changeImage(element, imagesArr, iterativeNumber)
{
    element.src = imagesArr[iterativeNumber]; // update image with the next one
}