```
warning ../../package.json: No license field
PASS ./Reflect.spec.ts
  Reflect.decorate
    ✓ ThrowsIfDecoratorsArgumentNotArrayForFunctionOverload (61 ms)
    ✓ ThrowsIfTargetArgumentNotFunctionForFunctionOverload (1 ms)
    ✓ ThrowsIfDecoratorsArgumentNotArrayForPropertyOverload (1 ms)
    ✓ ThrowsIfTargetArgumentNotObjectForPropertyOverload (1 ms)
    ✓ ThrowsIfDecoratorsArgumentNotArrayForPropertyDescriptorOverload (1 ms)
    ✓ ThrowsIfTargetArgumentNotObjectForPropertyDescriptorOverload (1 ms)
    ✓ ExecutesDecoratorsInReverseOrderForFunctionOverload (2 ms)
    ✓ ExecutesDecoratorsInReverseOrderForPropertyOverload (1 ms)
    ✓ ExecutesDecoratorsInReverseOrderForPropertyDescriptorOverload
    ✓ DecoratorPipelineForFunctionOverload
    ✓ DecoratorPipelineForPropertyOverload (1 ms)
    ✓ DecoratorPipelineForPropertyDescriptorOverload (1 ms)
    ✓ DecoratorCorrectTargetInPipelineForFunctionOverload
    ✓ DecoratorCorrectTargetInPipelineForPropertyOverload
    ✓ DecoratorCorrectNameInPipelineForPropertyOverload (1 ms)
    ✓ DecoratorCorrectTargetInPipelineForPropertyDescriptorOverload (1 ms)
    ✓ DecoratorCorrectNameInPipelineForPropertyDescriptorOverload (1 ms)
    ✓ DecoratorCorrectDescriptorInPipelineForPropertyDescriptorOverload
  Reflect.defineMetadata
    ✓ InvalidTarget (1 ms)
    ✓ ValidTargetWithoutTargetKey (1 ms)
    ✓ ValidTargetWithTargetKey
  Reflect.deleteMetadata
    ○ skipped InvalidTarget
    ○ skipped WhenNotDefinedWithoutTargetKey
    ○ skipped WhenDefinedWithoutTargetKey
    ○ skipped WhenDefinedOnPrototypeWithoutTargetKey
    ○ skipped AfterDeleteMetadata
    ○ skipped KeysKeysInvalidTarget
    ○ skipped KeysWithoutTargetKeyWhenNotDefined
    ○ skipped KeysWithoutTargetKeyWhenDefined
    ○ skipped KeysWithoutTargetKeyWhenDefinedOnPrototype
    ○ skipped KeysOrderWithoutTargetKey
    ○ skipped KeysOrderAfterRedefineWithoutTargetKey
    ○ skipped KeysWithTargetKeyWhenNotDefined
    ○ skipped KeysWithTargetKeyWhenDefined
    ○ skipped KeysWithTargetKeyWhenDefinedOnPrototype
    ○ skipped KeysOrderAfterRedefineWithTargetKey
  Reflect.getMetadataKeys
    ○ skipped KeysInvalidTarget
    ○ skipped KeysWithoutTargetKeyWhenNotDefined
    ○ skipped KeysWithoutTargetKeyWhenDefined
    ○ skipped KeysWithoutTargetKeyWhenDefinedOnPrototype
    ○ skipped KeysOrderWithoutTargetKey
    ○ skipped KeysOrderAfterRedefineWithoutTargetKey
    ○ skipped KeysOrderWithoutTargetKeyWhenDefinedOnPrototype
    ○ skipped KeysWithTargetKeyWhenNotDefined
    ○ skipped KeysWithTargetKeyWhenDefined
    ○ skipped KeysWithTargetKeyWhenDefinedOnPrototype
    ○ skipped KeysOrderAfterRedefineWithTargetKey
    ○ skipped KeysOrderWithTargetKeyWhenDefinedOnPrototype
  Reflect.getMetadata
    ✓ InvalidTarget (1 ms)
    ✓ WithoutTargetKeyWhenNotDefined
    ✓ WithoutTargetKeyWhenDefined (1 ms)
    ✓ WithoutTargetKeyWhenDefinedOnPrototype
    ✓ WithTargetKeyWhenNotDefined (1 ms)
    ✓ WithTargetKeyWhenDefined
    ✓ WithTargetKeyWhenDefinedOnPrototype (1 ms)
  Reflect.getOwnMetadata
    ✓ InvalidTarget (1 ms)
    ✓ WithoutTargetKeyWhenNotDefined
    ✓ WithoutTargetKeyWhenDefined (1 ms)
    ✓ WithoutTargetKeyWhenDefinedOnPrototype
    ✓ WithTargetKeyWhenNotDefined (1 ms)
    ✓ WithTargetKeyWhenDefined
    ✓ WithTargetKeyWhenDefinedOnPrototype
  Reflect.hasMetadata
    ✓ InvalidTarget (1 ms)
    ✓ WithoutTargetKeyWhenNotDefined
    ✓ WithoutTargetKeyWhenDefined (1 ms)
    ✓ WithoutTargetKeyWhenDefinedOnPrototype
    ✓ WithTargetKeyWhenNotDefined
    ✓ WithTargetKeyWhenDefined
    ✓ WithTargetKeyWhenDefinedOnPrototype
  Reflect.hasOwnMetadata
    ✓ InvalidTarget (1 ms)
    ✓ WithoutTargetKeyWhenNotDefined
    ✓ WithoutTargetKeyWhenDefined (1 ms)
    ✓ WithoutTargetKeyWhenDefinedOnPrototype
    ✓ WithTargetKeyWhenNotDefined
    ✓ WithTargetKeyWhenDefined (1 ms)
    ✓ WithTargetKeyWhenDefinedOnPrototype
  Reflect.metadata
    ✓ ReturnsDecoratorFunction
    ✓ DecoratorThrowsWithInvalidTargetWithTargetKey
    ✓ DecoratorThrowsWithInvalidTargetKey (1 ms)
    ✓ OnTargetWithoutTargetKey (1 ms)
    ✓ OnTargetWithTargetKey

Test Suites: 1 passed, 1 total
Tests:       27 skipped, 54 passed, 81 total
Snapshots:   0 total
Time:        1.745 s, estimated 2 s
Ran all test suites.
```
