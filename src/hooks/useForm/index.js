
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Index(props) {
    
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

    const resetData = _ => loadData(initial);
 
    return {
        key,
        field,
        control,
        handleSubmit,
        loadData,
        resetData,
        register,
        errors,
        isDirty
    }
}

export default Index;