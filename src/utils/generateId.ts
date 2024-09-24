export const generateId = (): string => {
    return [...Array(64)].map(() => Math.random().toString(36)[2]).join('');
};