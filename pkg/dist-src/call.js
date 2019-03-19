export function call_(fn, ...args) {
    return args.length > 0
        ? fn.apply(fn, args)
        : function (...args2) {
            return fn.apply(fn, args2);
        };
}
export const call = call_;
export default call;
