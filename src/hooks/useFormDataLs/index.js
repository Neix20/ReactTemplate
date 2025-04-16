
import { useState, useEffect } from "react";

import { useFieldArray } from "react-hook-form";

function useFormDataLs(props) {
    
    const { key = "", control = null } = props;

    const { fields: data, append, update, remove } = useFieldArray({ control, name: key });
 
    return {
        key,
        data,
        append,
        update,
        remove,
    }
}

export default useFormDataLs;