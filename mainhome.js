const navBarLinks = [
    {
        title: "Browse",
        href: "#",
    },
    {
        title: "Landings",
        href: "#",
    },
    {
        title: "Pages",
        href: "#",
    },
    {
        title: "Accounts",
        href:"#"
    },
]

const nav = document.getElementById("nav_links");

const createNavBarLink = (singleLink) => {
    const li = document.createElement("li");
    li.setAttribute("class", "nav-item dropdown");
    const a = document.createElement("a");
    a.innerText = singleLink.title;
    a.href = singleLink.href
    a.setAttribute("class", "nav-link btn btn-secondary dropdown-toggle");
    li.appendChild(a);
    nav.appendChild(li);

}

navBarLinks.forEach(navBarLink => {
    createNavBarLink(navBarLink)
});


const skills = [
    {
     title: "30000 online courses",
     subtitle: "Enjoy a variety of fresh topics",
     img :"https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg",

         
     
     },
     
     
    {
     title: "Expert instruction",
     subtitle: "Find the right instructor for you",
     img: "https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg",
    },
    {
     title: "Lifetime access",
     subtitle: "Learn on your schedule",
     img: "https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg",
    },
]

const skillsContainer = document.getElementById("skills");

const createSkills = (singleSkill => {
    const div = document.createElement("div");
    div.setAttribute("class", "col-12 col-md-4 d-flex gap-3 mt-4 align-items-center justify-content-center");
    const div2 = document.createElement("div");
    div2.setAttribute("class", "d-flex flex-column logo");
    const divImg = document.createElement("div");
    divImg.setAttribute("class", "containerImg");
    const ionicon = document.createElement("ion-icon");
    ionicon.setAttribute("class", "img-logo");
    ionicon.setAttribute("name", "videocam-outline")
    const h4 = document.createElement("h4");
    h4.innerText = singleSkill.title;
    const p = document.createElement("p");
    p.innerText = singleSkill.subtitle;
    divImg.appendChild(ionicon);
    div2.appendChild(h4);
    div2.appendChild(p);
    div.appendChild(divImg);
    div.appendChild(div2);
    
    skillsContainer.appendChild(div);
})

skills.forEach(singleSkill => {
    createSkills(singleSkill);
}) 


const cards = {
    recommended: [{
        title: 'HTML full course - Build a Website Tutorial',
        img: './assets/course-html.jpg',
        duration: '4h 16 m',
        level: 'Beginner',
        stars: 3,
        totalVotes: 1600,
        price: '$550',
        author: 'Miston Wilson',
        img2: "./assets/avatar-5.jpg"
    
    },
        {
            title: 'A complete beginner\'s guide to JavaScript',
            img: './assets/course-css.jpg',
            duration: '3h 16 m',
            level: 'Advance',
            stars: 4,
            totalVotes: 7500,
            price: '$550',
            author: 'Miston Wilson',
            img2: "./assets/avatar-6.jpg",
        },
        {
            title: 'How to create a complete site in React',
            img: './assets/course-html.jpg',
            duration: '3h 16 m',
            level: 'Advance',
            stars: 4,
            totalVotes: 7500,
            price: '$550',
            author: 'Miston Wilson',
            img2: "./assets/avatar-3.jpg"
        },
        {
            title: 'HTML full course - Build a Website Tutorial',
            img: './assets/course-angular.jpg',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson',
            img2: "./assets/avatar-8.jpg"
        }
    ],
    mostPopular: [{
            title: 'HTML full course - Build a Website Tutorial',
            img: './assets/course-gatsby.jpg',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson',
            img2: "./assets/avatar-3.jpg",
        },
        {
            title: 'A complete beginner\'s guide to JavaScript',
            img: './assets/course-wordpress.jpg',
            duration: '3h 16 m',
            level: 'Advance',
            stars: 4,
            totalVotes: 7500,
            price: '$550',
            author: 'Miston Wilson',
            img2: "./assets/avatar-2.jpg",

        },

        {
            title: 'HTML full course - Build a Website Tutorial',
            img: './assets/course-python.jpg',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson',
            img2: "./assets/avatar-1.jpg",
        },
        {
            title: 'HTML full course - Build a Website Tutorial',
            img: './assets/course-react.jpg',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson',
            img2: "./assets/avatar-2.jpg",
        }
    ],

   trending: [
        {
            title: 'HTML full course - Build a Website Tutorial',
            img: './assets/course-node.jpg',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson',
            img2: "./assets/avatar-7.jpg",
        },

        {
            title: 'HTML full course - Build a Website Tutorial',
            img: './assets/course-html.jpg',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson',
            img2: "./assets/avatar-8.jpg",
        },

        {
            title: 'HTML full course - Build a Website Tutorial',
            img: './assets/course-html.jpg',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson',
            img2: './assets/avatar-1.jpg',
        },
        {
            title: 'HTML full course - Build a Website Tutorial',
            img: './assets/course-html.jpg',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550', 
            author: 'Miston Wilson', 
            img2: "./assets/avatar-2.jpg"
        },

    ]
}
       





