/* =========================================================
   AWAKENING ESSENCE
   STORY: THE LIE
   ========================================================= */

awakeningStories["the-lie"] = {

    title: "THE LIE",

    start: "act1",

    setting: {
        era: "Steampunk Era",
        city: "SteelMills",
        realm: "Midgard",
        state: "Eidolon",
        country: "Ireland"
    },

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
                    SteelMills is loud today.
                </p>

                <p>
                    The city never truly becomes quiet. Iron wheels grind
                    against rails beneath the streets, steam hisses from
                    pressure valves along the buildings, and the enormous
                    machines inside the factories keep their relentless
                    rhythm from morning until night.
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
                    You believed them.
                </p>

                <p>
                    Why wouldn't you?
                </p>

                <p>
                    This is someone close to you. Someone whose word has
                    carried enough weight that you never had much reason to
                    question it.
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
                    They are exactly where you were told they would not be.
                </p>

                <p>
                    You stare for another moment, hoping there is something
                    you are missing.
                </p>

                <p>
                    There isn't.
                </p>

                <p>
                    They haven't noticed you.
                </p>

                <p>
                    For the first time, the possibility enters your mind that
                    what you were told may not have been true.
                </p>

                <p>
                    You have a decision to make.
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
                    next: "act2-agni"
                },

                {
                    text: `
                        You stop where you are. The possibility that they
                        deliberately deceived you hurts more than you expected,
                        and you aren't ready to face them yet.
                    `,
                    essence: "Jala",
                    feeling: "Hurt",
                    next: "act2-jala"
                },

                {
                    text: `
                        You remain where you are and think through what you
                        were told. You aren't going to accuse anyone until you
                        know exactly what doesn't fit.
                    `,
                    essence: "Prithvi",
                    feeling: "Doubt",
                    next: "act2-prithvi"
                },

                {
                    text: `
                        You stay where you are and watch them. Something feels
                        wrong, and you aren't ready to make yourself known.
                    `,
                    essence: "Vayu",
                    feeling: "Unease",
                    next: "act2-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 2 — AGNI
           ===================================================== */

        {
            id: "act2-agni",
            act: 2,
            title: "The Confrontation",

            text: `
                <p>
                    You cross the street before you can talk yourself out of
                    it.
                </p>

                <p>
                    Your pace quickens.
                </p>

                <p>
                    They notice you when you are only a few steps away.
                </p>

                <p>
                    Their expression changes.
                </p>

                <p>
                    You notice that too.
                </p>

                <p>
                    You stop directly in front of them.
                </p>

                <p>
                    For a moment, neither of you speaks.
                </p>

                <p>
                    Then you ask the question that has been burning inside
                    your mind since the moment you saw them.
                </p>

                <p>
                    Why are you here?
                </p>

                <p>
                    Their answer comes quickly.
                </p>

                <p>
                    Almost too quickly.
                </p>

                <p>
                    You listen.
                </p>

                <p>
                    The explanation is supposed to settle the matter.
                </p>

                <p>
                    Instead, it makes your irritation grow.
                </p>

                <p>
                    Something about what they are saying doesn't answer what
                    you actually asked.
                </p>

                <p>
                    You have to decide what you do with that feeling.
                </p>
            `,

            choices: [

                {
                    text: `
                        You interrupt them. Their answer isn't good enough,
                        and you want them to explain themselves properly.
                    `,
                    essence: "Agni",
                    feeling: "Frustration",
                    next: "act3-agni"
                },

                {
                    text: `
                        You let them finish. Part of you still hopes there is
                        an explanation that makes everything feel normal again.
                    `,
                    essence: "Jala",
                    feeling: "Hope",
                    next: "act3-jala"
                },

                {
                    text: `
                        You listen carefully, remembering every detail so you
                        can decide whether their explanation actually makes
                        sense.
                    `,
                    essence: "Prithvi",
                    feeling: "Discernment",
                    next: "act3-prithvi"
                },

                {
                    text: `
                        You stop talking and watch their expression instead.
                        You want to know what they do when you don't tell them
                        what you're thinking.
                    `,
                    essence: "Vayu",
                    feeling: "Suspicion",
                    next: "act3-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 2 — JALA
           ===================================================== */

        {
            id: "act2-jala",
            act: 2,
            title: "The Distance",

            text: `
                <p>
                    You don't cross the street.
                </p>

                <p>
                    Not yet.
                </p>

                <p>
                    You remain where you are while people move around you,
                    completely unaware that something inside you has suddenly
                    become uncertain.
                </p>

                <p>
                    Maybe you misunderstood.
                </p>

                <p>
                    You want to believe that.
                </p>

                <p>
                    Because the alternative hurts.
                </p>

                <p>
                    You trusted them.
                </p>

                <p>
                    After several moments, they look across the street.
                </p>

                <p>
                    Their eyes find yours.
                </p>

                <p>
                    They recognize you immediately.
                </p>

                <p>
                    Then they begin walking toward you.
                </p>

                <p>
                    You remain where you are.
                </p>

                <p>
                    You have a moment to decide how you will receive them.
                </p>
            `,

            choices: [

                {
                    text: `
                        You meet them halfway. You don't want to stand here
                        helplessly while they decide how this conversation will
                        happen.
                    `,
                    essence: "Agni",
                    feeling: "Restlessness",
                    next: "act3-agni"
                },

                {
                    text: `
                        You wait for them to reach you. If they care enough to
                        explain, you want them to be the one who begins.
                    `,
                    essence: "Jala",
                    feeling: "Vulnerability",
                    next: "act3-jala"
                },

                {
                    text: `
                        You prepare exactly what you want to ask before they
                        reach you. You don't want your emotions deciding what
                        you say.
                    `,
                    essence: "Prithvi",
                    feeling: "Composure",
                    next: "act3-prithvi"
                },

                {
                    text: `
                        You watch them approach without revealing what you're
                        thinking. You want to see what they do before you react.
                    `,
                    essence: "Vayu",
                    feeling: "Caution",
                    next: "act3-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 2 — PRITHVI
           ===================================================== */

        {
            id: "act2-prithvi",
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
                    You remember exactly what you were told.
                </p>

                <p>
                    You remember how certain they sounded.
                </p>

                <p>
                    Then you look at where they are standing now.
                </p>

                <p>
                    The two things don't fit together.
                </p>

                <p>
                    You don't know whether you are looking at a deliberate
                    deception or something you have misunderstood.
                </p>

                <p>
                    But you do know one thing.
                </p>

                <p>
                    Two conflicting things cannot both be true.
                </p>

                <p>
                    They notice you watching.
                </p>

                <p>
                    Their attention settles on you.
                </p>

                <p>
                    You decide to approach.
                </p>

                <p>
                    The only question is how.
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
                    next: "act3-agni"
                },

                {
                    text: `
                        You approach carefully. You don't want to accuse them
                        until you've heard what they have to say.
                    `,
                    essence: "Jala",
                    feeling: "Uncertainty",
                    next: "act3-jala"
                },

                {
                    text: `
                        You approach with the facts already organized in your
                        mind. You intend to compare their answer against what
                        you know.
                    `,
                    essence: "Prithvi",
                    feeling: "Confidence",
                    next: "act3-prithvi"
                },

                {
                    text: `
                        You approach without revealing what you've noticed.
                        You want to hear their answer before showing what you
                        already know.
                    `,
                    essence: "Vayu",
                    feeling: "Calculation",
                    next: "act3-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 2 — VAYU
           ===================================================== */

        {
            id: "act2-vayu",
            act: 2,
            title: "What You See",

            text: `
                <p>
                    You stay hidden among the people moving through
                    SteelMills.
                </p>

                <p>
                    They haven't noticed you.
                </p>

                <p>
                    That gives you time.
                </p>

                <p>
                    You watch.
                </p>

                <p>
                    At first, nothing seems unusual.
                </p>

                <p>
                    Then someone approaches them.
                </p>

                <p>
                    You cannot hear everything over the machinery and traffic,
                    but you can see enough to notice a change in their
                    behavior.
                </p>

                <p>
                    They become more guarded.
                </p>

                <p>
                    Then they look around.
                </p>

                <p>
                    You instinctively move farther back.
                </p>

                <p>
                    A moment later, their attention moves away.
                </p>

                <p>
                    You don't know exactly what you have witnessed.
                </p>

                <p>
                    But your uneasiness is no longer based only on seeing them
                    where they shouldn't be.
                </p>

                <p>
                    Now you have seen something else.
                </p>

                <p>
                    They turn and begin walking in your direction.
                </p>

                <p>
                    You have to decide what you do.
                </p>
            `,

            choices: [

                {
                    text: `
                        You step out of hiding. Whatever you just saw, you want
                        them to explain it to your face.
                    `,
                    essence: "Agni",
                    feeling: "Agitation",
                    next: "act3-agni"
                },

                {
                    text: `
                        You let them approach. You don't want to confront them
                        while you're still trying to understand what you saw.
                    `,
                    essence: "Jala",
                    feeling: "Apprehension",
                    next: "act3-jala"
                },

                {
                    text: `
                        You stay hidden long enough to organize what you
                        witnessed. You want to understand it before you act.
                    `,
                    essence: "Prithvi",
                    feeling: "Preparedness",
                    next: "act3-prithvi"
                },

                {
                    text: `
                        You remain completely hidden. You aren't ready to reveal
                        that you saw anything at all.
                    `,
                    essence: "Vayu",
                    feeling: "Wariness",
                    next: "act3-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 3 — AGNI
           ===================================================== */

        {
            id: "act3-agni",
            act: 3,
            title: "The Question",

            text: `
                <p>
                    You make it clear that you aren't satisfied.
                </p>

                <p>
                    The person in front of you pauses.
                </p>

                <p>
                    You can see the irritation beginning to appear in their
                    expression now.
                </p>

                <p>
                    For a moment, neither of you gives ground.
                </p>

                <p>
                    Then they repeat their explanation.
                </p>

                <p>
                    It is almost the same as before.
                </p>

                <p>
                    Almost.
                </p>

                <p>
                    One small detail has changed.
                </p>

                <p>
                    You notice.
                </p>

                <p>
                    And now you're certain that something is wrong.
                </p>
            `,

            choices: [

                {
                    text: `
                        You point out the changed detail immediately. You aren't
                        going to let them talk their way around it.
                    `,
                    essence: "Agni",
                    feeling: "Anger",
                    next: "act4-agni"
                },

                {
                    text: `
                        You ask why the detail changed. You don't accuse them;
                        you give them a chance to explain it.
                    `,
                    essence: "Jala",
                    feeling: "Disappointment",
                    next: "act4-jala"
                },

                {
                    text: `
                        You repeat the original version and the new version
                        aloud. You want them to recognize the contradiction
                        themselves.
                    `,
                    essence: "Prithvi",
                    feeling: "Certainty",
                    next: "act4-prithvi"
                },

                {
                    text: `
                        You say nothing about the change. You want to see
                        whether they realize you've noticed it.
                    `,
                    essence: "Vayu",
                    feeling: "Suspicion",
                    next: "act4-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 3 — JALA
           ===================================================== */

        {
            id: "act3-jala",
            act: 3,
            title: "The Explanation",

            text: `
                <p>
                    You give them the opportunity to explain.
                </p>

                <p>
                    They speak carefully.
                </p>

                <p>
                    You listen because part of you still wants their answer
                    to make everything feel normal again.
                </p>

                <p>
                    For a moment, it almost works.
                </p>

                <p>
                    Then one detail catches your attention.
                </p>

                <p>
                    It doesn't match what you were told.
                </p>

                <p>
                    You feel the hurt before you allow yourself to name it.
                </p>

                <p>
                    You still have the opportunity to give them another
                    chance to explain.
                </p>
            `,

            choices: [

                {
                    text: `
                        You ask them about the contradiction directly. You need
                        to know why their story keeps changing.
                    `,
                    essence: "Agni",
                    feeling: "Frustration",
                    next: "act4-agni"
                },

                {
                    text: `
                        You ask them to tell you the truth. You don't want to
                        believe they would deliberately deceive you.
                    `,
                    essence: "Jala",
                    feeling: "Pleading",
                    next: "act4-jala"
                },

                {
                    text: `
                        You calmly repeat what you were originally told and
                        compare it with what you're hearing now.
                    `,
                    essence: "Prithvi",
                    feeling: "Discernment",
                    next: "act4-prithvi"
                },

                {
                    text: `
                        You stop asking questions. Instead, you watch their
                        reaction and listen to what they don't say.
                    `,
                    essence: "Vayu",
                    feeling: "Doubt",
                    next: "act4-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 3 — PRITHVI
           ===================================================== */

        {
            id: "act3-prithvi",
            act: 3,
            title: "The Contradiction",

            text: `
                <p>
                    You explain what you know.
                </p>

                <p>
                    You don't raise your voice.
                </p>

                <p>
                    You don't need to.
                </p>

                <p>
                    The facts are enough.
                </p>

                <p>
                    They answer.
                </p>

                <p>
                    But their answer introduces another inconsistency.
                </p>

                <p>
                    You recognize it immediately.
                </p>

                <p>
                    Now you aren't simply wondering whether something is wrong.
                </p>

                <p>
                    You're beginning to understand that you have been given
                    information that cannot all be true.
                </p>
            `,

            choices: [

                {
                    text: `
                        You demand an explanation for the contradiction.
                    `,
                    essence: "Agni",
                    feeling: "Indignation",
                    next: "act4-agni"
                },

                {
                    text: `
                        You ask them to slow down and explain it again. You
                        still want to believe there is an innocent explanation.
                    `,
                    essence: "Jala",
                    feeling: "Hope",
                    next: "act4-jala"
                },

                {
                    text: `
                        You point out the contradiction calmly and wait for
                        their response.
                    `,
                    essence: "Prithvi",
                    feeling: "Confidence",
                    next: "act4-prithvi"
                },

                {
                    text: `
                        You stop revealing what you know. You want to hear what
                        they say when they don't know how much you've figured
                        out.
                    `,
                    essence: "Vayu",
                    feeling: "Calculation",
                    next: "act4-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 3 — VAYU
           ===================================================== */

        {
            id: "act3-vayu",
            act: 3,
            title: "What You Don't Say",

            text: `
                <p>
                    You keep part of what you know to yourself.
                </p>

                <p>
                    Whether they realize it or not, you have already seen
                    something they didn't intend for you to see.
                </p>

                <p>
                    They begin explaining themselves.
                </p>

                <p>
                    You listen.
                </p>

                <p>
                    You don't interrupt.
                </p>

                <p>
                    You don't correct them.
                </p>

                <p>
                    You simply listen.
                </p>

                <p>
                    And while they speak, you notice that one part of their
                    explanation does not match what you witnessed.
                </p>
            `,

            choices: [

                {
                    text: `
                        You reveal what you saw and demand an explanation.
                    `,
                    essence: "Agni",
                    feeling: "Agitation",
                    next: "act4-agni"
                },

                {
                    text: `
                        You ask them whether there is something they're afraid
                        to tell you.
                    `,
                    essence: "Jala",
                    feeling: "Concern",
                    next: "act4-jala"
                },

                {
                    text: `
                        You describe only the facts you personally witnessed
                        and ask them to explain the difference.
                    `,
                    essence: "Prithvi",
                    feeling: "Objectivity",
                    next: "act4-prithvi"
                },

                {
                    text: `
                        You keep the information to yourself and let them
                        continue talking.
                    `,
                    essence: "Vayu",
                    feeling: "Distrust",
                    next: "act4-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 4 — AGNI
           ===================================================== */

        {
            id: "act4-agni",
            act: 4,
            title: "Enough",

            text: `
                <p>
                    You have heard enough.
                </p>

                <p>
                    The contradictions have piled up too high for you to
                    ignore them.
                </p>

                <p>
                    You tell them exactly what you think.
                </p>

                <p>
                    Their expression hardens.
                </p>

                <p>
                    The conversation changes immediately.
                </p>

                <p>
                    They are no longer simply explaining themselves.
                </p>

                <p>
                    Now they are defending themselves.
                </p>

                <p>
                    And that difference tells you more than another explanation
                    might have.
                </p>
            `,

            choices: [

                {
                    text: `
                        You refuse to back down. If they want to defend what
                        they said, they can answer the questions you've asked.
                    `,
                    essence: "Agni",
                    feeling: "Defiance",
                    next: "act5-agni"
                },

                {
                    text: `
                        You ask them why they are becoming defensive. You still
                        want the person you trusted to tell you the truth.
                    `,
                    essence: "Jala",
                    feeling: "Hurt",
                    next: "act5-jala"
                },

                {
                    text: `
                        You stop arguing and listen carefully. You want to
                        understand exactly what they're defending.
                    `,
                    essence: "Prithvi",
                    feeling: "Focus",
                    next: "act5-prithvi"
                },

                {
                    text: `
                        You become quiet. Their defensiveness has told you
                        enough that you no longer want to reveal what you're
                        thinking.
                    `,
                    essence: "Vayu",
                    feeling: "Withdrawal",
                    next: "act5-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 4 — JALA
           ===================================================== */

        {
            id: "act4-jala",
            act: 4,
            title: "Tell Me",

            text: `
                <p>
                    You ask them to be honest.
                </p>

                <p>
                    Your voice is quieter now.
                </p>

                <p>
                    You aren't trying to win an argument.
                </p>

                <p>
                    You just want the person standing in front of you to stop
                    making you question what is real.
                </p>

                <p>
                    They hesitate.
                </p>

                <p>
                    That hesitation hurts.
                </p>

                <p>
                    Because now the silence itself feels like an answer.
                </p>
            `,

            choices: [

                {
                    text: `
                        You ask again, more firmly this time. You need them to
                        stop avoiding the truth.
                    `,
                    essence: "Agni",
                    feeling: "Frustration",
                    next: "act5-agni"
                },

                {
                    text: `
                        You tell them how much you trusted them and ask them
                        not to make you regret it.
                    `,
                    essence: "Jala",
                    feeling: "Heartache",
                    next: "act5-jala"
                },

                {
                    text: `
                        You give them time to answer. You want to hear what they
                        choose to say without forcing the response.
                    `,
                    essence: "Prithvi",
                    feeling: "Patience",
                    next: "act5-prithvi"
                },

                {
                    text: `
                        You stop asking. Their hesitation has made you wonder
                        what they might say if you simply let the silence remain.
                    `,
                    essence: "Vayu",
                    feeling: "Distance",
                    next: "act5-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 4 — PRITHVI
           ===================================================== */

        {
            id: "act4-prithvi",
            act: 4,
            title: "The Facts",

            text: `
                <p>
                    You stop trying to convince them.
                </p>

                <p>
                    Instead, you lay everything out clearly.
                </p>

                <p>
                    What you were told.
                </p>

                <p>
                    What you witnessed.
                </p>

                <p>
                    What they are saying now.
                </p>

                <p>
                    You don't accuse them.
                </p>

                <p>
                    You simply leave the contradiction between them.
                </p>

                <p>
                    They look at you.
                </p>

                <p>
                    Then they become defensive.
                </p>
            `,

            choices: [

                {
                    text: `
                        You tell them that defensiveness won't change what you
                        already know.
                    `,
                    essence: "Agni",
                    feeling: "Indignation",
                    next: "act5-agni"
                },

                {
                    text: `
                        You ask them to tell you why the truth seems so difficult
                        for them to give you.
                    `,
                    essence: "Jala",
                    feeling: "Sadness",
                    next: "act5-jala"
                },

                {
                    text: `
                        You remain calm and allow them to answer. You trust
                        yourself to recognize whether the answer makes sense.
                    `,
                    essence: "Prithvi",
                    feeling: "Certainty",
                    next: "act5-prithvi"
                },

                {
                    text: `
                        You stop explaining yourself. You've said enough, and
                        now you want to see what they do without your guidance.
                    `,
                    essence: "Vayu",
                    feeling: "Detachment",
                    next: "act5-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 4 — VAYU
           ===================================================== */

        {
            id: "act4-vayu",
            act: 4,
            title: "The Silence",

            text: `
                <p>
                    You say very little.
                </p>

                <p>
                    They continue talking.
                </p>

                <p>
                    The more they explain, the more carefully you listen.
                </p>

                <p>
                    Not only to their words.
                </p>

                <p>
                    To their pauses.
                </p>

                <p>
                    Their hesitation.
                </p>

                <p>
                    The moments when they seem to choose one sentence over
                    another.
                </p>

                <p>
                    You still don't know the whole truth.
                </p>

                <p>
                    But you know enough to understand that something is being
                    kept from you.
                </p>
            `,

            choices: [

                {
                    text: `
                        You finally speak. You tell them that you know they're
                        hiding something.
                    `,
                    essence: "Agni",
                    feeling: "Anger",
                    next: "act5-agni"
                },

                {
                    text: `
                        You ask them whether they understand how much this is
                        hurting you.
                    `,
                    essence: "Jala",
                    feeling: "Pain",
                    next: "act5-jala"
                },

                {
                    text: `
                        You tell them exactly what you observed and wait for
                        their explanation.
                    `,
                    essence: "Prithvi",
                    feeling: "Reason",
                    next: "act5-prithvi"
                },

                {
                    text: `
                        You remain silent. You have learned enough to know that
                        revealing everything you know may not help you.
                    `,
                    essence: "Vayu",
                    feeling: "Secrecy",
                    next: "act5-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 5
           ===================================================== */

        {
            id: "act5-agni",
            act: 5,
            title: "The Breaking Point",

            text: `
                <p>
                    You refuse to let the conversation continue in circles.
                </p>

                <p>
                    The anger inside you has become impossible to ignore.
                </p>

                <p>
                    You trusted this person.
                </p>

                <p>
                    You believed what they told you.
                </p>

                <p>
                    And now every explanation seems to create another reason
                    to question them.
                </p>

                <p>
                    You finally say the thing you have been avoiding.
                </p>

                <p>
                    You don't believe them anymore.
                </p>
            `,

            choices: [

                {
                    text: `
                        You let the anger come. You are tired of being expected
                        to accept answers that don't make sense.
                    `,
                    essence: "Agni",
                    feeling: "Betrayal-Rage",
                    next: "act6-agni"
                },

                {
                    text: `
                        You stop and admit that beneath the anger, you're hurt
                        because you trusted them.
                    `,
                    essence: "Jala",
                    feeling: "Heartbreak",
                    next: "act6-jala"
                },

                {
                    text: `
                        You steady yourself and remind yourself that their
                        choices do not make your own judgment worthless.
                    `,
                    essence: "Prithvi",
                    feeling: "Self-Assurance",
                    next: "act6-prithvi"
                },

                {
                    text: `
                        You stop talking. You don't want them to know how much
                        their deception has affected you.
                    `,
                    essence: "Vayu",
                    feeling: "Withdrawal",
                    next: "act6-vayu"
                }

            ]
        },


        {
            id: "act5-jala",
            act: 5,
            title: "The Breaking Point",

            text: `
                <p>
                    You wait for the answer.
                </p>

                <p>
                    It doesn't come the way you hoped.
                </p>

                <p>
                    Something in their response makes the truth of the
                    situation impossible to ignore.
                </p>

                <p>
                    You don't need every detail.
                </p>

                <p>
                    You understand enough.
                </p>

                <p>
                    You trusted them.
                </p>

                <p>
                    And they knew that when they chose what to tell you.
                </p>
            `,

            choices: [

                {
                    text: `
                        You finally let the anger show. You can't believe they
                        knew you trusted them and still did this.
                    `,
                    essence: "Agni",
                    feeling: "Betrayal-Rage",
                    next: "act6-agni"
                },

                {
                    text: `
                        You allow yourself to feel the hurt instead of trying
                        to hide it.
                    `,
                    essence: "Jala",
                    feeling: "Heartbreak",
                    next: "act6-jala"
                },

                {
                    text: `
                        You remind yourself that trusting someone was not a
                        failure on your part.
                    `,
                    essence: "Prithvi",
                    feeling: "Self-Trust",
                    next: "act6-prithvi"
                },

                {
                    text: `
                        You pull away. You don't want to give them another
                        opportunity to hurt you.
                    `,
                    essence: "Vayu",
                    feeling: "Withdrawal",
                    next: "act6-vayu"
                }

            ]
        },


        {
            id: "act5-prithvi",
            act: 5,
            title: "The Breaking Point",

            text: `
                <p>
                    You have followed the contradictions as far as they can
                    go.
                </p>

                <p>
                    The pieces no longer fit together.
                </p>

                <p>
                    You don't need to argue about that.
                </p>

                <p>
                    You know.
                </p>

                <p>
                    Something you were told was deliberately kept from you.
                </p>

                <p>
                    The realization is strangely quiet.
                </p>

                <p>
                    But it changes the way you see the person standing before
                    you.
                </p>
            `,

            choices: [

                {
                    text: `
                        You tell them exactly what you think they've done. You
                        aren't going to pretend you don't understand.
                    `,
                    essence: "Agni",
                    feeling: "Indignation",
                    next: "act6-agni"
                },

                {
                    text: `
                        You ask them why they didn't trust you enough to tell
                        you the truth.
                    `,
                    essence: "Jala",
                    feeling: "Sadness",
                    next: "act6-jala"
                },

                {
                    text: `
                        You accept what you know without blaming yourself for
                        what they chose to do.
                    `,
                    essence: "Prithvi",
                    feeling: "Clarity",
                    next: "act6-prithvi"
                },

                {
                    text: `
                        You say nothing more. You don't need another explanation
                        to understand that trust has changed.
                    `,
                    essence: "Vayu",
                    feeling: "Distance",
                    next: "act6-vayu"
                }

            ]
        },


        {
            id: "act5-vayu",
            act: 5,
            title: "The Breaking Point",

            text: `
                <p>
                    You don't reveal everything you know.
                </p>

                <p>
                    You don't need to.
                </p>

                <p>
                    You have listened long enough to recognize that something
                    important has been deliberately kept from you.
                </p>

                <p>
                    The realization doesn't arrive with an explosion.
                </p>

                <p>
                    It settles quietly.
                </p>

                <p>
                    The person you trusted is no longer someone you feel safe
                    trusting in the same way.
                </p>
            `,

            choices: [

                {
                    text: `
                        You finally confront them about what they've been hiding.
                    `,
                    essence: "Agni",
                    feeling: "Anger",
                    next: "act6-agni"
                },

                {
                    text: `
                        You ask them whether they understand what this has done
                        to your trust in them.
                    `,
                    essence: "Jala",
                    feeling: "Hurt",
                    next: "act6-jala"
                },

                {
                    text: `
                        You accept what you've learned and begin separating
                        their choices from your own judgment.
                    `,
                    essence: "Prithvi",
                    feeling: "Understanding",
                    next: "act6-prithvi"
                },

                {
                    text: `
                        You leave the conversation without telling them
                        everything you know.
                    `,
                    essence: "Vayu",
                    feeling: "Detachment",
                    next: "act6-vayu"
                }

            ]
        },


        /* =====================================================
           ACT 6
           ===================================================== */

        {
            id: "act6-agni",
            act: 6,
            title: "Afterward",

            text: `
                <p>
                    You leave SteelMills behind you for a while.
                </p>

                <p>
                    The noise of the city follows you.
                </p>

                <p>
                    You try to put distance between yourself and the
                    conversation.
                </p>

                <p>
                    It doesn't work.
                </p>

                <p>
                    Your mind keeps returning to it.
                </p>

                <p>
                    Every time it does, the anger comes back.
                </p>

                <p>
                    You begin remembering every moment when you accepted what
                    this person told you without question.
                </p>

                <p>
                    You don't know whether those memories mean anything
                    different now.
                </p>

                <p>
                    But you can't stop wondering.
                </p>
            `,

            choices: [

                {
                    text: `
                        You let yourself be angry. You refuse to bury what
                        happened simply because it is uncomfortable.
                    `,
                    essence: "Agni",
                    feeling: "Resentment",
                    next: "act7"
                },

                {
                    text: `
                        You admit that beneath the anger is hurt. You trusted
                        them, and losing that trust feels like losing something
                        important.
                    `,
                    essence: "Jala",
                    feeling: "Grief",
                    next: "act7"
                },

                {
                    text: `
                        You separate what you know from what you are imagining.
                        You refuse to punish yourself with answers you don't
                        actually have.
                    `,
                    essence: "Prithvi",
                    feeling: "Clarity",
                    next: "act7"
                },

                {
                    text: `
                        You stop thinking about it. Some questions are safer
                        when you leave them unanswered.
                    `,
                    essence: "Vayu",
                    feeling: "Detachment",
                    next: "act7"
                }

            ]
        },


        {
            id: "act6-jala",
            act: 6,
            title: "Afterward",

            text: `
                <p>
                    You leave the conversation carrying something heavier than
                    anger.
                </p>

                <p>
                    You keep thinking about how easily you trusted them.
                </p>

                <p>
                    How natural it felt.
                </p>

                <p>
                    How safe their words once seemed.
                </p>

                <p>
                    Now those memories feel different.
                </p>

                <p>
                    You don't know whether you miss the person or the trust
                    you once had in them.
                </p>
            `,

            choices: [

                {
                    text: `
                        You become angry at yourself for allowing someone to
                        have this much power over your feelings.
                    `,
                    essence: "Agni",
                    feeling: "Frustration",
                    next: "act7"
                },

                {
                    text: `
                        You allow yourself to grieve what changed between you.
                    `,
                    essence: "Jala",
                    feeling: "Grief",
                    next: "act7"
                },

                {
                    text: `
                        You remind yourself that trusting someone wasn't wrong
                        simply because they chose to betray that trust.
                    `,
                    essence: "Prithvi",
                    feeling: "Self-Trust",
                    next: "act7"
                },

                {
                    text: `
                        You decide to stop revisiting the memories. You need
                        distance before you can think clearly.
                    `,
                    essence: "Vayu",
                    feeling: "Withdrawal",
                    next: "act7"
                }

            ]
        },


        {
            id: "act6-prithvi",
            act: 6,
            title: "Afterward",

            text: `
                <p>
                    You leave with the facts still clear in your mind.
                </p>

                <p>
                    You know what happened.
                </p>

                <p>
                    You know what you were told.
                </p>

                <p>
                    You know those two things do not belong together.
                </p>

                <p>
                    What you don't know is why.
                </p>

                <p>
                    And you realize that knowing why may not change what
                    happened.
                </p>
            `,

            choices: [

                {
                    text: `
                        You become angry that they expected you to accept an
                        explanation that didn't make sense.
                    `,
                    essence: "Agni",
                    feeling: "Indignation",
                    next: "act7"
                },

                {
                    text: `
                        You think about how much you wanted to believe them and
                        allow yourself to acknowledge that it hurts.
                    `,
                    essence: "Jala",
                    feeling: "Sadness",
                    next: "act7"
                },

                {
                    text: `
                        You keep the facts separate from assumptions and remind
                        yourself that your judgment is still your own.
                    `,
                    essence: "Prithvi",
                    feeling: "Confidence",
                    next: "act7"
                },

                {
                    text: `
                        You decide you don't need the rest of the explanation.
                        You know enough to protect yourself.
                    `,
                    essence: "Vayu",
                    feeling: "Distance",
                    next: "act7"
                }

            ]
        },


        {
            id: "act6-vayu",
            act: 6,
            title: "Afterward",

            text: `
                <p>
                    You leave without saying everything you know.
                </p>

                <p>
                    The decision gives you a strange sense of relief.
                </p>

                <p>
                    You don't have to hear another explanation.
                </p>

                <p>
                    You don't have to watch another expression change.
                </p>

                <p>
                    You can simply put distance between yourself and what
                    happened.
                </p>

                <p>
                    But even as you walk away, you realize that distance
                    doesn't erase the feeling.
                </p>
            `,

            choices: [

                {
                    text: `
                        You turn back. You aren't willing to let them think
                        they can simply lie to you and walk away.
                    `,
                    essence: "Agni",
                    feeling: "Defiance",
                    next: "act7"
                },

                {
                    text: `
                        You stop and acknowledge that walking away doesn't mean
                        the hurt has disappeared.
                    `,
                    essence: "Jala",
                    feeling: "Loneliness",
                    next: "act7"
                },

                {
                    text: `
                        You remind yourself that choosing distance doesn't mean
                        you have lost control of the situation.
                    `,
                    essence: "Prithvi",
                    feeling: "Control",
                    next: "act7"
                },

                {
                    text: `
                        You keep walking. Right now, distance is what you need.
                    `,
                    essence: "Vayu",
                    feeling: "Self-Preservation",
                    next: "act7"
                }

            ]
        },


        /* =====================================================
           ACT 7
           ===================================================== */

        {
            id: "act7",
            act: 7,
            title: "The World Keeps Moving",

            text: `
                <p>
                    SteelMills does not stop because something inside you has
                    changed.
                </p>

                <p>
                    The factories continue working.
                </p>

                <p>
                    Steam rises between the buildings.
                </p>

                <p>
                    Workers move through the streets.
                </p>

                <p>
                    Machines continue turning as though nothing happened.
                </p>

                <p>
                    But you notice something different about yourself.
                </p>

                <p>
                    When someone tells you something now, you listen
                    differently.
                </p>

                <p>
                    When someone makes a promise, you hear the promise and
                    wonder whether it can be trusted.
                </p>

                <p>
                    The experience has changed something inside you.
                </p>

                <p>
                    You have to decide what you do with that change.
                </p>
            `,

            choices: [

                {
                    text: `
                        You decide that if someone wants your trust again,
                        they'll have to earn it.
                    `,
                    essence: "Agni",
                    feeling: "Defiance",
                    next: "act8"
                },

                {
                    text: `
                        You realize that trusting someone will always leave you
                        vulnerable, and part of you is afraid of being hurt
                        this way again.
                    `,
                    essence: "Jala",
                    feeling: "Vulnerability",
                    next: "act8"
                },

                {
                    text: `
                        You remind yourself that another person's dishonesty
                        does not make your own judgment worthless.
                    `,
                    essence: "Prithvi",
                    feeling: "Confidence",
                    next: "act8"
                },

                {
                    text: `
                        You decide to keep more of yourself to yourself. It
                        feels safer that way.
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
                    You continue through the city.
                </p>

                <p>
                    You try to focus on something else.
                </p>

                <p>
                    Then someone says something to you.
                </p>

                <p>
                    It is ordinary.
                </p>

                <p>
                    Something that normally would not matter.
                </p>

                <p>
                    But the moment the words reach you, something inside you
                    reacts.
                </p>

                <p>
                    The feeling returns.
                </p>

                <p>
                    Not the entire conversation.
                </p>

                <p>
                    Not every detail.
                </p>

                <p>
                    Just the feeling.
                </p>

                <p>
                    The same feeling that began when you first realized that
                    something you believed might not be true.
                </p>

                <p>
                    You recognize it now.
                </p>
            `,

            choices: [

                {
                    text: `
                        You face the feeling instead of suppressing it. You
                        refuse to pretend it isn't there.
                    `,
                    essence: "Agni",
                    feeling: "Fury",
                    next: "act9"
                },

                {
                    text: `
                        You allow yourself to feel it. The hurt matters, even
                        if you wish it didn't.
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
                        You distance yourself from whatever triggered the
                        feeling. You don't want it controlling you again.
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
            title: "What Remains",

            text: `
                <p>
                    You finally understand that the lie itself isn't the only
                    thing that changed you.
                </p>

                <p>
                    It was the feeling that came with discovering it.
                </p>

                <p>
                    The anger.
                </p>

                <p>
                    The hurt.
                </p>

                <p>
                    The uncertainty.
                </p>

                <p>
                    The instinct to understand.
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
                    Then something happened that made you question whether it
                    was true.
                </p>

                <p>
                    You cannot control another person's choices.
                </p>

                <p>
                    You cannot change what already happened.
                </p>

                <p>
                    But you can decide what remains inside you.
                </p>
            `,

            choices: [

                {
                    text: `
                        You refuse to surrender to the feeling. Whatever
                        happened, you will not allow it to define your strength.
                    `,
                    essence: "Agni",
                    feeling: "Defiance",
                    next: "act10"
                },

                {
                    text: `
                        You accept that it hurts because the trust mattered to
                        you. You don't need to deny that anymore.
                    `,
                    essence: "Jala",
                    feeling: "Acceptance",
                    next: "act10"
                },

                {
                    text: `
                        You understand that trusting someone was not a failure
                        of your judgment. Their choice belonged to them.
                    `,
                    essence: "Prithvi",
                    feeling: "Self-Trust",
                    next: "act10"
                },

                {
                    text: `
                        You recognize the instinct to pull away. Protecting
                        yourself matters, and you don't need to explain that to
                        anyone.
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
                    SteelMills continues exactly as it always has.
                </p>

                <p>
                    But something inside you is different.
                </p>

                <p>
                    You think about what happened.
                </p>

                <p>
                    You think about what you believed.
                </p>

                <p>
                    You think about the moment that belief began to break.
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
                    For one brief moment, something inside you awakens.
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

                <p>
                    And now you must decide how you meet it.
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
                        You allow yourself to feel everything the moment has
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
                        You protect the part of yourself that was hurt. You
                        don't need anyone else to understand what you feel.
                    `,
                    essence: "Vayu",
                    feeling: "Fear",
                    next: null
                }

            ]
        }

    ]

};
