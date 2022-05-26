//goal is to create a page whose color changes depending on mouse position
document.addEventListener('mousemove', function(event){
    const red = Math.round(event.pageX * 255 / window.innerWidth);
    const blue = Math.round(event.pageY * 255 / window.innerHeight);
    const green = Math.floor(Math.random() * 256);
    console.log(red, green, blue);
    const rgb = `rgb(${red}, ${green}, ${blue})`
    document.body.style.backgroundColor = rgb;
})