/**
 * @file jest.config.js
 * 
 * ```js
 * module.exports = {
 *   preset: 'ts-jest',
 *   testEnvironment: 'node'
 * }
 * ```
 */


// Reflect.decorate ( decorators, target [, propertyKey [, descriptor] ] )

import "./Reflect.MIT";

describe("Reflect.decorate", () => {
    it("ThrowsIfDecoratorsArgumentNotArrayForFunctionOverload", () => {
        let target = function() { };
        // @ts-expect-error
        expect(() => Reflect.decorate(undefined, target, undefined, undefined)).toThrow(TypeError);
    });

    it("ThrowsIfTargetArgumentNotFunctionForFunctionOverload", () => {
        let decorators: (ClassDecorator | MethodDecorator | PropertyDecorator)[] = [];
        let target = {};
        // @ts-expect-error
        expect(() => Reflect.decorate(decorators, target, undefined, undefined)).toThrow(TypeError);
    });

    it("ThrowsIfDecoratorsArgumentNotArrayForPropertyOverload", () => {
        let target = {};
        let name = "name";
        // @ts-expect-error
        expect(() => Reflect.decorate(undefined, target, name, undefined)).toThrow(TypeError);
    });

    it("ThrowsIfTargetArgumentNotObjectForPropertyOverload", () => {
        let decorators: (ClassDecorator | MethodDecorator | PropertyDecorator)[] = [];
        let target = 1;
        let name = "name";
        // @ts-expect-error
        expect(() => Reflect.decorate(decorators, target, name, undefined)).toThrow(TypeError);
    });

    it("ThrowsIfDecoratorsArgumentNotArrayForPropertyDescriptorOverload", () => {
        let target = {};
        let name = "name";
        let descriptor = {};
        // @ts-expect-error
        expect(() => Reflect.decorate(undefined, target, name, descriptor)).toThrow(TypeError);
    });

    it("ThrowsIfTargetArgumentNotObjectForPropertyDescriptorOverload", () => {
        let decorators: (ClassDecorator | MethodDecorator | PropertyDecorator)[] = [];
        let target = 1;
        let name = "name";
        let descriptor = {};
        // @ts-expect-error
        expect(() => Reflect.decorate(decorators, target, name, descriptor)).toThrow(TypeError);
    });

    it("ExecutesDecoratorsInReverseOrderForFunctionOverload", () => {
        let order: number[] = [];
        let decorators = [
            (_target: Function): void => { order.push(0); },
            (_target: Function): void => { order.push(1); }
        ];
        let target = function() { };
        Reflect.decorate(decorators, target);
        expect(order).toEqual([1, 0]);
    });

    it("ExecutesDecoratorsInReverseOrderForPropertyOverload", () => {
        let order: number[] = [];
        let decorators = [
            (_target: Object, _name: string | symbol): void => { order.push(0); },
            (_target: Object, _name: string | symbol): void => { order.push(1); }
        ];
        let target = {};
        let name = "name";
        Reflect.decorate(decorators, target, name, undefined);
        expect(order).toEqual([1, 0]);
    });

    it("ExecutesDecoratorsInReverseOrderForPropertyDescriptorOverload", () => {
        let order: number[] = [];
        let decorators = [
            (_target: Object, _name: string | symbol): void => { order.push(0); },
            (_target: Object, _name: string | symbol): void => { order.push(1); }
        ];
        let target = {};
        let name = "name";
        let descriptor = {};
        Reflect.decorate(decorators, target, name, descriptor);
        expect(order).toEqual([1, 0]);
    });

    it("DecoratorPipelineForFunctionOverload", () => {
        let A = function A(): void { };
        let B = function B(): void { };
        let decorators = [
            (_target: Function): any => { return undefined; },
            (_target: Function): any => { return A; },
            (_target: Function): any => { return B; }
        ];
        let target = function (): void { };
        let result = Reflect.decorate(decorators, target);
        expect(result).toBe(A);
    });

    it("DecoratorPipelineForPropertyOverload", () => {
        let A = {};
        let B = {};
        let decorators = [
            (_target: Object, _name: string | symbol): any => { return undefined; },
            (_target: Object, _name: string | symbol): any => { return A; },
            (_target: Object, _name: string | symbol): any => { return B; }
        ];
        let target = {};
        let result = Reflect.decorate(decorators, target, "name", undefined);
        expect(result).toBe(A);
    });

    it("DecoratorPipelineForPropertyDescriptorOverload", () => {
        let A = {};
        let B = {};
        let C = {};
        let decorators = [
            (_target: Object, _name: string | symbol): any => { return undefined; },
            (_target: Object, _name: string | symbol): any => { return A; },
            (_target: Object, _name: string | symbol): any => { return B; }
        ];
        let target = {};
        let result = Reflect.decorate(decorators, target, "name", C);
        expect(result).toBe(A);
    });

    it("DecoratorCorrectTargetInPipelineForFunctionOverload", () => {
        let sent: Function[] = [];
        let A = function A(): void { };
        let B = function B(): void { };
        let decorators = [
            (target: Function): any => { sent.push(target); return undefined; },
            (target: Function): any => { sent.push(target); return undefined; },
            (target: Function): any => { sent.push(target); return A; },
            (target: Function): any => { sent.push(target); return B; }
        ];
        let target = function (): void { };
        Reflect.decorate(decorators, target);
        expect(sent).toEqual([target, B, A, A]);
    });

    it("DecoratorCorrectTargetInPipelineForPropertyOverload", () => {
        let sent: Object[] = [];
        let decorators = [
            (_target: Object, _name: string | symbol): any => { sent.push(target); },
            (_target: Object, _name: string | symbol): any => { sent.push(target); },
            (_target: Object, _name: string | symbol): any => { sent.push(target); },
            (_target: Object, _name: string | symbol): any => { sent.push(target); }
        ];
        let target = { };
        Reflect.decorate(decorators, target, "name");
        expect(sent).toEqual([target, target, target, target]);
    });

    it("DecoratorCorrectNameInPipelineForPropertyOverload", () => {
        let sent: (symbol | string)[] = [];
        let decorators = [
            (_target: Object, name: string | symbol): any => { sent.push(name); },
            (_target: Object, name: string | symbol): any => { sent.push(name); },
            (_target: Object, name: string | symbol): any => { sent.push(name); },
            (_target: Object, name: string | symbol): any => { sent.push(name); }
        ];
        let target = { };
        Reflect.decorate(decorators, target, "name");
        expect(sent).toEqual(["name", "name", "name", "name"]);
    });

    it("DecoratorCorrectTargetInPipelineForPropertyDescriptorOverload", () => {
        let sent: Object[] = [];
        let A = { };
        let B = { };
        let C = { };
        let decorators = [
            (_target: Object, _name: string | symbol): any => { sent.push(target); return undefined; },
            (_target: Object, _name: string | symbol): any => { sent.push(target); return undefined; },
            (_target: Object, _name: string | symbol): any => { sent.push(target); return A; },
            (_target: Object, _name: string | symbol): any => { sent.push(target); return B; }
        ];
        let target = { };
        Reflect.decorate(decorators, target, "name", C);
        expect(sent).toEqual([target, target, target, target]);
    });

    it("DecoratorCorrectNameInPipelineForPropertyDescriptorOverload", () => {
        let sent: (symbol | string)[] = [];
        let A = { };
        let B = { };
        let C = { };
        let decorators = [
            (_target: Object, name: string | symbol): any => { sent.push(name); return undefined; },
            (_target: Object, name: string | symbol): any => { sent.push(name); return undefined; },
            (_target: Object, name: string | symbol): any => { sent.push(name); return A; },
            (_target: Object, name: string | symbol): any => { sent.push(name); return B; }
        ];
        let target = { };
        Reflect.decorate(decorators, target, "name", C);
        expect(sent).toEqual(["name", "name", "name", "name"]);
    });

    it("DecoratorCorrectDescriptorInPipelineForPropertyDescriptorOverload", () => {
        let sent: PropertyDescriptor[] = [];
        let A = { };
        let B = { };
        let C = { };
        let decorators = [
            (_target: Object, _name: string | symbol, descriptor: PropertyDescriptor): any => { sent.push(descriptor); return undefined; },
            (_target: Object, _name: string | symbol, descriptor: PropertyDescriptor): any => { sent.push(descriptor); return undefined; },
            (_target: Object, _name: string | symbol, descriptor: PropertyDescriptor): any => { sent.push(descriptor); return A; },
            (_target: Object, _name: string | symbol, descriptor: PropertyDescriptor): any => { sent.push(descriptor); return B; }
        ];
        let target = { };
        Reflect.decorate(decorators, target, "name", C);
        expect(sent).toEqual([C, B, A, A]);
    });
});

