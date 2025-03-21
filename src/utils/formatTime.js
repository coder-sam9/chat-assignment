function formatTime(createdAt) {
    // createdAt is now an ISO 8601 string, e.g., "2025-03-19T15:07:17.495Z"
    const date = new Date(createdAt);
    const now = new Date();
    
    const isToday = date.toDateString() === now.toDateString();
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    if (isToday) {
        return `Today ${date.toLocaleTimeString('en-US', options)}`;
    } else if (isYesterday) {
        return `Yesterday ${date.toLocaleTimeString('en-US', options)}`;
    } else {
        const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        return `${monthDay} ${date.toLocaleTimeString('en-US', options)}`;
    }
}

export default formatTime;