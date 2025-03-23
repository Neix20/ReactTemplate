
import { useState, useEffect, useCallback, useMemo } from "react";

import { clsUtility } from "@utility";

import { v4 as uuidv4 } from "uuid"; // For unique key generation

const useFormDataLs = (props = {}) => {

    const { key: pKey = "", field = [] } = props;

    const [formData, setFormData] = useState([]);

    const loadData = (lData = []) => {

        // Set Idx
        let _arr = [...lData].map(x => ({ ...x, idx: `${pKey}-${uuidv4()}` }));
        setFormData(_ => _arr);
    };

    const addData = (obj) => {
        const idx = `${pKey}-${uuidv4()}`;

        obj["idx"] = idx;

        const _arr = [...formData];
        _arr.push(obj);

        setFormData(() => _arr);
    };

    const addDataHtml = () => {
        const idx = `${pKey}-${uuidv4()}`;
        const _item = clsUtility.genDefaultItem(field);

        _item["idx"] = idx;

        const _arr = [...formData];
        _arr.push(_item);

        setFormData(() => _arr);
    };

    const updateData = (obj) => {
        const { idx = "" } = obj;
        if (!idx) return;

        const _arr = [...formData];

        for (const ind in _arr) {
            if (_arr[ind].idx == idx) {
                _arr[ind] = {
                    ...obj
                }
            }
        }

        setFormData((_) => _arr);
    };

    const updateDataHtml = (evt, idx = "") => {

        if (!idx) return;

        const { name = "", value = "" } = evt.target;

        const _arr = [...formData];

        for (const ind in _arr) {
            if (_arr[ind].idx == idx) {
                _arr[ind] = {
                    ..._arr[ind],
                    [name]: value
                }
            }
        }

        setFormData((_) => _arr);
    };

    const deleteData = (idx = "") => {

        if (!idx) return;

        const _arr = [...formData].filter(item => item.idx !== idx);

        setFormData(_ => _arr);
    };

    const resetData = () => {
        const _item = clsUtility.genDefaultItem(field);
        const idx = `${pKey}-${uuidv4()}`;

        setFormData([
            { ..._item, idx },
        ]);
    };

    return {
        key: pKey, data: formData, field,
        loadData, deleteData, resetData,
        addData, addDataHtml,
        updateData, updateDataHtml
    }
}


export default useFormDataLs;