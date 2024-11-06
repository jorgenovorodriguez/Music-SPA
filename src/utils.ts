export const getImageUrl = (path: string)  => {
    try {
        return `public/images/${path}`; 
    } catch (error) {
        console.error(error);
    }
};