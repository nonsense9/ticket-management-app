export const getCurrentDate = () => {
    return new Date().toJSON().slice(0, 10).split('-').reverse().join('-');
}
