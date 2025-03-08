export function registerSettings() {
    game.settings.register("antika", "customSetting", {
        name: "Paramètre Personnalisé",
        hint: "Un paramètre de test pour Antika.",
        scope: "world",
        config: true,
        type: String,
        default: "Valeur par défaut"
    });
}
