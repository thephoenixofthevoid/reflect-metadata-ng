# reflect-metadata-ng
Full-featured "reflect-metadata" remastered for modern environments. 

- Tests and original implementation taken from https://github.com/rbuckton/reflect-metadata
- Tests have been carefully preserved (and merged into single file). 
- No test broke on modern envirimnent after remastering.
- Similar to https://github.com/abraham/reflection but implements FULL API

|    API \ package      |  reflection   | RM          | RM-NG       |
|-----------------------|-------------- |-------------|-------------|
|    decorate           |  IMPLEMENTED  | IMPLEMENTED | IMPLEMENTED |
|    defineMetadata     |  IMPLEMENTED  | IMPLEMENTED | IMPLEMENTED |
|    getMetadata        |  IMPLEMENTED  | IMPLEMENTED | IMPLEMENTED |
|    hasMetadata        |  IMPLEMENTED  | IMPLEMENTED | IMPLEMENTED |
|    getOwnMetadata     |  IMPLEMENTED  | IMPLEMENTED | IMPLEMENTED |
|    hasOwnMetadata     |  IMPLEMENTED  | IMPLEMENTED | IMPLEMENTED |
|    metadata           |  IMPLEMENTED  | IMPLEMENTED | IMPLEMENTED |
|    deleteMetadata     |    MISSING    | IMPLEMENTED | IMPLEMENTED |
|    getMetadataKeys    |    MISSING    | IMPLEMENTED | IMPLEMENTED |
|    getOwnMetadataKeys |    MISSING    | IMPLEMENTED | IMPLEMENTED |
|                       |               |             |             
|    js filesize, KB    |   3K          | 50K         | 11K         |

## Usage

Just import the same way you would original package
