[@indykiteone/jarvis-sdk-node](../README.md) / [Exports](../modules.md) / DeleteDigitalTwinRequest

# Interface: DeleteDigitalTwinRequest

**`Generated`**

from protobuf message indykite.identity.v1beta1.DeleteDigitalTwinRequest

## Table of contents

### Properties

- [adminToken](DeleteDigitalTwinRequest.md#admintoken)
- [id](DeleteDigitalTwinRequest.md#id)

## Properties

### adminToken

• **adminToken**: `string`

AdminToken must be set when id contains only the DigitalTwin.

**`Generated`**

from protobuf field: string admin_token = 2;

#### Defined in

[grpc/indykite/identity/v1beta1/identity_management_api.ts:348](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L348)

___

### id

• `Optional` **id**: `DigitalTwinIdentifier`

**`Generated`**

from protobuf field: indykite.identity.v1beta1.DigitalTwinIdentifier id = 1;

#### Defined in

[grpc/indykite/identity/v1beta1/identity_management_api.ts:342](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L342)
