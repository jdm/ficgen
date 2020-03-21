import * as random from "./randomtext.js";

let characters = [
    "Harry",
    "Draco",
    "Hermione",
    "Ron",
    "Pansy",
    "Neville",
    "Luna",
    "Ginny",
    "Fred",
    "George",
    "Theo",
    "Charlie",
    "Goyle",
    "Lucius",
    "Remus",
    "Sirius",
    "Dudley",
    "Blaise",
    "Dobby",
    "Kreacher",
    "Fleur",
    "Bill",
    "Molly",
    "Arthur",
    "Snape",
];

function character() {
    return random.chooseAndRemove(characters);
}

const professions = [
    "dancer",
    "shopkeeper",
    "barkeep",
    "Auror",
    "journalist",
    "Ministry employee",
    "Minister for Magic",
    "playboy",
    "layabout",
    "rock star",
    "rentboy",
    "private investigator",
    "Healer",
    "therapist",
    "magizoologist",
    "wandmaker",
    "student",
    "life drawing model",
    "barista",
    "stay-at-home parent",
    "teacher",
    "professor",
    "werewolf",
    "Veela",
    "brewer",
    "museum curator",
    "potion brewer",
    "bodyguard",
    "dragon tamer",
    "cursebreaker",
];

function profession() {
    return random.choose(professions);
}

const reactions = [
    "is obsessed with finding out why",
    "accidentally reveals the secret to the rest of the Wizarding world",
    "is shocked and a little turned on",
    "can't understand why",
    "is reluctantly impressed",
    "just acts like a golden retriever with heart eyes",
    "turns into an idiot around them",
    "needs to figure out why",
    "won't stop annoying them",
    "is a pain the arse",
    "is super supportive, almost too much so",
    "is super chill about it",
    "doesn't care at all, not one bit",
    "is furious all the time",
];

function reaction() {
    return random.choose(reactions);
}

const plots = [
    "make them fall in love",
    "make them fall out of love",
    "hurt them in revenge for a past wrong",
    "become Minister for Magic",
    "close down Hogwarts",
    "recover the Resurrection Stone",
    "bring a family member back to life",
    "right an old wrong",
    "make up for past mistakes",
];

function plot() {
    return random.choose(plots);
}

const mistakes = [
    "stop Voldemort",
    "help Voldemort",
    "help their childhood self through a rough patch",
    "get rich",
    "saved a doomed relationship",
    "avoid a doomed relationship",
    "save a dying family member",
    "save the life of a friend",
    "fix an old mistake",
];

function mistake() {
    return random.choose(mistakes);
}

let tags = [
    "frotting",
    "deep and meaningful glances",
    "unnecessary descriptions of clothing",
    "soulbonds",
    "accidental bonding",
    "accidental bondage",
    "jane austen levels of passionately not touching",
    "pureblood customs",
    "epilogue? what epilogue?",
    "holding hands",
    "crack fic",
    "seriously 100% crack",
    "i will die on this hill",
    "they were meant for each other",
    "they are ridiculous ok",
    "misunderstandings",
    "angst",
    "so much angst",
    "aaaaaaangst",
    "i just love them ok",
    "in-depth descriptions of early 2000s fashions",
    "school",
    "everyone is a jerk",
    "dancing",
    "established relationship",
    "sports",
    "write what you know",
    "quidditch",
    "8th year",
    "epilogue-compliant",
    "this is not an AU",
    "the most AU of AUs",
];

const summaries = [
    ["The one where", character, "is a", profession, "and", character, reaction, "."],
    [character, ", the famous", profession, ", still can't get over", character, ".",
     "Meanwhile,", character, "hatches a plot to", plot, "."],
    [character, "goes back in time to", mistake, ".", character, reaction, "."],
    [character, "is madly in love with", character, ", who happens to be a", profession, ". How can they possibly work this out?", character, "somehow stumbles on the perfect solution."],
];

const extras = [
    "",
    "Hijinks ensue!",
    "What could go wrong?",
    "It's a disaster.",
    "It goes better than it has any right to.",
    "There's a lot of feelings.",
    "Some entirely reasonable misunderstandings make everything more complicated.",
    "Also the Ministry is dysfunctional like usual.",
    "It's always raining.",
    "Nobody communicates and everything is terrible.",
    "Pure-blood tradition rears its head.",
    "Forgiveness must be earned.",
    "How did things get this bad?",
    "Will anything ever go right?",
    "Everybody is a mess.",
    "Everything is peaceful, until suddenly it's not.",
    "There's a mystery that needs solving!",
    "This mess won't untangle itself.",
];

const ratings = [
    "General Audiences",
    "Teen and Up Audiences",
    "Not Rated",
    "Mature",
    "Explicit",
];

const categories = [
    "M/M",
    "F/F",
    "M/F",
    "Multi",
    "Other",
    "Gen",
];

export function gen() {
    let numTags = random.wholeNumber(3, 10);
    let promptTags = [];
    for (var i = 0; i < numTags; i++) {
        promptTags.push(random.chooseAndRemove(tags))
    }
    return {
        prompt: random.combine([
            random.combine(random.choose(summaries)),
            random.choose(extras),
        ]),
        tags: promptTags,
        rating: random.choose(ratings),
        category: random.choose(categories),
    };
}
