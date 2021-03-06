/// <reference path="../typings/reflect-metadata/reflect-metadata.d.ts" />
//method decorator
function logMethod(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var indices = Reflect.getMetadata("log_" + key + "_parameters", target, key);
        if (Array.isArray(indices)) {
            for (var i = 0; i < args.length; i++) {
                if (indices.indexOf(i) !== -1) {
                    var arg = args[i];
                    var argStr = JSON.stringify(arg) || arg.toString();
                    console.log(key + " arg[" + i + "]: " + argStr);
                }
            }
            var result = originalMethod.apply(this, args);
            return result;
        }
        else {
            var a = args.map(function (a) { return (JSON.stringify(a) || a.toString()); }).join();
            var result = originalMethod.apply(this, args);
            var r = JSON.stringify(result);
            console.log("Call: " + key + "(" + a + ") => " + r);
            return result;
        }
    };
    return descriptor;
}
//class decorator
function logClass(target) {
    // save a reference to the original constructor
    var original = target;
    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var c = function () {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    }
    // the new constructor behaviour
    var f = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log("New: " + original.name);
        return construct(original, args);
    };
    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;
    // return new constructor (will override original)
    return f;
}
//property decorator
function logProperty(target, key) {
    // property value
    var _val = this[key];
    // property getter
    var getter = function () {
        console.log("Get: " + key + " => " + _val);
        return _val;
    };
    // property setter
    var setter = function (newVal) {
        console.log("Set: " + key + " => " + newVal);
        _val = newVal;
    };
    // Delete property.
    if (delete this[key]) {
        // Create new property with getter and setter
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
//parameter decorator
function logParameter(target, key, index) {
    var indices = Reflect.getMetadata("log_" + key + "_parameters", target, key) || [];
    indices.push(index);
    Reflect.defineMetadata("log_" + key + "_parameters", indices, target, key);
}
//decorator factory
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    args = args.filter(function (element) {
        return element !== null && element !== 'undefined';
    });
    switch (args.length) {
        case 1:
            return logClass.apply(this, args);
        case 2:
            return logProperty.apply(this, args);
        case 3:
            if (typeof args[2] === "number") {
                return logParameter.apply(this, args);
            }
            return logMethod.apply(this, args);
        default:
            throw new Error("Decorators are not valid here!");
    }
}
//# sourceMappingURL=definitions.js.map