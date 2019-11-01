/**
 * Remove an item from an object or array of objects if the key starts with a specific character.
 * @param obj The object or array to handle.
 * @param prefix The prefix to check for.
 * @example
 * ```
 * const removeIfPrefix = require("remove-if-prefix");
 *
 * removeIfPrefix(
 *     {
 *         a: {
 *             _a: "a",
 *             b: 1
 *         },
 *         _b: ["b"]
 *     },
 *     "_"
 * );
 * //=> { a: { b: 1 } }
 * ```
*/
declare function removeIfPrefix<T extends object | any[]>(obj: T, prefix?: string): T;
declare function removeIfPrefix<T>(obj: T, prefix?: string): T;

export = removeIfPrefix;
