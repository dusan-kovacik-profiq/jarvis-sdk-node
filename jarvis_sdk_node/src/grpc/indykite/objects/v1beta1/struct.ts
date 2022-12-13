// @generated by protobuf-ts 2.4.0 with parameter long_type_string,client_grpc1,generate_dependencies,// @generated from protobuf file "indykite/objects/v1beta1/struct.proto" (package "indykite.objects.v1beta1", syntax proto3),// tslint:disable
//
// Copyright (c) 2020 IndyKite
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { LatLng } from "../../../google/type/latlng";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { NullValue } from "../../../google/protobuf/struct";
/**
 * A message that can hold any of the supported value types.
 *
 * @generated from protobuf message indykite.objects.v1beta1.Value
 */
export interface Value {
    /**
     * @generated from protobuf oneof: value
     */
    value: {
        oneofKind: "nullValue";
        /**
         * A null value.
         *
         * @generated from protobuf field: google.protobuf.NullValue null_value = 1;
         */
        nullValue: NullValue;
    } | {
        oneofKind: "boolValue";
        /**
         * A boolean value.
         *
         * @generated from protobuf field: bool bool_value = 2;
         */
        boolValue: boolean;
    } | {
        oneofKind: "integerValue";
        /**
         * An integer value.
         *
         * @generated from protobuf field: int64 integer_value = 3;
         */
        integerValue: string;
    } | {
        oneofKind: "unsignedIntegerValue";
        /**
         * An integer value.
         *
         * @generated from protobuf field: uint64 unsigned_integer_value = 14;
         */
        unsignedIntegerValue: string;
    } | {
        oneofKind: "doubleValue";
        /**
         * A double value.
         *
         * @generated from protobuf field: double double_value = 4;
         */
        doubleValue: number;
    } | {
        oneofKind: "anyValue";
        /**
         * An Any value.
         *
         * @generated from protobuf field: google.protobuf.Any any_value = 5;
         */
        anyValue: Any;
    } | {
        oneofKind: "valueTime";
        /**
         * A timestamp value.
         *
         * @generated from protobuf field: google.protobuf.Timestamp value_time = 6;
         */
        valueTime: Timestamp;
    } | {
        oneofKind: "durationValue";
        /**
         * A duration value.
         *
         * @generated from protobuf field: google.protobuf.Duration duration_value = 12;
         */
        durationValue: Duration;
    } | {
        oneofKind: "stringValue";
        // An identifier value. Keep here to know number 13 is reserved for Identifier.
        // However, we don't have proper type for Identifier yet.
        // Identifier identifier_value = 13;

        /**
         * A string value.
         *
         * @generated from protobuf field: string string_value = 7;
         */
        stringValue: string;
    } | {
        oneofKind: "bytesValue";
        /**
         * A bytes value.
         *
         * @generated from protobuf field: bytes bytes_value = 8;
         */
        bytesValue: Uint8Array;
    } | {
        oneofKind: "geoPointValue";
        /**
         * A geo point value representing a point on the surface of Earth.
         *
         * @generated from protobuf field: google.type.LatLng geo_point_value = 9;
         */
        geoPointValue: LatLng;
    } | {
        oneofKind: "arrayValue";
        /**
         * An array value.
         *
         * @generated from protobuf field: indykite.objects.v1beta1.ArrayValue array_value = 10;
         */
        arrayValue: ArrayValue;
    } | {
        oneofKind: "mapValue";
        /**
         * A map value.
         *
         * @generated from protobuf field: indykite.objects.v1beta1.MapValue map_value = 11;
         */
        mapValue: MapValue;
    } | {
        oneofKind: undefined;
    };
}
/**
 * An array value.
 *
 * @generated from protobuf message indykite.objects.v1beta1.ArrayValue
 */
export interface ArrayValue {
    /**
     * Values in the array.
     *
     * @generated from protobuf field: repeated indykite.objects.v1beta1.Value values = 1;
     */
    values: Value[];
}
/**
 * A map value.
 *
 * @generated from protobuf message indykite.objects.v1beta1.MapValue
 */
