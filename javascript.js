const button = document.querySelector('.btn'),
    input = document.querySelector('.inpt'),
    spisok = document.querySelector('.spisok');

let massiv = [];
if (localStorage.getItem('todo')) {
    massiv = JSON.parse(localStorage.getItem('todo'));
    lilist()
}
button.addEventListener("click", () => {
    let text = input.value;
    if (text == "") {
        
    } else {
        massiv.push(input.value)
        spisok.innerHTML = "";
        input.value = "";
        lilist()
        localStorage.setItem('todo', JSON.stringify(massiv))
    }   
})
function lilist() {
    massiv.forEach((item, index) => {
        spisok.innerHTML += `
        <li class="liList">${item} <img src="trash.png" class="delete"></li>
        `
    })
    document.querySelectorAll(".delete").forEach((trash, i) => {
        trash.addEventListener("click", () => {
            trash.parentElement.remove();
            massiv.splice(i, 1);
            createaaaa(item, index);
            
        });
        
    });
    
}
