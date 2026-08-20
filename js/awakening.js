/* =========================================================
   AWAKENING ESSENCE
   GAME ENGINE
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
   ESSENCE DATA
   ========================================================= */

const essenceData = {

    Agni: {
        name: "Agni",
        core: "Anger"
    },

    Jala: {
        name: "Jala",
        core: "Sadness"
    },

    Prithvi: {
        name: "Prithvi",
        core: "Confidence"
    },

    Vayu: {
        name: "Vayu",
        core: "Fear"
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

        const selectedStory =
            button.dataset.story;

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

    /*
        Make sure the selected story actually exists.
    */

    if (
        typeof awakeningStories === "undefined" ||
        !awakeningStories[storyName]
    ) {

        console.error(
            `Awakening Essence story "${storyName}" could not be found.`
        );

        return;

    }


    /*
        Reset the player's Awakening Essence state.
    */

    gameState.currentStory =
        storyName;

    gameState.currentAct =
        0;


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


    /*
        Move from Story Selection
        into the selected story.
    */

    storySelectionScreen.classList.remove("active");

    storyScreen.classList.add("active");


    displayAct();

}


/* =========================================================
   GET CURRENT STORY
   ========================================================= */

function getCurrentStory() {

    return awakeningStories[
        gameState.currentStory
    ];

}


/* =========================================================
   GET CURRENT ACT
   ========================================================= */

function getCurrentAct() {

    const currentStory =
        getCurrentStory();

    return currentStory.acts[
        gameState.currentAct
    ];

}


/* =========================================================
   DISPLAY ACT
   ========================================================= */

function displayAct() {

    const currentStory =
        getCurrentStory();

    const act =
        getCurrentAct();


    /*
        Safety check.
    */

    if (!act) {

        revealEssence();

        return;

    }


    /*
        Story title.
    */

    storyTitle.textContent =
        currentStory.title;


    /*
        Act number and title.
    */

    actNumber.textContent =
        `Act ${act.act} of ${currentStory.acts.length} — ${act.title}`;


    /*
        Story text.
    */

    storyText.innerHTML =
        act.text;


    /*
        Clear previous choices.
    */

    choicesContainer.innerHTML = "";


    /*
        Create the four choices.
    */

    act.choices.forEach(choice => {

        const button =
            document.createElement("button");

        button.className =
            "choice-button";

        button.type =
            "button";

        button.innerHTML =
            choice.text;


        button.addEventListener(
            "click",
            () => {

                recordChoice(choice);

            }
        );


        choicesContainer.appendChild(button);

    });


    /*
        Return the player to the beginning
        of the current story section.
    */

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   RECORD PLAYER CHOICE
   ========================================================= */

function recordChoice(choice) {

    /*
        Add one point to the Essence Type
        associated with the player's response.
    */

    gameState.scores[
        choice.essence
    ]++;


    /*
        Record the specific Trigger Feeling
        selected by the player.
    */

    if (
        !gameState.feelings[
            choice.essence
        ][
            choice.feeling
        ]
    ) {

        gameState.feelings[
            choice.essence
        ][
            choice.feeling
        ] = 0;

    }


    gameState.feelings[
        choice.essence
    ][
        choice.feeling
    ]++;


    /*
        Move to the next Act.
    */

    gameState.currentAct++;


    /*
        If all Acts have been completed,
        determine the player's Essence.
    */

    const currentStory =
        getCurrentStory();


    if (
        gameState.currentAct >=
        currentStory.acts.length
    ) {

        revealEssence();

        return;

    }


    /*
        Otherwise display the next Act.
    */

    displayAct();

}


/* =========================================================
   DETERMINE ESSENCE TYPE
   ========================================================= */

function determineEssence() {

    const scores =
        gameState.scores;


    const maxScore =
        Math.max(

            scores.Agni,
            scores.Jala,
            scores.Prithvi,
            scores.Vayu

        );


    const winners =
        Object.keys(scores).filter(

            essence =>
                scores[essence] === maxScore

        );


    /*
        If there is only one winner,
        return it.

        Tie handling can be added later
        when the tie-breaker system is finalized.
    */

    return winners[0];

}


/* =========================================================
   DETERMINE TRIGGER FEELING
   ========================================================= */

function determineTriggerFeeling(essence) {

    const feelings =
        gameState.feelings[essence];


    const entries =
        Object.entries(feelings);


    /*
        Safety fallback.
    */

    if (
        entries.length === 0
    ) {

        return essenceData[
            essence
        ].core;

    }


    /*
        Sort Trigger Feelings by
        number of selections.
    */

    entries.sort(

        (a, b) =>
            b[1] - a[1]

    );


    return entries[0][0];

}


/* =========================================================
   REVEAL ESSENCE
   ========================================================= */

function revealEssence() {

    const essence =
        determineEssence();


    const triggerFeeling =
        determineTriggerFeeling(
            essence
        );


    /*
        Leave the story.
    */

    storyScreen.classList.remove(
        "active"
    );


    /*
        Show the result.
    */

    resultScreen.classList.add(
        "active"
    );


    /*
        Display the player's
        Awakening Essence result.
    */

    resultContent.innerHTML = `

        <div class="result-label">
            Essence Type
        </div>

        <div class="result-value">
            ${essenceData[essence].name}
        </div>


        <div class="result-label">
            Trigger Feeling
        </div>

        <div class="result-value">
            ${essenceData[essence].core}
            —
            ${triggerFeeling}
        </div>

    `;

}
