function getId(timestamp: string, name: string) {
    const cleanTimestamp = timestamp.replace(/\D/g, '')
    const cleanName = name.normalize('NFD').replace(/[^a-zA-Z0-9\s]/g, '');
    const separatedName = cleanName.replace(/\s/g, '-');

    return `${cleanTimestamp}_${separatedName}`;
}

export {
    getId,
};
