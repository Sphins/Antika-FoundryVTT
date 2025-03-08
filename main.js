// Importation des autres fichiers du système
import { registerSettings } from "./settings.js";
import { preloadTemplates } from "./templates.js";
import { AntikaActor } from "./scripts/actor.js";
import { AntikaItem } from "./scripts/item.js";
import { DiceAntika } from "./scripts/dice.js";

/**
 * Initialisation du système Antika pour Foundry VTT
 */
Hooks.once("init", async function () {
    console.log("Antika | Initialisation du système Antika...");

    // Définition des types d'acteurs et d'objets
    CONFIG.ANTIKA = {
        actorTypes: ["character", "npc"],
        itemTypes: ["arme", "armure", "pouvoir", "objet"],
        abilities: {
            "soma": { "label": "Soma" },
            "sophos": { "label": "Sophos" },
            "symbiose": { "label": "Symbiose" },
            "hubris": { "label": "Hubris" },
            "aristeia": { "label": "Aristéia" }
        }
    };

    console.log("Antika | Configuration chargée !");
});


/**
 * Quand le système est prêt (données chargées)
 */
Hooks.once("ready", async function () {
    console.log("Antika | Le système est maintenant prêt !");
});

/**
 * Lorsqu'un acteur est mis à jour
 */
Hooks.on("updateActor", (actor, data, options, userId) => {
    console.log(`Antika | Mise à jour de ${actor.name}`, data);
});
