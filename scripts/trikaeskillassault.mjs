const PlayerEntity = Java.type("net.minecraft.entity.player.PlayerEntity");

const script = registerScript({
  name: "Trikaes Killassault",
  version: "1.0.0",
  authors: ["Trikaes"],
});

let currentTarget = null;

script.registerModule(
  {
    name: "TrikaesKillassault",
    category: "Fun",
    description: "Sends a random message when you kill someone",
    settings: {
      toxicWords: Setting.textArray({
        name: "Toxic Words",
        default: [
          "Liquidbounce dogged {TARGET}",
          "Tired of losing? Get liquidbounce.",
          "I'm using LiquidBounce Nextgen and you should too!",
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
      if (mod.enabled && event.enemy instanceof PlayerEntity) {
        currentTarget = event.enemy;
      }
    });

    mod.on("playerTick", () => {
      if (!currentTarget || currentTarget.isAlive()) return;

      const enemyName = currentTarget.getName().getString();
      const toxicWords = mod.settings.toxicWords.value;

      let message = selectRandomToxicMessage(toxicWords, enemyName);

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
  return toxicWords[randomIndex].replace("{TARGET}", targetName);
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