// 4.1.2 Reflect.defineMetadata ( metadataKey, metadataValue, target, propertyKey )
// https://rbuckton.github.io/reflect-metadata/#reflect.definemetadata
describe("Reflect.defineMetadata", () => {
    it("InvalidTarget", () => {
        // @ts-expect-error
        expect(() => Reflect.defineMetadata("key", "value", undefined, undefined)).toThrow(TypeError);
    });

    it("ValidTargetWithoutTargetKey", () => {
        expect(() => Reflect.defineMetadata("key", "value", { })).not.toThrowError();
    });

    it("ValidTargetWithTargetKey", () => {
        expect(() => Reflect.defineMetadata("key", "value", { }, "name")).not.toThrowError();;
    });
});

// 4.1.10 Reflect.deleteMetadata ( metadataKey, target [, propertyKey] )
// https://rbuckton.github.io/reflect-metadata/#reflect.deletemetadata
describe("Reflect.deleteMetadata", () => {
    it("InvalidTarget", () => {
        expect(() => Reflect.deleteMetadata("key", undefined, undefined)).toThrow(TypeError);
    });

    it("WhenNotDefinedWithoutTargetKey", () => {
        let obj = {};
        let result = Reflect.deleteMetadata("key", obj);
        expect(result).toBe(false);
    });

    it("WhenDefinedWithoutTargetKey", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj);
        let result = Reflect.deleteMetadata("key", obj);
        expect(result).toBe(true);
    });

    it("WhenDefinedOnPrototypeWithoutTargetKey", () => {
        let prototype = {};
        Reflect.defineMetadata("key", "value", prototype);
        let obj = Object.create(prototype);
        let result = Reflect.deleteMetadata("key", obj);
        expect(result).toBe(false);
    });

    it("AfterDeleteMetadata", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj);
        Reflect.deleteMetadata("key", obj);
        let result = Reflect.hasOwnMetadata("key", obj);
        expect(result).toBe(false);
    });
});