export interface MapValue {
    /**
     * The map's keys and values.
     *
     * @generated from protobuf field: map<string, indykite.objects.v1beta1.Value> fields = 1;
     */
    fields: {
        [key: string]: Value;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class Value$Type extends MessageType<Value> {
    constructor() {
        super("indykite.objects.v1beta1.Value", [
            { no: 1, name: "null_value", kind: "enum", oneof: "value", T: () => ["google.protobuf.NullValue", NullValue] },
            { no: 2, name: "bool_value", kind: "scalar", oneof: "value", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "integer_value", kind: "scalar", oneof: "value", T: 3 /*ScalarType.INT64*/ },
            { no: 14, name: "unsigned_integer_value", kind: "scalar", oneof: "value", T: 4 /*ScalarType.UINT64*/ },
            { no: 4, name: "double_value", kind: "scalar", oneof: "value", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 5, name: "any_value", kind: "message", oneof: "value", T: () => Any },
            { no: 6, name: "value_time", kind: "message", oneof: "value", T: () => Timestamp },
            { no: 12, name: "duration_value", kind: "message", oneof: "value", T: () => Duration },
            { no: 7, name: "string_value", kind: "scalar", oneof: "value", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "bytes_value", kind: "scalar", oneof: "value", T: 12 /*ScalarType.BYTES*/ },
            { no: 9, name: "geo_point_value", kind: "message", oneof: "value", T: () => LatLng },
            { no: 10, name: "array_value", kind: "message", oneof: "value", T: () => ArrayValue },
            { no: 11, name: "map_value", kind: "message", oneof: "value", T: () => MapValue }
        ]);
    }
    create(value?: PartialMessage<Value>): Value {
        const message = { value: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Value>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Value): Value {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.NullValue null_value */ 1:
                    message.value = {
                        oneofKind: "nullValue",
                        nullValue: reader.int32()
                    };
                    break;
                case /* bool bool_value */ 2:
                    message.value = {
                        oneofKind: "boolValue",
                        boolValue: reader.bool()
                    };
                    break;
                case /* int64 integer_value */ 3:
                    message.value = {
                        oneofKind: "integerValue",
                        integerValue: reader.int64().toString()
                    };
                    break;
                case /* uint64 unsigned_integer_value */ 14:
                    message.value = {
                        oneofKind: "unsignedIntegerValue",
                        unsignedIntegerValue: reader.uint64().toString()
                    };
                    break;
                case /* double double_value */ 4:
                    message.value = {
                        oneofKind: "doubleValue",
                        doubleValue: reader.double()
                    };
                    break;
                case /* google.protobuf.Any any_value */ 5:
                    message.value = {
                        oneofKind: "anyValue",
                        anyValue: Any.internalBinaryRead(reader, reader.uint32(), options, (message.value as any).anyValue)
                    };
                    break;
                case /* google.protobuf.Timestamp value_time */ 6:
                    message.value = {
                        oneofKind: "valueTime",
                        valueTime: Timestamp.internalBinaryRead(reader, reader.uint32(), options, (message.value as any).valueTime)
                    };
                    break;
                case /* google.protobuf.Duration duration_value */ 12:
                    message.value = {
                        oneofKind: "durationValue",
                        durationValue: Duration.internalBinaryRead(reader, reader.uint32(), options, (message.value as any).durationValue)
                    };
                    break;
                case /* string string_value */ 7:
                    message.value = {
                        oneofKind: "stringValue",
                        stringValue: reader.string()
                    };
                    break;
                case /* bytes bytes_value */ 8:
                    message.value = {
                        oneofKind: "bytesValue",
                        bytesValue: reader.bytes()
                    };
                    break;
                case /* google.type.LatLng geo_point_value */ 9:
                    message.value = {
                        oneofKind: "geoPointValue",
                        geoPointValue: LatLng.internalBinaryRead(reader, reader.uint32(), options, (message.value as any).geoPointValue)
                    };
                    break;
                case /* indykite.objects.v1beta1.ArrayValue array_value */ 10:
                    message.value = {
                        oneofKind: "arrayValue",
                        arrayValue: ArrayValue.internalBinaryRead(reader, reader.uint32(), options, (message.value as any).arrayValue)
                    };
                    break;
                case /* indykite.objects.v1beta1.MapValue map_value */ 11:
                    message.value = {
                        oneofKind: "mapValue",
                        mapValue: MapValue.internalBinaryRead(reader, reader.uint32(), options, (message.value as any).mapValue)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Value, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.NullValue null_value = 1; */
        if (message.value.oneofKind === "nullValue")
            writer.tag(1, WireType.Varint).int32(message.value.nullValue);
        /* bool bool_value = 2; */
        if (message.value.oneofKind === "boolValue")
            writer.tag(2, WireType.Varint).bool(message.value.boolValue);
        /* int64 integer_value = 3; */
        if (message.value.oneofKind === "integerValue")
            writer.tag(3, WireType.Varint).int64(message.value.integerValue);
        /* uint64 unsigned_integer_value = 14; */
        if (message.value.oneofKind === "unsignedIntegerValue")
            writer.tag(14, WireType.Varint).uint64(message.value.unsignedIntegerValue);
        /* double double_value = 4; */
        if (message.value.oneofKind === "doubleValue")
            writer.tag(4, WireType.Bit64).double(message.value.doubleValue);
        /* google.protobuf.Any any_value = 5; */
        if (message.value.oneofKind === "anyValue")
            Any.internalBinaryWrite(message.value.anyValue, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp value_time = 6; */
        if (message.value.oneofKind === "valueTime")
            Timestamp.internalBinaryWrite(message.value.valueTime, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration duration_value = 12; */
        if (message.value.oneofKind === "durationValue")
            Duration.internalBinaryWrite(message.value.durationValue, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* string string_value = 7; */
        if (message.value.oneofKind === "stringValue")
            writer.tag(7, WireType.LengthDelimited).string(message.value.stringValue);
        /* bytes bytes_value = 8; */
        if (message.value.oneofKind === "bytesValue")
            writer.tag(8, WireType.LengthDelimited).bytes(message.value.bytesValue);
        /* google.type.LatLng geo_point_value = 9; */
        if (message.value.oneofKind === "geoPointValue")
            LatLng.internalBinaryWrite(message.value.geoPointValue, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* indykite.objects.v1beta1.ArrayValue array_value = 10; */
        if (message.value.oneofKind === "arrayValue")
            ArrayValue.internalBinaryWrite(message.value.arrayValue, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* indykite.objects.v1beta1.MapValue map_value = 11; */
        if (message.value.oneofKind === "mapValue")
            MapValue.internalBinaryWrite(message.value.mapValue, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message indykite.objects.v1beta1.Value
 */
export const Value = new Value$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ArrayValue$Type extends MessageType<ArrayValue> {
    constructor() {
        super("indykite.objects.v1beta1.ArrayValue", [
            { no: 1, name: "values", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Value }
        ]);
    }
    create(value?: PartialMessage<ArrayValue>): ArrayValue {
        const message = { values: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ArrayValue>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ArrayValue): ArrayValue {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated indykite.objects.v1beta1.Value values */ 1:
                    message.values.push(Value.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ArrayValue, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated indykite.objects.v1beta1.Value values = 1; */
        for (let i = 0; i < message.values.length; i++)
            Value.internalBinaryWrite(message.values[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message indykite.objects.v1beta1.ArrayValue
 */
export const ArrayValue = new ArrayValue$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MapValue$Type extends MessageType<MapValue> {
    constructor() {
        super("indykite.objects.v1beta1.MapValue", [
            { no: 1, name: "fields", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => Value } }
        ]);
    }
    create(value?: PartialMessage<MapValue>): MapValue {
        const message = { fields: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MapValue>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MapValue): MapValue {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, indykite.objects.v1beta1.Value> fields */ 1:
                    this.binaryReadMap1(message.fields, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    private binaryReadMap1(map: MapValue["fields"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof MapValue["fields"] | undefined, val: MapValue["fields"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = Value.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field indykite.objects.v1beta1.MapValue.fields");
            }
        }
        map[key ?? ""] = val ?? Value.create();
    }
    internalBinaryWrite(message: MapValue, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<string, indykite.objects.v1beta1.Value> fields = 1; */
        for (let k of Object.keys(message.fields)) {
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k);
            writer.tag(2, WireType.LengthDelimited).fork();
            Value.internalBinaryWrite(message.fields[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message indykite.objects.v1beta1.MapValue
 */
export const MapValue = new MapValue$Type();
