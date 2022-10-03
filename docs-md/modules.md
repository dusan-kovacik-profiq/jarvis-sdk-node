[@indykiteone/jarvis-sdk-node](README.md) / Exports

# @indykiteone/jarvis-sdk-node

## Table of contents

### Enumerations

- [ClientSubjectType](enums/ClientSubjectType.md)
- [DigitalTwinKind](enums/DigitalTwinKind.md)
- [DigitalTwinState](enums/DigitalTwinState.md)
- [GrantType](enums/GrantType.md)
- [InvitationState](enums/InvitationState.md)
- [OAuth2AuthStyle](enums/OAuth2AuthStyle.md)
- [OAuth2ProviderType](enums/OAuth2ProviderType.md)
- [ResponseType](enums/ResponseType.md)
- [TokenEndpointAuthMethod](enums/TokenEndpointAuthMethod.md)

### Ingest Classes

- [IngestResult](classes/IngestResult.md)
- [IngestResultError](classes/IngestResultError.md)
- [IngestResults](classes/IngestResults.md)

### Other Classes

- [Application](classes/Application.md)
- [ApplicationAgent](classes/ApplicationAgent.md)
- [ApplicationAgentCredential](classes/ApplicationAgentCredential.md)
- [ApplicationSpace](classes/ApplicationSpace.md)
- [AuthorizationDecisions](classes/AuthorizationDecisions.md)
- [ConfigClient](classes/ConfigClient.md)
- [ConfigurationFactory](classes/ConfigurationFactory.md)
- [ConsentChallenge](classes/ConsentChallenge.md)
- [Customer](classes/Customer.md)
- [DigitalTwin](classes/DigitalTwin.md)
- [DigitalTwinCore](classes/DigitalTwinCore.md)
- [EmailMessage](classes/EmailMessage.md)
- [HashAlgorithm](classes/HashAlgorithm.md)
- [HashAlgorithmFactory](classes/HashAlgorithmFactory.md)
- [IdentityClient](classes/IdentityClient.md)
- [ImportDigitalTwin](classes/ImportDigitalTwin.md)
- [ImportResult](classes/ImportResult.md)
- [ImportResultError](classes/ImportResultError.md)
- [ImportResultSuccess](classes/ImportResultSuccess.md)
- [IngestResultSuccess](classes/IngestResultSuccess.md)
- [Invitation](classes/Invitation.md)
- [NodeConfiguration](classes/NodeConfiguration.md)
- [OAuth2Application](classes/OAuth2Application.md)
- [OAuth2ApplicationConfig](classes/OAuth2ApplicationConfig.md)
- [OAuth2Client](classes/OAuth2Client.md)
- [OAuth2ClientFactory](classes/OAuth2ClientFactory.md)
- [OAuth2Provider](classes/OAuth2Provider.md)
- [OAuth2ProviderConfig](classes/OAuth2ProviderConfig.md)
- [PatchPropertiesBuilder](classes/PatchPropertiesBuilder.md)
- [PatchResult](classes/PatchResult.md)
- [Property](classes/Property.md)
- [PropertyMetaData](classes/PropertyMetaData.md)
- [ProviderInfo](classes/ProviderInfo.md)
- [SendgridEmailProvider](classes/SendgridEmailProvider.md)
- [Tenant](classes/Tenant.md)
- [TokenInfo](classes/TokenInfo.md)

### Ingest Ingest

- [IngestClient](classes/IngestClient.md)

### Interfaces

- [ChangePasswordRequest](interfaces/ChangePasswordRequest.md)
- [ConsentApproval](interfaces/ConsentApproval.md)
- [ConsentChallengeAudience](interfaces/ConsentChallengeAudience.md)
- [ConsentChallengeDenial](interfaces/ConsentChallengeDenial.md)
- [ConsentChallengeScope](interfaces/ConsentChallengeScope.md)
- [ConsentRequestSessionData](interfaces/ConsentRequestSessionData.md)
- [Decisions](interfaces/Decisions.md)
- [DeleteDigitalTwinRequest](interfaces/DeleteDigitalTwinRequest.md)
- [Email](interfaces/Email.md)
- [ImportProperties](interfaces/ImportProperties.md)
- [Mobile](interfaces/Mobile.md)
- [PasswordCredential](interfaces/PasswordCredential.md)
- [PasswordHash](interfaces/PasswordHash.md)
- [PropertyOperation](interfaces/PropertyOperation.md)
- [Resources](interfaces/Resources.md)
- [StartDigitalTwinEmailVerificationRequest](interfaces/StartDigitalTwinEmailVerificationRequest.md)
- [StartDigitalTwinEmailVerificationResponse](interfaces/StartDigitalTwinEmailVerificationResponse.md)
- [StartForgottenPasswordFlowRequest](interfaces/StartForgottenPasswordFlowRequest.md)
- [StartForgottenPasswordFlowResponse](interfaces/StartForgottenPasswordFlowResponse.md)
- [UserProvider](interfaces/UserProvider.md)
- [VerifyDigitalTwinEmailRequest](interfaces/VerifyDigitalTwinEmailRequest.md)

