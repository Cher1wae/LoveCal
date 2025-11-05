const nameInput = document.getElementById("name1");
const crushName = document.getElementById("name2");
const button = document.getElementById("submitBtn");
const tryAgain = document.getElementById("tryagainBtn")
const resultText = document.querySelector(".result-text");
const resultDesc = document.querySelector(".result-desc");
const formParent = document.querySelector(".form-container");
const resultParent = document.querySelector(".result-container");

button.addEventListener("click", () => {
    loveCal();
});

tryAgain.addEventListener("click", () => {
    retry();
});

function retry() {

    if (nameInput.value.trim() == "" || crushName.value.trim() == "") {
        console.error("Missing field");
        return;
    }

    resultParent.classList.add("hidden");
    formParent.classList.remove("hidden");


    nameInput.value = "";
    crushName.value = "";
}

function loveCal() {

    if (nameInput.value.trim() == "" || crushName.value.trim() == "") {
        console.error("Missing field");
        return;
    }
    console.log(nameInput.value, crushName.value);


    let randomNum = Math.random();
    let roundedNum = randomNum * 100 + 1;
    let result = Math.trunc(roundedNum);
    console.log(nameInput, "nameInput")


    let desc = lovCalDescription(result);
    console.log(desc, result);
    resultParent.classList.remove("hidden");
    formParent.classList.add("hidden");
    resultDesc.textContent = desc;
    resultText.textContent = result;

}


function lovCalDescription(result) {
    if (result <= 20) {
        return "Absolutely no connection. The vibe is off, and there's zero chemistry here.";
    } else if (result >= 21 && result <= 30) {
        return "A weak spark. There's a bit of intrigue, but nothing substantial—might be a passing crush.";
    } else if (result >= 31 && result <= 50) {
        return "Some potential. You get along on a few levels, but it's still lacking emotional depth.";
    } else if (result >= 51 && result <= 65) {
        return "A noticeable connection. Shared interests and growing feelings—this could go somewhere.";
    } else if (result >= 66 && result <= 80) {
        return "Strong compatibility. There's emotional sync, mutual attraction, and a good foundation.";
    } else if (result > 81 && result <= 100) {
        return "Perfect match! A deep, genuine bond—love, trust, and chemistry all in harmony.";
    } else {
        return "Does not exist";
    }
}


