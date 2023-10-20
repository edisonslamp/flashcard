import { Card } from "src/entities/Flashcard";

let db: IDBDatabase;
export const getItem = (store: string, key: IDBValidKey) => {
    const open = indexedDB.open("flashcard");
    return new Promise<Card[]>((resolve, reject) => {
        open.onsuccess = () => {
            let request!: IDBRequest;
            db = open.result;
            if ([...db.objectStoreNames].find((name) => name === store)) {
                const transaction = db.transaction(store);
                const objectStore = transaction.objectStore(store);
                if (key === "all") request = objectStore.getAll();
                else request = objectStore.get(key);
                request.onerror = () => reject(request.error);
                request.onsuccess = () => resolve(request.result);
                transaction.oncomplete = () => db.close();
            } else {
                // indexedDB.deleteDatabase("flashcard");
                console.log(new Error("Wrong store name"));
            }
        };
    });
};
export const addItem = (store: string, payload: object) => {
    const open = indexedDB.open("flashcard");
    open.onsuccess = () => {
        db = open.result;
        if ([...db.objectStoreNames].find((name) => name === store)) {
            const transaction = db.transaction(store, "readwrite");
            const objectStore = transaction.objectStore(store);
            // const serialized = JSON.parse(JSON.stringify(payload));
            const request = objectStore.add(payload);
            request.onerror = () => console.error(request.error);
            transaction.oncomplete = () => db.close();
        } else {
            console.log(new Error("Wrong store name"));
        }
    };
};
export const editItem = <T>(
    store: string,
    key: IDBValidKey,
    payload: object,
) => {
    const open = indexedDB.open("flashcard");
    return new Promise<T>((resolve, reject) => {
        open.onsuccess = () => {
            let request: IDBRequest;
            db = open.result;
            if ([...db.objectStoreNames].find((name) => name === store)) {
                const transaction = db.transaction(store, "readwrite");
                const objectStore = transaction.objectStore(store);
                if (key === "all") request = objectStore.getAll();
                else request = objectStore.get(key);
                request.onerror = () => reject(request.error);
                request.onsuccess = () => {
                    const serialized = JSON.parse(JSON.stringify(payload));
                    const updateRequest = objectStore.put(serialized);
                    updateRequest.onsuccess = () => resolve(request.result);
                };
                transaction.oncomplete = () => db.close();
            } else {
                console.log(new Error("Wrong store name"));
            }
        };
    });
};
export const removeItem = (store: string, key: IDBValidKey) => {
    const open = indexedDB.open("flashcard");
    open.onsuccess = () => {
        let request: IDBRequest;
        db = open.result;
        if ([...db.objectStoreNames].find((name) => name === store)) {
            const transaction = db.transaction(store, "readwrite");
            const objectStore = transaction.objectStore(store);
            if (key === "all") request = objectStore.clear();
            else request = objectStore.delete(key);
            request.onerror = () => console.error(request.error);
            transaction.oncomplete = () => db.close();
        } else {
            console.log(new Error("Wrong store name"));
        }
    };
};
