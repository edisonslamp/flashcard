import axios from "axios";
import type { Set } from "src/entities/Flashcard";

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

export const getSetCards = async (id: string) => {
    try {
        const { data } = await axios.get<Set>(
            `http://localhost:3004/sets/${id}`,
        );
        return data?.cards;
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
