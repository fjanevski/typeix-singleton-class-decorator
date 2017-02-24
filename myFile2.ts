import {Singleton} from "./decorator";

@Singleton
export class B {
    num = 5;

    getNum() { return this.num; }
    increment() { this.num ++; }
    decrement() { this.num --; }
}
