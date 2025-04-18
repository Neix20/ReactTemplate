
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function processedFormData(field, data) {

    const _data = { ...data };

    for (const {name: _key, type } of field) {
        if (type === "dropdown") {
            _data[_key] = _data[_key].value;
        }

        if (type === "multi-dropdown") {
            _data[_key] = _data[_key].map(k => k.value);
        }
    }

    return _data;
}

function Index(props) {

    const { key = "", field = [], schema = {}, initial = {}, isArray = false } = props;

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

    // Array or Object
    const cusHandleSubmit = (onSubmit, onError) => handleSubmit((data, e) => {
        
        let transformedData = {};

        if (isArray) {
            transformedData = {
                [key]: data[key].map(x => processedFormData(field, x))
            }
        } else {
            transformedData = processedFormData(field, data);
        }

        return onSubmit(transformedData, e);
    }, onError);

    const resetData = _ => loadData(initial);

    return {
        key,
        field,
        control,
        handleSubmit: cusHandleSubmit,
        loadData,
        resetData,
        register,
        errors,
        isDirty
    }
}

export default Index;