// 4.1.8 Reflect.getMetadataKeys ( target [, propertyKey] )
// https://rbuckton.github.io/reflect-metadata/#reflect.getmetadatakeys
describe.skip("Reflect.getMetadataKeys", () => {
    it("KeysInvalidTarget", () => {
        // 1. If Type(target) is not Object, throw a TypeError exception.
        // @ts-expect-error
        expect(() => Reflect.getMetadataKeys(undefined)).toThrow(TypeError);
    });

    it("KeysWithoutTargetKeyWhenNotDefined", () => {
        let obj = {};
        let result = Reflect.getMetadataKeys(obj);
        expect(result).toEqual([]);
    });

    it("KeysWithoutTargetKeyWhenDefined", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj);
        let result = Reflect.getMetadataKeys(obj);
        expect(result).toEqual(["key"]);
    });

    it("KeysWithoutTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key", "value", prototype);
        let result = Reflect.getMetadataKeys(obj);
        expect(result).toEqual(["key"]);
    });

    it("KeysOrderWithoutTargetKey", () => {
        let obj = {};
        Reflect.defineMetadata("key1", "value", obj);
        Reflect.defineMetadata("key0", "value", obj);
        let result = Reflect.getMetadataKeys(obj);
        expect(result).toEqual(["key1", "key0"]);
    });

    it("KeysOrderAfterRedefineWithoutTargetKey", () => {
        let obj = {};
        Reflect.defineMetadata("key1", "value", obj);
        Reflect.defineMetadata("key0", "value", obj);
        Reflect.defineMetadata("key1", "value", obj);
        let result = Reflect.getMetadataKeys(obj);
        expect(result).toEqual(["key1", "key0"]);
    });

    it("KeysOrderWithoutTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        Reflect.defineMetadata("key2", "value", prototype);
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key1", "value", obj);
        Reflect.defineMetadata("key0", "value", obj);
        let result = Reflect.getMetadataKeys(obj);
        expect(result).toEqual(["key1", "key0", "key2"]);
    });

    it("KeysWithTargetKeyWhenNotDefined", () => {
        let obj = {};
        let result = Reflect.getMetadataKeys(obj, "name");
        expect(result).toEqual([]);
    });

    it("KeysWithTargetKeyWhenDefined", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj, "name");
        let result = Reflect.getMetadataKeys(obj, "name");
        expect(result).toEqual(["key"]);
    });

    it("KeysWithTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key", "value", prototype, "name");
        let result = Reflect.getMetadataKeys(obj, "name");
        expect(result).toEqual(["key"]);
    });

    it("KeysOrderAfterRedefineWithTargetKey", () => {
        let obj = {};
        Reflect.defineMetadata("key1", "value", obj, "name");
        Reflect.defineMetadata("key0", "value", obj, "name");
        Reflect.defineMetadata("key1", "value", obj, "name");
        let result = Reflect.getMetadataKeys(obj, "name");
        expect(result).toEqual(["key1", "key0"]);
    });

    it("KeysOrderWithTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        Reflect.defineMetadata("key2", "value", prototype, "name");
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key1", "value", obj, "name");
        Reflect.defineMetadata("key0", "value", obj, "name");
        let result = Reflect.getMetadataKeys(obj, "name");
        expect(result).toEqual(["key1", "key0", "key2"]);
    });
});

