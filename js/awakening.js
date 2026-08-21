/* =========================================================
   AWAKENING ESSENCE
   GAME ENGINE
   ========================================================= */


/* =========================================================
   GAME STATE
   ========================================================= */

const gameState = {

    currentStory: null,
    currentNode: null,
    finalFeeling: null,

    scores: {
        Agni: 0,
        Jala: 0,
        Prithvi: 0,
        Vayu: 0
    }

};


/* =========================================================
   ESSENCE RESULT DATA
   ========================================================= */

const essenceData = {

    Agni: {
        name: "Agni",
        image: "assets/Essence-Type-Result/Agni-Essence-Type_Result.png"
    },

    Jala: {
        name: "Jala",
        image: "assets/Essence-Type-Result/Jala-Essence-Type_Result.png"
    },

    Prithvi: {
        name: "Prithvi",
        image: "assets/Essence-Type-Result/Prithvi-Essence-Type_Result.png"
    },

    Vayu: {
        name: "Vayu",
        image: "assets/Essence-Type-Result/Vayu-Essence-Type_Result.png"
    }

};


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const storySelectionScreen =
    document.getElementById("story-selection-screen");

const storyScreen =
    document.getElementById("story-screen");

const resultScreen =
    document.getElementById("result-screen");

const storyButtons =
    document.querySelectorAll(".story-button");

const storyTitle =
    document.getElementById("story-title");

const storyText =
    document.getElementById("story-text");

const choicesContainer =
    document.getElementById("choices");

const resultContent =
    document.getElementById("result-content");


/* =========================================================
   UTILITIES
   ========================================================= */

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}


/* =========================================================
   STORY SELECTION
   ========================================================= */

storyButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.disabled) {
            return;
        }

        const selectedStory = button.dataset.story;

        if (!selectedStory) {
            return;
        }

        startStory(selectedStory);

    });

});


/* =========================================================
   START STORY
   ========================================================= */

function startStory(storyName) {

    if (
        typeof awakeningStories === "undefined" ||
        !awakeningStories[storyName]
    ) {
        console.error(
            `Awakening Essence story "${storyName}" could not be found.`
        );
        return;
    }

    gameState.currentStory = storyName;
    gameState.finalFeeling = null;

    gameState.scores = {
        Agni: 0,
        Jala: 0,
        Prithvi: 0,
        Vayu: 0
    };

    gameState.currentNode = awakeningStories[storyName].start;

    storySelectionScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    storyScreen.classList.add("active");

    displayNode();

}


/* =========================================================
   GET CURRENT STORY
   ========================================================= */

function getCurrentStory() {
    return awakeningStories[gameState.currentStory];
}


/* =========================================================
   GET CURRENT NODE
   ========================================================= */

function getCurrentNode() {

    const currentStory = getCurrentStory();

    return currentStory.acts.find(
        act => act.id === gameState.currentNode
    );

}


/* =========================================================
   DISPLAY CURRENT NODE
   ========================================================= */

function displayNode() {

    const currentStory = getCurrentStory();
    const node = getCurrentNode();

    if (!node) {
        console.error(
            "Awakening Essence could not find node:",
            gameState.currentNode
        );
        return;
    }

    storyTitle.textContent = node.title;
    storyText.innerHTML = node.text;
    choicesContainer.innerHTML = "";

    const shuffledChoices = shuffleArray(node.choices);

    shuffledChoices.forEach(choice => {

        const button = document.createElement("button");

        button.className = "choice-button";
        button.type = "button";
        button.innerHTML = choice.text;

        button.addEventListener("click", () => {
            recordChoice(choice);
        });

        choicesContainer.appendChild(button);

    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   RECORD PLAYER CHOICE
   ========================================================= */

function recordChoice(choice) {

    if (choice.essence !== "None") {
        if (!Object.prototype.hasOwnProperty.call(gameState.scores, choice.essence)) {
            console.error("Invalid Essence Type:", choice.essence);
            return;
        }

        gameState.scores[choice.essence]++;
    }

    if (choice.next === null) {
        revealEssence();
        return;
    }

    gameState.currentNode = choice.next;

    displayNode();

}


/* =========================================================
   DETERMINE ESSENCE TYPE
   ========================================================= */

function determineEssence() {

    const scores = gameState.scores;

    const maxScore = Math.max(
        scores.Agni,
        scores.Jala,
        scores.Prithvi,
        scores.Vayu
    );

    const winners = Object.keys(scores).filter(
        essence => scores[essence] === maxScore
    );

    const randomIndex = Math.floor(
        Math.random() * winners.length
    );

    return winners[randomIndex];

}


/* =========================================================
   REVEAL ESSENCE
   ========================================================= */

function revealEssence() {

    const essence = determineEssence();
    const data = essenceData[essence];
    const currentStory = getCurrentStory();

    gameState.finalFeeling = currentStory.triggerFeelings[essence];

    storyScreen.classList.remove("active");
    resultScreen.classList.add("active");

    resultContent.innerHTML = `

        <img
            class="essence-result-image"
            src="${data.image}"
            alt="${data.name} Essence Type Result"
        >

        <div style="display: flex; flex-direction: column; gap: 15px; width: min(650px, 100%); margin: 0 auto;">
            <button class="story-button" id="replay-button" type="button">
                REPLAY
            </button>
            <button class="story-button" id="save-button" type="button">
                SAVE
            </button>
        </div>

    `;

    document.getElementById("replay-button").addEventListener("click", () => {
        resultScreen.classList.remove("active");
        storySelectionScreen.classList.add("active");
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
