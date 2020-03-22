export function reduce(item) {
    if (Array.isArray(item)) {
        return reduce(choose(item));
    }
    if (typeof item === "function") {
        return reduce(item());
    }
    return item;
}

export function combine(list) {
    if (!Array.isArray(list)) {
        list = [list];
    }
    var combined = "";
    for (var i = 0; i < list.length; i++) {
        var element = reduce(list[i]);
        if (combined && [',', '.', ':', ';'].indexOf(element[0]) == -1) {
            combined += ' ';
        }
        combined += element;
    }
    return combined;
}

export function choose(list) {
  if (list.length == 0) {
    return null;
  }
  return list[Math.floor(Math.random() * list.length)];
}

export function chooseAndRemove(list) {
    if (list.length == 0) {
        return null;
    }
    let choice = Math.floor(Math.random() * list.length);
    let item = list[choice];
    list.splice(choice, 1);
    return item;
}

export function floatingPointNumber(start, end) {
    return Math.random() * (end - start) + start;
}

export function wholeNumber(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

export function bool() {
    return !!wholeNumber(0, 2);
}

export function percentage() {
    return wholeNumber(0, 100) + "%";
}

export function paragraph(list) {
    if (!Array.isArray(list)) {
        throw "Paragraph is not an array";
    }
    let result = [];
    for (const sentence of list) {
        let combined = exports.combine(sentence).replace(" .", ".").replace(" ,", ",");
        if (combined) {
            result.push(combined[0].toUpperCase() + combined.slice(1));
        }
    }
    return combine(result);
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
export function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
