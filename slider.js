const sliderImg = document.querySelector("#slider-img");
const text = document.querySelector(".text");
const person =  document.querySelector(".name");
const job = document.querySelector(".job");

const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
let number = 0;

const sliderInfo = [
    {   image: "images/image-tanya.jpg",
        text: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        name: "Tanya Sinclair",
        job: "UX Engineer"
    },
    {   
        image: "images/image-john.jpg",
        text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        name: "John Tarkpor",
        job: "Junior Front-end Developer"
    }
]


const showInfo = (number) => {
    const imgContainer = document.querySelector(".slider__img");
    const textContainer = document.querySelector(".slider__text");


    imgContainer.classList.remove("fade-in");
    textContainer.classList.remove("fade-in");


    void imgContainer.offsetWidth;
    void textContainer.offsetWidth;

 
    sliderImg.setAttribute("src", sliderInfo[number].image);
    sliderImg.setAttribute("alt", sliderInfo[number].name); 
    
    text.textContent = sliderInfo[number].text;
    person.textContent = sliderInfo[number].name;
    job.textContent = sliderInfo[number].job;

    imgContainer.classList.add("fade-in");
    textContainer.classList.add("fade-in");
}

next.addEventListener("click",()=> {
    number === 0 ? number = 1 : number = 0;
    showInfo(number)
})

prev.addEventListener("click",()=> {
    number === 0 ? number = 1 : number = 0;
    showInfo(number)
})

showInfo(number)