export default function repeat_(val, idx) {
    return idx === 0 ? [] : [val].concat(repeat_(val, idx - 1));
}
//# sourceMappingURL=repeat_.js.map