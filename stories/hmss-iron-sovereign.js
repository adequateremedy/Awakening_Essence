/* =========================================================
   AWAKENING ESSENCE
   STORY: HMSS IRON SOVEREIGN
   ---------------------------------------------------------
   Setting:
   Steampunk Era
   SteelMills
   Midgard
   Eidolon, Ireland
   ========================================================= */

awakeningStories["hmss-iron-sovereign"] = {

    title: "HMSS Iron Sovereign to Cogsbin",

    start: "act1",

    triggerFeelings: {
        Agni: "Defiance",
        Jala: "Sarcasm",
        Prithvi: "Confidence",
        Vayu: "Fear"
    },

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
            title: "The Boiler Room",
            text: `
                <p>The clanking of the piston engines shakes the iron floor plates beneath your boots. You are deep in the lower decks of the HMSS Iron Sovereign, a colossal airship powered by "steam". You weren't supposed to be on here, but when you accidentally fell asleep in the back of a carriage, you woke up in a completely different city altogether. SteelMills wasn't anything like Cogsbin, either. Far too many machines, but enough people that it was easy enough for you to slip between them, unseen.</p>
                <p>So, you hopped aboard the nearest airship headed back home, sneaking between adults that pay you no mind, hoping to make it before dinner was called. You finally make it to the boiler room of the ship and duck behind a wooden barrel. You wipe a smear of soot from your brow, feeling a strange, uncomfortable tightness behind your ribs. Lately, your body hasn't felt like your own. Your voice cracks when you speak, your moods swing like a broken pendulum, and there is a heavy, pulsing deep in your veins that you cannot explain. You only know that you have to keep your head down and keep your cap pulled low. If the humans notice the shape of your ears or the faint, unnatural hue of your eyes, you won't live to see the next port.</p>
                <p>"Hey. Look what we got here," a raspy voice cuts through hissing steam. You spin around. Two overgrown, mortal scrap-dealers are blocking the narrow, rusted catwalk - your only way out. One of them is wiping a grease-stained hand on his leather apron, while the other steps forward, pulling a heavy brass syringe from his coat. The thick glass cylinder of the needle catches the amber glow of a nearby furnace.</p>
                <p>"Look at those eyes," the scar-faced Hunter whisper with a cruel grin cutting across his  face. "This one looks like that... wild kind. They're gonna pay us a fortune for this fresh fishy! Give us a pint of that glow-juice, kid, and maybe we leave you with enough to keep breathing."</p>
                <p>You back away, but your shoulder blades hit a scalding hot pipe. You are cornered. The Hunters step closer, their heavy boots crunching against the loose coal dust on the floor. The terrifying stress of the moment hits you almost as hard as a physical blow. The pressure behind your ribs swell, boiling up like trapped steam in an over-pressurized boiler. You are as vulnerable as you are cornered.</p>
                <p><strong>How do you react?</strong></p>
            `,
            choices: [
                {
                    text: `Your skin flushes red-hot, as you think to yourself, "Fuck these assholes!".`,
                    essence: "Agni",
                    next: "act1-agni"
                },
                {
                    text: `A strange, mocking humor ripples through you, as you realize how dumb these two actually are.`,
                    essence: "Jala",
                    next: "act1-jala"
                },
                {
                    text: `You stand your ground and lock eyes with them.`,
                    essence: "Prithvi",
                    next: "act1-prithvi"
                },
                {
                    text: `You completely freeze in place out of sheer terror.`,
                    essence: "Vayu",
                    next: "act1-vayu"
                }
            ]
        },

        /* =====================================================
           ACT 2 — RESPONSES
           ===================================================== */
        {
            id: "act1-agni",
            act: 2,
            title: "The Boiler Room",
            text: `
                <p>"Fuck you!" you spit toward the direction of the scar-faced Hunter, knowing full well it will not reach him. The point still stands, you aren't afraid of them. You lung forward, running toward the heavier set Hunter with the syringe, knocking into him and catching him off-guard, causing him to drop it on the ground. He stumbles backwards, while the other begins scolding him, giving you just enough time to keep running further from them, and escape. between pipes.</p>
            `,
            choices: [
                {
                    text: `Continue.`,
                    essence: "None",
                    next: "act2"
                }
            ]
        },
        {
            id: "act1-jala",
            act: 2,
            title: "The Boiler Room",
            text: `
                <p>"You've got to be kidding me?" you snicker. The heavier set Hunter cocks his head to the side, looking at you, almost as if confused by your reaction. "Jasper," he doesn't look away, "you 'spose this one's got some fight?" His partner laughs, his head tilting upward, toward the ceiling, before bringing back down with a response, "Oh, I sure hope so." he sneers.</p>
                <p>"See! While you amadán are thinking I might fight my way out of this, I've already plotted out multiple ways to outsmart you." you snicker, mockingly.</p>
                <p>"Why you little..." the heavier set Hunter lunges toward you, needle exposed, and before his partner is even able to react, you duck, slipping seemlessly between his running legs, and make a mad dash between pipes, to escape.</p>
            `,
            choices: [
                {
                    text: `Continue.`,
                    essence: "None",
                    next: "act2"
                }
            ]
        },
        {
            id: "act1-prithvi",
            act: 2,
            title: "The Boiler Room",
            text: `
                <p>"Lil buggers got some balls, I'll give um that." the scar-faced Hunter smiles as you lock eyes. "Can't say we've had a ballsy one in a minute, eh Jasper?" the heavier set Hunter snaps after.</p>
                <p>You continue to stare into their eyes, marking every movement they make toward you, as though it were a chess match. As they inch closer, you begin to side step toward a loose pipe, hanging from the wall behind you.</p>
                <p>"Backing away, love? Now, that's no way to treat a Captain." the taller one's smile widens and his partner quickly adds, "Yeah! You're talking to the Captain of this here ship!" The taller, obvious leader, backhands the chest of the smaller one.</p>
                <p>"What? Well, I mean...you will be, ", he  backhands his chest again, causing them to halt moving toward you, and look toward each other, instead. This gives you just enough time.</p>
                <p>You've already mapped out your escape route, while these two were casually bickering like siblings. The second they look at each other you grab the loose pipe, and hot steam instantly sprays out, into their faces. They both cover their eyes with their arms, giving you enough time to sneak around them, and escape between the pipes.</p>
            `,
            choices: [
                {
                    text: `Continue.`,
                    essence: "None",
                    next: "act2"
                }
            ]
        },
        {
            id: "act1-vayu",
            act: 2,
            title: "The Boiler Room",
            text: `
                <p>Hearing about Hunters and actually being trapped by them, are two different things. You begin clearly shaking in place. As they inch slowly toward you, the taller, scar-faced Hunter nudges the shorter, more heavy-set one in his ribs, with an elbow.</p>
                <p>"I'm...um... I'm Bobby...um" he is cut short by the taller one's voice, "We aren't gunna hurt ya, lil one." His thick, raspy voice is obviously holding back a lie. Your eyes dart back and forth between the two of them and the syringe, as your breath hardens into a quickened pace that matches your heartbeat. The shorter one notices your eyes pinned on the  heavy brass syringe he had pulled from his coat, eariler. He quickly hides it behind his back, as if you had never seen it to begin with. Panic begins to set in.</p>
                <p>"That..is...um...we just have to...uh..." The taller one speaks up, "My grandma is sick." Instant lie detected! A small micro-expression is seen as your eyes dart back to his. The corner of his lips curled, just small enough for you to focus. His heartbeat was increasing to a very rapid pulse. Your eyes dart back and forth as they continue to inch closer and close to you - one on each side now. Your eye dart up -such a quick movement that humans wouldnt detect - and then back to the taller, scar-faced Hunter.</p>
                <p>Luckily, your short look offered you an escape, but the only way up, was by climbing the loose pipe next to your shoulder. The Hunters were closing in, so you take a chance.</p>
                <p>Grasping the loose pipe next to you, and using it as leverage to pull yourself up to the pipe above it, caused it to immediately snap, and while you almost lost your balance, the momentum and sheer fear drove you to grab the next pipe and pull yourself up even further. Meanwhile the busted pipe began spitting hot steam directly in the faces of the Hunters. So, while they covered their eyes, you climbed to the ceiling and made your escape by following the pipe lines.</p>
            `,
            choices: [
                {
                    text: `Continue.`,
                    essence: "None",
                    next: "act2"
                }
            ]
        },

        /* =====================================================
           ACT 3
           ===================================================== */
        {
            id: "act2",
            act: 3,
            title: "The Cargo Hold Chase",
            text: `
                <p>Twisting through groups of pipes that turn and fit into holes throughout the Ship, you follow through and make your way into a cargo hold. By now, the HMSS Iron Sovereign is high in the sky, so you know the Hunters will still be looking for you.</p>
                <p>You notice that there is a large double-door, big enough to fit the pallets that the wooden crates are stacked on, and a vent near the back of the Cargo Hold Room, that lead directly outside. You can also faitly hear the Hunters that are after you, not far away, so you have to make a decision fast.</p>
                <p>Your eyes flash over every nook and cranny available, leaving you with two possible choices:<br>You could try to wait it out in the vents above, or in an empty wooden crate, on the ground.</p>
                <p><strong>Choose one</strong></p>
            `,
            choices: [
                {
                    text: `If I hide in a crate then I can see where the Hunters move.`,
                    essence: "Agni",
                    next: "act2-agni"
                },
                {
                    text: `They are too dumb to go opening crates up to find me. I'll be unloaded long before they even realize I'm gone.`,
                    essence: "Jala",
                    next: "act2-jala"
                },
                {
                    text: `An aerial view, gives me the best advantage.`,
                    essence: "Prithvi",
                    next: "act2-prithvi"
                },
                {
                    text: `Vents lead to a straight shot outside!`,
                    essence: "Vayu",
                    next: "act2-vayu"
                }
            ]
        },

        /* =====================================================
           ACT 4 — RESPONSES
           ===================================================== */
        {
            id: "act2-agni",
            act: 4,
            title: "The Cargo Hold Chase",
            text: `
                <p>You walk through the room, nudging and pulling on the tops of numerous wooden crates, before you finally find one that wiggles. You stop, and use both hands to pull it up, the nails squeeking as they pull from the timber.</p>
                <p>With a small enough gap made, you slip inside, and squeeze yourself between shredded paper, just in time to hear the Hunters enter the Cargo Hold. You can hear them talking between themselves.</p>
                <p>"They're prolly hiding in one of these boxes, boss!" you hear one of them say.<br>"Not likely. This one felt...smarter...somehow." the other retorted.<br>As they got closer, you could make out their voices, and although you still couldn't see them through the cracks you though you would be able to, you can tell they are only a few feet away.</p>
                <p>The scar-faced leader calls out into the room, "Listen, there isn't no way off this ship little one... sooner or later you are gunna have to come out!"<br>To which the heavier-set Hunter quickly added, "Yeah! No way outta here, kid!"<br> Suddenly, you hear a loud banging sound, as the taller Hunter begins smacking the tops of crates. He continue, hitting the ones closest to him, as if trying to scare you out.</p>
                <p>The temperature has clearly elevated, causing you to sweat, but you stay put, between what feels like stacks of dishes, in the paper-shreds, trying not to make a sound.<br>"Be careful, boss..those got like..um...what are they called...chinas in um."<br>"Dishes, they are called dishes, you idiot! They aren't here though!"<br>As their voices begin to fade, and they walk away, you hear the shorter one tell the taller one,  "No, I saw um packing up those dishes. They're in there alright!"</p>
                <p>You are safe, at least for now. Some time later, after you hadn't hear any voices or movement nearby, you decided to come out from the cramped crate and find something a bit more comfortable. Who knows how long this flight will last, maybe some food wouldn't hurt either.</p>
            `,
            choices: [
                {
                    text: `Continue.`,
                    essence: "None",
                    next: "act3"
                }
            ]
        },
        {
            id: "act2-jala",
            act: 4,
            title: "The Cargo Hold Chase",
            text: `
                <p>You walk through the room, nudging and pulling on the tops of numerous wooden tops, before you finally get to one that wiggles. You stop, and use both hands to pull it up, the nails squeeking as they pull from the timber.</p>
                <p>With a small enough gap made, you slip inside, and squeeze yourself between shredded paper, just in time to hear the Hunters enter the Cargo Hold. You can hear them talking between themselves.</p>
                <p>"They're prolly hiding in one of these boxes, boss!" you hear one of them say.<br>"Not likely. This one felt...smarter...somehow." the other retorted.<br>As they got closer, you could make out their voices, and although you still couldn't see them through the cracks you though you would be able to, you can tell they are only a few feet away.</p>
                <p>The scar-faced leader calls out into the room, "Listen, there isn't no way off this ship little one... sooner or later you are gunna have to come out!"<br>To which the heavier-set Hunter quickly added, "Yeah! No way outta here, kid!"<br> Suddenly, you hear a loud banging sound, as the taller Hunter begins smacking the tops of crates. He continue, hitting the ones closest to him, as if trying to scare you out.</p>
                <p>These morons make you want to burst out laughing,, but you stay quiet, between what feels like stacks of dishes, in the paper-shreds, trying not to make a sound.<br>"Be careful, boss..those got like..um...what are they called...chinas in um."<br>"Dishes, they are called dishes, you idiot! They aren't here though!"<br>As their voices begin to fade, and they walk away, you hear the shorter one tell the taller one, "No, I saw um packing up those dishes. They're in there alright!"</p>
                <p>You are safe, at least for now. Some time later, after you hadn't hear any voices or movement nearby, you decided to come out from the cramped crate and find something a bit more comfortable. Who knows how long this flight will last, maybe some food wouldn't hurt either.</p>
            `,
            choices: [
                {
                    text: `Continue.`,
                    essence: "None",
                    next: "act3"
                }
            ]
        },
        {
            id: "act2-prithvi",
            act: 4,
            title: "The Cargo Hold Chase",
            text: `
                <p>You use the stacked crates, climbing up to the highest platform, in hopes of being able to reach the pipes that line the ceiling of this Cargo Hold. Unfortunately, once you reach the top, you find you are not tall enough, and the lowest hanging pipe is at least a foot away from your fingertips.</p>
                <p>Suddenly you hear the Hunters enter the Cargo Hold, talking between themselves.<br>"They're prolly hiding in one of these boxes, boss!" you hear one of them say.<br>"Not likely. This one felt...smarter...somehow." the other retorted.</p>
                <p>You crouch low, eyes fixed on the entrance hall into this room of crates, stacked nearly to the ceiling. As they enter, you hide in the shadows, at the top of a large crate. You lie on your stomach, eyes peering just over the edge of the outter plank, watching them, as they move directly under your stack.</p>
                <p>The scar-faced leader calls out into the room, "Listen, there isn't no way off this ship little one... sooner or later you are gunna have to come out!"<br>To which the heavier-set Hunter quickly added, "Yeah! No way outta here, kid!"<br> Then, without warning, the taller Hunter begins hitting the tops of the lower crates. You stay silent, watching as he attempt frightening you into showing yourself.</p>
                <p>It won't work. You stay resolute on your crate, above them.</p>
                <p>"Be careful, boss..those got like..um...what are they called...chinas in um."<br>"Dishes, they are called dishes, you idiot! They aren't here though!"<br>The taller, scar-faced man turns away, and begins walking back toward the entrance, clearly annoyed by his partner.</p>
                <p>As they walk out, into the hallway, you hear the shorter one tell the taller one, "No, I saw um packing up those dishes. They're in there alright!"</p>
                <p>You are safe, at least for now. Some time later, after you hadn't hear any voices or movement nearby, you decided to come down from the stacked crate and find something a bit more comfortable. Who knows how long this flight will last, maybe some food wouldn't hurt either.</p>
            `,
            choices: [
                {
                    text: `Continue.`,
                    essence: "None",
                    next: "act3"
                }
            ]
        },
        {
            id: "act2-vayu",
            act: 4,
            title: "The Cargo Hold Chase",
            text: `
                <p>You use the stacked crates, climbing up to the highest platform, in hopes of being able to reach the pipes that line the ceiling of this Cargo Hold. Unfortunately, once you reach the top, you find you are not tall enough, and the lowest hanging pipe is at least a foot away from your fingertips.</p>
                <p>Suddenly you hear the Hunters enter the Cargo Hold, talking between themselves.<br>"They're prolly hiding in one of these boxes, boss!" you hear one of them say.<br>"Not likely. This one felt...smarter...somehow." the other retorted.</p>
                <p>You crouch low, eyes fixed on the entrance hall into this room of crates, stacked nearly to the ceiling. As they enter, you retreat into the shadows, at the top of a large crate. With your back completely against the wall, you can barely see over the edge of the outter plank, but they won't see you either - as long as you stay still.</p>
                <p>The scar-faced leader calls out into the room, "Listen, there isn't no way off this ship little one... sooner or later you are gunna have to come out!"<br>To which the heavier-set Hunter quickly added, "Yeah! No way outta here, kid!"<br> Then, without warning, you can hear the taller Hunter begin to hit the tops of the crates closest to him. You stay silent, watching as he attempts frightening you into showing yourself.</p>
                <p>It almost worked too, as each strike against the timber planks sent an echo shooting through the room, making you jolt. You continue to cling to the wall, above them, now with a tigher grip than before.</p>
                <p>"Be careful, boss..those got like..um...what are they called...chinas in um."<br>"Dishes, they are called dishes, you idiot! They aren't here though!"<br>The taller, scar-faced man turns away, and begins walking back toward the entrance, clearly annoyed by his partner.</p>
                <p>As they walk out, into the hallway, you hear the shorter one tell the taller one, "No, I saw um packing up those dishes. They're in there alright!"</p>
                <p>You are safe, at least for now. Some time later, after you hadn't hear any voices or movement nearby, you decided to come down from the stacked crate and find something a bit more comfortable. Who knows how long this flight will last, maybe some food wouldn't hurt either.</p>
            `,
            choices: [
                {
                    text: `Continue.`,
                    essence: "None",
                    next: "act3"
                }
            ]
        },

        /* =====================================================
           ACT 5
           ===================================================== */
        {
            id: "act3",
            act: 5,
            title: "Food and Drink",
            text: `
                <p>The wooden crates held nothing but antiques and high end luxury items that were being exported for shops and stalls all over the world. Some still remained empty, as the Airship had a few stops to make, before heading to North America.</p>
                <p>Still hunger was beginning to rumble your stomach now, and you still didnt know how much longer the flight would last. Looking up at the ceiling, you begin to wonder if some of the passenger rooms might be empty enough for you to snag something.</p>
                <p>Looking around, you found no actual way to reach the rooms directly above the Cargo Hold, leaving you with the option of going through the same way you came in - a hole in the floor for pipes - or going out the same way the Hunters did - through the hallway.</p>
                <p>Neither were very good choices, but the only other option was to wait here, for the Cargo Doors to open, and take your chance at running out, or get in the crate and pray they don't find you. At least this way, you might actually survive starvation and dehydration.</p>
                <p><strong>Choose One</strong></p>
            `,
            choices: [
                {
                    text: `I NEED to find food, or I will die!`,
                    essence: "Agni",
                    next: "act3-agni"
                },
                {
                    text: `I'm going to die of thirst, before we land. I might as well go look for something to drink, at least.`,
                    essence: "Jala",
                    next: "act3-jala"
                },
                {
                    text: `Those idiots won't be back. I might as well just wait here, this might be a short flight.`,
                    essence: "Prithvi",
                    next: "act3-prithvi"
                },
                {
                    text: `But, what if I get stuck, and can't leave? At least right now I'm right by the exit doors. `,
                    essence: "Vayu",
                    next: "act3-vayu"
                }
            ]
        },

        /* =====================================================
           ACT 6 — RESPONSES
           ===================================================== */
        {
            id: "act3-agni",
            act: 6,
            title: "Food and Drink",
            text: `
                <p>Your stomach rumbles again, this time accompanied by a slightly painful sting. A blantent reminder that food needs to be consumed to replenish lost energy. You glance down at it, placing at palm against your navel and speak softly - as if directly to the grumbles, "Ok fine! You win! Let's go find something to eat."</p>
                <p>You decide to take the hallway you saw the Hunter exit through, since you knew exactly where that hole lead back to. With no desire to go back to the boiler room, a constantly complaning tummy, and a clear mission, you pull your cap down, over the tips of your ears - hiding them as best you can - and lower your head to the ground.</p>
                <p>"If anyone tries to stop you,  just run!" the thought replayed in your head over and over again, as you continued down the hall. Toward the end, the path split, but there appeared to be a sign between them, that gave directions. You found it funny how humans marked their paths, and as you got closer, you had to quickly decide which path to take.</p>
                <p>The big white sign was attached to the wall behind it, both paths clearly marked:<br>"<--- Passenger Apartments & Kitchen --->"</p>
            `,
            choices: [
                { text: `You instinctively head to the kitchen, on your right.`, essence: "Agni", next: "act4-kitchen-agni" },
                { text: `Naturally you want to blend in, that way you don't appear suspicious, so you head toward the left`, essence: "Jala", next: "act4-apt-jala" },
                { text: `You don't hesitate, turning to the left and walking toward the Passenger Apartments, as if you were a paying passenger yourself.`, essence: "Prithvi", next: "act4-apt-prithvi" },
                { text: `With such short notice, you hesitate, first heading to the Passenger Apartment, but then pivoting quickly to walk toward the kitchen, instead.`, essence: "Vayu", next: "act4-kitchen-vayu" }
            ]
        },
        {
            id: "act3-jala",
            act: 6,
            title: "Food and Drink",
            text: `
                <p>Your lips smack at a sudden parched feeling that overtakes your mouth. A blantent reminder that liquid needs to be consumed to replenish lost energy. You stick your tongue out and pat it with your finger before sucking it back into your mouth, "Calm down, there has to be water here somewhere."</p>
                <p>You decide to take the hallway you saw the Hunter exit through, since you knew exactly where that hole lead back to. With no desire to go back to the boiler room, a constantly complaning tummy, and a clear mission, you pull your cap down, over the tips of your ears - hiding them as best you can - and lower your head to the ground.</p>
                <p>"If you run into anyone, just ask where the stairs to the deck are." the thought replayed in your head over and over again, as you continued down the hall. Toward the end, the path split, but there appeared to be a sign between them, that gave directions. You found it funny how humans marked their paths, and as you got closer, you had to quickly decide which path to take.</p>
                <p>The big white sign was attached to the wall behind it, both paths clearly marked:<br>"<--- Passenger Apartments & Kitchen --->"</p>
            `,
            choices: [
                { text: `You instinctively head to the kitchen, on your right.`, essence: "Agni", next: "act4-kitchen-agni" },
                { text: `Naturally you want to blend in, that way you don't appear suspicious, so you head toward the left`, essence: "Jala", next: "act4-apt-jala" },
                { text: `You don't hesitate, turning to the left and walking toward the Passenger Apartments, as if you were a paying passenger yourself.`, essence: "Prithvi", next: "act4-apt-prithvi" },
                { text: `With such short notice, you hesitate, first heading to the Passenger Apartment, but then pivoting quickly to walk toward the kitchen, instead.`, essence: "Vayu", next: "act4-kitchen-vayu" }
            ]
        },
        {
            id: "act3-prithvi",
            act: 6,
            title: "Food and Drink",
            text: `
                <p>And the moment you even think of them, you can vaguely hear the short, heavy-set Hunter's voice, mumbling from where you had first entered. While your plan to stay put might have seemed best in the moment, you realize that the Hunters are backtracking, in order to find you.</p>
                <p>Currently, they sound as if they are searching the Boiler Room again, which meant soon enough, they would be back in the Cargo Hold. Now, you have no choice but to leave the exit doors of the cargo hold.</p>
                <p>With no desire to go back to the loud boiler room, a constantly complaning tummy, and a clear mission, you pull your cap down, over the tips of your ears - hiding them as best you can - and lower your head to the ground.</p>
                <p>"If you run into anyone, just ask where the Captain is, and act like you are late meeting with him." the thought replayed in your head over and over again, as you continued down the hall. Toward the end, the path split, but there appeared to be a sign between them, that gave directions. You found it funny how humans marked their paths, and as you got closer, you had to quickly decide which to take.</p>
                <p>The big white sign was attached to the wall behind it, both paths clearly marked:<br>"<--- Passenger Apartments & Kitchen --->"</p>
            `,
            choices: [
                { text: `You instinctively head to the kitchen, on your right.`, essence: "Agni", next: "act4-kitchen-agni" },
                { text: `Naturally you want to blend in, that way you don't appear suspicious, so you head toward the left`, essence: "Jala", next: "act4-apt-jala" },
                { text: `You don't hesitate, turning to the left and walking toward the Passenger Apartments, as if you were a paying passenger yourself.`, essence: "Prithvi", next: "act4-apt-prithvi" },
                { text: `With such short notice, you hesitate, first heading to the Passenger Apartment, but then pivoting quickly to walk toward the kitchen, instead.`, essence: "Vayu", next: "act4-kitchen-vayu" }
            ]
        },
        {
            id: "act3-vayu",
            act: 6,
            title: "Food and Drink",
            text: `
                <p>You imagine getting trapped in a closet, with humans just outside, headed to another country entirely. Your thought is destroyed the moment you vaguely hear the short, heavy-set Hunter's voice, mumbling from where you had first entered. While your plan to stay put might have seemed best in the moment, you realize that the Hunters are backtracking, in order to find you.</p>
                <p>Currently, they sound as if they are searching the Boiler Room again, which meant soon enough, they would be back in the Cargo Hold. Now, you have no choice but to leave the exit of the cargo hold.</p>
                <p>With no desire to go back to the  boiler room, a constantly complaning tummy, and a clear mission, you pull your cap down, over the tips of your ears - hiding them as best you can - and lower your head to the ground.</p>
                <p>"If you run into anyone, just pretend you're lost." the thought replayed in your head over and over again, as you continued down the hall. Toward the end, the path split, but there appeared to be a sign between them, that gave directions. You found it funny how humans marked their paths, and as you got closer, you had to quickly decide which to take.</p>
                <p>The big white sign was attached to the wall behind it, both paths clearly marked:<br>"<--- Passenger Apartments & Kitchen --->"</p>
            `,
            choices: [
                { text: `You instinctively head to the kitchen, on your right.`, essence: "Agni", next: "act4-kitchen-agni" },
                { text: `Naturally you want to blend in, that way you don't appear suspicious, so you head toward the left`, essence: "Jala", next: "act4-apt-jala" },
                { text: `You don't hesitate, turning to the left and walking toward the Passenger Apartments, as if you were a paying passenger yourself.`, essence: "Prithvi", next: "act4-apt-prithvi" },
                { text: `With such short notice, you hesitate, first heading to the Passenger Apartment, but then pivoting quickly to walk toward the kitchen, instead.`, essence: "Vayu", next: "act4-kitchen-vayu" }
            ]
        },

        /* =====================================================
           ACT 7 — RESPONSES
           ===================================================== */
        {
            id: "act4-kitchen-agni",
            act: 7,
            title: "The Kitchen",
            text: `
                <p>You don't even wait until people have left. As you enter the Kitchen with about 3 others, you head straight to the back, where you know the iceboxes are typically kept. Nobody stops you, in-fact, they barely even notice you.</p>
                <p>You glance up, only once, before you pull the handle to the room with blocks of ice. You think you even remember someone talking about these as if entire herds of animals could fit inside. As the latch pops open and the door swings open, you look inside, and your first reaction is, "Highly doubtful".</p>
                <p>Along both side-walls of the room are small wooden crates - similar to the ones in the cargo hold - with various fruits, vegetables, grains, and even raw meat. At first, you want to go inside and close the door behind you, but when you realize there is no way back out, except the door that latches closed behind you, you opt to snatch a handful from one of them instead. This way you won't get locked in.</p>
                <p>Just as you reach forward, you hear a sharp toned, deep voice, snap behind you. You instinctively know they are talking to you, "HEY! WHO ARE YOU?! WHAT ARE YOU DOING IN THERE?!"</p>
                <p>With seconds beating by, as fast as your heartbeat, you quickly grab a handful of food, from one of them, without looking, and run out of the kitchen, toward the Passenger Apartments.</p>
                <p>With your head down, to the ground, you don't even notice a human that opens a door and stands blocking your path. You accidentally run into them, and quickly appologize to each other, before lifting your head to make direct eye contact. Hands covered in food remenants you had snatched, you stand there face to face.</p>
                <p><strong>What did you grab?</strong></p>
            `,
            choices: [
                { text: `A handful of raw lamb shank.`, essence: "Agni", next: "act5-agni" },
                { text: `A handful of cut melons.`, essence: "Jala", next: "act5-jala" },
                { text: `A handful of cut carrots and potatoes.`, essence: "Prithvi", next: "act5-prithvi" },
                { text: `A handful of raw, long-grain rice.`, essence: "Vayu", next: "act5-vayu" }
            ]
        },
        {
            id: "act4-kitchen-vayu",
            act: 7,
            title: "The Kitchen",
            text: `
                <p>As you enter the Kitchen with about 3 others, you head straight to the back, making sure to keep your face toward the ground. The back is where they typically keep the iceboxes. Strangely, nobody stops you, in-fact, they barely even notice you.</p>
                <p>You glance up, only once, before you pull the handle to the room with blocks of ice. You think you even remember someone talking about these as if entire herds of animals could fit inside. As the latch pops open and the door swings open, you look inside, and your first reaction is, "It's very cold in here.".</p>
                <p>Along both side-walls of the room are small wooden crates - similar to the ones in the cargo hold - with various fruits, vegetables, grains, and even raw meat. At first, you want to go inside and close the door behind you, but when you realize there is no way back out, except the door that latches closed behind you, you opt to snatch a handful from one of them instead. This way you won't get locked in.</p>
                <p>Just as you reach forward, you hear a sharp toned, deep voice, snap behind you. You instinctively know they are talking to you, "HEY! WHO ARE YOU?! WHAT ARE YOU DOING IN THERE?!"</p>
                <p>With seconds beating by as fast as your heartbeat, you quickly grab a handful of food, from one of the crates, and run out the kitchen, toward the Passenger Apartments.</p>
                <p>With your head to the ground, you don't even notice a  human that opens a door and stands, blocking your path. You accidentally run into them, and quickly appologize to each other, before lifting your head to make direct eye contact. Hands covered in the remenants of the food you snatched, you stand there face to face.</p>
                <p><strong>What did you grab?</strong></p>
            `,
            choices: [
                { text: `A handful of raw lamb shank.`, essence: "Agni", next: "act5-agni" },
                { text: `A handful of cut melons.`, essence: "Jala", next: "act5-jala" },
                { text: `A handful of cut carrots and potatoes.`, essence: "Prithvi", next: "act5-prithvi" },
                { text: `A handful of raw, long-grain rice.`, essence: "Vayu", next: "act5-vayu" }
            ]
        },
        {
            id: "act4-apt-jala",
            act: 7,
            title: "Passenger Apartments",
            text: `
                <p>You wind down a long corridor into an open space that looks like a tavern, from back home. It has tables filled with humans that talk so much and consume so carelessly, you understand now what the elders meant when they warned you to stay away from them. They are easy to ignore, because their consumptions keep them from noticing you.</p>
                <p>As you make your way around the outer wall of tables and seats, you can't help but to overhear a young girl ask an older mortal woman, "Can I see the tickets mommy?"</p>
                <p>To which the older, mortal woman replied, "No sweety, I left them in our room. Maybe later." And you realized most of the mortals were out of their rooms, for food and socializing, and you thought, "Maybe we aren't so different."</p>
                <p>That thought was soon shattered though, as a child had spotted you, watching the little girl, and noticed the slight glow to your eyes. She in-turn, got her mother's attention, and began pointing at you. Soon, others began searching to see what the child was pointing at.</p>
                <p>Without a moment to spare, you lean against what you thought was a wall, until it moves, opening the door to another human, who now looks you dead in the eyes - face to face.</p>
                <p><strong>What do you immediately say?</strong></p>
            `,
            choices: [
                { text: `"Move!"`, essence: "Agni", next: "act5-agni" },
                { text: `Wait for them to speak first.`, essence: "Jala", next: "act5-jala" },
                { text: `"Help me."`, essence: "Prithvi", next: "act5-prithvi" },
                { text: `Push your way inside, without saying anything.`, essence: "Vayu", next: "act5-vayu" }
            ]
        },
        {
            id: "act4-apt-prithvi",
            act: 7,
            title: "Passenger Apartments",
            text: `
                <p>You wind down a long corridor into an open space that looks like a tavern, from back home. It has tables filled with humans that talk so much and consume so carelessly, you understand now what the elders meant when they warned you to stay away from them. They are easy to ignore, because their consumptions keep them from noticing you.</p>
                <p>As you make your way around the outer wall of tables and seats, you can't help but to overhear a young girl ask an older mortal woman, "Can I see the tickets mommy?"</p>
                <p>To which the older, mortal woman replied, "No sweety, I left them in our room. Maybe later." And you realized most of the mortals were out of their rooms, for food and socializing, and you thought, "Maybe we aren't so different."</p>
                <p>That thought was soon shattered though, as a child had spotted you, watching the little girl, and noticed the slight glow to your eyes. She in-turn, got her mother's attention, and began pointing at you. Soon, others began searching to see what the child was pointing at.</p>
                <p>Without a moment to spare, you lean against what you thought was a wall, until it moves, opening the door to another human, who now looks you dead in the eyes - face to face.</p>
                <p><strong>What do you immediately say?</strong></p>
            `,
            choices: [
                { text: `"Move!"`, essence: "Agni", next: "act5-agni" },
                { text: `Wait for them to speak first.`, essence: "Jala", next: "act5-jala" },
                { text: `"Help me."`, essence: "Prithvi", next: "act5-prithvi" },
                { text: `Push your way inside, without saying anything.`, essence: "Vayu", next: "act5-vayu" }
            ]
        },

        /* =====================================================
           ACT 8 — RESPONSES
           ===================================================== */
        {
            id: "act5-agni",
            act: 8,
            title: "Passenger Apartments",
            text: `
                <p>You immediately push your way past the human, staring you dead in the eyes, "Move!"<br>Taken a bit back, they follow you inside, unsure of what your plans are. Truth is, you don't have any, but they don't need to know that.</p>
                <p>You press your back against the back-side of the door, pushing it closed, and stay bent over for a moment, catching your breath. At some point, you almost forget they are still standing there, and when you go to stand, your fists instinctively clench.</p>
                <p>"Whoh!" their hands immediately go up, defensively. You have never seen this side of humans before, and it confuses you. You squint your eyes, while looking directly at their hands and shake your head. They relax them, only slightly, pulling their finger down, toward the palms while staying raised.</p>
                <p>Your back slides against the back-side of the door, as you fall into a sitting position in front of it.</p>
                <p>"I don't have any money...or....like... food..or...or...uh..."<br>You don't respond. How can they even think that is what you would be in here for?<br>You aren't some stray animal! The thoughts cause you to cut them short, "Just shut the fuck up!"</p>
                <p>Immediately they stop talking, and begin nodding instead, in acknowledgement. You never understood why mortal felt the need to talk so much. For the next hour, the human simply sat across from you, while you blocked the door. You didn't speak, and while you wanted to sleep, you didn't trust them enough to close your eyes. So, instead you sat there staring at each other, all the way back to Cogsbin.</p>
            `,
            choices: [
                {
                    text: `When you land, the human helps you leave, without detection, under threat of extreme violence.`,
                    essence: "None",
                    next: null
                }
            ]
        },
        {
            id: "act5-jala",
            act: 8,
            title: "Passenger Apartments",
            text: `
                <p>You stand there, not really knowing how to react, because the human has not yet reacted. You wonder if seeing a fae is typical for them, but they suddenly grab your arm and pull you inside the room, shutting the door behind you. You stand there, back pressed slightly against the back of the door, bent over, catching your breath.</p>
                <p>At some point, you almost forget they are still standing there, and had pulled you inside, but when you go to stand, the concern in their eyes explains what words didnt.</p>
                <p>"Are you okay?" they ask, after watching you position yourself to sit in front of the closed door, with your back to it - for safety, of coarse.</p>
                <p>You nod, after settling on your rear, and stretch your legs outward, "I am...just outta breath I suppose."</p>
                <p>"You running from someone?" Their question was so blunt it almost hurt to respond. How could they not know Fae were being hunted? They were mortal. You roll your eyes, and refuse to respond directly, "I'm just trying to get back home, that's all"</p>
                <p>Your answer seemed to suffice, as they steered the line of questioning in a different direction, "Do you travel often?"</p>
                <p>A quick retort slips from your lips before you can assess the potential damage, "Not intentionally." You both go quiet, before the silence is broken, "I have to go to America soon, do you know where that is?"</p>
                <p>You shake your head, replying to their question. For the next hour, back to Cogsbin, you and the human go back and forth, with curious minds not showing fear of each other, but mere inquiry.</p>
            `,
            choices: [
                {
                    text: `David willing helps you leave, undetected, the moment you land.`,
                    essence: "None",
                    next: null
                }
            ]
        },
        {
            id: "act5-prithvi",
            act: 8,
            title: "Passenger Apartments",
            text: `
                <p>Your whispered plea for help was all that was needed, and moments later you found yourself alone, with them, behind the closed door. Your back presses slightly against the back-side of the door, and while you bend over, trying to catch your breath, you nearly forgot about the human that just gave you aide.</p>
                <p>Your eyes look upward, without moving your head. A safety precaution you picked up as a child. The human stayed standing a few feet away from you, not moving. You werent sure if they feared you more, or you feared them more, but you had no intention of finding out. Your eyes scanned the rest of the room - an office - or so it appeared. You two were the only ones inside.</p>
                <p>As soon as you began moving your head to look at them more closely, they began to speak, "Are you hurt?"</p>
                <p>Their concern was confusing to you. You tilted your head back and forth slowly, indicating you were not, before letting your backside slide against the door, forcing you to sit where you landed. Humans typically avoided your kind. You heard that once upon a time they didn't...but now days, with the few you are able to meet at least - they do. Still something told you, they weren't all like that. And as you sat there together, you wondered how they felt about your kind.</p>
                <p>"I don't have any money or...or food...or...I don't know..I..." they were starting to stutter, a clear indication of stress. Perhaps you were the monster, in their stories.</p>
                <p>"I only want to go back home, to Cogsbin." your words stopped any thoughts they had about your intentions, and gave you a nod. For the next hour, you sat across from each other, watching the clouds drift by the window, as you headed back home.</p>
            `,
            choices: [
                {
                    text: `By the time you land, the mortal is still staring out the window. When asked, they agree to help you leave undetected.`,
                    essence: "None",
                    next: null
                }
            ]
        },
        {
            id: "act5-vayu",
            act: 8,
            title: "Passenger Apartments",
            text: `
                <p>In less than it takes, for a fly to flap its wing, there was an unspoken understanding made, as you pushed your way inside, past the human, who was just moment ago, opening it. Without being asked, they shut the door and you immediately pressed your back against the back-side and bent over to catch your breath.</p>
                <p>It took a moment to regain a steady beat, and you nearly forgot about the human that had followed back in, behind you, and shut the door. But, as you rose back to stand upright, you remembered. Your eyes connected, and there was a moment of wordless communication, between the two of you.</p>
                <p>Then their head motioned toward a tall glass of pure water, sitting on the edge of a desk. You nod back, acknowledging their gesture with acceptance. Moments later you drink the water and put the glass back on the desk, in the exact place you picked it up - a small trick you learned as a child, that kept you from gettin caught when you were being sneaky.</p>
                <p>You went back to the door and sat directly in front of it, motioning for the human - now stuck in the room with you, for this flight - to do the same. They do, and for the next hour, you both sit there together. Neither knowing who the other even is, just merely enjoying each others company, on the flight back home.</p>
            `,
            choices: [
                {
                    text: `When you land, the human helps show you how to slip through a window, undetected.`,
                    essence: "None",
                    next: null
                }
            ]
        }

    ]

};
