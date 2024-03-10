const getColor = ()=>{
    const color = Math.floor(Math.random() * 16777215);
    const code = "#" + color.toString(16);
    
 document.body.style.background=code

document.getElementById("name").innerText=code


}

document.getElementById("btn").addEventListener(
    "click",
    getColor);
    
    getColor()