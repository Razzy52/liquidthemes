const PlayerEntity = Java.type("net.minecraft.entity.player.PlayerEntity");

const script = registerScript({
  name: "Killassault",
  version: "1.0.0",
  authors: ["Trikaes"],
});

let currentTarget = null;
let enemyVar = null;

script.registerModule(
  {
    name: "Killassault",
    category: "Fun",
    description: "Insults the enemy you killed",
    settings: {
      toxicWords: Setting.textArray({
        name: "Toxic Words",
        default: [
          "Did {TARGET} pay for that loss?",
          "Get LiquidBounce from liquidbounce.net",
          "Did {TARGET}'s dad not come back after he wanted to buy some milk?",
          "RISE against other cheaters by getting LiquidBounce from liquidbounce.net",
          "Are you afraid of me?",
          "Why not use LiquidBounce?",
          "#SwitchToLiquidBounce5",
          "Did {TARGET} forget to left click?",
          "{TARGET} takes up 2 seats on the bus",
          "It is impossible to miss {TARGET} with their man boobs",
          "Come on {TARGET}, report me to the obese staff",
          "{TARGET} is the type to overdose on Benadryl for a Tiktok video",
          "No wonder {TARGET} dropped out of college",
          "Here's your ticket to spectator, {TARGET}",
          "{TARGET} said they would never give me up and never let me down, I am sad",
          "The latest update to LiquidBounce fps booster client gave me 1000 fps and regedits for better velocity",
          "{TARGET} became Transgender just to join the 50% a day later",
          "Drink hand sanitizer so we can get rid of {TARGET}",
          "Even the MC Virgins are less virgin than {TARGET}",
          "{TARGET}'s free trial of life has expired",
          "{TARGET} is socially awkward",
          "I bet {TARGET} believes in the flat earth",
          "{TARGET} is the reason why society is failing",
          "Pay to lose",
          "Get good, get LiquidBounce @ liquidbounce.net",
          "Why would I be cheating when I am recording?",
          "{TARGET} is such a degenerate that {TARGET} believes EQ has more value than IQ",
          "The air could've taken {TARGET} away because of how weak {TARGET} is",
          "Even Kurt Cobain is more alive than {TARGET} with his wounds from a shotgun and heroin in his veins",
          "{TARGET} is breaking down more than Nirvana after Kurt Cobain's death",
          "Does {TARGET} buy their groceries at the dollar store?",
          "Does {TARGET} need some pvp advice?",
          "I'd smack {TARGET}, but that would be animal abuse",
          "I don't cheat, {TARGET} just needs to click faster",
          "Welcome to my rape dungeon! population: {TARGET}",
          "{TARGET} pressed the wrong button when they installed Minecraft?",
          "If the body is 70% water than how is {TARGET}'s body 100% salt?",
          "LiquidBounce is sexier than {TARGET}",
          "Oh, {TARGET} is recording? Well I am too",
          "{TARGET} is the type of person who would brute force interpolation",
          "{TARGET} go drown in your own salt",
          "{TARGET} is literally heavier than Overflow",
          "Excuse me {TARGET}, I don't speak retard",
          "Hmm, the problem {TARGET} is having looks like a skin color issue",
          "{TARGET} I swear I'm on Lunar Client",
          "Hey! Wise up {TARGET}! Don't waste your time without LiquidBounce",
          "{TARGET} didn't even stand a chance",
          "If opposites attract I hope {TARGET} finds someone who is intelligent, honest and cultured",
          "If laughter is the best medicine, {TARGET}'s face must be curing the world",
          "{TARGET} is the type of person to climb over a glass wall to see what's on the other side",
          "What does {TARGET}'s IQ and their girlfriend have in common? They're both below 5.",
        ],
      }),
      randomize: Setting.boolean({
        name: "Randomize",
        default: false,
      }),
    },
  },
  (mod) => {
    mod.on("attack", (event) => {
      if (mod.enabled && event.enemy && event.enemy instanceof PlayerEntity) {
        const enemyString = event.enemy.toString();
        const firstQuoteIndex = enemyString.indexOf("'");
        if (firstQuoteIndex !== -1) {
          const secondQuoteIndex = enemyString.indexOf(
            "'",
            firstQuoteIndex + 1
          );
          if (secondQuoteIndex !== -1) {
            currentTarget = enemyString.substring(
              firstQuoteIndex + 1,
              secondQuoteIndex
            );
            enemyVar = event.enemy;
          } else {
            currentTarget = null;
            enemyVar = null;
          }
        }
      }
    });

    mod.on("playerTick", () => {
      if (!currentTarget || !enemyVar) return;
      if (enemyVar.isAlive()) return;

      const toxicWords = mod.settings.toxicWords.value;
      let message = selectRandomToxicMessage(toxicWords, currentTarget);

      if (mod.settings.randomize.value) {
        message += generateRandomString(1, 5);
      }

      NetworkUtil.sendChatMessage(message);
      currentTarget = null;
    });
  }
);

function selectRandomToxicMessage(toxicWords, targetName) {
  const randomIndex = Math.floor(Math.random() * toxicWords.length);
  let message = toxicWords[randomIndex];

  message = message.split("{TARGET}").join(targetName);

  return message;
}

function generateRandomString(minLength, maxLength) {
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return " " + randomString;
}
