import axios from "axios";
import type { Card, Set } from "src/entities/Flashcard";

export const getSet = async () => {
    try {
        const { data } = await axios.get<Set[]>("http://localhost:3004/sets");
        return data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        }
    }
};

export const getCards = async (id: string) => {
    try {
        const { data } = await axios.get<Set[]>(
            `http://localhost:3004/sets?id=${id}&_embed=cards`,
        );

        if (data[0]) {
            return data[0].cards;
        }
    } catch (err) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        }
    }
};

export const addSet = async (set: Set) => {
    try {
        const response = await axios.post<Set>(
            "http://localhost:3004/sets",
            set,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        return response;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        }
    }
};

export const addCard = async (card: Card) => {
    try {
        const response = await axios.post<Card>(
            "http://localhost:3004/cards",
            card,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        return response;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        }
    }
};

export const deleteSet = async (id: string) => {
    try {
        await axios.delete<Set>(`http://localhost:3004/sets/${id}`);
    } catch (err) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        }
    }
};

export const deleteCard = async (id: string) => {
    try {
        await axios.delete<Card>(`http://localhost:3004/cards/${id}`);
    } catch (err) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        }
    }
};
