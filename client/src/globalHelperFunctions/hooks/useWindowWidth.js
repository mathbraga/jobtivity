import { useEffect, useState } from "react";

export const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const updateWindowWidth = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", updateWindowWidth);
        return () => window.removeEventListener("resize", updateWindowWidth);
    }, []);

    return width;
}