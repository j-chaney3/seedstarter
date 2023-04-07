class Seed {
    constructor(type, season, start) {
        this.type = type;
        this.season = season;
        this.start = start;
    }

    plantMe() {



        let div = document.getElementById(this.season);
        
        let b = document.createElement('button');
        let br = document.createElement('br');
        b.setAttribute('class', 'btn btn-success btn-sm mt-1');
        b.setAttribute('data-html', 'true');
        b.setAttribute('data-toggle', 'tooltip');
        b.setAttribute('data-placement', 'right');
        b.setAttribute('title', `${this.type} <br> ${this.start}`);
    
        b.textContent = this.type;
        div.appendChild(b);
        div.appendChild(br);
    }
}
//spring
const carrot = new Seed("carrot", "spring", "march 1st");
carrot.plantMe();
const onion = new Seed("Onion", "spring", "march 8th");
onion.plantMe();
//summer
const tomato = new Seed("Tomato", "summer", "June 1st");
tomato.plantMe();
//fall
const garlic = new Seed("Garlic", "fall", "September 1st");
garlic.plantMe();
//winter








$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

