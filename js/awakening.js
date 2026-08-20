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
    document.getElementById(
        "story-selection-screen"
    );


const storyScreen =
    document.getElementById(
        "story-screen"
    );


const resultScreen =
    document.getElementById(
        "result-screen"
    );


const storyButtons =
    document.querySelectorAll(
        ".story-button"
    );


const storyTitle =
    document.getElementById(
        "story-title"
    );


const actNumber =
    document.getElementById(
        "act-number"
    );


const storyText =
    document.getElementById(
        "story-text"
    );


const choicesContainer =
    document.getElementById(
        "choices"
    );


const resultContent =
    document.getElementById(
        "result-content"
    );


/* =========================================================
   STORY SELECTION
   ========================================================= */

storyButtons.forEach(

    button => {

        button.addEventListener(

            "click",

            () => {

                if (button.disabled) {

                    return;

                }


                const selectedStory =
                    button.dataset.story;


                if (!selectedStory) {

                    return;

                }


                startStory(
                    selectedStory
                );

            }

        );

    }

);


/* =========================================================
   START STORY
   ========================================================= */

function startStory(storyName) {

    if (

        typeof awakeningStories ===
            "undefined" ||

        !awakeningStories[storyName]

    ) {

        console.error(

            `Awakening Essence story "${storyName}" could not be found.`

        );

        return;

    }


    /* -----------------------------------------
       Reset Story State
       ----------------------------------------- */

    gameState.currentStory =
        storyName;


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


    /* -----------------------------------------
       Begin At Story's Starting Node
       ----------------------------------------- */

    gameState.currentNode =
        awakeningStories[
            storyName
        ].start;


    /* -----------------------------------------
       Change Screens
       ----------------------------------------- */

    storySelectionScreen.classList.remove(
        "active"
    );


    resultScreen.classList.remove(
        "active"
    );


    storyScreen.classList.add(
        "active"
    );


    displayNode();

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
   GET CURRENT NODE
   ========================================================= */

function getCurrentNode() {

    const currentStory =
        getCurrentStory();


    return currentStory.acts.find(

        act =>

            act.id ===
            gameState.currentNode

    );

}


/* =========================================================
   DISPLAY CURRENT NODE
   ========================================================= */

function displayNode() {

    const currentStory =
        getCurrentStory();


    const node =
        getCurrentNode();


    /* -----------------------------------------
       Safety Check
       ----------------------------------------- */

    if (!node) {

        console.error(

            "Awakening Essence could not find node:",

            gameState.currentNode

        );

        return;

    }


    /* -----------------------------------------
       Story Title
       ----------------------------------------- */

    storyTitle.textContent =
        currentStory.title;


    /* -----------------------------------------
       Act Number
       ----------------------------------------- */

    actNumber.textContent =

        `Act ${node.act} of 10 — ${node.title}`;


    /* -----------------------------------------
       Story Text
       ----------------------------------------- */

    storyText.innerHTML =
        node.text;


    /* -----------------------------------------
       Clear Previous Choices
       ----------------------------------------- */

    choicesContainer.innerHTML =
        "";


    /* -----------------------------------------
       Create Choices
       ----------------------------------------- */

    node.choices.forEach(

        choice => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "choice-button";


            button.type =
                "button";


            /*
                IMPORTANT:

                Only the player's response is
                displayed.

                Essence and Trigger Feeling
                remain hidden.
            */

            button.innerHTML =
                choice.text;


            button.addEventListener(

                "click",

                () => {

                    recordChoice(
                        choice
                    );

                }

            );


            choicesContainer.appendChild(
                button
            );

        }

    );


    /* -----------------------------------------
       Scroll Back To Top
       ----------------------------------------- */

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   RECORD PLAYER CHOICE
   ========================================================= */

function recordChoice(choice) {

    /* -----------------------------------------
       Record Essence Score
       ----------------------------------------- */

    if (

        !gameState.scores.hasOwnProperty(
            choice.essence
        )

    ) {

        console.error(
            "Invalid Essence Type:",
            choice.essence
        );

        return;

    }


    gameState.scores[
        choice.essence
    ]++;


    /* -----------------------------------------
       Record Trigger Feeling
       ----------------------------------------- */

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


    /* -----------------------------------------
       Determine Next Narrative Node
       ----------------------------------------- */

    if (
        choice.next === null
    ) {

        revealEssence();

        return;

    }


    gameState.currentNode =
        choice.next;


    displayNode();

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
        Object.keys(
            scores
        ).filter(

            essence =>

                scores[essence] ===
                maxScore

        );


    return winners[0];

}


/* =========================================================
   DETERMINE TRIGGER FEELING
   ========================================================= */

function determineTriggerFeeling(
    essence
) {

    const feelings =
        gameState.feelings[
            essence
        ];


    const entries =
        Object.entries(
            feelings
        );


    if (
        entries.length === 0
    ) {

        return essenceData[
            essence
        ].core;

    }


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


    /* -----------------------------------------
       Leave Story
       ----------------------------------------- */

    storyScreen.classList.remove(
        "active"
    );


    /* -----------------------------------------
       Show Result
       ----------------------------------------- */

    resultScreen.classList.add(
        "active"
    );


    /* -----------------------------------------
       Display Result
       ----------------------------------------- */

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
