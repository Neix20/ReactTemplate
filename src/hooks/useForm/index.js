
import { useState, useEffect, useCallback } from "react";

import { clsUtility } from "@utility";

const useForm = (props = {}) => {

    const { key: pKey = "", field = [] } = props;

    const [form, setForm] = useState({});
    const [initData, setInitData] = useState({});

    const loadData = (data = {}) => {
        setForm(_ => data);
        setInitData(_ => data);
    }

    const updateData = (key, value) => {
        setForm((pForm) => (
            {
                ...pForm,
                [key]: value
            }
        ));
    };

    const deleteData = (key) => {
        setForm((pForm) => {
            const { [key]: _, ...rest } = pForm;
            return rest;
        });
    };

    const updateDataHtml = (evt) => {
        const { name = "", value = "" } = evt.target;

        if (!name) return;

        setForm((pForm) => (
            {
                ...pForm,
                [name]: value,
            }
        ));
    };

    const resetData = () => {
        const _data = clsUtility.genDefaultItem(field);
        setForm(() => _data);
        setInitData(() => _data);
    };

    const isChanged = JSON.stringify(form) === JSON.stringify(initData);

    return {
        key: pKey, data: form, field, 
        updateData, updateDataHtml,
        loadData, deleteData, resetData, isChanged
    };
}

export default useForm;