// 4.1.5 Reflect.getMetadata ( metadataKey, target [, propertyKey] )
// https://rbuckton.github.io/reflect-metadata/#reflect.getmetadata
describe("Reflect.getMetadata", () => {
    it("InvalidTarget", () => {
        // @ts-expect-error
        expect(() => Reflect.getMetadata("key", undefined, undefined)).toThrow(TypeError);
    });

    it("WithoutTargetKeyWhenNotDefined", () => {
        let obj = {};
        let result = Reflect.getMetadata("key", obj);
        expect(result).toBe(undefined);
    });

    it("WithoutTargetKeyWhenDefined", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj);
        let result = Reflect.getMetadata("key", obj);
        expect(result).toBe("value");
    });

    it("WithoutTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key", "value", prototype);
        let result = Reflect.getMetadata("key", obj);
        expect(result).toBe("value");
    });

    it("WithTargetKeyWhenNotDefined", () => {
        let obj = {};
        let result = Reflect.getMetadata("key", obj, "name");
        expect(result).toBe(undefined);
    });

    it("WithTargetKeyWhenDefined", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj, "name");
        let result = Reflect.getMetadata("key", obj, "name");
        expect(result).toBe("value");
    });

    it("WithTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key", "value", prototype, "name");
        let result = Reflect.getMetadata("key", obj, "name");
        expect(result).toBe("value");
    });
});

