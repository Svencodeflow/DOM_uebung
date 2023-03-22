console.log("hello");

document.getElementById("my-select").addEventListener("change", (event) => {
    event.target.value;
    document.getElementById("option-selected").innerHTML = "Sie haben "+event.target.value+" ausgewählt!"
} )