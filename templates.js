export async function preloadTemplates() {
    const templatePaths = [
        "systems/antika/templates/actor-sheet.html",
        "systems/antika/templates/item-sheet.html"
    ];
    return loadTemplates(templatePaths);
}
