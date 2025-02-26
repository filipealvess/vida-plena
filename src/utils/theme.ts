import storage from "@/modules/storage";

function updateUI() {
    document.body.classList.remove('light', 'dark');

    const theme = storage.theme.get();

    if (theme !== null) {
        document.body.classList.add(theme);
        return;
    }

    if (window.matchMedia === undefined) {
        return;
    }

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDark === true) {
        document.body.classList.add('dark');
    }
}

export {
    updateUI,
};
