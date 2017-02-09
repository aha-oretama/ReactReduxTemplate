/**
 * @author aha-oretama
 * @Date 2016/11/13.
 */

// @flow
class Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    bark(): string {
        return `Wah wah, I am ${this.name}`;
    }
}

module.exports = Dog;
