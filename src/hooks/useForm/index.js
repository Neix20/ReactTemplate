
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function processedFormData(field, data) {

    const _data = { ...data };

    for (const {name: _key, type } of field) {

        if (type === "multi-dropdown") {
            _data[_key] = _data[_key].map(k => k.value);
        }

        if (type === "file") {
            _data[_key] = _data[_key].fileData;
        }

        if (type === "image") {
            _data[_key] = _data[_key].fileData;
        }
    }

    return _data;
}

function Index(props) {

    const { key = "", field = [], schema = {}, initial = {} } = props;

    const {
        register,
        control,
        setValues,
        getValues,
        handleSubmit,
        reset: loadData,
        watch,
        formState: {
            errors,
            isDirty
        }
    } = useForm({
        // mode: "onChange",
        resolver: zodResolver(schema)
    });

    // Array or Object
    const cusHandleSubmit = (onSubmit, onError) => handleSubmit((data, e) => {
        
        let transformedData = processedFormData(field, data);
        return onSubmit(transformedData, e);
    }, onError);

    const resetData = _ => loadData(initial);

    return {
        key,
        field,
        control,
        setValues,
        getValues,
        watch,
        handleSubmit: cusHandleSubmit,
        loadData,
        resetData,
        register,
        errors,
        isDirty
    }
}

export default Index;