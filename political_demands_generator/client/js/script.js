let button = document.getElementById("generate");
let text = document.getElementById("text");

// form: verb + noun + preposition + noun

let verb = [
  "abolish",
  "liquidate",
  "privatize",
  "break up",
  "execute",
  "i'm advocating for",
  "overcome",
  "disband",
  "remember",
  "disarm",
  "seize",
  "collectivize",
  "dismantle",
  "annihilate",
  "criminalize",
  "decriminalize",
  "guillotine",
  "compost",
  "unite",
  "transcend",
  "digitize",
  "reify",
  "forgive",
  "normalize",
  "unlearn",
  "queering",
  "delete",
  "sublimate",
  "dissolve",
  "terminate",
  "terraform",
  "colonize",
  "decolonize",
  "nuke",
  "deport",
  "occupy",
  "inoculate",
  "vaccinate",
  "quarantine",
  "blow up",
  "unionize",
  "reimagine",
  "god bless",
  "sanction",
  "9/11",
  "euthenize",
  "consolidate",
  "liberate",
  "free",
  "embargo",
  "astral project",
  "give an astrology reading to",
  "believe",
  "never forget",
  "inhale",
  "death to",
  "exhale",
  "stone",
  "take ecstasy with",
  "eat",
  "defund",
  "protect",
  "empower",
  "prosecute",
  "rethink",
  "engulf",
  "down with",
  "drown",
  "impeach",
  "don't mess with",
  "recycle",
  "dox",
  "unleash",
  "bleach",
];
let noun1 = [
  "the patriarchy",
  "the matriarchy",
  "the ruling class",
  "the wind",
  "cancel culture",
  "neoliberalism",
  "genocide",
  "bitcoin",
  "the bourgoisie",
  "private equity",
  "art for art's sake",
  "human rights",
  "the proletariat",
  "big government",
  "science",
  "artificial intelligence",
  "the police",
  "all cops",
  "free speech",
  "the 2nd amendment",
  "autonomous weapons",
  "the pandemic",
  "income inequality",
  "the wage gap",
  "maternity leave",
  "men's rights",
  "the singularity",
  "the death penalty",
  "imperliasm",
  "colonialism",
  "empire",
  "the electoral college",
  "democracy itself",
  "anarchism",
  "noam chomsky",
  "foucault",
  "wall street",
  "the human development index",
  "a dyson sphere",
  "the revolution",
  "an extinction level event",
  "climate change",
  "the sixth mass extinction",
  "liberty",
  "justice",
  "punitive justice",
  "transformative justice",
  "the prison industrial complex",
  "the military industrial complex",
  "christopher columbus",
  "elon musk",
  "love",
  "consent",
  "political correctness",
  "literally everything",
  "your immortal soul",
  "henry kissinger",
  "manifest destiny",
  "jeff bezos",
  "the prison industrial complex",
  "the military industrial complex",
  "health care",
  "kropotkin",
  "proudhon",
  "george p. schultz",
  "automation",
  "student loan debt",
  "capitalism",
  "the opoiod epidemic",
  "communism",
  "anarchism",
  "blood lust",
  "the moment of conception",
  "the big bang",
  "the stars",
  "all that ever was and all that ever will be",
  "the bourgeoisie",
  "the proletariat",
  "the soviets",
  "anarchy",
  "marx",
  "total freedom",
  "the holocene",
  "mutually assured destruction",
  "the moon",
  "francis fukuyama",
  "the milky way",
  "labour",
  "the means of production",
  "mossad",
  "the kremlin",
  "reaganomics",
  "The Bomb",
  "china",
  "mars",
  "the earth",
  "neptune",
  "COVID-19",
  "God",
  "jesus",
  "the rich",
  "all americans",
];
let preposition = [
  "in the name of",
  "for",
  ". forget",
  ". fuck",
  ". nevermind",
  "despite",
  "or else face",
  "in the face of",
  ". you are",
  "without",
  "because of",
  ". we are",
  ". i am",
  ". i love",
  ". become one with",
  ". we must never forget",
  ". this is",
  "!!!!! to hell with",
  "or else witness",
  ". one must know",
  "in lieu of",
  ". exhale",
  "",
];
let noun2 = [
  "the patriarchy",
  "the matriarchy",
  "the ruling class",
  "the wind",
  "cancel culture",
  "neoliberalism",
  "the bourgoisie",
  "francis fukuyama",
  "allah",
  "the proletariat",
  "big government",
  "science",
  "artificial intelligence",
  "the police",
  "all cops",
  "free speech",
  "the 2nd amendment",
  "autonomous weapons",
  "private equity",
  "human rights",
  "the pandemic",
  "income inequality",
  "the wage gap",
  "maternity leave",
  "men's rights",
  "the death penalty",
  "imperliasm",
  "colonialism",
  "empire",
  "the electoral college",
  "democracy itself",
  "anarchism",
  "noam chomsky",
  "foucault",
  "christopher columbus",
  "elon musk",
  "love",
  "consent",
  "political correctness",
  "literally everything",
  "your immortal soul",
  "henry kissinger",
  "manifest destiny",
  "jeff bezos",
  "wall street",
  "barron trump",
  "the human development index",
  "a dyson sphere",
  "the revolution",
  "an extinction level event",
  "climate change",
  "the sixth mass extinction",
  "liberty",
  "justice",
  "punitive justice",
  "transformative justice",
  "the prison industrial complex",
  "the military industrial complex",

  "health care",
  "kropotkin",
  "proudhon",
  "george p. schultz",
  "the CIA",
  "automation",
  "student loan debt",
  "capitalism",
  "the opoiod epidemic",
  "communism",
  "anarchism",
  "blood lust",
  "the moment of conception",
  "the big bang",
  "the stars",
  "all that ever was and all that ever will be",
  "the bourgeoisie",
  "the proletariat",
  "the soviets",
  "anarchy",
  "marx",
  "total freedom",
  "the holocene",
  "mutually assured destruction",
  "the moon",
  "the milky way",
  "labour",
  "the means of production",
  "mossad",
  "the kremlin",
  "reaganomics",
  "The Bomb",
  "china",
  "mars",
  "earth",
  "neptune",
  "COVID-19",
  "God",
  "jesus",
  "the rich",
  "all americans",
  "literally everything else",
];

console.log(verb.length);
console.log(noun1.length);
console.log(preposition.length);
console.log(noun2.length);

let numberArray = [];

$(button).on("click", function () {
  numberArray.splice(0, numberArray.length);
  numberArray.push(Math.floor(Math.random() * (verb.length - 1)));
  numberArray.push(Math.floor(Math.random() * (noun1.length - 1)));
  numberArray.push(Math.floor(Math.random() * (preposition.length - 1)));
  numberArray.push(Math.floor(Math.random() * (noun2.length - 1)));
  console.log(preposition[numberArray[2]].split("")[0]);
  if (preposition[numberArray[2]].split("")[0] === ".") {
    text.innerHTML = `${
      verb[numberArray[0]] +
      " " +
      noun1[numberArray[1]] +
      preposition[numberArray[2]] +
      " " +
      noun2[numberArray[3]]
    } `;
  } else text.innerHTML = `${verb[numberArray[0]] + " " + noun1[numberArray[1]] + " " + preposition[numberArray[2]] + " " + noun2[numberArray[3]]} `;

  console.log(numberArray);
  console.log(text.innerHTML);
});
