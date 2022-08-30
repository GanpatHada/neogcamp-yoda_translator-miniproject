let mytext = "";
let translate = document.querySelector("#translate-btn");
let clear = document.querySelector("#clear-btn");
let finaltext = document.querySelector("#finaltext");
document.getElementById("mytext").addEventListener('change', (event) => {
    mytext = event.target.value;
});
translate.addEventListener("click", async () => {
    translate.innerHTML = "Translating...";
    finaltext.innerHTML = "Translating...";
    try {
        const result = await fetch("https://api.funtranslations.com/translate/yoda.json?text=" + mytext); // Now this will wait till it finished
        let translatedtext = await result.json(); //this will also wait till it finished
        finaltext.style.color = "indigo";
        finaltext.innerHTML = translatedtext.contents.translated;
        translate.innerHTML = "Translated";
    } catch (e) {
        finaltext.style.color = "#a50000";
        finaltext.innerHTML = "Something error has been occured.Please try again";
        translate.innerHTML = "Translate";
        console.log(e);
    }

})
clear.addEventListener("click", async () => {
    finaltext.style.color = "indigo";
    finaltext.innerHTML = "Translated text will appear Here";
    document.querySelector("#mytext").value = "";
    document.querySelector("#mytext").focus();
    translate.innerHTML = "Translate"


})