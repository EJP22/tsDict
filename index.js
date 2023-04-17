"use strict";
class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (!this.words[word.term]) {
            this.words[word.term] = word.def;
        }
    }
    find(term) {
        return this.words[term];
    }
    remove(term) {
        delete this.words[term];
    }
    update(oldTerm, newTerm) {
        if (this.words.hasOwnProperty(oldTerm)) {
            this.words[newTerm] = this.words[oldTerm];
            delete this.words[oldTerm];
        }
    }
    size() {
        return Object.keys(this.words).length;
    }
    all() {
        for (let [key, value] of Object.entries(this.words)) {
            console.log(`${key}: ${value}`);
        }
    }
    def(term) {
        return this.words[term];
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
    toString() {
        console.log(`${this.term}: ${this.def}`);
    }
}
const 잡채 = new Word('잡채', 'korean glass nodle');
const 떡볶이 = new Word('떡볶이', 'my korean soul food');
const 부침개 = new Word('부침개', 'korean pizza');
const dict = new Dict();
dict.add(잡채);
dict.add(떡볶이);
dict.add(부침개);
dict.def('잡채');
dict.def('떡볶이');
dict.def('부침개');
잡채.toString();
떡볶이.toString();
부침개.toString();
dict.update('떡볶이', '짜장면');
console.log(dict.all());
console.log(dict.size());
console.log(dict.find('짜장면'));
