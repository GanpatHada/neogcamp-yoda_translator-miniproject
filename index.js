let mytext = "";
let translate = document.querySelector("#translate-btn");
let clear = document.querySelector("#clear-btn");
let finaltext = document.querySelector("#finaltext");
let btndisabled = false;
document.getElementById("mytext").addEventListener('change', (event) => {
    mytext = event.target.value;
});
document.getElementById("mytext").addEventListener('input', () => {
    if (btndisabled) {
        translate.innerHTML = "Translate";
        translate.style.color = "white";
        translate.style.cursor = "pointer"
        translate.removeAttribute('disabled');
    }
    finaltext.style.color = "#6b6b6b";
    finaltext.innerHTML = "Translated text will appear Here";
});

translate.addEventListener("click", () => {
   
    return onTranslateClick();

})
clear.addEventListener("click", () => {
    
    return onClearClick();

})
function onTranslateClick() {
    if (mytext.length === 0) return alert("Please write something");
    translate.innerHTML = "Translating...";
    finaltext.innerHTML = "Translating...";
    finaltext.style.color = "indigo";
    translate.setAttribute('disabled', true);
    btndisabled = true;
    translate.style.color = "grey";
    translate.style.cursor = "not-allowed";
    onApiCall();
}
async function onApiCall() {
    setTimeout(() => {
        try {
            const result = await fetch("https://api.funtranslations.com/translate/yoda.json?text=" + mytext); // Now this will wait till it finished
            let translatedtext = await result.json(); 
            finaltext.innerHTML = translatedtext.contents.translated;
            finaltext.style.color="indigo";
            translate.innerHTML = "Translated";
        } catch (e) {
            finaltext.style.color = "#a50000";
            finaltext.innerHTML = "Something error has been occured.Please try again";
            translate.innerHTML = "Translated";
            console.log(e);
        }
    },5000);
}
function onClearClick(){
    //function called after clear button pressed
    finaltext.style.color = "#6b6b6b";
    finaltext.innerHTML = "Translated text will appear Here";
    mytext = "";
    document.getElementById("mytext").value = "";
    document.querySelector("#mytext").focus();
    if (btndisabled) {
        translate.innerHTML = "Translate";
        translate.style.color = "white";
        translate.style.cursor = "pointer"
        translate.removeAttribute('disabled');
    }
}





