
/* ------------------- Trending section Data JS ------------------- */
/* ------------------- ---------------- ------------------- */

/* This section contains data for trending content :: */
var trendingSection = [
  // Data for trending content items ::
  
  {
    image:
      " https://is5-ssl.mzstatic.com/image/thumb/3_emSGtqKrdKh-MNRvGwFQ/738x416.webp",
    genre: "KIDS & FAMILY",
    title: "Slumberkins",
    desc: "Cozy creatuers learn how to handle complex feelings.",
  },

  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/JdmLVQN99mIa15_uECg4uw/738x416.webp",
    genre: "COMEDY",
    title: "Acapulco",
    desc: "Maximo is determined to dream even bigger in the sparkling second season",
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/RcgPZ5VHFSmr43fk1fjuMw/1478x832.webp",
    genre: "DOCUMENTRY",
    title: "Louis Armstrong's BLack & Blues ",
    desc: "Experience an unprecedented look into the life of the founding father of jazz.",
  },

  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/_vkF4kzNiSCdmWsVNp0gjw/1478x832.webp",
    genre: "DRAMA",
    title: "Raymond & Ray",
    desc: "Two half brothers leran their deceased, estranged father them to dig his grave.",
  },
  
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/TFK62rQMTTWVNoPgxjIkPQ/738x416.webp",
    genre: "Thriller",
    title: "Hijack",
    desc: "Flight KA29 is hijacked during its seven-hour journey from Dubai to London...",
  },

  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/QSr2iwSvH8UiozdTcESa-w/1478x832.webp",
    genre: "THRILLER",
    title: "The Mosquito Coast",
    desc: "The truth about the fox family comes to light in the shocking second season",
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/CXnyehPcDHEauavhg0D79Q/1478x832.webp",
    genre: "DOCUMENTRY",
    title: "My Mind & Me",
    desc: "Follow Selena's six-year journey from darkness into a new light",
  },

  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/nTZk4gGUlYYK1YMyQ0mPow/1478x832.webp",
    genre: "KIDS & FAMILY",
    title: "Ghostwriter",
    desc: "A group of friends embarks on a series of adventueres.",
  },

  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/PWsYggMXgU6kQrxaB3MZPQ/1478x832.webp",
    genre: "DRAMA",
    title: "Shanataram",
    desc: "Charlie Hunnam is Lin Ford, a wanted criminal looking for redemption in 1980s India",
  },

  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/nnWkHXH4wyIt0sZovHx0tA/1478x832.webp",
    genre: "COMEDY",
    title: "The Problem With Jon Stewart",
    desc: "Jon stewart brings people together to highlight solutions for a problem.",
  },

  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp",
    genre: "Mystery",
    title: "Severance",
    desc: "When a mysterious colleague appears outside of work...",
  },

  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/vkRecJ7JSiYQecCMWMmzOA/1478x832.webp",
    genre: "DRAMA",
    title: "The Graetest Beer Run Ever",
    desc: "Zac Efron as a man who personally brongs beer to his friends fighting in Vietnam.",
  },
];


/* ------------------- Trending section Data control JS ------------------- */
/* ------------------- ---------------- ------------------- */

/* This section controls the display of trending content :: */

// Mapping over the trendingSection data to create HTML elements ::
trendingSection.map(function (element) {
  var div = document.createElement("div");
  div.setAttribute("class", "card");

  var img = document.createElement("img");
  img.setAttribute("class", "card-dp");
  img.setAttribute("src", element.image);

  var contentDiv = document.createElement("div");
  contentDiv.setAttribute("class", "contentDivlatest");

  var genre = document.createElement("p");
  genre.innerText = element.genre;
  genre.setAttribute("class", "genre");

  var title = document.createElement("p");
  title.innerText = element.title;
  title.setAttribute("class", "title");

  var desc = document.createElement("p");
  desc.innerText = element.desc;
  desc.setAttribute("class", "description");

  contentDiv.append(genre, title, desc);

  div.append(img, contentDiv);

  document.querySelector("#trendingSection .trending-glider").append(div);
});

// Initializing a Glider slider for trending content ::
new Glider(document.querySelector("#trendingSection .trending-glider"), {
  slidesToShow: 4,
  slidesToScroll: 4,
  draggable: true,
  arrows: {
    prev: "#trendingSection .glid-prev",
    next: "#trendingSection .glider-next",
  },
  responsive: [
    {
      // screens greater than >= 0px
      breakpoint: 0,
      settings: {
        slidesToShow: "1",
        slidesToScroll: "1",
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 480px
      breakpoint: 481,
      settings: {
        slidesToShow: "1",
        slidesToScroll: "1",
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 775px
      breakpoint: 769,
      settings: {
        slidesToShow: "2",
        slidesToScroll: "2",
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 1280px
      breakpoint: 1280,
      settings: {
        slidesToShow: "3",
        slidesToScroll: "3",
        itemWidth: 150,
        duration: 0.25,
      },
    },
  ],
});


/* ------------------- Most Watched Data JS ------------------- */
/* ------------------- ---------------- ------------------- */

/* This section contains data for most-watched content :: */
var mostWatchedSection = [
   // Data for most-watched content items
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/79/74/84/7974847a-3952-f3ff-0ecb-27df2d767520/8d3dec6e-3743-47e6-b2da-46c79dec01e6.lsr/1478x832fe.webp",
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/3a/f2/23/3af2237c-b647-db35-e023-52463bf49ae7/e96143e1-5c88-46b7-8a49-20d7bc60b4d1.lsr/1478x832fe.webp",
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/c5/14/fd/c514fd7b-84a3-0568-cadb-2fdc1238c843/8e6e3327-ee94-4d4b-bfc6-5ea82cecb7c2.lsr/1478x832fe.webp",
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/2e/ed/a1/2eeda1e5-46fe-3a99-4e38-60d701f707e5/f1bc9f34-4399-4618-92ff-44be7dd53a1f.lsr/1478x832fe.webp",
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/ab/3a/89/ab3a89c5-10e5-aed7-11ed-a8124d569acd/9fc86d8b-b8be-4d89-a590-b8b7841760ee.lsr/1478x832fe.webp",
  },
];

/* ------------------- Most Watched Data control JS ------------------- */
/* ------------------- ---------------- ------------------- */

/* This section controls the display of most-watched content :: */

// Mapping over the mostWatchedSection data to create HTML elements ::
mostWatchedSection.map(function (element) {
  var div = document.createElement("div");
  div.setAttribute("class", "card");
  var img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.setAttribute("src", element.image);
  div.append(img);
  document.querySelector("#mostWatchedSection .mostWatched-glider").append(div);
});


// Initializing a Glider slider for most-watched content ::
new Glider(document.querySelector("#mostWatchedSection .mostWatched-glider"), {
  slidesToShow: 4,
  slidesToScroll: 4,
  draggable: true,
  arrows: {
    prev: "#mostWatchedSection .glider-prev",
    next: "#mostWatchedSection .glider-next",
  },
  responsive: [
    {
      // screens greater than >= 0px
      breakpoint: 0,
      settings: {
        slidesToShow: "1",
        slidesToScroll: "1",
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 480px
      breakpoint: 481,
      settings: {
        slidesToShow: "2",
        slidesToScroll: "2",
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 775px
      breakpoint: 769,
      settings: {
        slidesToShow: "3",
        slidesToScroll: "3",
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 1280px
      breakpoint: 1280,
      settings: {
        slidesToShow: "4",
        slidesToScroll: "4",
        itemWidth: 150,
        duration: 0.25,
      },
    },
  ],
});
