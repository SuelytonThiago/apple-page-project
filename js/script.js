const buttons = document.querySelectorAll("#image-pick li");
const img = document.querySelector("#models-container img");
const description = document.querySelector("#description");

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        buttons.forEach((btn) =>{
            btn.querySelector(".color").classList.remove("selected");
        })

        const button = e.target;

        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");
        img.setAttribute("src",`img/${id}.webp`);

        const span = document.querySelector("#description span");
        const newSpan =document.createElement("span");
        newSpan.textContent = id;
        description.replaceChild(newSpan,span);

        
    })
})