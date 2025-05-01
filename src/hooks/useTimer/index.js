
import { useState, useEffect } from "react";

function Index(callBack = () => { }) {

    const [value, setValue] = useState(null);

    useEffect(() => {

        if (value === null) {
            return;
        }

        if (value <= 0) {
            callBack();
            return;
        }

        const interval = setInterval(() => {
            setValue((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [value, callBack]);

    return {
        value,
        setValue
    };
}

export default Index;