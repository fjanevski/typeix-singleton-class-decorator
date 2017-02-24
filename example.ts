import {A} from "./myfile1";
import {B} from "./myFile2";


    console.log("A: ", A.getInstance().getNum());
    console.log("A increment");
    A.getInstance().increment();
    console.log("A: ", A.getInstance().getNum());

    console.log("B: ", B.getInstance().getNum());
    console.log("B increment");
    B.getInstance().increment();
    console.log("B: ", B.getInstance().getNum());

    B.getInstance().decrement();
    console.log("B decrement");
    console.log("A: ", A.getInstance().getNum());
    console.log("B: ", B.getInstance().getNum());

    console.log(new A().getNum());

