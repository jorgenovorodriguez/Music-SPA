export const getImageUrl = (path: string)  => {
    try {
        return `src/assets/images/${path}`; 
    } catch (error) {
        console.error(error);
    }
};