export type Card = {
    id: string;
    term: string;
    definition: string;
};

export type Set = {
    id: string;
    title: string;
    cards: Card[];
};
