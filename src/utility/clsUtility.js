
function capitalize(value = "") {
    if (typeof value !== "string" || !value.trim()) return ""; // Validate input

    return value
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

function genDefaultItem(field = []) {
    const _data = {};

    for (const obj of field) {
        const { name = "", type = "" } = obj;
        _data[name] = genDefaultData(type);
    }

    return _data;
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
  

export {
    capitalize,
    genDefaultData,
    genDefaultItem,
}

export {
    genRandNum,
    roundUp,
    roundDown
}