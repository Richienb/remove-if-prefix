"use strict"

const removePredicate = require("remove-predicate")

module.exports = (obj, prefix) => removePredicate(obj, (_value, key) => key.toString().startsWith(prefix))
