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
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbT1uZ_Xzy8EUpDnTVsVR6CHVTJwZvRcbkRw&s',
        duration: '4h 16 m',
        level: 'Beginner',
        stars: 3,
        totalVotes: 1600,
        price: '$550',
        author: 'Miston Wilson'
    
    },
        {
            title: 'A complete beginner\'s guide to JavaScript',
            img: 'data:image/png;base64,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',
            duration: '3h 16 m',
            level: 'Advance',
            stars: 4,
            totalVotes: 7500,
            price: '$550',
            author: 'Miston Wilson'
        },
        {
            title: 'How to create a complete site in React',
            img: 'data:image/png;base64,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',
            duration: '3h 16 m',
            level: 'Advance',
            stars: 4,
            totalVotes: 7500,
            price: '$550',
            author: 'Miston Wilson'
        },
        {
            title: 'HTML full course - Build a Website Tutorial',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbT1uZ_Xzy8EUpDnTVsVR6CHVTJwZvRcbkRw&s',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson'
        }
    ],
    mostPopular: [{
            title: 'HTML full course - Build a Website Tutorial',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbT1uZ_Xzy8EUpDnTVsVR6CHVTJwZvRcbkRw&s',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson'
        },
        {
            title: 'A complete beginner\'s guide to JavaScript',
            img: 'data:image/png;base64,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',
            duration: '3h 16 m',
            level: 'Advance',
            stars: 4,
            totalVotes: 7500,
            price: '$550',
            author: 'Miston Wilson'
        },

        {
            title: 'HTML full course - Build a Website Tutorial',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbT1uZ_Xzy8EUpDnTVsVR6CHVTJwZvRcbkRw&s',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson' 
        },
        {
            title: 'HTML full course - Build a Website Tutorial',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbT1uZ_Xzy8EUpDnTVsVR6CHVTJwZvRcbkRw&s',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson'
        }
    ],

   trending: [
        {
            title: 'HTML full course - Build a Website Tutorial',
            img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAxlBMVEX////Ttir71yXt8PDiwyjRsgbq6t/QtCrRsxrm15r71QD51SXu8/fo2aDStB/l1ZT+8sf71hfcyn7dzYjaxW3ax3Tcy4L++eP720b7+O3843rv8/nZw2b+993+9dP28Nvx6cnbw13t4rj84nLj3Lb83ln832LqySf85IL9/PbWujvv5cDdvin72jv83FD977jYv0/96qD96JTXvUb97az96Zvl4MHp5tP85orr3q/97rL+8cDl3r384Gr++N/szTfkyEXmzFh1YeDeAAAI8UlEQVR4nO2de1/iOBRAoWNnKkihKvJQAXFgwRnwATo+xtH5/l9qaesjTdq0N7k31t2cP3WH/s4mwLFp00rFYrFYLBaLxWKxWCwWi8VisVgslv8Rvb2mnG0kGiC2e3iGrldGXDzDilstIy6eYMX7aJlUPETDs4+WSeUM0fDE/2ibFPwTRMN2KQ3biIbNMr4RvT1Ew0YpDRuIhuNSGo4RDUdl/EJ0R4iGw1IaDhENe6U0RIw21Gz7pgVriCmImG1bTl0d5x9GEdcQL9u2HB1YQ8xow8w2PcOt9xdCjTbMbMMz3Ec1xMs2PcOfjCFmtGFmG5oharRhZpueIfNCqNGGmW16huyXxQjVEC/b8Awxow0z27QM66wharQhZhue4RzXsByfNHTRhphtaIbfkA3Rsk3LcOvd0L9ANkTLNj3D99dBjjbEbNMyZKPtANkQLduwDJGjDTHbtAyZ1/HukA2Vss1PkmkY5CMYIkebWratDnZZ4g+r2LC+WHQjlhGTkGnEY8RpRD9kFnIbG9JFm1K2+UeHOwyHX903w+AKevxa9P+FMNpUss0/2vnCwhre6hsiR5tKtmEa9iJDymhTyTZMw45giB1tKtkmM5wBjz7gDdGjTSXbMA1bkSFltKlkG6bheY1LGvRoU8k2mWEfePR1wEfbNrohPNswDa8D6mhTyTZ/H89wxhu6P9AN4dkmMzwFHv00oI42lWzDNJwE5NGmkG2Yhl36aEM2fAQe3KGPNoVswzQUoq1KYAjONlJD/GhTyDaZ4RR27J6BaFPINoDhvBNznGTwyrlgiB9tCtkGMHyo5eDQR5tCtskMJ8nXjv90yIM1xI82hWxDN2RemyDaFLJNZrhUMaSNNoVs89uZho62IUG0waMG25A62uBn22SGXV1DCkFwtmEbUkcbPNsoDSmiDZ5tMsOFgiGbNEckhnvANyKl4S6JITTbsA2pow2ebTLDuqYhRbTBsw3bkHlpkmiDZxulIUW0wbNNZugoGFJnaQWcbciG9NEGN9ylM6QRhGabzDCAG7JJ4xMZArON0HBFZAjMNjpDomgDZ5vMsAY3pI82cLbpGwZBEJ5oiy+IYpOmSWQIzDZlw1exxePs8nzQqRzzS9xE0QbONqjhi1htMY3E5snfJhaAaaINnG0Aw4c0sTfueUP0q/ZeAWYbwLD3RxYplwYWgF8gM5RzKywAE0Ub9GwbmmFfMKQSBGabf4BkOA0cM9EGzTapIWSedfmkoYo2aLahGQamog2abWiGwvIoVbRBsw3LcM4bkkUbNNuwDDvGog2abVJDwOrYQIg23PtjWWDZhmUoZClZtEGzDcswvhDDSLQBsw3L8NLEVXsfaihmKZ0gLNukhp3iB+3z0Ya5Ex0PKNuwDIUspYs2YLb5e4qGneQvhSzF3dQkCSjbFAx7rXW/W6tdJ37omIs2YLZJDf/wboP1bBmeftpMyWCd+JXBaANmW0HD+eD+dhK8nTQMf5kwnAvRhn1/LAso2/INj8+vps7LwDHU7tljillKF23AbJMZBpfXj3XR7cXwnD3mscFoA2abzNAJUt1eDB/YY7ZMRhssaqSGMmot9pBilhJGG+xsG5Lh2mS0wbJN3XDAHvKKN6Q70xbCZ5vnZo8qkqGQpbg70fFw2ebd/GquXC+95dQNj9lD8llKGm1Ctrk34X3239t+mqW6YSLpluGP2GjD3D5YhMs293cosbH81ThxXX4GN1EMHc6QNNqEbIsNQ3YOv9zsnSWGUtUwSP55bDTahGx7N4wtExNWxTBcJJ3mZClltAnZljSMJuzO24QFG27sltcD7og9o9EmZJtgyE5YF/JJs7Fb3LZSzhOLWUoabXy2pRq+TdiiY7ixC/rnGS0mZilptBU2jCds8gephuEb73EtOacRZam5aOOzTWYoIBqGb7xL/o3HYThL+WzTMIzfePkHvDIbbXy2ed8VDQOn/1Ds/TQzG218tqkaAvaneeQNaaONzzYDhnyWoj7zIY2xacM6nzS00cZnm7Jh8f1pDEcbn23KhsX3NjEcbXy2eb8PiQ3FLCWONj5qVs2bL4cFx1Fp54+O6WgTzrZ5rnvU+CUUGpZhRzgPRZ00aWfbfM/129+/HuZZQvfF6NyfBvFiRt3Q8mhM+iLpxvJsL2fCQgx7DzPnfa3GZLTJFkl91z2RTdiiO3/MW7cLZiXKcLTlLJJuhtLbv/uabinZU+GdwVU3accbUkdbgUXScMIe/E6ZsLmGg8uJaGc62goukm4m7MU2P2ElOw5UKn/W04y1Ns6QOtqKL5L64ffIHfsJm2kYf2hmr7YZjTbYIunGsrobfo8Ihm/34/ce+k761Ew3JI82hTtJPTcOnx3hXm7xQzMD5uXoo03pKQle9D2SNGylfWhmYDTaVJ8DEYZP9d0wf2YymI027ackKOxYbtpQ8ykJmob00ab9lAQFQ7PRBt8ABNeQYic6Hs2nJCgYsgvA9NGm/ZQEPUMD0ab9cCsFQ7PRpv1wKz1DA9Gm/XArBUPmX5uINt2HWykYGo423YdbwQ3N3B/LopdtMMP6Pz+rdM+PzUIv2wCGi6dq4vG4VYpnPqShl20FDRdPP3m7KskzH9LQy7YChoun57MUvaqhaNPNtjzD7tNZqlxsSLF9sIhetskMu5mD94KRaNPNtqxroqKpmfePCe+PZRnyl1nqGgaL5fMq1y4UJNqJTmDc9rKuCwYbBs7yucDgvaz9jMwIhgwbF8IVs3DDoDspOnju0Z2RYGOZ/9hNvfi5oGGwmDxfFLELB685Mm33yjDl4ucChuHU/Lsq8l9vBm9/bHzwksxHB1XIUG4Fy+nfooO32jby11I+vbvNUBb8lvQvipR7uBDZHhv5Q6IwI+46dg3CtblGSQYvSe/uqPBQSgbP3/1RrsFLMmpqDGV0JUApBy9Jb7yvMJThWuPBqMyDl2S4nXk7VNbg3X2CwUsyLxh34eCZzDFccuPuY3IMl+y4+9gcwyUl7sIc++yDl4SNu+jihU/3uVKEYRR3YY79pwaPY/QZvtEtFovFYrFYLBaLxWKxWCwWi8ViKSX/Ai7oJwlccz/5AAAAAElFTkSuQmCC',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson' 
        },

        {
            title: 'HTML full course - Build a Website Tutorial',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbT1uZ_Xzy8EUpDnTVsVR6CHVTJwZvRcbkRw&s',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson' 
        },

        {
            title: 'HTML full course - Build a Website Tutorial',
            img: 'data:image/png;base64,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',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            author: 'Miston Wilson',
            img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbT1uZ_Xzy8EUpDnTVsVR6CHVTJwZvRcbkRw&s',
        },
        {
            title: 'HTML full course - Build a Website Tutorial',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbT1uZ_Xzy8EUpDnTVsVR6CHVTJwZvRcbkRw&s',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550', 
            author: 'Miston Wilson', 
            img2: "https://www.shutterstock.com/image-photo/image-handsome-smiling-young-african-260nw-722913181.jpg"
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
    const cardStars = document.createElement("div");
    
    cardStars.innerText = cardData.stars;
   
    cardBody.append(cardTitle, cardPrice);
    
    createDurationLevel(cardData.duration, cardData.level, cardBody, cardPrice);
    cardContainer.append(cardImg, cardBody, cardStars);
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


cards.recommended.forEach(card => {
     createCard(card, cardsContainer);
})



const secondCardsContainer = document.getElementById("secondCardsContainer");




    
    



cards.mostPopular.forEach(card => {
    createCard(card, secondCardsContainer);
});



const thirdCardsContainer = document.getElementById("thirdCardsContainer");


cards.trending.forEach(card => {
    createCard(card, thirdCardsContainer);
});
