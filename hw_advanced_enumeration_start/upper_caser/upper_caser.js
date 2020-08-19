const UpperCaser = function (words) {
    this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
    const converted = this.words.map((word) => {
        return word.toUpperCase();
    });
    return converted;
}

module.exports = UpperCaser;
