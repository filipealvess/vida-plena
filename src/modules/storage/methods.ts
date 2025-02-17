function get<T>(key: string): T | null {
    const result = localStorage.getItem(key);

    if (result === null) {
        return null;
    }

    return JSON.parse(result);
}

function set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
}

const storage = {
    get,
    set,
};

export default storage;