// 4.1.9 Reflect.getOwnMetadataKeysKeys ( target [, propertyKey] )
// https://rbuckton.github.io/reflect-metadata/#reflect.getownmetadatakeys
describe("Reflect.getOwnMetadataKeysKeys", () => {
    it("KeysKeysInvalidTarget", () => {
        // 1. If Type(target) is not Object, throw a TypeError exception.
        // @ts-expect-error
        expect(() => Reflect.getOwnMetadataKeys(undefined, undefined)).toThrow(TypeError);
    });

    it("KeysWithoutTargetKeyWhenNotDefined", () => {
        let obj = {};
        let result = Reflect.getOwnMetadataKeys(obj);
        expect(result).toEqual([]);
    });

    it("KeysWithoutTargetKeyWhenDefined", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj);
        let result = Reflect.getOwnMetadataKeys(obj);
        expect(result).toEqual(["key"]);
    });

    it("KeysWithoutTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key", "value", prototype);
        let result = Reflect.getOwnMetadataKeys(obj);
        expect(result).toEqual([]);
    });

    it("KeysOrderWithoutTargetKey", () => {
        let obj = {};
        Reflect.defineMetadata("key1", "value", obj);
        Reflect.defineMetadata("key0", "value", obj);
        let result = Reflect.getOwnMetadataKeys(obj);
        expect(result).toEqual(["key1", "key0"]);
    });

    it("KeysOrderAfterRedefineWithoutTargetKey", () => {
        let obj = {};
        Reflect.defineMetadata("key1", "value", obj);
        Reflect.defineMetadata("key0", "value", obj);
        Reflect.defineMetadata("key1", "value", obj);
        let result = Reflect.getOwnMetadataKeys(obj);
        expect(result).toEqual(["key1", "key0"]);
    });

    it("KeysWithTargetKeyWhenNotDefined", () => {
        let obj = {};
        let result = Reflect.getOwnMetadataKeys(obj, "name");
        expect(result).toEqual([]);
    });

    it("KeysWithTargetKeyWhenDefined", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj, "name");
        let result = Reflect.getOwnMetadataKeys(obj, "name");
        expect(result).toEqual(["key"]);
    });

    it("KeysWithTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key", "value", prototype, "name");
        let result = Reflect.getOwnMetadataKeys(obj, "name");
        expect(result).toEqual([]);
    });

    it("KeysOrderAfterRedefineWithTargetKey", () => {
        let obj = {};
        Reflect.defineMetadata("key1", "value", obj, "name");
        Reflect.defineMetadata("key0", "value", obj, "name");
        Reflect.defineMetadata("key1", "value", obj, "name");
        let result = Reflect.getOwnMetadataKeys(obj, "name");
        expect(result).toEqual(["key1", "key0"]);
    });
});

// 4.1.7 Reflect.getOwnMetadata ( metadataKey, target [, propertyKey] )
// https://rbuckton.github.io/reflect-metadata/#reflect.getownmetadata
describe("Reflect.getOwnMetadata", () => {
    it("InvalidTarget", () => {
        // @ts-expect-error
        expect(() => Reflect.getOwnMetadata("key", undefined, undefined)).toThrow(TypeError);
    });

    it("WithoutTargetKeyWhenNotDefined", () => {
        let obj = {};
        let result = Reflect.getOwnMetadata("key", obj);
        expect(result).toBe(undefined);
    });

    it("WithoutTargetKeyWhenDefined", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj);
        let result = Reflect.getOwnMetadata("key", obj);
        expect(result).toBe("value");
    });

    it("WithoutTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key", "value", prototype);
        let result = Reflect.getOwnMetadata("key", obj);
        expect(result).toBe(undefined);
    });

    it("WithTargetKeyWhenNotDefined", () => {
        let obj = {};
        let result = Reflect.getOwnMetadata("key", obj, "name");
        expect(result).toBe(undefined);
    });

    it("WithTargetKeyWhenDefined", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj, "name");
        let result = Reflect.getOwnMetadata("key", obj, "name");
        expect(result).toBe("value");
    });

    it("WithTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key", "value", prototype, "name");
        let result = Reflect.getOwnMetadata("key", obj, "name");
        expect(result).toBe(undefined);
    });
});

