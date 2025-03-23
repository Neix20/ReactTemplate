import { useState, useCallback } from "react";

const Index = (initial = false) => {
    
    const [flag, setFlag] = useState(initial);

    const open = useCallback(() => setFlag(_ => true), []);
    const close = useCallback(() => setFlag(_ => false), []);
    const toggle = useCallback(() => setFlag((state) => !state), []);

    return { flag, open, close, toggle };
}

export default Index;