export function Singleton(target: any) {
    let original: any = target;

    let f: any = function (args) {
        if (f._instance instanceof original) {
            throw new Error("stop using new");
        }
    }

    f._instance = f._instance || new original();

    f.getInstance = function() {
        return f._instance;
    }
    return f;
}
