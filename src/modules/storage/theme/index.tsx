import storage from '@/modules/storage/methods';
import {STORAGE} from '@/modules/storage/constants';

import {Themes} from '@/modules/storage/theme/index.d';

function get() {
    return storage.get<Themes>(STORAGE.THEME);
}

function set(theme: Themes) {
    storage.set(STORAGE.THEME, theme);
}

const theme = {
    get,
    set,
};

export default theme;
