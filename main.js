// Importation des autres fichiers du système
import { registerSettings } from "./settings.js";
import { preloadTemplates } from "./templates.js";
import { AntikaActor } from "./actor.js";
import { AntikaItem } from "./item.js";
import { DiceAntika } from "./dice.js";

/**
 * Initialisation du système Antika pour Foundry VTT
 */
Hooks.once("init", async function() {
    console.log("Antika | Initialisation du système Antika...");

    // Enregistrement des paramètres de configuration
    registerSettings();

    // Définition des classes d'objets du système
    CONFIG.Actor.documentClass = AntikaActor;
    CONFIG.Item.documentClass = AntikaItem;

    // Préchargement des templates HTML
    await preloadTemplates();

    console.log("Antika | Système prêt !");
});

/**
 * Quand le système est prêt (données chargées)
 */
Hooks.once("ready", async function() {
    console.log("Antika | Le système est maintenant prêt !");
});

/**
 * Lorsqu'un acteur est mis à jour
 */
Hooks.on("updateActor", (actor, data, options, userId) => {
    console.log(`Antika | Mise à jour de ${actor.name}`, data);
});
