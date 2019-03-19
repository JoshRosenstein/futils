import { prop_ } from './prop';
import { reduceValues_ } from './reduceValues';
import { is_ } from './is';
import { mapValues_ } from './mapValues';
import { prepend_ } from './prepend';
import { append_ } from './append';
import { keys_ } from './keys';
import { merge_ } from './merge';
export const getPaths_ = tree => reduceValues_((acc, key) => {
    const value = prop_(key, tree);
    if (is_('Object', value) || is_('Map', value)) {
        return merge_(acc, mapValues_(x => prepend_(key, x), getPaths_(value)));
    }
    return append_([key], acc);
}, [], keys_(tree));
export const getPaths = getPaths_;
export default getPaths;
