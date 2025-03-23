export function formatDate(date: string) {
    const dateClass = new Date(date);
    return `${dateClass.getFullYear()}/${(dateClass.getMonth() + 1).toString().padStart(2, '0')}/${(dateClass.getDate()).toString().padStart(2, '0')}`;
}

export function getFullYear(date: string) {
    const dateClass = new Date(date);
    return dateClass.getFullYear().toString();
}

export function getMonth(date: string) {
    const dateClass = new Date(date);
    return (dateClass.getMonth() + 1).toString().padStart(2, '0');
}

export function getDate(date: string) {
    const dateClass = new Date(date);
    return dateClass.getDate().toString().padStart(2, '0');
}