// 4.1.4 Reflect.hasMetadata ( metadataKey, target [, propertyKey] )
// https://rbuckton.github.io/reflect-metadata/#reflect.hasmetadata
describe("Reflect.hasMetadata", () => {
    it("InvalidTarget", () => {
        // @ts-expect-error
        expect(() => Reflect.hasMetadata("key", undefined)).toThrow(TypeError);
    });

    it("WithoutTargetKeyWhenNotDefined", () => {
        let obj = {};
        let result = Reflect.hasMetadata("key", obj);
        expect(result).toBe(false);
    });

    it("WithoutTargetKeyWhenDefined", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj);
        let result = Reflect.hasMetadata("key", obj);
        expect(result).toBe(true);
    });

    it("WithoutTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key", "value", prototype);
        let result = Reflect.hasMetadata("key", obj);
        expect(result).toBe(true);
    });

    it("WithTargetKeyWhenNotDefined", () => {
        let obj = {};
        let result = Reflect.hasMetadata("key", obj, "name");
        expect(result).toBe(false);
    });

    it("WithTargetKeyWhenDefined", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj, "name");
        let result = Reflect.hasMetadata("key", obj, "name");
        expect(result).toBe(true);
    });

    it("WithTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key", "value", prototype, "name");
        let result = Reflect.hasMetadata("key", obj, "name");
        expect(result).toBe(true);
    });
});

// 4.1.5 Reflect.hasOwnMetadata ( metadataKey, target [, propertyKey] )
// https://rbuckton.github.io/reflect-metadata/#reflect.hasownmetadata
describe("Reflect.hasOwnMetadata", () => {
    it("InvalidTarget", () => {
        // @ts-expect-error
        expect(() => Reflect.hasOwnMetadata("key", undefined, undefined)).toThrow(TypeError);
    });

    it("WithoutTargetKeyWhenNotDefined", () => {
        let obj = {};
        let result = Reflect.hasOwnMetadata("key", obj);
        expect(result).toBe(false);
    });

    it("WithoutTargetKeyWhenDefined", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj);
        let result = Reflect.hasOwnMetadata("key", obj);
        expect(result).toBe(true);
    });

    it("WithoutTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key", "value", prototype);
        let result = Reflect.hasOwnMetadata("key", obj);
        expect(result).toBe(false);
    });

    it("WithTargetKeyWhenNotDefined", () => {
        let obj = {};
        let result = Reflect.hasOwnMetadata("key", obj, "name");
        expect(result).toBe(false);
    });

    it("WithTargetKeyWhenDefined", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj, "name");
        let result = Reflect.hasOwnMetadata("key", obj, "name");
        expect(result).toBe(true);
    });

    it("WithTargetKeyWhenDefinedOnPrototype", () => {
        let prototype = {};
        let obj = Object.create(prototype);
        Reflect.defineMetadata("key", "value", prototype, "name");
        let result = Reflect.hasOwnMetadata("key", obj, "name");
        expect(result).toBe(false);
    });
});

// 4.1.2 Reflect.metadata ( metadataKey, metadataValue )
// https://rbuckton.github.io/reflect-metadata/#reflect.metadata
describe("Reflect.metadata", () => {
    it("ReturnsDecoratorFunction", () => {
        let result = Reflect.metadata("key", "value");
        expect(typeof result).toBe("function");
    });

    it("DecoratorThrowsWithInvalidTargetWithTargetKey", () => {
        let decorator = Reflect.metadata("key", "value");
        // @ts-expect-error
        expect(() => decorator(undefined, "name")).toThrow(TypeError);;
    });

    it("DecoratorThrowsWithInvalidTargetKey", () => {
        let decorator = Reflect.metadata("key", "value");
        expect(() => decorator({}, <any>{})).toThrow(TypeError);
    });

    it("OnTargetWithoutTargetKey", () => {
        let decorator = Reflect.metadata("key", "value");
        let target = function () {}
        decorator(target);

        let result = Reflect.hasOwnMetadata("key", target);
        expect(result).toBe(true);
    });

    it("OnTargetWithTargetKey", () => {
        let decorator = Reflect.metadata("key", "value");
        let target = {}
        decorator(target, "name");

        let result = Reflect.hasOwnMetadata("key", target, "name");
        expect(result).toBe(true);
    });
});
