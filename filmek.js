const filmek = [
  {
    "title": "Ratatouille",
    "year": 2007,
    "genre": "Animation",
    "rating": 5
  },
  {
    "title": "Kung Fu Panda",
    "year": 2008,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Up",
    "year": 2009,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Toy Story 3",
    "year": 2010,
    "genre": "Animation",
    "rating": 1
  },
  {
    "title": "Frozen",
    "year": 2013,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Inside Out",
    "year": 2015,
    "genre": "Animation",
    "rating": 5
  },
  {
    "title": "Zootopia",
    "year": 2016,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Coco",
    "year": 2017,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "genre": "Animation",
    "rating": 3
  },
  {
    "title": "Joker",
    "year": 2019,
    "genre": "Drama",
    "rating": 4
  },
  {
    "title": "Parasite",
    "year": 2019,
    "genre": "Thriller",
    "rating": 4
  },
  {
    "title": "Encanto",
    "year": 2021,
    "genre": "Animation",
    "rating": 2
  },
  {
    "title": "Everything Everywhere All at Once",
    "year": 2022,
    "genre": "Action",
    "rating": 3
  },
  {
    "title": "The Super Mario Bros. Movie",
    "year": 2023,
    "genre": "Animation",
    "rating": 2
  },
  {
    "title": "Inside Out 2",
    "year": 2024,
    "genre": "Animation",
    "rating": 5
  }
];
const table = document.getElementById('tartalom')
for (const film of filmek)
{
    const ujsor = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = film.title
    const td2 = document.createElement('td');
    td2.innerText = film.year
    const td3 = document.createElement('td');
    td3.innerText = film.genre
    const td4 = document.createElement('td');
    td4.innerText = film.rating
   
    if (td4.innerText == "1" || td4.innerText == "2") {
      td4.classList.add("low-rating")
    }
    if (td4.innerText == "1") {
      td4.innerText = "⭐"
    }
    else if (td4.innerText == "2") {
      td4.innerText = "⭐⭐"
    }
    else if (td4.innerText == "3") {
      td4.innerText = "⭐⭐⭐"
    }
    else if (td4.innerText == "4") {
      td4.innerText = "⭐⭐⭐⭐"
    }
    else {
      td4.innerText = "⭐⭐⭐⭐⭐"
    }
    ujsor.appendChild(td1)
    ujsor.appendChild(td2)
    ujsor.appendChild(td3)
    ujsor.appendChild(td4)
    table.appendChild(ujsor);
}
const formatum = document.getElementById('formatum')
formatum.addEventListener('submit', (e) => {
    e.preventDefault();
    const nev = document.getElementById('fname');
    const ev = document.getElementById('year');
    const tipus = document.getElementById('genre');
    const ertekeles = document.getElementById('rating');
    const ujsor = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = nev.value;
    const td2 = document.createElement('td');
    td2.innerText = ev.value;
    const td3 = document.createElement('td');
    td3.innerText = tipus.value;
    const td4 = document.createElement('td');
    td4.innerText = ertekeles.value;
   
    if (td4.innerText == "1" || td4.innerText == "2") {
      td4.classList.add("low-rating")
    }
    if (td4.innerText == "1") {
      td4.innerText = "⭐"
    }
    else if (td4.innerText == "2") {
      td4.innerText = "⭐⭐"
    }
    else if (td4.innerText == "3") {
      td4.innerText = "⭐⭐⭐"
    }
    else if (td4.innerText == "4") {
      td4.innerText = "⭐⭐⭐⭐"
    }
    else {
      td4.innerText = "⭐⭐⭐⭐⭐"
    }
    ujsor.appendChild(td1)
    ujsor.appendChild(td2)
    ujsor.appendChild(td3)
    ujsor.appendChild(td4)
    table.appendChild(ujsor);
});