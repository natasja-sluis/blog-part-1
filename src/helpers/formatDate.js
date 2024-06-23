export default function formatDate(date) {
    const formattedDate = new Date(date);
    const longOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
    }
    return formattedDate.toLocaleDateString('nl-NL', longOptions);
}