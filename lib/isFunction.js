function isFunction(val)
{
    // Thanks https://stackoverflow.com/a/17772086
    return Object.prototype.toString.call(val) === '[object Function]';
}

module.exports = isFunction;