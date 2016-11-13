/**
 * @author aha-oretama
 * @Date 2016/11/13.
 */
class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return `Wah wah, I am ${this.name}`;
    }
}

module.exports = Dog;