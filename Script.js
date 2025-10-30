// Image lists for each gallery
const galleries = {
    gallery1: [ //ASIN pictures
        "img/ASIN1.jpg",
        "img/ASIN2.jpg"
        ],
    gallery2: [ //AV pictures
        "img/AV1.jpg",
        "img/AV2.PNG"
        ],
    gallery3: [ // Badminton Pictures
        "img/Badminton1.jpg",
        "img/Badminton2.jpg",
        "img/Badminton3.jpg",
        "img/Badminton4.jpg"
        ],
    gallery4: [ // Balik Talent pictures
        "img/Balik Talent1.jpg",
        "img/Balik Talent2.jpg"
        ],
    gallery5: [ //Battlezone Pictures
        "img/Battlezone1.jpeg",
        "img/Battlezone2.jpeg",
        "img/Battlezone3.jpeg"
        ],
    gallery6: [ //CCS orientation pictures
        "img/CCS Orientation1.jpg",
        "img/CCS Orientation2.jpg"
        ],
    gallery7: [ //Confed Pictures
        "img/Confed1.PNG",
        "img/Confed2.PNG",
        "img/Confed3.PNG",
        "img/Confed4.PNG",
        "img/Confed5.PNG",
        "img/Confed6.PNG",
        "img/Confed7.jpg"
        ],
    gallery8: [ //Galilean fellowship pictures
        "img/Galilean Fellowship1.jpg",
        "img/Galiliean Fellowship2.jpg"
        ],
    gallery9: [ //GE 10 donation pictures
        "img/GE 10 Donation1.jpeg",
        "img/GE 10 Donation2.jpeg"
        ],
    gallery10: [ //Genesis pictures
        "img/Genesis1.jpg",
        "img/Genesis2.jpg",
        "img/Genesis3.jpg"
        ],
    gallery11: [ //opera pictures
        "img/Opera1.jpg",
        "img/Opera2.jpg",
        "img/Opera3.jpg"
        ],
    gallery12: [ //sound scapes pictures
        "img/Piano1.jpg",
        "img/Piano2.jpg",
        "img/Piano3.jpg",
        "img/Piano4.jpg"
        ],
    gallery13: [ //ROTC blood donation
        "img/ROTC Blood Donation1.jpg",
        "img/ROTC Blood Donation2.jpg",
        ],
    gallery14: [ //ROTC rice donation
        "img/ROTC Donation1.PNG",
        "img/ROTC Donation2.PNG"
        ],
    gallery15: [ //ROTC POS pictures
        "img/ROTC POS1.jpeg",
        "img/ROTC POS2.jpeg"
        ],
    gallery16: [ //Soundman pictures
        "img/Soundman1.jpeg",
        "img/Soundman2.jpg"
        ],
    gallery17: [ // Sunday School pictures
        "img/Sunday School1.PNG",
        "img/Sunday School2.PNG"
        ],
    gallery18: [ //Swan Lake pictures
        "img/Swan Lake1.jpg",
        "img/Swan Lake2.jpg",
        "img/Swan Lake3.jpg",
        "img/Swan Lake4.jpg"
        ],
    gallery19: [ // Worship Team pictures
        "img/Worship Team2.PNG",
        "img/Worship Team1.PNG"
        ],
    gallery20: [ // SU Midweek
        "img/SU Midweek.jpg",
        "img/SU Midweek2.png"
        ],
    gallery21: [ // Chess Tournament
        "img/Chess1.jpg",
        "img/Chess2.jpg",
        "img/Chess3.jpg",
        "img/Chess4.jpg"
        ],
};

// Track current index for each gallery
const currentIndex = {};
for (let id in galleries) {
    currentIndex[id] = 0;
}

// Update displayed image
function updateGallery(id) {
    const imgElement = document.getElementById(id);
    imgElement.src = galleries[id][currentIndex[id]];
}

// Show next image
function nextImage(id) {
    currentIndex[id]++;
        if (currentIndex[id] >= galleries[id].length) {
        currentIndex[id] = 0;
    }
    updateGallery(id);
}

// Show previous image
function prevImage(id) {
    currentIndex[id]--;
        if (currentIndex[id] < 0) {
        currentIndex[id] = galleries[id].length - 1;
    }
    updateGallery(id);
}
