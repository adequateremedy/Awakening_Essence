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
        triggerFeeling: "Defiance",
        image: "assets/Essence-Type-Result/Agni-Essence-Type_Result.png",
        result: `
            <p>
                Your Energy manifested as <strong>Agni</strong>, driven by a
                Trigger Feeling of <strong>Defiance</strong>. When confronted,
                threatened, deceived, or cornered, something within you refuses
                to yield. You push back, challenge what stands against you,
                and act rather than allow yourself to be controlled.
            </p>

            <p>
                Your instinct is not simply to become angry—it is to
                <strong>resist</strong>. The stronger the pressure becomes, the
                more fiercely you assert yourself.
            </p>
        `
    },

    Jala: {
        name: "Jala",
        triggerFeeling: "Sarcasm",
        image: "assets/Essence-Type-Result/Jala-Essence-Type_Result.png",
        result: `
            <p>
                Your Energy manifested as <strong>Jala</strong>, driven by a
                Trigger Feeling of <strong>Sarcasm</strong>. When something
                threatens your sense of safety or control, you instinctively
                turn toward wit, humor, and sharp words. You may laugh when
                others expect fear, mock what frightens you, or use cleverness
                to regain control of a situation.
            </p>

            <p>
                Your response is fluid rather than forceful. You adapt, observe,
                and find another way through.
            </p>
        `
    },

    Prithvi: {
        name: "Prithvi",
        triggerFeeling: "Confidence",
        image: "assets/Essence-Type-Result/Prithvi-Essence-Type_Result.png",
        result: `
            <p>
                Your Energy manifested as <strong>Prithvi</strong>, driven by a
                Trigger Feeling of <strong>Confidence</strong>. When confronted
                with uncertainty or danger, you instinctively steady yourself,
                observe what is happening, and trust your ability to navigate
                it. You don't need to rush when you believe you can find the
                right answer.
            </p>

            <p>
                Your strength comes from <strong>composure, judgment, and
                certainty in yourself</strong>.
            </p>
        `
    },

    Vayu: {
        name: "Vayu",
        triggerFeeling: "Fear",
        image: "assets/Essence-Type-Result/Vayu-Essence-Type_Result.png",
        result: `
            <p>
                Your Energy manifested as <strong>Vayu</strong>, driven by a
                Trigger Feeling of <strong>Fear</strong>. When confronted with
                danger or uncertainty, your instincts become sharply attuned to
                what could go wrong. You notice exits, anticipate threats,
                hesitate when the outcome is unclear, and protect yourself
                before exposing yourself further.
            </p>

            <p>
                Your fear is not weakness. It is the instinct that tells you
                <strong>when to move, when to hide, and when to survive</strong>.
            </p>
        `
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

const actNumber =
    document.getElementById("act-number");

const storyText =
    document.getElementById("story-text");

const choicesContainer =
    document.getElementById("choices");

const resultContent =
    document.getElementById("result-content");


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
   GET TOTAL ACTS

   The story itself determines how many Acts exist.
   The Lie currently uses 5 Acts.
   ========================================================= */

function getTotalActs(story) {

    return Math.max(
        ...story.acts.map(act => act.act)
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

    storyTitle.textContent = currentStory.title;

    actNumber.textContent =
        `Act ${node.act} of ${getTotalActs(currentStory)} — ${node.title}`;

    storyText.innerHTML = node.text;

    choicesContainer.innerHTML = "";

    node.choices.forEach(choice => {

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

    if (!Object.prototype.hasOwnProperty.call(gameState.scores, choice.essence)) {
        console.error("Invalid Essence Type:", choice.essence);
        return;
    }

    gameState.scores[choice.essence]++;

    if (choice.next === null) {
        revealEssence();
        return;
    }

    gameState.currentNode = choice.next;

    displayNode();

}


/* =========================================================
   DETERMINE ESSENCE TYPE

   If more than one Essence has the highest score, ONLY the
   tied highest Essences are placed into the winner pool.
   One of those tied winners is then selected randomly.
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

    storyScreen.classList.remove("active");
    resultScreen.classList.add("active");

    resultContent.innerHTML = `

        <img
            class="essence-result-image"
            src="${data.image}"
            alt="${data.name} Essence Type Result"
        >

        <div class="result-label">
            Essence Type
        </div>

        <div class="result-value">
            ${data.name}
        </div>

        <div class="result-label">
            Trigger Feeling
        </div>

        <div class="result-value">
            ${data.triggerFeeling}
        </div>

        <div class="result-description">
            ${data.result}
        </div>

    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
