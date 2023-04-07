class Seed {
    constructor(type, season, start, zone) {
        this.type = type;
        this.season = season;
        this.start = start;
        this.zone = zone;
    }

    plantMe() {
        
        let div = document.getElementById(this.season); //div id for planting column
        let b = document.createElement("button");
        let br = document.createElement("br");
        b.setAttribute("class", "btn btn-success btn-sm mt-1");
        b.setAttribute("data-html", "true");
        b.setAttribute("data-toggle", "tooltip");
        b.setAttribute("data-placement", "right");
        b.setAttribute("title", `<u>${this.type}</u> <br> ${this.start} <br> zone: ${this.zone}`);
        b.textContent = this.type;
        div.appendChild(b);
        div.appendChild(br);
    }
}

//spring
const peas = new Seed ("Peas", "spring", "Early spring", 6);
peas.plantMe();
//summer
const tomato = new Seed("Tomato", "summer", "Late may | Early June", 6);
tomato.plantMe();
const beans = new Seed("Beans", "summer", "Late may | Early June", 6)

//fall
const garlic = new Seed("Garlic", "fall", "Early Fall", 6);
garlic.plantMe();
//winter
const carrot = new Seed("Carrots", "winter", "Late winter | Early spring", 6);
carrot.plantMe();
const onion = new Seed("Onion", "winter", "Late winter | Early spring", 6);
onion.plantMe();
const lettuce = new Seed("Lettuce", "winter", "Late winter | Early spring", 6);
lettuce.plantMe();

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


