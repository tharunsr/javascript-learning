var add_button = document.getElementById("add-btn")
var close_button = document.getElementById("close-button")
var add_button_popup = document.getElementById("add-btn-popup")

var popup_overlay = document.querySelector(".popup-overlay")
var popup_box = document.querySelector(".popup-box")

var book_title = document.getElementById("book-title")
var book_author = document.getElementById("book-author")
var book_description = document.getElementById("book-description")

var delete_button = document.getElementById("del-button-container")

add_button.addEventListener("click",function(){
    popup_overlay.style.display = "block"
    popup_box.style.display = "block"
})

close_button.addEventListener("click",function(){
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
})

var container = document.getElementById("container")
add_button_popup.addEventListener("click",function(){
   var div = document.createElement("div");
   div.setAttribute("id","list-container")
   div.innerHTML = `<h2>${book_title.value}</h2>
            <h5>${book_author.value}</h5>
            <p>${book_description.value}</p>
            <div class="del-button">
            <button style="margin-left: 80%;" onclick="change(event)">Delete</button>
            </div>`
    container.append(div)
})

function change(event){
    event.target.parentElement.parentElement.remove()
}

