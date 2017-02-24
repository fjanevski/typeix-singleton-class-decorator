import {Singleton} from "./decorator";

@Singleton
export class A {
    num = 0;

    getNum() { return this.num; }
    increment() { this.num ++; }
}
