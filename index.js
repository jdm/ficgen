import * as random from "./randomtext.js";
import { generateTitle } from "./titles.js";

let characters = [
    ["Harry", "M"],
    ["Draco", "M"],
    ["Hermione", "F"],
    ["Ron", "M"],
    ["Pansy", "F"],
    ["Neville", "M"],
    ["Luna", "F"],
    ["Ginny", "F"],
    ["Fred", "M"],
    ["George", "M"],
    ["Theo", "M"],
    ["Charlie", "M"],
    ["Goyle", "M"],
    ["Lucius", "M"],
    ["Narcissa", "F"],
    ["Remus", "M"],
    ["Sirius", "M"],
    ["Dudley", "M"],
    ["Blaise", "M"],
    ["Dobby", "M"],
    ["Kreacher", "M"],
    ["Fleur", "F"],
    ["Bill", "M"],
    ["Molly", "F"],
    ["Arthur", "M"],
    ["Snape", "M"],
    ["Professor McGonagall", "F"],
    ["Hagrid", "M"],
    ["Lavender", "F"],
    ["Parvati", "F"],
    ["Padma", "F"],
    ["Teddy", "M"],
    ["Scorpius", "M"],
];

let usedChars = [];

function character() {
    while (true) {
        let char = random.choose(characters);
        if (usedChars.map(c => c[0]).indexOf(char[0]) > -1) {
            continue;
        }
        usedChars.push(char);
        return char[0];
    }
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
    "baker",
    "librarian",
    "politician",
    "Unspeakable",
    "Quidditch coach",
    "hitwizard",
    "investment banker",
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
    "is a pain in the arse",
    "is super supportive, almost too much so",
    "is super chill about it",
    "doesn't care at all, not one bit",
    "is furious all the time",
    "pretends they don't care",
    "doesn't notice anything",
    "doesn't know how to deal with it",
    "gets jealous",
    "is jealous but doesn't even realize it",
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

const tags = [
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
    [character, "is madly in love with", character, ", who happens to be a", profession, ".",
     "How can they possibly work this out?", character, "somehow stumbles on the perfect solution."],
    [character, "goes undercover as a", profession, "to catch", character, "in a compromising position.",
     "When a bond of professional respect develops, can they still complete the job?"],
    ["They've been rivals for years.", character, "and", character, "are the darlings of the press but they can't stand each other.", "Who will end up coming out on top in the", profession, "battle?"],
    [character, "starts spending a lot of time with", character, ".", character, reaction, ",", "but", character, "insists it's fine.", "Will reason prevail?"],
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
    "Warning: there is only one bed.",
    "It's going to hurt before it feels better.",
    "It's not repressing feelings if there's nothing to repress, right? Everything's fine.",
];

const ratings = [
    "General Audiences",
    "Teen and Up Audiences",
    "Not Rated",
    "Mature",
    "Explicit",
];

export function gen() {
    usedChars = [];

    let summary = random.choose(summaries);
    console.log(summary);
    let prompt = random.combine([
        random.combine(summary),
        random.choose(extras),
    ]);

    const title = generateTitle();

    let numTags = random.wholeNumber(3, 10);
    let promptTags = [];
    while (promptTags.length < numTags) {
        let tag = random.choose(tags);
        if (promptTags.indexOf(tag) > -1) {
            continue;
        }
        promptTags.push(tag);
    }
    let category = "Gen";
    let relationship = [];
    console.log(usedChars);
    if (usedChars.length > 1) {
        category = usedChars[0][1] + "/" + usedChars[1][1];
        if (category == "F/M") {
            category = "M/F";
        }
        relationship = [usedChars[0][0] + "/" + usedChars[1][0]];
    }
    return {
        prompt: prompt,
        tags: promptTags,
        rating: random.choose(ratings),
        category: category,
        characters: usedChars.map(c => c[0]),
        relationships: relationship,
        title: title,
    };
}
