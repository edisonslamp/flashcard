export function initDB() {
    let db!: IDBDatabase;
    const request = indexedDB.open("flashcard", 1);
    request.onerror = (err) =>
        console.error(`IndexedDB error: ${request.error}`, err);

    request.onsuccess = () => (db = request.result);

    request.onupgradeneeded = () => {
        const db = request.result;
        db.createObjectStore("flashcardStore", {
            keyPath: "id",
        });
    };
    return db;
}
