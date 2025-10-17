let poi = [
    {
        id: "elia",
        title: "Elia",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/73/27/7d/img-20190508-091616-largejpg.jpg?w=700&h=-1&s=1",
        description: "En kage fra Bagedysten? Et pindsvin? Et biogasanlæg? Hvad skjuler den? Er den hul? Hvorfor? \n Den rejser flere spørgsmål, end den tilbyder svar. I hvert fald kan den undre."
    },
     {
        id: "heart",
        title: "Skulpturparken",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5a/8c/19/stemning-inden-i-huset.jpg?w=1000&h=-1&s=1",
        description: "HEART – Herning Museum of Contemporary Art er et 5.600 kvadratmeter stort kunstmuseum i Herning, tegnet af den amerikanske arkitekt Steven Holl."
    }, {
        id: "karl",
        title: "karl-henning pedersen",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/72/78/a7/photo0jpg.jpg?w=1000&h=-1&s=1",
        description: "Carl-Henning Pedersen og Else Alfelts Museum er et kunstmuseum i Birk uden for Herning. Det blev indviet i 1976 og rummer mere end 4.000 værker af Carl-Henning Pedersen og Else Alfelt."
    }, {
        id: "haver",
        title: "De geometriske haver",
        img: "https://gdkfiles.visitdenmark.com/files/471/158954_De_Geometriske_Haver._Foto_Herning_Kommune.jpg?width=1024",
        description: "De Geometriske Haver er, som det øvrige museumsområde i Birk Centerpark, anlagt efter havearkitekt professor C. Th. Sørensens planer. Haverne er inspireret af den franske barokhave og er anlagt med præcise geometriske former og symmetri."
    }, {
        id: "skulpturparken",
        title: "Skulpturparken",
        img: "https://gdkfiles.visitdenmark.com/files/471/267926_Egeparken---Skulpturparken-2021---Foto-Jannie-Nyegaard---1024x576---04.jpg?width=1024",
        description: "Skulpturparken byder på nutidskunst af forskellige kunstnere med en variation i formsprog, materialer og genrer. Flere af værkerne er skabt i Herning, mens kunstnerne var inviteret hertil af Bitten og Aage Damgaard for at arbejde med kunsten."
    }, {
        id: "hojhuset",
        title: "Højhuset",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/539572380.jpg?k=939acd5f2a68b75d7f048bb94e70f7a997635e90205883e15838aa19117716ac&o=",
        description: "Her er vi det hele. Kulturhus, hotel, selskabsrestaurant og økologisk landbrug. Hotellet byder på 58 enkeltværelser, 23 dobbeltværelser og 5 lejligheder. Højhuset er kunst, kultur, musik og fællesarrangementer, design og arkitektur."
    }
]
let selected;
let selectedId;
let active;
let spot;
const popover = document.querySelector('#popover');
const popoverText = document.querySelector('#popover p');
const popoverImg = document.querySelector('#popover img');

document.addEventListener("click", () => {
 //tjekker om popover er åben når der klikkes, hvis ikke så sæt spot til rød
    if (!popover.matches(":popover-open")) {
         spot.setAttribute("fill", "red")
    }
  });



document.querySelector('#poi').addEventListener('click', (e) => {clicked(e)});

function clicked(obj) {

    // a. find det klikkede element
    //----------------------------------------------
selected = obj.target.parentElement;
    // b. find det klikkede elementets ID
    //---------------------------------------------
selectedId = obj.target.parentElement.id;

//console.log(poi);
   // d. vis infoboks
    //--------------------------------------------
poi.forEach(sted => {
    if(sted.id == selectedId) {
        console.log("match");
         //indsæt tekst og billede
        popoverText.textContent = sted.description;
       popoverImg.setAttribute("src", sted.img);
    }
});
if(active != undefined){
    spot.setAttribute("fill", "red")
     
}
    //gør det klikkede til det aktive
    //-------------------------------------------------------------------------
active = selectedId;


    // e. markér det valgte punkt på kortet
spot = document.querySelector('#'+active+" circle");
//console.log(spot);
spot.setAttribute("fill", "orange");
    // f. vis/fjern popover
    //---------------------------------------------
const popupOpened = popover.togglePopover();


}