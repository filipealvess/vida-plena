import { TYPES } from "@/constants/areas";

import { Types } from "@/constants/areas/index.d";

function checkArea(area?: string): boolean {
    if (area === undefined) {
        return false;
    }

    return TYPES.includes(area as Types);
}

export {
    checkArea,
};
