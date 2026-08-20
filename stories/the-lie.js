/* =========================================================
   AWAKENING ESSENCE
   STORY: THE LIE
   ========================================================= */

awakeningStories["the-lie"] = {

    title: "THE LIE",

    start: "act1",

    acts: [

        /* =====================================================
           ACT 1
           ===================================================== */

        {
            id: "act1",
            act: 1,
            title: "The Lie",

            text: `

                <p>
                    The afternoon air hangs heavy over Crudsder.
                    Smoke rolls lazily from the towering stacks above the
                    city, mixing with the pale clouds of steam rising from
                    pipes beneath the streets.
                </p>

                <p>
                    Somewhere beyond the buildings, a locomotive releases a
                    long mechanical whistle. Its echo travels between the
                    buildings before disappearing beneath the constant
                    grinding of gears and machinery.
                </p>

                <p>
                    You barely notice any of it.
                </p>

                <p>
                    Your thoughts are somewhere else.
                </p>

                <p>
                    You are thinking about what you were told.
                </p>

                <p>
                    You believed it.
                </p>

                <p>
                    Why wouldn't you?
                </p>

                <p>
                    This is someone you know. Someone whose words have meant
                    something to you for a long time. You have listened to
                    them before without needing to question whether what they
                    said was true.
                </p>

                <p>
                    Then you see them.
                </p>

                <p>
                    Across the street.
                </p>

                <p>
                    Your steps stop.
                </p>

                <p>
                    They are exactly where they told you they would not be.
                </p>

                <p>
                    The realization doesn't arrive all at once.
                </p>

                <p>
                    First comes confusion.
                </p>

                <p>
                    Then comes the uncomfortable feeling that something
                    doesn't fit.
                </p>

                <p>
                    You look again.
                </p>

                <p>
                    There is no mistaking them.
                </p>

                <p>
                    They haven't noticed you.
                </p>

                <p>
                    You have a moment to decide what you do next.
                </p>

            `,

            choices: [

                {
                    text: `
                        You cross the street and approach them immediately.
                        Whatever this is, you want an explanation now.
                    `,
                    essence: "Agni",
                    feeling: "Irritation",
                    next: "act2-confront"
                },

                {
                    text: `
                        You hesitate. The possibility that they deliberately
                        deceived you hurts more than you expected, and you
                        aren't ready to face them yet.
                    `,
                    essence: "Jala",
                    feeling: "Hurt",
                    next: "act2-hesitate"
                },

                {
                    text: `
                        You stop and think carefully. Maybe there is something
                        you misunderstood, and you want to be certain before
                        accusing anyone.
                    `,
                    essence: "Prithvi",
                    feeling: "Doubt",
                    next: "act2-consider"
                },

                {
                    text: `
                        You stay where you are and watch them. Something feels
                        wrong, and you aren't ready to make yourself known.
                    `,
                    essence: "Vayu",
                    feeling: "Unease",
                    next: "act2-watch"
                }

            ]
        },


        /* =====================================================
           ACT 2A — CONFRONT
           ===================================================== */

        {
            id: "act2-confront",
            act: 2,
            title: "The Confrontation",

            text: `

                <p>
                    You cross the street.
                </p>

                <p>
                    You don't slow down.
                </p>

                <p>
                    By the time they realize you're approaching, you've
                    already made your decision.
                </p>

                <p>
                    Their expression changes when they see you.
                </p>

                <p>
                    You notice it immediately.
                </p>

                <p>
                    You stop in front of them.
                </p>

                <p>
                    For a moment, neither of you says anything.
                </p>

                <p>
                    The noise of the city continues around you, but you barely
                    hear it.
                </p>

                <p>
                    You look at them.
                </p>

                <p>
                    Then you ask the question that has been sitting inside
                    your mind since the moment you saw them.
                </p>

                <p>
                    Why are you here?
                </p>

                <p>
                    Their answer comes quickly.
                </p>

                <p>
                    Too quickly.
                </p>

                <p>
                    You listen.
                </p>

                <p>
                    Something about the explanation immediately bothers you.
                </p>

            `,

            choices: [

                {
                    text: `
                        You interrupt them. You don't want another explanation
                        that avoids the question you actually asked.
                    `,
                    essence: "Agni",
                    feeling: "Frustration",
                    next: "act3"
                },

                {
                    text: `
                        You let them finish. Part of you still hopes there is
                        an explanation that makes everything feel normal again.
                    `,
                    essence: "Jala",
                    feeling: "Hope"
                    ,
                    next: "act3"
                },

                {
                    text: `
                        You listen carefully, remembering every detail so you
                        can decide whether their explanation actually makes
                        sense.
                    `,
                    essence: "Prithvi",
                    feeling: "Discernment",
                    next: "act3"
                },

                {
                    text: `
                        You say nothing about what bothers you yet. Instead,
                        you watch their expression while they explain.
                    `,
                    essence: "Vayu",
                    feeling: "Suspicion",
                    next: "act3"
                }

            ]
        },


        /* =====================================================
           ACT 2B — HESITATE
           ===================================================== */

        {
            id: "act2-hesitate",
            act: 2,
            title: "The Distance Between You",

            text: `

                <p>
                    You don't cross the street.
                </p>

                <p>
                    Not yet.
                </p>

                <p>
                    You remain where you are, surrounded by people who have
                    no idea that the world inside your head has suddenly
                    become much quieter.
                </p>

                <p>
                    You keep looking at them.
                </p>

                <p>
                    Maybe you are wrong.
                </p>

                <p>
                    You want to be wrong.
                </p>

                <p>
                    Because if you aren't wrong, then the problem isn't where
                    they are.
                </p>

                <p>
                    The problem is what they told you.
                </p>

                <p>
                    And you trusted them.
                </p>

                <p>
                    Eventually, they look across the street.
                </p>

                <p>
                    Their eyes find yours.
                </p>

                <p>
                    You can tell they recognize the question on your face.
                </p>

                <p>
                    They begin moving toward you.
                </p>

                <p>
                    You have only a moment to decide how you will meet them.
                </p>

            `,

            choices: [

                {
                    text: `
                        You meet them halfway. You don't want to stand here
                        feeling powerless while they decide what happens next.
                    `,
                    essence: "Agni",
                    feeling: "Restlessness",
                    next: "act3"
                },

                {
                    text: `
                        You wait for them to reach you. If they care enough to
                        explain, you want them to be the one who begins.
                    `,
                    essence: "Jala",
                    feeling: "Vulnerability",
                    next: "act3"
                },

                {
                    text: `
                        You stay calm and prepare exactly what you want to ask.
                        You don't want your emotions deciding what you say.
                    `,
                    essence: "Prithvi",
                    feeling: "Composure",
                    next: "act3"
                },

                {
                    text: `
                        You watch them approach without revealing what you're
                        thinking. You want to see what they do before you react.
                    `,
                    essence: "Vayu",
                    feeling: "Caution",
                    next: "act3"
                }

            ]
        },


        /* =====================================================
           ACT 2C — CONSIDER
           ===================================================== */

        {
            id: "act2-consider",
            act: 2,
            title: "The Contradiction",

            text: `

                <p>
                    You don't move.
                </p>

                <p>
                    Instead, you replay the conversation in your mind.
                </p>

                <p>
                    You remember where you were.
                </p>

                <p>
                    You remember what you were told.
                </p>

                <p>
                    You remember how certain they sounded.
                </p>

                <p>
                    Then you look at them again.
                </p>

                <p>
                    There is a contradiction sitting directly in front of
                    you.
                </p>

                <p>
                    You don't know whether the contradiction is deliberate.
                </p>

                <p>
                    You don't know whether there is something you haven't
                    understood.
                </p>

                <p>
                    You only know that two things cannot both be true.
                </p>

                <p>
                    They notice you watching.
                </p>

                <p>
                    Their attention settles on you.
                </p>

                <p>
                    You realize that whatever explanation exists, you aren't
                    going to find it by standing here forever.
                </p>

                <p>
                    You decide how you will approach the conversation.
                </p>

            `,

            choices: [

                {
                    text: `
                        You approach them with the contradiction already on
                        your tongue. You want an answer, not another excuse.
                    `,
                    essence: "Agni",
                    feeling: "Impatience",
                    next: "act3"
                },

                {
                    text: `
                        You approach carefully. You don't want to accuse them
                        until you've heard what they have to say.
                    `,
                    essence: "Jala",
                    feeling: "Uncertainty",
                    next: "act3"
                },

                {
                    text: `
                        You approach with the facts already organized in your
                        mind. You intend to compare their answer against what
                        you know.
                    `,
                    essence: "Prithvi",
                    feeling: "Confidence",
                    next: "act3"
                },

                {
                    text: `
                        You approach without telling them what you've noticed.
                        You want to hear their answer before revealing what
                        you know.
                    `,
                    essence: "Vayu",
                    feeling: "Calculation",
                    next: "act3"
                }

            ]
        },


        /* =====================================================
           ACT 2D — WATCH
           ===================================================== */

        {
            id: "act2-watch",
            act: 2,
            title: "What You See",

            text: `

                <p>
                    You stay hidden among the moving crowd.
                </p>

                <p>
                    They still haven't noticed you.
                </p>

                <p>
                    That gives you time.
                </p>

                <p>
                    You watch them carefully.
                </p>

                <p>
                    At first, nothing seems unusual.
                </p>

                <p>
                    Then someone approaches them.
                </p>

                <p>
                    You can't hear the entire conversation over the machinery
                    and traffic surrounding you, but you can see enough.
                </p>

                <p>
                    Their behavior changes.
                </p>

                <p>
                    Something about the interaction makes you pay closer
                    attention.
                </p>

                <p>
                    Then they look around.
                </p>

                <p>
                    You instinctively step farther back.
                </p>

                <p>
                    A moment later, their attention moves away again.
                </p>

                <p>
                    You don't know what you just witnessed.
                </p>

                <p>
                    But you know you aren't imagining the feeling that
                    something is wrong.
                </p>

                <p>
                    Eventually, they turn and begin walking in your direction.
                </p>

                <p>
                    You have to decide whether you remain hidden or allow
                    yourself to be seen.
                </p>

            `,

            choices: [

                {
                    text: `
                        You step out. Whatever you just saw, you want them to
                        explain it to your face.
                    `,
                    essence: "Agni",
                    feeling: "Agitation",
                    next: "act3"
                },

                {
                    text: `
                        You let them approach. You don't want to confront them
                        while you're still trying to understand what you saw.
                    `,
                    essence: "Jala",
                    feeling: "Apprehension",
                    next: "act3"
                },

                {
                    text: `
                        You remember what you witnessed and decide exactly
                        what you want to ask before allowing them to see you.
                    `,
                    essence: "Prithvi",
                    feeling: "Preparedness",
                    next: "act3"
                },

                {
                    text: `
                        You remain hidden. You aren't ready to reveal that you
                        saw anything at all.
                    `,
                    essence: "Vayu",
                    feeling: "Wariness",
                    next: "act3"
                }

            ]
        },


        /* =====================================================
           ACT 3 — CONVERGENCE
           ===================================================== */

        {
            id: "act3",
            act: 3,
            title: "The Answer",

            text: `

                <p>
                    Eventually, you find yourself face-to-face with them.
                </p>

                <p>
                    The exact way you arrived here doesn't matter anymore.
                </p>

                <p>
                    You are standing in front of someone you trust.
                </p>

                <p>
                    You have a question.
                </p>

                <p>
                    They know you have one.
                </p>

                <p>
                    For a moment, neither of you speaks.
                </p>

                <p>
                    Then they answer.
                </p>

                <p>
                    You listen carefully.
                </p>

                <p>
                    The explanation sounds reasonable at first.
                </p>

                <p>
                    Almost reasonable enough.
                </p>

                <p>
                    But then you remember what you saw.
                </p>

                <p>
                    You remember what you were told.
                </p>

                <p>
                    Something doesn't fit.
                </p>

                <p>
                    You have one chance to decide how you respond.
                </p>

            `,

            choices: [

                {
                    text: `
                        You challenge the explanation immediately. Something
                        about it doesn't sit right with you, and you aren't
                        willing to let it go.
                    `,
                    essence: "Agni",
                    feeling: "Indignation",
                    next: "act4-pressure"
                },

                {
                    text: `
                        You ask them to explain it again. You want to believe
                        them, even though part of you is beginning to hurt.
                    `,
                    essence: "Jala",
                    feeling: "Hope"
                    ,
                    next: "act4-pressure"
                },

                {
                    text: `
                        You calmly point out the contradiction. You want to
                        know whether their answer can withstand what you already
                        know.
                    `,
                    essence: "Prithvi",
                    feeling: "Certainty",
                    next: "act4-pressure"
                },

                {
                    text: `
                        You say very little. Instead, you watch their face and
                        listen for what they avoid saying.
                    `,
                    essence: "Vayu",
                    feeling: "Suspicion",
                    next: "act4-pressure"
                }

            ]
        },


        /* =====================================================
           ACT 4 — PRESSURE
           ===================================================== */

        {
            id: "act4-pressure",
            act: 4,
            title: "Something Doesn't Fit",

            text: `

                <p>
                    You remain there with them.
                </p>

                <p>
                    The conversation continues, but something has changed.
                </p>

                <p>
                    You are no longer simply listening to an explanation.
                </p>

                <p>
                    You are listening for the truth inside it.
                </p>

                <p>
                    They repeat themselves.
                </p>

                <p>
                    They clarify one part.
                </p>

                <p>
                    Then another.
                </p>

                <p>
                    And somehow, with every explanation, the uncertainty
                    inside you becomes heavier instead of lighter.
                </p>

                <p>
                    You know something is missing.
                </p>

                <p>
                    You just don't know what.
                </p>

                <p>
                    The conversation reaches a point where you can either
                    continue pressing, soften your approach, step back and
                    think, or stop revealing what you know.
                </p>

            `,

            choices: [

                {
                    text: `
                        You press them harder. If there is nothing to hide,
                        then there should be nothing wrong with answering you.
                    `,
                    essence: "Agni",
                    feeling: "Anger",
                    next: "act5"
                },

                {
                    text: `
                        You soften your voice and ask them to be honest with
                        you. You aren't trying to fight; you just want the
                        person you trust to tell you the truth.
                    `,
                    essence: "Jala",
                    feeling: "Pleading",
                    next: "act5"
                },

                {
                    text: `
                        You stop arguing and explain exactly what you know.
                        You want to give them one final opportunity to make
                        their story make sense.
                    `,
                    essence: "Prithvi",
                    feeling: "Assertiveness",
                    next: "act5"
                },

                {
                    text: `
                        You stop revealing information. If they don't know
                        what you've already discovered, you can learn more by
                        listening.
                    `,
                    essence: "Vayu",
                    feeling: "Distrust",
                    next: "act5"
                }

            ]
        },


        /* =====================================================
           ACT 5 — CONVERGENCE
           ===================================================== */

        {
            id: "act5",
            act: 5,
            title: "The Moment It Changes",

            text: `

                <p>
                    Something happens during the conversation.
                </p>

                <p>
                    It is small.
                </p>

                <p>
                    A pause.
                </p>

                <p>
                    A change in their expression.
                </p>

                <p>
                    A sentence that doesn't quite belong with everything that
                    came before it.
                </p>

                <p>
                    You notice.
                </p>

                <p>
                    And suddenly, the pieces you've been holding apart begin
                    falling into place.
                </p>

                <p>
                    You don't need anyone to tell you what it means.
                </p>

                <p>
                    You know.
                </p>

                <p>
                    What you were told wasn't true.
                </p>

                <p>
                    The realization lands harder than you expect.
                </p>

                <p>
                    Not because you didn't suspect it.
                </p>

                <p>
                    Because you trusted them.
                </p>

                <p>
                    You look at them differently now.
                </p>

                <p>
                    They are still standing in front of you.
                </p>

                <p>
                    But the person you thought you were speaking to a few
                    moments ago feels strangely distant.
                </p>

            `,

            choices: [

                {
                    text: `
                        You feel the anger break through. You cannot believe
                        they looked you in the eyes and continued lying.
                    `,
                    essence: "Agni",
                    feeling: "Betrayal-Rage",
                    next: "act6"
                },

                {
                    text: `
                        Your chest tightens. You trusted them, and realizing
                        that trust was misplaced hurts more than you can explain.
                    `,
                    essence: "Jala",
                    feeling: "Heartbreak",
                    next: "act6"
                },

                {
                    text: `
                        You steady yourself. Whatever they chose to do, you
                        refuse to let it make you question your own judgment.
                    `,
                    essence: "Prithvi",
                    feeling: "Self-Assurance",
                    next: "act6"
                },

                {
                    text: `
                        You become quiet. You don't want them to know how much
                        the realization has affected you.
                    `,
                    essence: "Vayu",
                    feeling: "Withdrawal",
                    next: "act6"
                }

            ]
        },


        /* =====================================================
           ACT 6
           ===================================================== */

        {
            id: "act6",
            act: 6,
            title: "After the Truth",

            text: `

                <p>
                    The conversation ends.
                </p>

                <p>
                    Maybe you walk away.
                </p>

                <p>
                    Maybe they do.
                </p>

                <p>
                    Either way, you are left with something you didn't have
                    when this began.
                </p>

                <p>
                    Knowledge.
                </p>

                <p>
                    You know you were lied to.
                </p>

                <p>
                    And now your mind begins doing something you cannot stop.
                </p>

                <p>
                    It goes backward.
                </p>

                <p>
                    You remember other conversations.
                </p>

                <p>
                    Other promises.
                </p>

                <p>
                    Other moments when you trusted what you were told without
                    thinking twice.
                </p>

                <p>
                    You begin wondering whether those moments were real too.
                </p>

                <p>
                    You don't know.
                </p>

                <p>
                    That uncertainty may be the hardest part.
                </p>

                <p>
                    You have to decide what you do with it.
                </p>

            `,

            choices: [

                {
                    text: `
                        You let yourself feel the anger. You refuse to bury
                        what they did simply because facing it hurts.
                    `,
                    essence: "Agni",
                    feeling: "Resentment",
                    next: "act7"
                },

                {
                    text: `
                        You think about all the times you trusted them and feel
                        the loss of something you didn't realize could be taken
                        from you.
                    `,
                    essence: "Jala",
                    feeling: "Grief",
                    next: "act7"
                },

                {
                    text: `
                        You separate what you know from what you don't. You
                        refuse to invent answers just because you're hurt.
                    `,
                    essence: "Prithvi",
                    feeling: "Clarity",
                    next: "act7"
                },

                {
                    text: `
                        You stop looking for answers. You decide some things
                        are safer left unknown.
                    `,
                    essence: "Vayu",
                    feeling: "Detachment",
                    next: "act7"
                }

            ]
        },


        /* =====================================================
           ACT 7 — CONVERGENCE
           ===================================================== */

        {
            id: "act7",
            act: 7,
            title: "The World Doesn't Stop",

            text: `

                <p>
                    The city doesn't care what happened.
                </p>

                <p>
                    Crudsder keeps moving.
                </p>

                <p>
                    Gears turn.
                </p>

                <p>
                    Steam pours from iron pipes.
                </p>

                <p>
                    Workers hurry through the streets while mechanical
                    carriages pass beneath the towering buildings.
                </p>

                <p>
                    Everything continues as though nothing has changed.
                </p>

                <p>
                    But something inside you has.
                </p>

                <p>
                    You notice it when someone tells you something.
                </p>

                <p>
                    You notice it when someone makes a promise.
                </p>

                <p>
                    You notice it when someone looks directly into your eyes
                    and expects you to believe them.
                </p>

                <p>
                    You don't respond the way you once did.
                </p>

                <p>
                    The experience has changed the way you listen.
                </p>

                <p>
                    Now you have to decide what that change means.
                </p>

            `,

            choices: [

                {
                    text: `
                        You decide that no one gets to make you feel powerless
                        simply because they chose to deceive you.
                    `,
                    essence: "Agni",
                    feeling: "Defiance",
                    next: "act8"
                },

                {
                    text: `
                        You realize that trusting someone will always leave
                        room for them to hurt you, and that realization scares
                        you.
                    `,
                    essence: "Jala",
                    feeling: "Vulnerability",
                    next: "act8"
                },

                {
                    text: `
                        You remind yourself that trusting someone was not a
                        failure in judgment. Their choice was theirs.
                    `,
                    essence: "Prithvi",
                    feeling: "Confidence",
                    next: "act8"
                },

                {
                    text: `
                        You decide that from now on, you will keep more of
                        yourself to yourself.
                    `,
                    essence: "Vayu",
                    feeling: "Distance",
                    next: "act8"
                }

            ]
        },


        /* =====================================================
           ACT 8
           ===================================================== */

        {
            id: "act8",
            act: 8,
            title: "The Feeling Returns",

            text: `

                <p>
                    You think the moment has passed.
                </p>

                <p>
                    You continue with your day.
                </p>

                <p>
                    You try not to think about it.
                </p>

                <p>
                    Then something ordinary happens.
                </p>

                <p>
                    Someone says something to you.
                </p>

                <p>
                    Nothing about the words should matter.
                </p>

                <p>
                    And yet something inside you reacts before you can stop
                    it.
                </p>

                <p>
                    The feeling returns.
                </p>

                <p>
                    Not the memory.
                </p>

                <p>
                    The feeling.
                </p>

                <p>
                    The same feeling that began when you first realized that
                    what you believed might not be true.
                </p>

                <p>
                    It rises suddenly.
                </p>

                <p>
                    Strongly.
                </p>

                <p>
                    You realize that the experience didn't simply teach you
                    something about another person.
                </p>

                <p>
                    It awakened something inside you.
                </p>

                <p>
                    And now you have to decide what you do when that feeling
                    rises again.
                </p>

            `,

            choices: [

                {
                    text: `
                        You face the feeling instead of suppressing it. You
                        refuse to let it control you, but you won't pretend it
                        isn't there.
                    `,
                    essence: "Agni",
                    feeling: "Fury",
                    next: "act9"
                },

                {
                    text: `
                        You let yourself feel it. Fighting the feeling only
                        makes the ache worse, and you need to understand why it
                        hurts so much.
                    `,
                    essence: "Jala",
                    feeling: "Longing",
                    next: "act9"
                },

                {
                    text: `
                        You steady yourself and examine the feeling without
                        allowing it to decide what is true.
                    `,
                    essence: "Prithvi",
                    feeling: "Composure",
                    next: "act9"
                },

                {
                    text: `
                        You distance yourself from whatever triggered it. You
                        don't want to give the feeling another opportunity to
                        hurt you.
                    `,
                    essence: "Vayu",
                    feeling: "Avoidance",
                    next: "act9"
                }

            ]
        },


        /* =====================================================
           ACT 9
           ===================================================== */

        {
            id: "act9",
            act: 9,
            title: "What It Changed",

            text: `

                <p>
                    You finally understand that the lie itself isn't the only
                    thing that changed you.
                </p>

                <p>
                    It was what happened inside you when you discovered it.
                </p>

                <p>
                    The sudden uncertainty.
                </p>

                <p>
                    The questions.
                </p>

                <p>
                    The hurt.
                </p>

                <p>
                    The anger.
                </p>

                <p>
                    The need to understand.
                </p>

                <p>
                    The instinct to protect yourself.
                </p>

                <p>
                    All of it came from the same moment.
                </p>

                <p>
                    You believed something.
                </p>

                <p>
                    Then you discovered that what you believed was not true.
                </p>

                <p>
                    You cannot change what happened.
                </p>

                <p>
                    You cannot make another person choose differently.
                </p>

                <p>
                    But you can decide what remains inside you.
                </p>

                <p>
                    The feeling rises one final time.
                </p>

                <p>
                    This time, you recognize it.
                </p>

            `,

            choices: [

                {
                    text: `
                        You refuse to surrender to it. Whatever someone did
                        to you, you will not allow it to define your strength.
                    `,
                    essence: "Agni",
                    feeling: "Defiance",
                    next: "act10"
                },

                {
                    text: `
                        You accept that it hurts because the trust mattered to
                        you. You don't need to deny that pain anymore.
                    `,
                    essence: "Jala",
                    feeling: "Acceptance",
                    next: "act10"
                },

                {
                    text: `
                        You understand that your judgment belongs to you. You
                        can learn from what happened without blaming yourself
                        for trusting someone.
                    `,
                    essence: "Prithvi",
                    feeling: "Self-Trust",
                    next: "act10"
                },

                {
                    text: `
                        You recognize the instinct to pull away, but you also
                        recognize why it exists. You choose to protect yourself
                        without losing yourself.
                    `,
                    essence: "Vayu",
                    feeling: "Self-Preservation",
                    next: "act10"
                }

            ]
        },


        /* =====================================================
           ACT 10
           ===================================================== */

        {
            id: "act10",
            act: 10,
            title: "Awakening",

            text: `

                <p>
                    The city continues moving around you.
                </p>

                <p>
                    Gears turn.
                </p>

                <p>
                    Steam rises.
                </p>

                <p>
                    Metal strikes metal somewhere nearby.
                </p>

                <p>
                    A locomotive cries out in the distance.
                </p>

                <p>
                    Life continues.
                </p>

                <p>
                    But you are no longer exactly the person who began this
                    moment.
                </p>

                <p>
                    You think about what happened.
                </p>

                <p>
                    You think about what you believed.
                </p>

                <p>
                    You think about the moment that belief broke.
                </p>

                <p>
                    Then the feeling rises again.
                </p>

                <p>
                    This time, it doesn't feel like something happening
                    <em>to</em> you.
                </p>

                <p>
                    It feels like something coming <em>from</em> you.
                </p>

                <p>
                    Your Energy responds.
                </p>

                <p>
                    For one brief moment, you feel something inside yourself
                    awaken.
                </p>

                <p>
                    You don't understand what it is.
                </p>

                <p>
                    You don't have a name for it.
                </p>

                <p>
                    You only know that the feeling is yours.
                </p>

            `,

            choices: [

                {
                    text: `
                        You let the feeling rise without apology. You will not
                        silence yourself simply because what happened hurt you.
                    `,
                    essence: "Agni",
                    feeling: "Fury",
                    next: null
                },

                {
                    text: `
                        You allow yourself to feel everything that the moment
                        brought with it. You don't need to hide the hurt anymore.
                    `,
                    essence: "Jala",
                    feeling: "Longing",
                    next: null
                },

                {
                    text: `
                        You stand firmly within yourself. You know what you
                        experienced, and you trust yourself to understand what
                        comes next.
                    `,
                    essence: "Prithvi",
                    feeling: "Confidence",
                    next: null
                },

                {
                    text: `
                        You pull inward and protect the part of yourself that
                        was hurt. You don't need anyone else to understand it.
                    `,
                    essence: "Vayu",
                    feeling: "Fear",
                    next: null
                }

            ]
        }

    ]

};
