import { useCallback, useEffect } from "react";

function useClickOutside(
    ref: React.RefObject<HTMLElement | null>,
    callback: () => void
) {
    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (ref.current === null) {
            return;
        }

        if (ref.current.contains(event.target as Node) === false) {
            callback();
        }
    }, [callback, ref]);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => document.removeEventListener("click", handleClickOutside);
    }, [handleClickOutside]);
}

export default useClickOutside;
