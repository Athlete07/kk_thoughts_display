export type Shayari = {
  id: number;
  title: string;
  urdu?: string;
  english: string;
  theme: "love" | "life" | "solitude" | "dreams" | "rebellion";
  featured?: boolean;
};

export const shayaris: Shayari[] = [
  {
    id: 1,
    title: "The Weight of Silence",
    english: `रुको।
कभी-कभी
यही
सबसे साहसी
कदम होता है।`,
    theme: "solitude",
    featured: true,
  },
  {
    id: 2,
    title: "Digital Ghazal",
    english: `In the blue glow of midnight screens,
I write verses for souls I'll never meet.
Every keystroke is a heartbeat,
every line of code—a prayer.

They say machines cannot feel.
But I have seen algorithms weep.`,
    theme: "dreams",
    featured: true,
  },
  {
    id: 3,
    title: "The Gamer's Lament",
    english: `I have lived a thousand lives,
died in galaxies far from here,
saved worlds that never existed.

And yet,
the hardest boss I've ever faced
was the silence in this room.`,
    theme: "solitude",
    featured: true,
  },
  {
    id: 4,
    title: "Unwritten",
    english: `There is a poem I carry
that I have never finished—
because finishing it
would mean admitting
you're not coming back.`,
    theme: "love",
  },
  {
    id: 5,
    title: "The Rebel's Ink",
    english: `They asked me to write
something soft, something safe.
So I dipped my pen in fire
and signed my name in flames.

Some words are not meant to be whispered.
Some truths are meant to burn.`,
    theme: "rebellion",
    featured: true,
  },
  {
    id: 6,
    title: "Algorithm of the Heart",
    english: `If love were code,
it would be the bug
we never want to fix—
the infinite loop
we willingly enter,
knowing it will crash us.`,
    theme: "love",
  },
  {
    id: 7,
    title: "Player Two",
    english: `I waited at the character select screen
for someone who never joined.

Now I play alone,
but I always leave a controller
plugged in.
Just in case.`,
    theme: "solitude",
  },
  {
    id: 8,
    title: "The Artist's Curse",
    english: `To feel everything so deeply
that words become weapons,
that silence becomes song.

This is not a gift—
it is a beautiful wound
that never quite heals.`,
    theme: "dreams",
    featured: true,
  },
  {
    id: 9,
    title: "Midnight Architecture",
    english: `I build cathedrals at 3 AM
with nothing but coffee
and the stubborn belief
that what I'm creating
might matter to someone,
somewhere,
someday.`,
    theme: "dreams",
  },
  {
    id: 10,
    title: "The Final Save",
    english: `When this life ends,
I hope it was worth the playthrough.
I hope I collected enough moments,
unlocked enough smiles,
and left the world
with a higher score
than I found it.`,
    theme: "life",
    featured: true,
  },
];

export const featuredShayaris = shayaris.filter((s) => s.featured);