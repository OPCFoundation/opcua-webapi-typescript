/* tslint:disable */
/* eslint-disable */
/**
 * OPC UA Web API
 * Provides simple HTTPS based access to an OPC UA server.
 *
 * The version of the OpenAPI document: 1.05.4
 * Contact: office@opcfoundation.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Variant } from './Variant';
import {
    VariantFromJSON,
    VariantFromJSONTyped,
    VariantToJSON,
    VariantToJSONTyped,
} from './Variant';
import type { WriterGroupDataType } from './WriterGroupDataType';
import {
    WriterGroupDataTypeFromJSON,
    WriterGroupDataTypeFromJSONTyped,
    WriterGroupDataTypeToJSON,
    WriterGroupDataTypeToJSONTyped,
} from './WriterGroupDataType';
import type { KeyValuePair } from './KeyValuePair';
import {
    KeyValuePairFromJSON,
    KeyValuePairFromJSONTyped,
    KeyValuePairToJSON,
    KeyValuePairToJSONTyped,
} from './KeyValuePair';
import type { ReaderGroupDataType } from './ReaderGroupDataType';
import {
    ReaderGroupDataTypeFromJSON,
    ReaderGroupDataTypeFromJSONTyped,
    ReaderGroupDataTypeToJSON,
    ReaderGroupDataTypeToJSONTyped,
} from './ReaderGroupDataType';

/**
 * 
 * @export
 * @interface PubSubConnectionDataType
 */
export interface PubSubConnectionDataType {
    /**
     * 
     * @type {string}
     * @memberof PubSubConnectionDataType
     */
    Name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PubSubConnectionDataType
     */
    Enabled?: boolean;
    /**
     * 
     * @type {Variant}
     * @memberof PubSubConnectionDataType
     */
    PublisherId?: Variant;
    /**
     * 
     * @type {string}
     * @memberof PubSubConnectionDataType
     */
    TransportProfileUri?: string;
    /**
     * 
     * @type {object}
     * @memberof PubSubConnectionDataType
     */
    Address?: object;
    /**
     * 
     * @type {Array<KeyValuePair>}
     * @memberof PubSubConnectionDataType
     */
    ConnectionProperties?: Array<KeyValuePair>;
    /**
     * 
     * @type {object}
     * @memberof PubSubConnectionDataType
     */
    TransportSettings?: object;
    /**
     * 
     * @type {Array<WriterGroupDataType>}
     * @memberof PubSubConnectionDataType
     */
    WriterGroups?: Array<WriterGroupDataType>;
    /**
     * 
     * @type {Array<ReaderGroupDataType>}
     * @memberof PubSubConnectionDataType
     */
    ReaderGroups?: Array<ReaderGroupDataType>;
}

/**
 * Check if a given object implements the PubSubConnectionDataType interface.
 */
export function instanceOfPubSubConnectionDataType(value: object): value is PubSubConnectionDataType {
    return true;
}

export function PubSubConnectionDataTypeFromJSON(json: any): PubSubConnectionDataType {
    return PubSubConnectionDataTypeFromJSONTyped(json, false);
}

export function PubSubConnectionDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PubSubConnectionDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'Name': json['Name'] == null ? undefined : json['Name'],
        'Enabled': json['Enabled'] == null ? undefined : json['Enabled'],
        'PublisherId': json['PublisherId'] == null ? undefined : VariantFromJSON(json['PublisherId']),
        'TransportProfileUri': json['TransportProfileUri'] == null ? undefined : json['TransportProfileUri'],
        'Address': json['Address'] == null ? undefined : json['Address'],
        'ConnectionProperties': json['ConnectionProperties'] == null ? undefined : ((json['ConnectionProperties'] as Array<any>).map(KeyValuePairFromJSON)),
        'TransportSettings': json['TransportSettings'] == null ? undefined : json['TransportSettings'],
        'WriterGroups': json['WriterGroups'] == null ? undefined : ((json['WriterGroups'] as Array<any>).map(WriterGroupDataTypeFromJSON)),
        'ReaderGroups': json['ReaderGroups'] == null ? undefined : ((json['ReaderGroups'] as Array<any>).map(ReaderGroupDataTypeFromJSON)),
    };
}

  export function PubSubConnectionDataTypeToJSON(json: any): PubSubConnectionDataType {
      return PubSubConnectionDataTypeToJSONTyped(json, false);
  }

  export function PubSubConnectionDataTypeToJSONTyped(value?: PubSubConnectionDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Name': value['Name'],
        'Enabled': value['Enabled'],
        'PublisherId': VariantToJSON(value['PublisherId']),
        'TransportProfileUri': value['TransportProfileUri'],
        'Address': value['Address'],
        'ConnectionProperties': value['ConnectionProperties'] == null ? undefined : ((value['ConnectionProperties'] as Array<any>).map(KeyValuePairToJSON)),
        'TransportSettings': value['TransportSettings'],
        'WriterGroups': value['WriterGroups'] == null ? undefined : ((value['WriterGroups'] as Array<any>).map(WriterGroupDataTypeToJSON)),
        'ReaderGroups': value['ReaderGroups'] == null ? undefined : ((value['ReaderGroups'] as Array<any>).map(ReaderGroupDataTypeToJSON)),
    };
}

