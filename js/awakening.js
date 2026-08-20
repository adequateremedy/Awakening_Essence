/* =========================================================
   AWAKENING ESSENCE
   =========================================================

   Current Story:
   THE LIE

   Essence Types:
   Agni    = Anger
   Jala    = Sadness
   Prithvi = Confidence
   Vayu    = Fear

   The player does NOT see these classifications.
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
   START STORY
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


    if (storyName === "lie") {

        displayAct();

    }

}


/* =========================================================
   THE LIE
========================================================= */

const story = [

    /* =====================================================
       ACT 1
    ===================================================== */

    {
        act: 1,

        title: "Something Doesn't Add Up",

        text: `

            <p>
                Steam rolls across the street in thick white clouds as
                the morning machinery begins its daily roar. A locomotive
                groans somewhere beyond the buildings, its whistle cutting
                sharply through the fog before fading into the constant
                clatter of gears and metal.
            </p>

            <p>
                You are on your way to where you are supposed to be when
                you see them.
            </p>

            <p>
                They are exactly where they said they wouldn't be.
            </p>

            <p>
                For a moment, you simply stare.
            </p>

            <p>
                Maybe there's an explanation.
            </p>

            <p>
                There has to be.
            </p>

            <p>
                You watch as they move through the crowd, completely
                unaware that you've seen them. Nothing about their
                expression suggests that they are doing anything wrong.
                They look calm. Ordinary.
            </p>

            <p>
                Just like they did when they spoke to you earlier.
            </p>

            <p>
                Just like they did when they told you—
            </p>

            <p>
                No.
            </p>

            <p>
                You stop yourself.
            </p>

            <p>
                You remember exactly what they said.
            </p>

            <p>
                You look around.
            </p>

            <p>
                The street is crowded enough that no one seems to notice
                what has caught your attention. Humans hurry past in work
                clothes and heavy coats. A mechanical carriage rattles
                over the uneven street. Somewhere above you, a pressure
                valve releases with a violent hiss.
            </p>

            <p>
                You look back.
            </p>

            <p>
                They're still there.
            </p>

            <p>
                Something doesn't add up.
            </p>

            <p>
                You could walk away.
            </p>

            <p>
                You could pretend you never saw them.
            </p>

            <p>
                Or you could find out why they are here.
            </p>

        `,

        choices: [

            {
                text: `
                    You approach them immediately. Something about this
                    irritates you, and you want an explanation.
                `,

                essence: "Agni",
                feeling: "Irritation"
            },

            {
                text: `
                    You hesitate. The possibility that they've deceived
                    you hurts more than you want to admit.
                `,

                essence: "Jala",
                feeling: "Hurt"
            },

            {
                text: `
                    You stop and reconsider what you were told. Maybe
                    you misunderstood something.
                `,

                essence: "Prithvi",
                feeling: "Doubt"
            },

            {
                text: `
                    You stay where you are and watch them. Something
                    feels wrong, and you aren't ready to make yourself
                    known.
                `,

                essence: "Vayu",
                feeling: "Unease"
            }

        ]

    },


    /* =====================================================
       ACT 2
    ===================================================== */

    {
        act: 2,

        title: "The Question",

        text: `

            <p>
                You eventually find yourself face-to-face with them.
            </p>

            <p>
                The noise of the city seems louder here. Steam curls
                between you. Their eyes meet yours.
            </p>

            <p>
                They smile.
            </p>

            <p>
                They speak as though nothing is unusual.
            </p>

            <p>
                You listen.
            </p>

            <p>
                But now you are paying attention to every word.
            </p>

            <p>
                You ask about what you saw.
            </p>

            <p>
                For the briefest moment, their expression changes.
            </p>

            <p>
                Then it is gone.
            </p>

            <p>
                They give you an explanation.
            </p>

            <p>
                It sounds simple.
            </p>

            <p>
                Almost convincing.
            </p>

            <p>
                Except—
            </p>

            <p>
                It doesn't match what you saw.
            </p>

            <p>
                You know what you saw.
            </p>

            <p>
                And now you have to decide whether you're going to
                challenge them.
            </p>

        `,

        choices: [

            {
                text: `
                    You call them out. You don't appreciate being lied to.
                `,

                essence: "Agni",
                feeling: "Frustration"
            },

            {
                text: `
                    You swallow the hurt and ask them to explain again.
                `,

                essence: "Jala",
                feeling: "Disappointment"
            },

            {
                text: `
                    You calmly tell them what you saw and stand by what
                    you know.
                `,

                essence: "Prithvi",
                feeling: "Uncertainty"
            },

            {
                text: `
                    You let the answer go—for now. Something about their
                    reaction makes you uncomfortable.
                `,

                essence: "Vayu",
                feeling: "Suspicion"
            }

        ]

    },


    /* =====================================================
       ACT 3
    ===================================================== */

    {
        act: 3,

        title: "The Response",

        text: `

            <p>
                Their answer hangs between you.
            </p>

            <p>
                You can hear the machinery behind the walls. Somewhere
                nearby, metal strikes metal in a steady rhythm.
            </p>

            <p>
                You look at them again.
            </p>

            <p>
                Something about the way they answered makes your stomach
                tighten.
            </p>

            <p>
                You don't have proof.
            </p>

            <p>
                Not enough to silence every doubt.
            </p>

            <p>
                But you know what you saw.
            </p>

            <p>
                You also know what they just told you.
            </p>

            <p>
                The two things cannot both be true.
            </p>

            <p>
                They wait for your response.
            </p>

        `,

        choices: [

            {
                text: `
                    You confront them more directly. You refuse to let
                    them talk around the question.
                `,

                essence: "Agni",
                feeling: "Indignation"
            },

            {
                text: `
                    You pull back. Their response hurts enough that you
                    don't want to show them how much.
                `,

                essence: "Jala",
                feeling: "Vulnerability"
            },

            {
                text: `
                    You explain exactly what you noticed and trust your
                    own perception.
                `,

                essence: "Prithvi",
                feeling: "Defensiveness"
            },

            {
                text: `
                    You stop asking. Something about the conversation
                    makes you afraid of what you might uncover.
                `,

                essence: "Vayu",
                feeling: "Apprehension"
            }

        ]

    },


    /* =====================================================
       ACT 4
    ===================================================== */

    {
        act: 4,

        title: "Knowing",

        text: `

            <p>
                Later, you find something you weren't meant to see.
            </p>

            <p>
                You stare at it.
            </p>

            <p>
                For several seconds, you don't move.
            </p>

            <p>
                There is no explanation that can make it fit with what
                you were told.
            </p>

            <p>
                You look at it again.
            </p>

            <p>
                The truth settles into place.
            </p>

            <p>
                They lied to you.
            </p>

            <p>
                Not accidentally.
            </p>

            <p>
                Not because you misunderstood.
            </p>

            <p>
                They knew the truth.
            </p>

            <p>
                And they chose to tell you something else.
            </p>

            <p>
                Your thoughts begin moving faster.
            </p>

            <p>
                If this was a lie, how much else don't you know?
            </p>

        `,

        choices: [

            {
                text: `
                    You feel resentment. They allowed you to trust them
                    while knowing they weren't being honest.
                `,

                essence: "Agni",
                feeling: "Resentment"
            },

            {
                text: `
                    You feel heartbreak. You never imagined they would
                    be the one to deceive you.
                `,

                essence: "Jala",
                feeling: "Heartbreak"
            },

            {
                text: `
                    You feel humiliated. You trusted them completely.
                `,

                essence: "Prithvi",
                feeling: "Humiliation"
            },

            {
                text: `
                    You feel anxious. If they hid this from you, what
                    else could be hidden?
                `,

                essence: "Vayu",
                feeling: "Anxiety"
            }

        ]

    },


    /* =====================================================
       ACT 5
    ===================================================== */

    {
        act: 5,

        title: "The Explanation",

        text: `

            <p>
                You confront them again.
            </p>

            <p>
                This time, there is no easy way around it.
            </p>

            <p>
                You know.
            </p>

            <p>
                And they know that you know.
            </p>

            <p>
                They give you an explanation.
            </p>

            <p>
                You listen.
            </p>

            <p>
                Maybe it makes sense.
            </p>

            <p>
                Maybe it doesn't.
            </p>

            <p>
                But one fact remains.
            </p>

            <p>
                They knew the truth.
            </p>

            <p>
                And they decided that you didn't need to know it.
            </p>

            <p>
                You can feel something changing inside you.
            </p>

        `,

        choices: [

            {
                text: `
                    You lose respect for them. You cannot accept that
                    lying to you was acceptable.
                `,

                essence: "Agni",
                feeling: "Contempt"
            },

            {
                text: `
                    You wish they had trusted you enough to tell you the
                    truth.
                `,

                essence: "Jala",
                feeling: "Sorrow"
            },

            {
                text: `
                    You cannot understand how someone you trusted could
                    make that choice.
                `,

                essence: "Prithvi",
                feeling: "Disbelief"
            },

            {
                text: `
                    You no longer know which parts of what you've been
                    told are real.
                `,

                essence: "Vayu",
                feeling: "Confusion"
            }

        ]

    },


    /* =====================================================
       ACT 6
    ===================================================== */

    {
        act: 6,

        title: "The Second Wound",

        text: `

            <p>
                You thought knowing the truth would make the feeling go
                away.
            </p>

            <p>
                It doesn't.
            </p>

            <p>
                Instead, you begin remembering other moments.
            </p>

            <p>
                Things that didn't seem important before suddenly feel
                different.
            </p>

            <p>
                Conversations you never questioned.
            </p>

            <p>
                Explanations you accepted.
            </p>

            <p>
                Moments when you trusted their words without hesitation.
            </p>

            <p>
                Now you wonder how many of those moments were exactly what
                they appeared to be.
            </p>

            <p>
                They knew what you believed.
            </p>

            <p>
                They knew you trusted them.
            </p>

            <p>
                And they chose to let you continue believing.
            </p>

        `,

        choices: [

            {
                text: `
                    You feel betrayed. Anger burns through you because
                    they deliberately deceived you.
                `,

                essence: "Agni",
                feeling: "Betrayal-Rage"
            },

            {
                text: `
                    You feel rejected. You wonder why your trust wasn't
                    important enough to protect.
                `,

                essence: "Jala",
                feeling: "Rejection"
            },

            {
                text: `
                    You become defiant. Whatever they think of you, you
                    refuse to let their actions determine who you are.
                `,

                essence: "Prithvi",
                feeling: "Defiance"
            },

            {
                text: `
                    You feel helpless. You cannot control whether another
                    person chooses to be honest with you.
                `,

                essence: "Vayu",
                feeling: "Helplessness"
            }

        ]

    },


    /* =====================================================
       ACT 7
    ===================================================== */

    {
        act: 7,

        title: "What Changed",

        text: `

            <p>
                Afterward, things are different.
            </p>

            <p>
                Maybe nothing around you has changed.
            </p>

            <p>
                The streets are still crowded. Locomotives still thunder
                through the city. Steam still rises from the streets.
                Machinery still turns behind walls.
            </p>

            <p>
                But something inside you has shifted.
            </p>

            <p>
                You notice how often people say things they don't mean.
            </p>

            <p>
                How easily information can be hidden.
            </p>

            <p>
                How quickly a smile can conceal something.
            </p>

            <p>
                You look at the person who lied to you.
            </p>

            <p>
                Their presence once felt safe.
            </p>

            <p>
                It doesn't feel the same anymore.
            </p>

        `,

        choices: [

            {
                text: `
                    You are furious that their lie changed something you
                    once considered safe.
                `,

                essence: "Agni",
                feeling: "Fury"
            },

            {
                text: `
                    You mourn the trust you had before you knew the truth.
                `,

                essence: "Jala",
                feeling: "Grief"
            },

            {
                text: `
                    You begin questioning whether your own judgment can
                    really be trusted.
                `,

                essence: "Prithvi",
                feeling: "Insecurity"
            },

            {
                text: `
                    You begin keeping parts of yourself hidden from
                    others.
                `,

                essence: "Vayu",
                feeling: "Distrust"
            }

        ]

    },


    /* =====================================================
       ACT 8
    ===================================================== */

    {
        act: 8,

        title: "The Feeling Returns",

        text: `

            <p>
                You try to put the experience behind you.
            </p>

            <p>
                But something brings it back.
            </p>

            <p>
                A familiar voice.
            </p>

            <p>
                A certain expression.
            </p>

            <p>
                A particular phrase.
            </p>

            <p>
                You feel the same shift inside yourself.
            </p>

            <p>
                The experience is not finished with you.
            </p>

            <p>
                You can push it away.
            </p>

            <p>
                You can face it.
            </p>

            <p>
                You can let it change you.
            </p>

            <p>
                Or you can decide that you will never allow yourself to
                feel this way again.
            </p>

        `,

        choices: [

            {
                text: `
                    The anger returns. You want to confront what happened
                    all over again.
                `,

                essence: "Agni",
                feeling: "Anger"
            },

            {
                text: `
                    You wish for the relationship you had before the lie.
                `,

                essence: "Jala",
                feeling: "Longing"
            },

            {
                text: `
                    You promise yourself that you will never again ignore
                    what your instincts tell you.
                `,

                essence: "Prithvi",
                feeling: "Resolve"
            },

            {
                text: `
                    You push the feeling away. You don't want to feel it
                    again.
                `,

                essence: "Vayu",
                feeling: "Avoidance"
            }

        ]

    },


    /* =====================================================
       ACT 9
    ===================================================== */

    {
        act: 9,

        title: "What You Learn",

        text: `

            <p>
                You are still young.
            </p>

            <p>
                You don't have all the answers.
            </p>

            <p>
                You don't understand everything happening around you.
            </p>

            <p>
                But you understand something now.
            </p>

            <p>
                Trust is not something you can see.
            </p>

            <p>
                It cannot be held in your hands.
            </p>

            <p>
                And when someone breaks it, there is no machine in the
                world capable of simply putting it back together.
            </p>

            <p>
                You stand there with the truth inside you.
            </p>

            <p>
                You cannot change what happened.
            </p>

            <p>
                But you can decide what it means to you.
            </p>

        `,

        choices: [

            {
                text: `
                    You decide that no one will ever make you feel
                    powerless through deception again.
                `,

                essence: "Agni",
                feeling: "Defiance"
            },

            {
                text: `
                    You realize that trusting someone means giving them
                    the ability to hurt you.
                `,

                essence: "Jala",
                feeling: "Vulnerability"
            },

            {
                text: `
                    You realize that someone else's decision to lie does
                    not determine your value.
                `,

                essence: "Prithvi",
                feeling: "Self-Worth"
            },

            {
                text: `
                    You decide that keeping your distance may be safer
                    than being vulnerable.
                `,

                essence: "Vayu",
                feeling: "Detachment"
            }

        ]

    },


    /* =====================================================
       ACT 10
    ===================================================== */

    {
        act: 10,

        title: "What Remains",

        text: `

            <p>
                Everything is different now.
            </p>

            <p>
                You know the truth.
            </p>

            <p>
                You know that you were lied to.
            </p>

            <p>
                You know what it feels like to discover that someone you
                trusted could choose to deceive you.
            </p>

            <p>
                You stand there, surrounded by the familiar sounds of
                Midgard—the hiss of steam, the grinding of gears, the
                distant cry of a locomotive.
            </p>

            <p>
                Yet all of it seems strangely distant.
            </p>

            <p>
                Something inside you is louder.
            </p>

            <p>
                You feel it building.
            </p>

            <p>
                Not a thought.
            </p>

            <p>
                Not a decision.
            </p>

            <p>
                A feeling.
            </p>

            <p>
                Something deep within you responds to what has happened.
            </p>

            <p>
                You cannot stop it.
            </p>

            <p>
                You can only feel it.
            </p>

        `,

        choices: [

            {
                text: `
                    Anger. The fire of having been deceived rises inside
                    you.
                `,

                essence: "Agni",
                feeling: "Anger"
            },

            {
                text: `
                    Sadness. You feel the ache of what the lie has changed.
                `,

                essence: "Jala",
                feeling: "Sadness"
            },

            {
                text: `
                    Confidence. You know that your worth belongs to you.
                `,

                essence: "Prithvi",
                feeling: "Confidence"
            },

            {
                text: `
                    Fear. You remember what it feels like when trust makes
                    the world uncertain.
                `,

                essence: "Vayu",
                feeling: "Fear"
            }

        ]

    }

];


