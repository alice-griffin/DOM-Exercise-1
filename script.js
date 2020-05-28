function main() {
    let growMe = document.getElementById("grow-me");
    growMe.classList.add("big");

    let shrinkMe = document.getElementById("shrink-me");
    shrinkMe.classList.remove("big")

    let lists = document.querySelectorAll("li");
    for (let node of lists) {
        console.log(node.textContent);
    }

    let link = document.getElementsByClassName("link");
    console.log(link)
    link[0].setAttribute("href", "http://www.example.com");
    link[0].innerText = "something";

    let displayHideMe = document.getElementById("hide-me");
    displayHideMe.style.display = "none";

    let displayShowMe = document.getElementById("show-me");
    displayShowMe.style.display = "block";

    let displayName = document.getElementById("name").value; 
    document.querySelector("h1").innerText = displayName; 
}