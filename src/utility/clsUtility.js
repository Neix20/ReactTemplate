
function capitalize(value = "") {
    if (typeof value !== "string" || !value.trim()) return ""; // Validate input

    return value
        .split(".")
        .at(-1)
        .split("_")
        .map((word) =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
}

function genDefaultData(type = "text") {

    const defaults = {
        "text": "",
        "textarea": "",
        "int": 0,
        "decimal": 0,
        "date": "2021-01-01",
        "dropdown": "",
    }

    if (type in defaults) {
        return defaults[type];
    }

    return null;
}


function genRandNum(min = 1, max = 10) {
    return Math.floor(Math.random() * max) + min;

}

function roundUp(number, base = 10) {
    return Math.ceil(number / base) * base;
}

function roundDown(number, base = 10) {
    return Math.floor(number / base) * base;
}

function formatCurrency(amount) {
    return new Intl.NumberFormat("ms-MY", {
        style: "currency",
        currency: "MYR",
        minimumFractionDigits: 2,
    }).format(amount)
}

import { DateTime } from 'luxon';

function formatDate(dt, format = "LLLL d, yyyy") {
    return DateTime.fromISO(dt).toFormat(format);
}

function copyToClipboard(value) {
    navigator.clipboard.writeText(value)
    .then(() => {
      alert('Copied to clipboard!');
    })
    .catch((err) => {
      console.error('Failed to copy: ', err);
    });
}

export {
    capitalize,
    genDefaultData,
    copyToClipboard
}

export {
    genRandNum,
    roundUp,
    roundDown,
    formatCurrency,
    formatDate
}
