import axios from "axios";
import type { Set } from "src/entities/Flashcard";

export const getSet = async () => {
    try {
        const { data } = await axios.get<Set[]>("http://localhost:3004/sets");

        return data;
    } catch (err) {
        console.log(err);
    }
};

export const getSetCards = async (id: string) => {
    try {
        const { data } = await axios.get<Set>(
            `http://localhost:3004/sets/${id}`,
        );
        return data;
    } catch (err) {
        console.log(err);
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
        console.log(err);
    }
};
