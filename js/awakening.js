/* =========================================================
   AWAKENING ESSENCE
========================================================= */


/* =========================================================
   GAME STATE
========================================================= */

const gameState = {

    currentStory: null,

    currentAct: 0,

    scores: {
        Agni: 0,
        Jala: 0,
        Prithvi: 0,
        Vayu: 0
    },

    feelings: {
        Agni: {},
        Jala: {},
        Prithvi: {},
        Vayu: {}
    }
};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const introScreen =
    document.getElementById("intro-screen");

const storySelectionScreen =
    document.getElementById("story-selection-screen");

const storyScreen =
    document.getElementById("story-screen");

const resultScreen =
    document.getElementById("result-screen");

const continueButton =
    document.getElementById("continue-button");

const storyButtons =
    document.querySelectorAll(".story-button");

const storyTitle =
    document.getElementById("story-title");

const actNumber =
    document.getElementById("act-number");

const storyText =
    document.getElementById("story-text");

const choicesContainer =
    document.getElementById("choices");

const resultContent =
    document.getElementById("result-content");


/* =========================================================
   INTRO → STORY SELECTION
========================================================= */

continueButton.addEventListener("click", () => {

    introScreen.classList.remove("active");

    storySelectionScreen.classList.add("active");

});


/* =========================================================
   STORY SELECTION
========================================================= */

storyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedStory =
            button.dataset.story;

        if (!selectedStory) {
            return;
        }

        startStory(selectedStory);

    });

});


/* =========================================================
   START SELECTED STORY
========================================================= */

function startStory(storyName) {

    gameState.currentStory = storyName;

    gameState.currentAct = 0;

    gameState.scores = {
        Agni: 0,
        Jala: 0,
        Prithvi: 0,
        Vayu: 0
    };

    gameState.feelings = {
        Agni: {},
        Jala: {},
        Prithvi: {},
        Vayu: {}
    };


    storySelectionScreen.classList.remove("active");

    storyScreen.classList.add("active");


    /*
        For now, The Lie is the only completed story.
    */

    if (storyName === "lie") {

        displayAct();

    }

}
