console.log("hello");

const classibasi = document.getElementsByClassName("example")



function myFunction() {
    
    for (let i = 0; i < classibasi.length; i++) {
        const element = classibasi[i];
        element.style.backgroundColor = "black"
        console.log(i);
        // return element;
    }
}