/* =========================================================
   DISPLAY ACT
========================================================= */

function displayAct() {

    const act = story[gameState.currentAct];

    storyTitle.textContent = "THE LIE";

    actNumber.textContent =
        `Act ${act.act} of ${story.length} — ${act.title}`;

    storyText.innerHTML = act.text;

    choicesContainer.innerHTML = "";


    act.choices.forEach(choice => {

        const button =
            document.createElement("button");

        button.className = "choice-button";

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
   RECORD CHOICE
========================================================= */

function recordChoice(choice) {

    gameState.scores[choice.essence]++;


    if (
        !gameState.feelings[choice.essence][choice.feeling]
    ) {

        gameState.feelings[choice.essence][choice.feeling] = 0;

    }


    gameState.feelings[choice.essence][choice.feeling]++;


    gameState.currentAct++;


    if (gameState.currentAct >= story.length) {

        revealEssence();

        return;

    }


    displayAct();

}


/* =========================================================
   DETERMINE ESSENCE
========================================================= */

function determineEssence() {

    const scores = gameState.scores;

    const maxScore = Math.max(
        scores.Agni,
        scores.Jala,
        scores.Prithvi,
        scores.Vayu
    );


    const winners =
        Object.keys(scores).filter(
            essence => scores[essence] === maxScore
        );


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


    if (entries.length === 0) {

        return essenceData[essence].core;

    }


    entries.sort(
        (a, b) => b[1] - a[1]
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
        determineTriggerFeeling(essence);


    storyScreen.classList.remove("active");

    resultScreen.classList.add("active");


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
