let titles = [
    document.getElementById("title1"),
    document.getElementById("title2"),
    document.getElementById("title3"),
    document.getElementById("title4")
];

let dropDowns = [
    document.getElementById("dropDown1"),
    document.getElementById("dropDown2"),
    document.getElementById("dropDown3"),
    document.getElementById("dropDown4")
];
console.log("Hello, world!");
alert("det här är för uppgift 1");
console.log("även det här är för uppgift 1");

titles.forEach((element, index) => {
    element.addEventListener('click', ()=>{
        dropDowns[index].classList.contains('idle')? 
        dropDowns[index].classList.remove('idle'):
        dropDowns[index].classList.add('idle');
    });
});