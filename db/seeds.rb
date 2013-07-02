# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


rich_as_fuck_lyrics = "[Verse 1: Lil Wayne]
AK on my night stand, right next to that bible
But I swear with these 50 shots, I'll shoot it out with 5-0
Pockets getting too fat, no weight watchers no lipo
Money talks, bullshit walks on a motherfucking tight rope
And I make that pussy tap out, I knock that pussy out cold
Nigga you get beat the crap out but that's just how the dice roll
These hoes want that hose pipe, so I give all these hoes pipe
She get on that dick and stay on, all night like porch lights
Lets do it, fuck talking, we out here we balling
And I'm spraying that on these rusty niggas like WD40
We fucked up, we Truk'd up, no if ands or but fucks
Bitch niggas go behind yo back like nun-chucks and that's fucked up
But my hoes down, my cups up, my niggas down for whatever
These bitches think they're too fly well tell em hoes I pluck feathers
I'm Tunechi, Young Tunechi, I wear Trukfit fuck Gucci
She's blowing kisses at me with her pussy lips, smooches
And that's 2 Chainz.

[Hook]
Look at you
Now look at us
All my niggas look rich as fuck
All my niggas look rich as fuck
All my niggas look rich as fuck

Look at you
Now look at us
All my niggas look rich as fuck (bitch..)
All my niggas look rich as fuck(Ho Ass..)
All my niggas look rich as fuck

[Verse 2: Lil Wayne]
Never talk to the cops, I don't speak pig Latin
I turn the penny to a motherfucking Janet Jackson
Tell the bitches that be hating I ain't got no worries
I just wanna hit and run like I ain't got insurances
Ho, whats yo name whats yo sign, Zodiac Killer
All rats gotta die, even Master Splinter
Yeah, Murder 187
I be killing them bitches, I hope all dogs go to heaven
And I got xanax, percocet, promethazine with codeine
Call me Mr Sandman, I'm selling all these hoes dreams
Got a white girl with big titties, flat ass TV screen
I keep a bad bitch call me the BB King
You know I got that mouth out her
And put that bitch out like a house fire
I'm killing these hoes like Michael Myers
I eat that cat just like a lion
And I can't trust none of these niggas
Can't trust none of these hoes
I see your girl when I want, I got that ho TiVo'd
Got a red ass bitch with a red ass pussy
Nigga try me, that a dead ass pussy
Since yall motherfuckers so blind to the fact
To tell you the truth, I don't care who's looking
All I know is I love my bitch
That pussy feel just like heaven on earth
Six feet deep, dick shovel in dirt
R.I.P. rest in pussy
Light that shit then pass that shit
We gon get so smoked out
And then I went got locked up
Every night I dreamt I broke out
One Time for them pussy niggas
That's that shit I don't like
We eating over here nigga
Fuck around and have food fight
And that's 2 Chainz.

[Hook]
Look at you
Now look at us
All my niggas look rich as fuck
All my niggas look rich as fuck
All my niggas look rich as fuck

Look at you
Now look at us
All my niggas look rich as fuck
All my niggas look rich as fuck
All my niggas look rich as fuck
"

no_new_friends_lyrics = "[Hook: Drake]
Stay down with my day one niggas, and we in the club screaming
No new friends, no new friends, no new friends, no no new
Still here with my day one niggas, so you hear me say
No new friends, no new friends, no new friends, no no new
I still ride with my day one niggas, I don't really need
No new friends, no new friends, no new friends, no no new
I stay down from day one so I say
fuck all y'all niggas except my niggas
fuck all y'all niggas except my niggas
one more time
Fuck all y'all niggas except my niggas
fuck all y'all niggas
Stay down from day one,
so I say
(Fuck your fake friends where your real friends at?)

[Verse 1: Drake]
ah, man this shit so ill that we had to restart it
H-town my second home like I'm James Harden
Money counter go brrr when you selling out the garden
Four car garage, porn star minaj
Birdman go brrr cause he know this shit retarded
Fuck her on the floor before we make it to the bed
Switch your ass really comes started from the bottom, yes lord
OVO sound man I'm proud of my niggas,
Knew we would make it never doubted my niggas
All my bitches love me
If I had a baby mama she would probably be richer then a lot of you niggas
That's luxury dawg, day one niggas you're stuck with me dawg
Ever since YouTube niggas been calling me the leader of the new school
Fuck with me dawg, yeah

[Hook]

[Verse 2: Rick Ross]
Your bitch all in my photographs, ho niggas got hate for me
Big homies all certified, nothing niggas gon' take from me
Follow codes, study game, feed fam nigga fuck fame
All black my whip foreign, these bad hoes keep tiptoeing
Down in turks and caicos, dope boy that's my dress code
All I hug is blood nigga, Khaled that's my flesh though
All I want is love nigga, money bring that stress though
Smoke good I love life, strip club like every night
Every night my same niggas day one straight menace
Rose

[Hook]

[Verse 3: Lil Wayne]
I'm here with my niggas, I'm too hot to be friendly
They throw dirt on my name, well that's why they still dig me
And I'm tired of all this hating, I thank God for my patience
I thank God for my homies I wish we could trade places
Bitch we good fellas, boy all them niggas with you they just
Paul bearers and if we ball catch us
Remember sip slow, live fast Young Money stay young
I been Cash Money since day one
Tunechi

[Hook]
"

Song.create(:lyrics => rich_as_fuck_lyrics, 
  title: 'Rich As Fuck', 
  artist: 'Lil Wayne')

Song.create(:lyrics => no_new_friends_lyrics, 
  title: 'No New Friends',
   artist: 'Drake')
