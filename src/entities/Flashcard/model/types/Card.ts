export type Card = {
    id: string;
    term: string;
    definition: string;
    setId: string;
};

// change the type name
export type Set = {
    id: string;
    title: string;
    cards?: Card[];
};
