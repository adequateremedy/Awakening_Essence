/* =========================================================
   AWAKENING ESSENCE
   STORY: THE LIE
   ---------------------------------------------------------
   Setting:
   Steampunk Era
   SteelMills
   Midgard
   Eidolon, Ireland

   The player experiences the event in real time.
   The story does NOT reveal:
   - what the lie actually was
   - who lied
   - why they lied

   The player's responses determine:
   - Essence Type
   - Trigger Feeling
   ========================================================= */


awakeningStories["the-lie"] = {

    title: "The Lie",

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
                    SteelMills is already awake.
                </p>

                <p>
                    The city shakes beneath the weight of its own industry.
                    Iron wheels grind against rails. Steam escapes from pipes
                    running along the sides of buildings, disappearing into the
                    cold air above the streets. Somewhere beyond the rows of
                    factories, a steam whistle cuts through the morning.
                </p>

                <p>
                    You are making your way through the city when you see
                    someone you know.
                </p>

                <p>
                    Someone close to you.
                </p>

                <p>
                    Someone whose words have never given you much reason to
                    doubt them.
                </p>

                <p>
                    You recognize them immediately.
                </p>

                <p>
                    What stops you is not seeing them.
                </p>

                <p>
                    It is where they are.
                </p>

                <p>
                    You were told they would not be here.
                </p>

                <p>
                    You remember the conversation clearly enough. You remember
                    what you were told, and you remember believing it.
                </p>

                <p>
                    Yet there they are.
                </p>

                <p>
                    They haven't seen you.
                </p>

                <p>
                    You stand still while the city continues moving around
                    you.
                </p>

                <p>
                    People pass between you and them. A cart rattles over the
                    street. Steam rolls across the pavement and disappears
                    beneath the boots of passing workers.
                </p>

                <p>
                    You keep watching.
                </p>

                <p>
                    Something inside you has already begun to change.
                </p>

                <p>
                    You don't know what it means yet.
                </p>

                <p>
                    You only know that what you were told and what you are
                    seeing cannot both be true.
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
                        You remain where you are. Seeing them here hurts more
                        than you expected, and you need a moment before you
                        face them.
                    `,
                    essence: "Jala",
                    feeling: "Hurt",
                    next: "act2-hurt"
                },

                {
                    text: `
                        You stay where you are and think through what you were
                        told. You aren't going to accuse anyone until you know
                        exactly what doesn't fit.
                    `,
                    essence: "Prithvi",
                    feeling: "Doubt",
                    next: "act2-observe"
                },

                {
                    text: `
                        You stay hidden and watch them. Something feels wrong,
                        and you aren't ready to make yourself known.
                    `,
                    essence: "Vayu",
                    feeling: "Unease",
                    next: "act2-hidden"
                }

            ]
        },


        /* =====================================================
           ACT 2 — CONFRONT
           ===================================================== */

        {
            id: "act2-confront",

            act: 2,

            title: "The Question",

            text: `
                <p>
                    You cross the street before the hesitation has time to
                    become a reason to stop.
                </p>

                <p>
                    Your steps carry you directly toward them.
                </p>

                <p>
                    They notice you when you are close enough that turning
                    away would be impossible.
                </p>

                <p>
                    Their expression changes.
                </p>

                <p>
                    It is brief.
                </p>

                <p>
                    But you see it.
                </p>

                <p>
                    You stop in front of them.
                </p>

                <p>
                    The noise of SteelMills continues around you, but for a
                    moment it feels as though the two of you are standing in a
                    space entirely separate from the rest of the city.
                </p>

                <p>
                    You ask why they are here.
                </p>

                <p>
                    They answer.
                </p>

                <p>
                    The answer is not what you expected.
                </p>

                <p>
                    It sounds familiar enough to resemble the truth, but
                    something about it leaves you unsatisfied.
                </p>

                <p>
                    You have already seen enough to know that something is
                    wrong.
                </p>
            `,

            choices: [

                {
                    text: `
                        You tell them that isn't what you were told and demand
                        that they explain the difference.
                    `,
                    essence: "Agni",
                    feeling: "Frustration",
                    next: "act3-press"
                },

                {
                    text: `
                        You ask them to explain again. You want to believe there
                        is a reason that makes this all make sense.
                    `,
                    essence: "Jala",
                    feeling: "Hope",
                    next: "act3-believe"
                },

                {
                    text: `
                        You repeat what you were originally told and ask them
                        to explain exactly where the two accounts differ.
                    `,
                    essence: "Prithvi",
                    feeling: "Discernment",
                    next: "act3-compare"
                },

                {
                    text: `
                        You say very little. Instead, you watch their face and
                        listen carefully to every word.
                    `,
                    essence: "Vayu",
                    feeling: "Suspicion",
                    next: "act3-watch"
                }

            ]
        },


        /* =====================================================
           ACT 2 — HURT
           ===================================================== */

        {
            id: "act2-hurt",

            act: 2,

            title: "The Approach",

            text: `
                <p>
                    You don't move at first.
                </p>

                <p>
                    The sight of them standing there has created a feeling you
                    weren't prepared for.
                </p>

                <p>
                    You believed them.
                </p>

                <p>
                    That is what hurts.
                </p>

                <p>
                    Not simply seeing them where they said they would not be.
                    It is realizing that the person you trusted gave you an
                    answer you never thought you would have to question.
                </p>

                <p>
                    They eventually notice you.
                </p>

                <p>
                    Their eyes meet yours across the street.
                </p>

                <p>
                    They begin walking toward you.
                </p>

                <p>
                    You don't run.
                </p>

                <p>
                    You don't approach them either.
                </p>

                <p>
                    You wait for them to cross the distance between you.
                </p>

                <p>
                    When they reach you, there is a moment where neither of you
                    speaks.
                </p>
            `,

            choices: [

                {
                    text: `
                        You ask them why they lied to you, even though you're
                        still trying to understand what happened.
                    `,
                    essence: "Agni",
                    feeling: "Frustration",
                    next: "act3-believe"
                },

                {
                    text: `
                        You tell them that you believed what they said and ask
                        them to please explain what is happening.
                    `,
                    essence: "Jala",
                    feeling: "Vulnerability",
                    next: "act3-believe"
                },

                {
                    text: `
                        You ask them to tell you exactly where they were
                        supposed to be and why that differs from what you're
                        seeing.
                    `,
                    essence: "Prithvi",
                    feeling: "Uncertainty",
                    next: "act3-compare"
                },

                {
                    text: `
                        You wait for them to speak first. You want to know what
                        they will say before you reveal what you're thinking.
                    `,
                    essence: "Vayu",
                    feeling: "Caution",
                    next: "act3-watch"
                }

            ]
        },


        /* =====================================================
           ACT 2 — OBSERVE
           ===================================================== */

        {
            id: "act2-observe",

            act: 2,

            title: "The Contradiction",

            text: `
                <p>
                    You stay where you are.
                </p>

                <p>
                    You replay the conversation in your mind.
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
                    There is no reasonable way to make the two things fit
                    together.
                </p>

                <p>
                    You don't know whether they misunderstood something, made
                    a mistake, or deliberately told you something that wasn't
                    true.
                </p>

                <p>
                    You refuse to decide that without hearing them.
                </p>

                <p>
                    They notice you watching.
                </p>

                <p>
                    Their attention settles on you.
                </p>

                <p>
                    You have enough time to decide how much of what you know
                    you are willing to reveal.
                </p>
            `,

            choices: [

                {
                    text: `
                        You approach them and tell them exactly what you were
                        told. You want an answer without playing games.
                    `,
                    essence: "Agni",
                    feeling: "Impatience",
                    next: "act3-press"
                },

                {
                    text: `
                        You approach calmly and ask them what is going on,
                        giving them the chance to explain before you decide
                        what to believe.
                    `,
                    essence: "Jala",
                    feeling: "Uncertainty",
                    next: "act3-believe"
                },

                {
                    text: `
                        You approach with the facts already organized in your
                        mind. You intend to compare their answer against what
                        you know.
                    `,
                    essence: "Prithvi",
                    feeling: "Confidence",
                    next: "act3-compare"
                },

                {
                    text: `
                        You approach without revealing what you already know.
                        You want to hear their version first.
                    `,
                    essence: "Vayu",
                    feeling: "Calculation",
                    next: "act3-watch"
                }

            ]
        },


        /* =====================================================
           ACT 2 — HIDDEN
           ===================================================== */

        {
            id: "act2-hidden",

            act: 2,

            title: "What You See",

            text: `
                <p>
                    You remain hidden among the movement of the city.
                </p>

                <p>
                    They haven't noticed you.
                </p>

                <p>
                    That gives you something you wouldn't have if you walked
                    directly toward them.
                </p>

                <p>
                    Time.
                </p>

                <p>
                    You watch.
                </p>

                <p>
                    At first, nothing happens.
                </p>

                <p>
                    Then someone approaches them.
                </p>

                <p>
                    You can't hear the entire conversation over the machinery
                    and traffic, but you can see the change in their posture.
                </p>

                <p>
                    They become guarded.
                </p>

                <p>
                    They look around.
                </p>

                <p>
                    You instinctively step farther back.
                </p>

                <p>
                    A moment later, the other person leaves.
                </p>

                <p>
                    The person you know remains where they are.
                </p>

                <p>
                    Now you know that what you saw wasn't simply an innocent
                    coincidence.
                </p>
            `,

            choices: [

                {
                    text: `
                        You step out of hiding and confront them. You have seen
                        enough.
                    `,
                    essence: "Agni",
                    feeling: "Agitation",
                    next: "act3-press"
                },

                {
                    text: `
                        You approach carefully. You need to know what just
                        happened before you decide what this means.
                    `,
                    essence: "Jala",
                    feeling: "Apprehension",
                    next: "act3-believe"
                },

                {
                    text: `
                        You wait long enough to make sure you understand what
                        you actually witnessed before approaching.
                    `,
                    essence: "Prithvi",
                    feeling: "Preparedness",
                    next: "act3-compare"
                },

                {
                    text: `
                        You remain hidden. You aren't ready to reveal that you
                        saw any of this.
                    `,
                    essence: "Vayu",
                    feeling: "Wariness",
                    next: "act3-watch"
                }

            ]
        },


        /* =====================================================
           ACT 3 — PRESS
           ===================================================== */

        {
            id: "act3-press",

            act: 3,

            title: "The Explanation",

            text: `
                <p>
                    You make it clear that their first answer isn't enough.
                </p>

                <p>
                    They hesitate.
                </p>

                <p>
                    Then they give you another explanation.
                </p>

                <p>
                    This one is different.
                </p>

                <p>
                    Not completely different.
                </p>

                <p>
                    Just enough.
                </p>

                <p>
                    You notice the difference immediately.
                </p>

                <p>
                    You were given one version before.
                </p>

                <p>
                    You're hearing another now.
                </p>

                <p>
                    The realization tightens something inside you.
                </p>

                <p>
                    They are watching you carefully now, waiting to see whether
                    you will accept the new explanation.
                </p>
            `,

            choices: [

                {
                    text: `
                        You tell them the two stories don't match and refuse to
                        let them change the subject.
                    `,
                    essence: "Agni",
                    feeling: "Anger",
                    next: "act4-confront"
                },

                {
                    text: `
                        You ask them why the explanation changed. You still want
                        to believe they have a reason.
                    `,
                    essence: "Jala",
                    feeling: "Disappointment",
                    next: "act4-question"
                },

                {
                    text: `
                        You calmly repeat both versions and ask them to explain
                        the contradiction.
                    `,
                    essence: "Prithvi",
                    feeling: "Certainty",
                    next: "act4-facts"
                },

                {
                    text: `
                        You don't mention the contradiction yet. You want to
                        see whether they realize you've noticed.
                    `,
                    essence: "Vayu",
                    feeling: "Suspicion",
                    next: "act4-silence"
                }

            ]
        },


        /* =====================================================
           ACT 3 — BELIEVE
           ===================================================== */

        {
            id: "act3-believe",

            act: 3,

            title: "Give Me A Reason",

            text: `
                <p>
                    You give them a chance.
                </p>

                <p>
                    You don't want the thing you are beginning to suspect to be
                    true.
                </p>

                <p>
                    They explain themselves.
                </p>

                <p>
                    You listen carefully.
                </p>

                <p>
                    There are moments when you almost believe them.
                </p>

                <p>
                    Then one detail doesn't fit.
                </p>

                <p>
                    You remember what you were originally told.
                </p>

                <p>
                    The new explanation doesn't match it.
                </p>

                <p>
                    You look at them again.
                </p>

                <p>
                    You want them to tell you why.
                </p>
            `,

            choices: [

                {
                    text: `
                        You ask them directly why their story has changed.
                    `,
                    essence: "Agni",
                    feeling: "Frustration",
                    next: "act4-confront"
                },

                {
                    text: `
                        You tell them you want to believe them, but something
                        still feels wrong.
                    `,
                    essence: "Jala",
                    feeling: "Heartache",
                    next: "act4-question"
                },

                {
                    text: `
                        You point out the exact detail that doesn't match and
                        ask them to clarify it.
                    `,
                    essence: "Prithvi",
                    feeling: "Discernment",
                    next: "act4-facts"
                },

                {
                    text: `
                        You stop asking questions and watch their reaction to
                        the detail you noticed.
                    `,
                    essence: "Vayu",
                    feeling: "Doubt",
                    next: "act4-silence"
                }

            ]
        },


        /* =====================================================
           ACT 3 — COMPARE
           ===================================================== */

        {
            id: "act3-compare",

            act: 3,

            title: "The Contradiction",

            text: `
                <p>
                    You lay the two versions beside each other in your mind.
                </p>

                <p>
                    What you were told.
                </p>

                <p>
                    What you are being told now.
                </p>

                <p>
                    The contradiction is small enough that someone who wasn't
                    paying attention might miss it.
                </p>

                <p>
                    You don't.
                </p>

                <p>
                    You point it out.
                </p>

                <p>
                    Their expression changes.
                </p>

                <p>
                    They try to explain it away.
                </p>

                <p>
                    But the explanation creates another question.
                </p>

                <p>
                    You realize that you're no longer trying to figure out
                    whether something is wrong.
                </p>

                <p>
                    You're trying to understand how much of what you were told
                    was untrue.
                </p>
            `,

            choices: [

                {
                    text: `
                        You demand that they stop avoiding the contradiction
                        and tell you the truth.
                    `,
                    essence: "Agni",
                    feeling: "Indignation",
                    next: "act4-confront"
                },

                {
                    text: `
                        You ask them to explain it again because you still want
                        there to be another answer.
                    `,
                    essence: "Jala",
                    feeling: "Hope",
                    next: "act4-question"
                },

                {
                    text: `
                        You calmly identify each contradiction and wait for
                        their response.
                    `,
                    essence: "Prithvi",
                    feeling: "Confidence",
                    next: "act4-facts"
                },

                {
                    text: `
                        You stop giving them information and simply listen.
                        You want to know what they say when they don't know
                        what you have already figured out.
                    `,
                    essence: "Vayu",
                    feeling: "Calculation",
                    next: "act4-silence"
                }

            ]
        },


        /* =====================================================
           ACT 3 — WATCH
           ===================================================== */

        {
            id: "act3-watch",

            act: 3,

            title: "What They Don't Say",

            text: `
                <p>
                    You listen.
                </p>

                <p>
                    You don't reveal everything you know.
                </p>

                <p>
                    They begin explaining themselves.
                </p>

                <p>
                    You pay attention to more than their words.
                </p>

                <p>
                    Their pauses.
                </p>

                <p>
                    Their expression.
                </p>

                <p>
                    The moments when they seem to decide what they want you to
                    hear.
                </p>

                <p>
                    Then they say something that doesn't match what you already
                    know.
                </p>

                <p>
                    You don't react immediately.
                </p>

                <p>
                    You simply keep listening.
                </p>
            `,

            choices: [

                {
                    text: `
                        You reveal what you noticed and demand an explanation.
                    `,
                    essence: "Agni",
                    feeling: "Agitation",
                    next: "act4-confront"
                },

                {
                    text: `
                        You ask whether there is something they are afraid to
                        tell you.
                    `,
                    essence: "Jala",
                    feeling: "Concern",
                    next: "act4-question"
                },

                {
                    text: `
                        You describe only what you personally witnessed and ask
                        them to explain the difference.
                    `,
                    essence: "Prithvi",
                    feeling: "Objectivity",
                    next: "act4-facts"
                },

                {
                    text: `
                        You say nothing about what you noticed. You want to hear
                        how much more they will tell you on their own.
                    `,
                    essence: "Vayu",
                    feeling: "Distrust",
                    next: "act4-silence"
                }

            ]
        },


        /* =====================================================
           ACT 4 — CONFRONT
           ===================================================== */

        {
            id: "act4-confront",

            act: 4,

            title: "Enough",

            text: `
                <p>
                    You stop giving them room to redirect the conversation.
                </p>

                <p>
                    You tell them exactly what you see.
                </p>

                <p>
                    The contradiction.
                </p>

                <p>
                    The changed explanation.
                </p>

                <p>
                    The fact that you believed what they told you.
                </p>

                <p>
                    Their expression hardens.
                </p>

                <p>
                    They become defensive.
                </p>

                <p>
                    That reaction only makes the feeling inside you stronger.
                </p>

                <p>
                    You have one opportunity to decide what matters more:
                    getting the truth from them, or making them understand what
                    their deception has done to your trust.
                </p>
            `,

            choices: [

                {
                    text: `
                        You demand the truth. You are done accepting another
                        explanation that doesn't make sense.
                    `,
                    essence: "Agni",
                    feeling: "Fury",
                    next: "act5-demand"
                },

                {
                    text: `
                        You tell them that what hurts most is knowing you
                        trusted them.
                    `,
                    essence: "Jala",
                    feeling: "Heartbreak",
                    next: "act5-hurt"
                },

                {
                    text: `
                        You tell them exactly what you know and refuse to let
                        their defensiveness make you question your own judgment.
                    `,
                    essence: "Prithvi",
                    feeling: "Certainty",
                    next: "act5-stand"
                },

                {
                    text: `
                        You stop arguing and let the silence sit between you.
                        You don't want to reveal anything else.
                    `,
                    essence: "Vayu",
                    feeling: "Withdrawal",
                    next: "act5-withdraw"
                }

            ]
        },


        /* =====================================================
           ACT 4 — QUESTION
           ===================================================== */

        {
            id: "act4-question",

            act: 4,

            title: "Tell Me",

            text: `
                <p>
                    You ask them to tell you the truth.
                </p>

                <p>
                    Your voice is quieter than before.
                </p>

                <p>
                    You aren't trying to win.
                </p>

                <p>
                    You aren't trying to embarrass them.
                </p>

                <p>
                    You simply want the person you trusted to stop making you
                    question what is real.
                </p>

                <p>
                    They hesitate.
                </p>

                <p>
                    That hesitation hurts more than you expect.
                </p>

                <p>
                    You wait.
                </p>

                <p>
                    Finally, they answer.
                </p>

                <p>
                    And somehow, the answer leaves you feeling even less
                    certain than before.
                </p>
            `,

            choices: [

                {
                    text: `
                        You ask again, more firmly. You need them to stop
                        avoiding the truth.
                    `,
                    essence: "Agni",
                    feeling: "Frustration",
                    next: "act5-demand"
                },

                {
                    text: `
                        You tell them how much you trusted them and ask them
                        not to make you regret it.
                    `,
                    essence: "Jala",
                    feeling: "Heartache",
                    next: "act5-hurt"
                },

                {
                    text: `
                        You give them another opportunity to explain. You trust
                        yourself to recognize whether the answer makes sense.
                    `,
                    essence: "Prithvi",
                    feeling: "Patience",
                    next: "act5-stand"
                },

                {
                    text: `
                        You stop asking. Their hesitation has already told you
                        something.
                    `,
                    essence: "Vayu",
                    feeling: "Distance",
                    next: "act5-withdraw"
                }

            ]
        },


        /* =====================================================
           ACT 4 — FACTS
           ===================================================== */

        {
            id: "act4-facts",

            act: 4,

            title: "The Facts",

            text: `
                <p>
                    You stop trying to make the contradiction disappear.
                </p>

                <p>
                    Instead, you separate what you know from what you don't.
                </p>

                <p>
                    You know what you were told.
                </p>

                <p>
                    You know what you saw.
                </p>

                <p>
                    You know what you're being told now.
                </p>

                <p>
                    They do not fit together.
                </p>

                <p>
                    You say so.
                </p>

                <p>
                    They become defensive.
                </p>

                <p>
                    You don't move.
                </p>

                <p>
                    You are beginning to realize that you don't need to become
                    angry to know when something is wrong.
                </p>
            `,

            choices: [

                {
                    text: `
                        You tell them their defensiveness won't change what you
                        already know.
                    `,
                    essence: "Agni",
                    feeling: "Indignation",
                    next: "act5-demand"
                },

                {
                    text: `
                        You ask them why telling you the truth seems so
                        difficult.
                    `,
                    essence: "Jala",
                    feeling: "Sadness",
                    next: "act5-hurt"
                },

                {
                    text: `
                        You remain calm and allow them to answer. You trust
                        yourself to recognize whether the answer is truthful.
                    `,
                    essence: "Prithvi",
                    feeling: "Confidence",
                    next: "act5-stand"
                },

                {
                    text: `
                        You stop explaining yourself. You've said enough.
                    `,
                    essence: "Vayu",
                    feeling: "Detachment",
                    next: "act5-withdraw"
                }

            ]
        },


        /* =====================================================
           ACT 4 — SILENCE
           ===================================================== */

        {
            id: "act4-silence",

            act: 4,

            title: "The Silence",

            text: `
                <p>
                    You become quiet.
                </p>

                <p>
                    They keep talking.
                </p>

                <p>
                    The more they explain, the more carefully you listen.
                </p>

                <p>
                    You hear the words.
                </p>

                <p>
                    You notice the pauses.
                </p>

                <p>
                    You notice what they avoid.
                </p>

                <p>
                    You notice how quickly certain answers come and how
                    carefully others are constructed.
                </p>

                <p>
                    You still don't know everything.
                </p>

                <p>
                    But you know enough to realize that something important is
                    being kept from you.
                </p>
            `,

            choices: [

                {
                    text: `
                        You finally speak. You tell them you know they're
                        hiding something.
                    `,
                    essence: "Agni",
                    feeling: "Anger",
                    next: "act5-demand"
                },

                {
                    text: `
                        You ask whether they understand how much this is
                        hurting you.
                    `,
                    essence: "Jala",
                    feeling: "Pain",
                    next: "act5-hurt"
                },

                {
                    text: `
                        You describe exactly what you observed and wait for
                        their explanation.
                    `,
                    essence: "Prithvi",
                    feeling: "Reason",
                    next: "act5-stand"
                },

                {
                    text: `
                        You remain silent. You have learned enough to know that
                        revealing everything may not help you.
                    `,
                    essence: "Vayu",
                    feeling: "Secrecy",
                    next: "act5-withdraw"
                }

            ]
        },


        /* =====================================================
           ACT 5 — DEMAND
           ===================================================== */

        {
            id: "act5-demand",

            act: 5,

            title: "The Breaking Point",

            text: `
                <p>
                    You stop asking politely.
                </p>

                <p>
                    You want the truth.
                </p>

                <p>
                    You have given them opportunities to explain themselves.
                </p>

                <p>
                    Each explanation has left another question behind.
                </p>

                <p>
                    Your patience is running out.
                </p>

                <p>
                    You tell them that you no longer believe what they're
                    saying.
                </p>

                <p>
                    The words hang between you.
                </p>

                <p>
                    For the first time, there is no room left to pretend this
                    is simply a misunderstanding.
                </p>

                <p>
                    Something has been broken.
                </p>

                <p>
                    You feel it.
                </p>
            `,

            choices: [

                {
                    text: `
                        You let the anger rise. You are tired of being expected
                        to accept answers that don't make sense.
                    `,
                    essence: "Agni",
                    feeling: "Betrayal-Rage",
                    next: "act6-fire"
                },

                {
                    text: `
                        You admit that beneath your anger, you're hurt because
                        you trusted them.
                    `,
                    essence: "Jala",
                    feeling: "Heartbreak",
                    next: "act6-water"
                },

                {
                    text: `
                        You remind yourself that their deception does not make
                        your own judgment worthless.
                    `,
                    essence: "Prithvi",
                    feeling: "Self-Assurance",
                    next: "act6-earth"
                },

                {
                    text: `
                        You stop talking. You don't want them to know how deeply
                        this has affected you.
                    `,
                    essence: "Vayu",
                    feeling: "Withdrawal",
                    next: "act6-air"
                }

            ]
        },


        /* =====================================================
           ACT 5 — HURT
           ===================================================== */

        {
            id: "act5-hurt",

            act: 5,

            title: "The Breaking Point",

            text: `
                <p>
                    You wait for them to answer.
                </p>

                <p>
                    But the answer doesn't undo what has already happened.
                </p>

                <p>
                    You trusted them.
                </p>

                <p>
                    They knew you trusted them.
                </p>

                <p>
                    And somehow, that trust didn't stop them from telling you
                    something that wasn't true.
                </p>

                <p>
                    You feel the weight of that realization settle inside you.
                </p>

                <p>
                    You don't know whether you are more hurt by the lie itself
                    or by the fact that you never imagined they would be capable
                    of it.
                </p>
            `,

            choices: [

                {
                    text: `
                        You finally let the anger show. You can't believe they
                        knew you trusted them and still chose this.
                    `,
                    essence: "Agni",
                    feeling: "Betrayal-Rage",
                    next: "act6-fire"
                },

                {
                    text: `
                        You allow yourself to feel the hurt instead of trying
                        to hide it.
                    `,
                    essence: "Jala",
                    feeling: "Heartbreak",
                    next: "act6-water"
                },

                {
                    text: `
                        You remind yourself that trusting someone wasn't wrong
                        simply because they chose to betray that trust.
                    `,
                    essence: "Prithvi",
                    feeling: "Self-Trust",
                    next: "act6-earth"
                },

                {
                    text: `
                        You pull away. You don't want to give them another
                        opportunity to hurt you.
                    `,
                    essence: "Vayu",
                    feeling: "Withdrawal",
                    next: "act6-air"
                }

            ]
        },


        /* =====================================================
           ACT 5 — STAND
           ===================================================== */

        {
            id: "act5-stand",

            act: 5,

            title: "The Breaking Point",

            text: `
                <p>
                    You have followed the contradiction as far as it will go.
                </p>

                <p>
                    You know what you heard.
                </p>

                <p>
                    You know what you saw.
                </p>

                <p>
                    You know what you're being told now.
                </p>

                <p>
                    You don't need to argue about whether the pieces fit.
                </p>

                <p>
                    They don't.
                </p>

                <p>
                    You look at the person you trusted and realize that the
                    uncertainty you've been carrying doesn't belong to you
                    anymore.
                </p>

                <p>
                    Their choices are theirs.
                </p>

                <p>
                    Your judgment is yours.
                </p>
            `,

            choices: [

                {
                    text: `
                        You tell them exactly what you think they've done. You
                        refuse to pretend you don't understand.
                    `,
                    essence: "Agni",
                    feeling: "Indignation",
                    next: "act6-fire"
                },

                {
                    text: `
                        You ask them why they didn't trust you enough to tell
                        you the truth.
                    `,
                    essence: "Jala",
                    feeling: "Sadness",
                    next: "act6-water"
                },

                {
                    text: `
                        You accept what you know without blaming yourself for
                        what they chose to do.
                    `,
                    essence: "Prithvi",
                    feeling: "Clarity",
                    next: "act6-earth"
                },

                {
                    text: `
                        You say nothing more. You don't need another explanation
                        to understand that the trust between you has changed.
                    `,
                    essence: "Vayu",
                    feeling: "Distance",
                    next: "act6-air"
                }

            ]
        },


        /* =====================================================
           ACT 5 — WITHDRAW
           ===================================================== */

        {
            id: "act5-withdraw",

            act: 5,

            title: "The Breaking Point",

            text: `
                <p>
                    You don't reveal everything you know.
                </p>

                <p>
                    You don't have to.
                </p>

                <p>
                    You've listened long enough to recognize that something
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

                <p>
                    You can feel yourself creating distance before you even
                    decide to.
                </p>
            `,

            choices: [

                {
                    text: `
                        You turn back and confront them. You aren't willing to
                        let them think they can simply lie to you and walk away.
                    `,
                    essence: "Agni",
                    feeling: "Defiance",
                    next: "act6-fire"
                },

                {
                    text: `
                        You tell them that walking away won't make the hurt
                        disappear.
                    `,
                    essence: "Jala",
                    feeling: "Loneliness",
                    next: "act6-water"
                },

                {
                    text: `
                        You remind yourself that choosing distance doesn't mean
                        you've lost control of the situation.
                    `,
                    essence: "Prithvi",
                    feeling: "Control",
                    next: "act6-earth"
                },

                {
                    text: `
                        You leave the conversation without telling them
                        everything you know.
                    `,
                    essence: "Vayu",
                    feeling: "Detachment",
                    next: "act6-air"
                }

            ]
        },


        /* =====================================================
           ACT 6 — FIRE
           ===================================================== */

        {
            id: "act6-fire",

            act: 6,

            title: "After",

            text: `
                <p>
                    You leave the conversation, but the conversation does not
                    leave you.
                </p>

                <p>
                    You walk through SteelMills while the city carries on
                    around you.
                </p>

                <p>
                    The machinery keeps turning.
                </p>

                <p>
                    People keep talking.
                </p>

                <p>
                    Steam continues rising between the buildings.
                </p>

                <p>
                    None of it matters.
                </p>

                <p>
                    Your mind keeps returning to the moment when you realized
                    you were being lied to.
                </p>

                <p>
                    The anger returns every time.
                </p>

                <p>
                    You begin thinking about every time you believed this person
                    without questioning them.
                </p>

                <p>
                    The more you think about it, the more you want an answer
                    that they may never give you.
                </p>
            `,

            choices: [

                {
                    text: `
                        You accept the anger instead of fighting it. Something
                        about what happened deserves to make you angry.
                    `,
                    essence: "Agni",
                    feeling: "Resentment",
                    next: "act7"
                },

                {
                    text: `
                        You admit that the anger is covering something more
                        painful: you wanted to be able to trust them.
                    `,
                    essence: "Jala",
                    feeling: "Grief",
                    next: "act7"
                },

                {
                    text: `
                        You separate what you know from what you're imagining.
                        You refuse to let anger create answers you don't have.
                    `,
                    essence: "Prithvi",
                    feeling: "Clarity",
                    next: "act7"
                },

                {
                    text: `
                        You stop thinking about it. You need distance before
                        the anger consumes everything else.
                    `,
                    essence: "Vayu",
                    feeling: "Detachment",
                    next: "act7"
                }

            ]
        },


        /* =====================================================
           ACT 6 — WATER
           ===================================================== */

        {
            id: "act6-water",

            act: 6,

            title: "After",

            text: `
                <p>
                    You leave carrying something heavier than anger.
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

                <p>
                    The distinction hurts.
                </p>

                <p>
                    You keep walking.
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
                        You remind yourself that trusting someone was not wrong
                        simply because they chose to betray that trust.
                    `,
                    essence: "Prithvi",
                    feeling: "Self-Trust",
                    next: "act7"
                },

                {
                    text: `
                        You stop revisiting the memories. You need distance
                        before you can think clearly.
                    `,
                    essence: "Vayu",
                    feeling: "Withdrawal",
                    next: "act7"
                }

            ]
        },


        /* =====================================================
           ACT 6 — EARTH
           ===================================================== */

        {
            id: "act6-earth",

            act: 6,

            title: "After",

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
                    You know those things do not belong together.
                </p>

                <p>
                    What you don't know is why.
                </p>

                <p>
                    And you realize that knowing why may not change what
                    happened.
                </p>

                <p>
                    You don't have to destroy your own sense of certainty just
                    because someone else chose to deceive you.
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


        /* =====================================================
           ACT 6 — AIR
           ===================================================== */

        {
            id: "act6-air",

            act: 6,

            title: "After",

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

                <p>
                    It only gives the feeling somewhere quieter to exist.
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
                        you've lost control of the situation.
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
                    Steam rises through the streets.
                </p>

                <p>
                    Workers move between buildings.
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
                    When someone makes a promise, part of you remembers the
                    moment when a promise stopped being enough.
                </p>

                <p>
                    The experience has changed something inside you.
                </p>

                <p>
                    You don't know yet whether that change will protect you or
                    isolate you.
                </p>

                <p>
                    You only know that it is there.
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
                        vulnerable, and part of you is afraid of being hurt this
                        way again.
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
                    You continue through SteelMills.
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
                    The same feeling that began when you realized that
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
