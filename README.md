# reflect-metadata-ng
Full-featured "reflect-metadata" remastered for modern environments with preserved relevant comments, tsdocs and tests.

Compare for yourself:
```
https://github.com/rbuckton/reflect-metadata/blob/master/Reflect.ts
https://github.com/thephoenixofthevoid/reflect-metadata-ng/blob/master/Reflect.ts
```

## Features

- Full-featured "reflect-metadata" remastered for modern environments. 
- Tests and original implementation taken from https://github.com/rbuckton/reflect-metadata
- Tests have been carefully preserved (and merged into single file). 
- No test broke on modern envirimnent after remastering.
- Similar to https://github.com/abraham/reflection but implements FULL API

## Usage

```typescript
// Before: once at the very start of an application
import "reflect-metadata";

// Simply replace it with
import "./Reflect.ts";

// Well-dine!
```

## Spec-complient

```jest
 PASS  ./Reflect.spec.ts
  Reflect.decorate
    ✓ ThrowsIfDecoratorsArgumentNotArrayForFunctionOverload (83 ms)
    ✓ ThrowsIfTargetArgumentNotFunctionForFunctionOverload (1 ms)
    ✓ ThrowsIfDecoratorsArgumentNotArrayForPropertyOverload (1 ms)
    ✓ ThrowsIfTargetArgumentNotObjectForPropertyOverload (1 ms)
    ✓ ThrowsIfDecoratorsArgumentNotArrayForPropertyDescriptorOverload (2 ms)
    ✓ ThrowsIfTargetArgumentNotObjectForPropertyDescriptorOverload (1 ms)
    ✓ ExecutesDecoratorsInReverseOrderForFunctionOverload (1 ms)
    ✓ ExecutesDecoratorsInReverseOrderForPropertyOverload (1 ms)
    ✓ ExecutesDecoratorsInReverseOrderForPropertyDescriptorOverload (1 ms)
    ✓ DecoratorPipelineForFunctionOverload (1 ms)
    ✓ DecoratorPipelineForPropertyOverload
    ✓ DecoratorPipelineForPropertyDescriptorOverload (1 ms)
    ✓ DecoratorCorrectTargetInPipelineForFunctionOverload
    ✓ DecoratorCorrectTargetInPipelineForPropertyOverload (1 ms)
    ✓ DecoratorCorrectNameInPipelineForPropertyOverload
    ✓ DecoratorCorrectTargetInPipelineForPropertyDescriptorOverload
    ✓ DecoratorCorrectNameInPipelineForPropertyDescriptorOverload (1 ms)
    ✓ DecoratorCorrectDescriptorInPipelineForPropertyDescriptorOverload
  Reflect.defineMetadata
    ✓ InvalidTarget
    ✓ ValidTargetWithoutTargetKey (1 ms)
    ✓ ValidTargetWithTargetKey (1 ms)
  Reflect.deleteMetadata
    ✓ InvalidTarget (1 ms)
    ✓ WhenNotDefinedWithoutTargetKey (1 ms)
    ✓ WhenDefinedWithoutTargetKey (1 ms)
    ✓ WhenDefinedOnPrototypeWithoutTargetKey (1 ms)
    ✓ AfterDeleteMetadata (1 ms)
    ✓ KeysKeysInvalidTarget (1 ms)
    ✓ KeysWithoutTargetKeyWhenNotDefined (1 ms)
    ✓ KeysWithoutTargetKeyWhenDefined
    ✓ KeysWithoutTargetKeyWhenDefinedOnPrototype (1 ms)
    ✓ KeysOrderWithoutTargetKey (1 ms)
    ✓ KeysOrderAfterRedefineWithoutTargetKey (1 ms)
    ✓ KeysWithTargetKeyWhenNotDefined (1 ms)
    ✓ KeysWithTargetKeyWhenDefined (1 ms)
    ✓ KeysWithTargetKeyWhenDefinedOnPrototype (1 ms)
    ✓ KeysOrderAfterRedefineWithTargetKey (1 ms)
  Reflect.getMetadataKeys
    ✓ KeysInvalidTarget (1 ms)
    ✓ KeysWithoutTargetKeyWhenNotDefined (1 ms)
    ✓ KeysWithoutTargetKeyWhenDefined
    ✓ KeysWithoutTargetKeyWhenDefinedOnPrototype
    ✓ KeysOrderWithoutTargetKey
    ✓ KeysOrderAfterRedefineWithoutTargetKey (1 ms)
    ✓ KeysOrderWithoutTargetKeyWhenDefinedOnPrototype
    ✓ KeysWithTargetKeyWhenNotDefined (1 ms)
    ✓ KeysWithTargetKeyWhenDefined
    ✓ KeysWithTargetKeyWhenDefinedOnPrototype
    ✓ KeysOrderAfterRedefineWithTargetKey (1 ms)
    ✓ KeysOrderWithTargetKeyWhenDefinedOnPrototype
  Reflect.getMetadata
    ✓ InvalidTarget (1 ms)
    ✓ WithoutTargetKeyWhenNotDefined (1 ms)
    ✓ WithoutTargetKeyWhenDefined
    ✓ WithoutTargetKeyWhenDefinedOnPrototype
    ✓ WithTargetKeyWhenNotDefined (5 ms)
    ✓ WithTargetKeyWhenDefined (1 ms)
    ✓ WithTargetKeyWhenDefinedOnPrototype
  Reflect.getOwnMetadata
    ✓ InvalidTarget (2 ms)
    ✓ WithoutTargetKeyWhenNotDefined (1 ms)
    ✓ WithoutTargetKeyWhenDefined (1 ms)
    ✓ WithoutTargetKeyWhenDefinedOnPrototype (1 ms)
    ✓ WithTargetKeyWhenNotDefined (1 ms)
    ✓ WithTargetKeyWhenDefined (1 ms)
    ✓ WithTargetKeyWhenDefinedOnPrototype
  Reflect.hasMetadata
    ✓ InvalidTarget (2 ms)
    ✓ WithoutTargetKeyWhenNotDefined (1 ms)
    ✓ WithoutTargetKeyWhenDefined (1 ms)
    ✓ WithoutTargetKeyWhenDefinedOnPrototype (1 ms)
    ✓ WithTargetKeyWhenNotDefined (1 ms)
    ✓ WithTargetKeyWhenDefined (1 ms)
    ✓ WithTargetKeyWhenDefinedOnPrototype (1 ms)
  Reflect.hasOwnMetadata
    ✓ InvalidTarget (1 ms)
    ✓ WithoutTargetKeyWhenNotDefined
    ✓ WithoutTargetKeyWhenDefined (1 ms)
    ✓ WithoutTargetKeyWhenDefinedOnPrototype (1 ms)
    ✓ WithTargetKeyWhenNotDefined (1 ms)
    ✓ WithTargetKeyWhenDefined
    ✓ WithTargetKeyWhenDefinedOnPrototype (1 ms)
  Reflect.metadata
    ✓ ReturnsDecoratorFunction (1 ms)
    ✓ DecoratorThrowsWithInvalidTargetWithTargetKey (8 ms)
    ✓ DecoratorThrowsWithInvalidTargetKey (1 ms)
    ✓ OnTargetWithoutTargetKey
    ✓ OnTargetWithTargetKey

Test Suites: 1 passed, 1 total
Tests:       81 passed, 81 total
Snapshots:   0 total
Time:        2.83 s
Ran all test suites.
Done in 4.16s.
```

