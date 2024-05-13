import { Card, Set } from "src/entities/Flashcard";

export enum Key {
    READONLY = "readonly",
    READWRITE = "readwrite",
    VERSIONCHANGE = "versionchange",
}

export enum Store {
    CARDS = "cards",
    SETS = "sets",
}

export const getAllElements = <T>(
    store: Store,
    key: Key,
    searchParams?: { setId: string },
) => {
    const open = indexedDB.open("Flashcard", 1);
    return new Promise<T[]>((resolve, reject) => {
        open.onsuccess = () => {
            const db = open.result;
            const transaction = db.transaction(store, key);
            const objectStore = transaction.objectStore(store);
            const request = objectStore.getAll();
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                if (store === Store.CARDS) {
                    resolve(
                        request.result.filter(
                            (item) => item.setId === searchParams?.setId,
                        ),
                    );
                }
                resolve(request.result);
            };

            transaction.oncomplete = () => {
                db.close();
                console.log(`${db.name} db is closed after got all items`);
            };
        };
    });
};

export const addElement = (store: Store, key: Key, payload: Card | Set) => {
    const open = indexedDB.open("Flashcard", 1);
    open.onsuccess = () => {
        const db = open.result;
        const transaction = db.transaction(store, key);
        const objectStore = transaction.objectStore(store);
        const request = objectStore.add(payload);
        request.onsuccess = () => {
            if (store === Store.CARDS) {
                console.log("Card added");
            } else {
                console.log("Set added");
            }
        };
        request.onerror = () => console.error(request.error);
        transaction.oncomplete = () => {
            db.close();
            if (store === Store.CARDS) {
                console.log(`${db.name} db is closed after card added`);
            } else {
                console.log(`${db.name} db is closed after set added`);
            }
        };
    };
};

export const deleteCardElement = (store: Store, key: Key, id: string) => {
    const open = indexedDB.open("Flashcard", 1);
    open.onsuccess = () => {
        const db = open.result;

        const transaction = db.transaction(store, key);
        const objectStore = transaction.objectStore(store);
        const request = objectStore.delete(id);
        request.onerror = () => console.error(request.error);
        transaction.oncomplete = () => {
            db.close();
            if (store === Store.CARDS) {
                console.log(`${db.name} db is closed after card deleted`);
            } else {
                console.log(`${db.name} db is closed after set deleted`);
            }
        };
    };
};

export const deleteSetElement = (store: Store, key: Key, id: string) => {
    const open = indexedDB.open("Flashcard", 1);
    open.onsuccess = () => {
        const db = open.result;

        // starts delete all realted data to set
        const cardTransaction = db.transaction(Store.CARDS, key);
        const cardObjectStore = cardTransaction.objectStore(Store.CARDS);
        const cardRequest = cardObjectStore.openCursor();
        cardRequest.onsuccess = () => {
            const cursor = cardRequest.result;
            if (cursor) {
                if (cursor.value.setId === id) {
                    cardObjectStore.delete(cursor.value.id);
                }
                cursor.continue();
            }
        };
        // stops

        const transaction = db.transaction(store, key);
        const objectStore = transaction.objectStore(store);
        const request = objectStore.delete(id);
        request.onerror = () => console.error(request.error);
        transaction.oncomplete = () => {
            db.close();
            if (store === Store.CARDS) {
                console.log(`${db.name} db is closed after card deleted`);
            } else {
                console.log(`${db.name} db is closed after set deleted`);
            }
        };
    };
};
