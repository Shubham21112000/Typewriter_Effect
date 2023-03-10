let title = document.querySelector('.main_heading');
let name = "Welcome to my page"
let index = 1;

const typeWriter = () => {
    let new_title = name.slice(0,index);
    title.innerText = new_title;


    index > name.length ? index = 1 : index++;
    setTimeout(() =>  typeWriter(), 250);
}
typeWriter();