## Comparation with alternatives

|    API \ package      | reflection  | RM          | RM-NG       |
|-----------------------|-------------|-------------|-------------|
|    decorate           | IMPLEMENTED | IMPLEMENTED | IMPLEMENTED |
|    defineMetadata     | IMPLEMENTED | IMPLEMENTED | IMPLEMENTED |
|    getMetadata        | IMPLEMENTED | IMPLEMENTED | IMPLEMENTED |
|    hasMetadata        | IMPLEMENTED | IMPLEMENTED | IMPLEMENTED |
|    getOwnMetadata     | IMPLEMENTED | IMPLEMENTED | IMPLEMENTED |
|    hasOwnMetadata     | IMPLEMENTED | IMPLEMENTED | IMPLEMENTED |
|    metadata           | IMPLEMENTED | IMPLEMENTED | IMPLEMENTED |
|    deleteMetadata     |   MISSING   | IMPLEMENTED | IMPLEMENTED |
|    getMetadataKeys    |   MISSING   | IMPLEMENTED | IMPLEMENTED |
|    getOwnMetadataKeys |   MISSING   | IMPLEMENTED | IMPLEMENTED |
|                       |             |             |             |
|    js filesize, KB    |  3K         | 50K         | 11K         |
|    Old Runtimes       |  NO         | YES         | NO          |
|    NEW Runtimes       |  YES        | YES         | YES         |


## Usage

Just import the same way you would original package