### Type Aliases

- [ConfigurationType](modules.md#configurationtype)
- [EmailProviderType](modules.md#emailprovidertype)
- [IOAuth2ApplicationConfigOptions](modules.md#ioauth2applicationconfigoptions)
- [IOAuth2ClientConfigOptions](modules.md#ioauth2clientconfigoptions)
- [IOAuth2ProviderConfigOptions](modules.md#ioauth2providerconfigoptions)
- [PatchResultStatus](modules.md#patchresultstatus)
- [ProviderType](modules.md#providertype)

### Variables

- [ChangePasswordRequest](modules.md#changepasswordrequest)
- [DeleteDigitalTwinRequest](modules.md#deletedigitaltwinrequest)
- [StartDigitalTwinEmailVerificationRequest](modules.md#startdigitaltwinemailverificationrequest)
- [StartDigitalTwinEmailVerificationResponse](modules.md#startdigitaltwinemailverificationresponse)
- [StartForgottenPasswordFlowRequest](modules.md#startforgottenpasswordflowrequest)
- [StartForgottenPasswordFlowResponse](modules.md#startforgottenpasswordflowresponse)
- [VerifyDigitalTwinEmailRequest](modules.md#verifydigitaltwinemailrequest)

## Type Aliases

### ConfigurationType

Ƭ **ConfigurationType**: [`EmailProviderType`](modules.md#emailprovidertype) \| `AuthFlow` \| [`OAuth2Client`](classes/OAuth2Client.md)

#### Defined in

[sdk/model/config/factory.ts:11](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/factory.ts#L11)

___

### EmailProviderType

Ƭ **EmailProviderType**: [`SendgridEmailProvider`](classes/SendgridEmailProvider.md)

#### Defined in

[sdk/model/config/email/factory.ts:8](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/email/factory.ts#L8)

___

### IOAuth2ApplicationConfigOptions

Ƭ **IOAuth2ApplicationConfigOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `additionalContacts?` | `string`[] |
| `allowedCorsOrigins?` | `string`[] |
| `audiences?` | `string`[] |
| `clientId` | `string` |
| `clientSecret?` | `string` |
| `clientUri` | `string` |
| `description?` | `string` |
| `displayName` | `string` |
| `grantTypes?` | [`GrantType`](enums/GrantType.md)[] |
| `logoUri` | `string` |
| `owner` | `string` |
| `policyUri` | `string` |
| `redirectUris` | `string`[] |
| `responseTypes?` | [`ResponseType`](enums/ResponseType.md)[] |
| `scopes` | `string`[] |
| `sectorIdentifierUri?` | `string` |
| `subjectType` | [`ClientSubjectType`](enums/ClientSubjectType.md) |
| `termsOfServiceUri` | `string` |
| `tokenEndpointAuthMethod` | [`TokenEndpointAuthMethod`](enums/TokenEndpointAuthMethod.md) |
| `tokenEndpointAuthSigningAlg` | `string` |
| `userSupportEmailAddress` | `string` |
| `userinfoSignedResponseAlg?` | `string` |

#### Defined in

[sdk/model/config/oauth2_application_config.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_application_config.ts#L10)

___

### IOAuth2ClientConfigOptions

Ƭ **IOAuth2ClientConfigOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowSignup` | `boolean` |
| `allowedScopes` | `string`[] |
| `authStyle` | [`OAuth2AuthStyle`](enums/OAuth2AuthStyle.md) |
| `authorizationEndpoint` | `string` |
| `clientId` | `string` |
| `clientSecret` | `string` |
| `defaultScopes` | `string`[] |
| `description?` | `string` |
| `discoveryUrl` | `string` |
| `displayName?` | `string` |
| `hostedDomain` | `string` |
| `imageUrl` | `string` |
| `issuer` | `string` |
| `jwksUri` | `string` |
| `name` | `string` |
| `privateKeyId?` | `string` |
| `privateKeyPem?` | `Buffer` |
| `providerType` | [`OAuth2ProviderType`](enums/OAuth2ProviderType.md) |
| `redirectUri` | `string`[] |
| `teamId?` | `string` |
| `tenant` | `string` |
| `tokenEndpoint` | `string` |
| `userinfoEndpoint` | `string` |

#### Defined in

[sdk/model/config/oauth2_client/oauth2_client.ts:10](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_client/oauth2_client.ts#L10)

___

### IOAuth2ProviderConfigOptions

Ƭ **IOAuth2ProviderConfigOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `frontChannelConsentUri` | `Record`<`string`, `string`\> |
| `frontChannelLoginUri` | `Record`<`string`, `string`\> |
| `grantTypes` | [`GrantType`](enums/GrantType.md)[] |
| `requestObjectSigningAlg?` | `string` |
| `requestUris?` | `string`[] |
| `responseTypes` | [`ResponseType`](enums/ResponseType.md)[] |
| `scopes` | `string`[] |
| `tokenEndpointAuthMethod` | [`TokenEndpointAuthMethod`](enums/TokenEndpointAuthMethod.md)[] |
| `tokenEndpointAuthSigningAlg` | `string`[] |

#### Defined in

[sdk/model/config/oauth2_provider_config.ts:9](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/config/oauth2_provider_config.ts#L9)

___

### PatchResultStatus

Ƭ **PatchResultStatus**: ``"success"`` \| ``"error"``

#### Defined in

[sdk/model/property.ts:271](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/property.ts#L271)

___

### ProviderType

Ƭ **ProviderType**: ``"password"`` \| ``"oidc"`` \| ``"webauthn"`` \| ``"email"`` \| ``"sms"`` \| ``"invalid"`` \| ``"unrecognized"``

#### Defined in

[sdk/model/token.ts:7](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/sdk/model/token.ts#L7)

## Variables

### ChangePasswordRequest

• **ChangePasswordRequest**: `ChangePasswordRequest$Type`

**`Generated`**

MessageType for protobuf message indykite.identity.v1beta1.ChangePasswordRequest

#### Defined in

[grpc/indykite/identity/v1beta1/identity_management_api.ts:96](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L96)

[grpc/indykite/identity/v1beta1/identity_management_api.ts:1582](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L1582)

___

### DeleteDigitalTwinRequest

• **DeleteDigitalTwinRequest**: `DeleteDigitalTwinRequest$Type`

**`Generated`**

MessageType for protobuf message indykite.identity.v1beta1.DeleteDigitalTwinRequest

#### Defined in

[grpc/indykite/identity/v1beta1/identity_management_api.ts:338](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L338)

[grpc/indykite/identity/v1beta1/identity_management_api.ts:2366](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L2366)

___

### StartDigitalTwinEmailVerificationRequest

• **StartDigitalTwinEmailVerificationRequest**: `StartDigitalTwinEmailVerificationRequest$Type`

**`Generated`**

MessageType for protobuf message indykite.identity.v1beta1.StartDigitalTwinEmailVerificationRequest

#### Defined in

[grpc/indykite/identity/v1beta1/identity_management_api.ts:136](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L136)

[grpc/indykite/identity/v1beta1/identity_management_api.ts:1690](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L1690)

___

### StartDigitalTwinEmailVerificationResponse

• **StartDigitalTwinEmailVerificationResponse**: `StartDigitalTwinEmailVerificationResponse$Type`

**`Generated`**

MessageType for protobuf message indykite.identity.v1beta1.StartDigitalTwinEmailVerificationResponse

#### Defined in

[grpc/indykite/identity/v1beta1/identity_management_api.ts:153](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L153)

[grpc/indykite/identity/v1beta1/identity_management_api.ts:1716](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L1716)

___

### StartForgottenPasswordFlowRequest

• **StartForgottenPasswordFlowRequest**: `StartForgottenPasswordFlowRequest$Type`

**`Generated`**

MessageType for protobuf message indykite.identity.v1beta1.StartForgottenPasswordFlowRequest

#### Defined in

[grpc/indykite/identity/v1beta1/identity_management_api.ts:82](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L82)

[grpc/indykite/identity/v1beta1/identity_management_api.ts:1482](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L1482)

___

### StartForgottenPasswordFlowResponse

• **StartForgottenPasswordFlowResponse**: `StartForgottenPasswordFlowResponse$Type`

**`Generated`**

MessageType for protobuf message indykite.identity.v1beta1.StartForgottenPasswordFlowResponse

#### Defined in

[grpc/indykite/identity/v1beta1/identity_management_api.ts:91](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L91)

[grpc/indykite/identity/v1beta1/identity_management_api.ts:1508](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L1508)

___

### VerifyDigitalTwinEmailRequest

• **VerifyDigitalTwinEmailRequest**: `VerifyDigitalTwinEmailRequest$Type`

**`Generated`**

MessageType for protobuf message indykite.identity.v1beta1.VerifyDigitalTwinEmailRequest

#### Defined in

[grpc/indykite/identity/v1beta1/identity_management_api.ts:158](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L158)

[grpc/indykite/identity/v1beta1/identity_management_api.ts:1763](https://github.com/indykite/jarvis-sdk-node/blob/438b790/jarvis_sdk_node/src/grpc/indykite/identity/v1beta1/identity_management_api.ts#L1763)
