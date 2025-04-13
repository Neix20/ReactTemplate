
import { useState, useEffect } from "react";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function useFormDataLs(props) {
    
    const { key = "", field = [], schema = {}, initial = {} } = props;

    const {
        register,
        control, 
        handleSubmit, 
        reset: loadData, 
        formState: {
            errors,
            isDirty
        } 
    } = useForm({ 
        mode: "onChange",
        resolver: zodResolver(schema)
    });

    const { fields: data, append, update, remove } = useFieldArray({ control, name: key });

    const resetData = _ => loadData(initial);
 
    return {
        key,
        data,
        field,
        control,
        handleSubmit,
        loadData,
        resetData,
        append,
        update,
        remove,
        isDirty
    }
}

export default useFormDataLs;