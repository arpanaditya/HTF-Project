// const hamburger = document.querySelector('.hamburger');
// const navLinks = doucment.querySelector('.nav-links');
// const links = document.querySelectorAll('.nav-links li');

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('open');
// })

// js for faqs
let answers=document.querySelectorAll(".accordion");
answers.forEach((event)=>{
    event.addEventListener('click',()=>{
        if(event.classList.contains("active")){
            event.classList.remove("active");
        }
        else{
            event.classList.add("active");
        }
    })
})