//recommended for youoooooooooooooooooooooooooooooooooooooooooooooooo
const cardsContainer = document.getElementById("cardsContainer");

const createCard = (cardData, containerToAppend) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.setAttribute("class", "col-6 col-md-4 col-lg-3  gap-2 p-3 gx-2 anime-card  size-div");
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    const cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top w-100 object-fit-cover h-15");
    cardImg.setAttribute("src", cardData.img);

    const cardBody = document.createElement("div")
    cardBody.setAttribute("class", "card-body")
    const cardTitle = document.createElement("h3")
    cardTitle.innerText = cardData.title;
    cardTitle.setAttribute("class", "card-title");
    const cardPrice = document.createElement("span");
    cardPrice.innerText = cardData.price;
    
   
    cardBody.append(cardTitle, cardPrice);
    
    createDurationLevel(cardData.duration, cardData.level, cardBody, cardPrice);
    createCardFooter(cardData.author, cardData, cardBody);
    cardContainer.append(cardImg, cardBody);
    cardWrapper.appendChild(cardContainer);
    containerToAppend.appendChild(cardWrapper);
   
    
  

}

const createDurationLevel = (duration, level, cardDivToAppend, elementBefore) => {
    const container = document.createElement("div");
    container.setAttribute("class", "d-flex align-items-center gap-3");
    const divDuration = document.createElement("div");
    divDuration.setAttribute("class", "d-flex align-items-center gap-1");
    const divLevel = document.createElement("div");
    divLevel.setAttribute("class", "d-flex align-items-center gap-1");
    const durationIcon = document.createElement("ion-icon");
    durationIcon.setAttribute("name", "time-outline");
    const durationSpan = document.createElement("span");
    durationSpan.textContent = duration;
    const levelIcon = document.createElement("ion-icon");
    levelIcon.setAttribute("name", "stats-chart-outline");
    const levelSpan = document.createElement("span");
    levelSpan.innerText = level;
    divDuration.append(durationIcon, durationSpan);
    divLevel.append(levelIcon, levelSpan);
    container.append(divDuration, divLevel);
    cardDivToAppend.insertBefore(container, elementBefore);

}


const createCardFooter = (author, cardData, appendTo) => {
    const cardFooter = document.createElement("div");
    cardFooter.setAttribute("class", "card-footer bg-white")
    const containerFooter = document.createElement("div");
    containerFooter.setAttribute("class", "d-flex align-items-center justify-content-between");
    const imgFooter = document.createElement("img");
    imgFooter.setAttribute("class", "rounded-circle mr-2 size ");
    imgFooter.setAttribute("src", cardData.img2);
    const spanAuthor = document.createElement("span");
    spanAuthor.setAttribute("class", "font-sm")
    spanAuthor.innerText = author;
    const ionIconAuthor = document.createElement("ion-icon");
    ionIconAuthor.setAttribute("name", "bookmark-outline");
    ionIconAuthor.setAttribute("class", "feather feather-bookmark opacity-50 ml-auto");
    containerFooter.append(imgFooter, spanAuthor, ionIconAuthor);
    cardFooter.appendChild(containerFooter);
    appendTo.insertAdjacentElement("beforeend", cardFooter)


 
}




cards.recommended.forEach(card => {
     createCard(card, cardsContainer);
})

//most popularrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

const secondCardsContainer = document.getElementById("secondCardsContainer");




    
    



cards.mostPopular.forEach(card => {
    createCard(card, secondCardsContainer);
});

//trendingggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

const thirdCardsContainer = document.getElementById("thirdCardsContainer");


cards.trending.forEach(card => {
    createCard(card, thirdCardsContainer);
});











