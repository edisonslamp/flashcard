export default function initDB(
    name: string = "Flashcard",
    version: number = 1,
) {
    const request = indexedDB.open(name, version);
    request.onerror = (err) =>
        console.error(`IndexedDB error: ${request.error}`, err);

    request.onupgradeneeded = () => {
        const db = request.result;

        if (!db.objectStoreNames.contains("cards")) {
            const flashcardObjectStore = db.createObjectStore("cards", {
                autoIncrement: true,
                keyPath: "id",
            });
            flashcardObjectStore.createIndex("setId", "setId", {
                unique: false,
            });
        }

        if (!db.objectStoreNames.contains("sets")) {
            const flashcardObjectStore = db.createObjectStore("sets", {
                autoIncrement: true,
                keyPath: "setId",
            });
            flashcardObjectStore.createIndex("setId", "setId", {
                unique: true,
            });
        }
        console.log(`db created with ${version} version`);
    };
}
