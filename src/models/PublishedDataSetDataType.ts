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
import type { DataSetMetaDataType } from './DataSetMetaDataType';
import {
    DataSetMetaDataTypeFromJSON,
    DataSetMetaDataTypeFromJSONTyped,
    DataSetMetaDataTypeToJSON,
    DataSetMetaDataTypeToJSONTyped,
} from './DataSetMetaDataType';
import type { KeyValuePair } from './KeyValuePair';
import {
    KeyValuePairFromJSON,
    KeyValuePairFromJSONTyped,
    KeyValuePairToJSON,
    KeyValuePairToJSONTyped,
} from './KeyValuePair';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part14/6.2.3/#6.2.3.5).
 * @export
 * @interface PublishedDataSetDataType
 */
export interface PublishedDataSetDataType {
    /**
     * 
     * @type {string}
     * @memberof PublishedDataSetDataType
     */
    Name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PublishedDataSetDataType
     */
    DataSetFolder?: Array<string>;
    /**
     * 
     * @type {DataSetMetaDataType}
     * @memberof PublishedDataSetDataType
     */
    DataSetMetaData?: DataSetMetaDataType;
    /**
     * 
     * @type {Array<KeyValuePair>}
     * @memberof PublishedDataSetDataType
     */
    ExtensionFields?: Array<KeyValuePair>;
    /**
     * 
     * @type {object}
     * @memberof PublishedDataSetDataType
     */
    DataSetSource?: object;
}

/**
 * Check if a given object implements the PublishedDataSetDataType interface.
 */
export function instanceOfPublishedDataSetDataType(value: object): value is PublishedDataSetDataType {
    return true;
}

export function PublishedDataSetDataTypeFromJSON(json: any): PublishedDataSetDataType {
    return PublishedDataSetDataTypeFromJSONTyped(json, false);
}

export function PublishedDataSetDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishedDataSetDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'Name': json['Name'] == null ? undefined : json['Name'],
        'DataSetFolder': json['DataSetFolder'] == null ? undefined : json['DataSetFolder'],
        'DataSetMetaData': json['DataSetMetaData'] == null ? undefined : DataSetMetaDataTypeFromJSON(json['DataSetMetaData']),
        'ExtensionFields': json['ExtensionFields'] == null ? undefined : ((json['ExtensionFields'] as Array<any>).map(KeyValuePairFromJSON)),
        'DataSetSource': json['DataSetSource'] == null ? undefined : json['DataSetSource'],
    };
}

  export function PublishedDataSetDataTypeToJSON(json: any): PublishedDataSetDataType {
      return PublishedDataSetDataTypeToJSONTyped(json, false);
  }

  export function PublishedDataSetDataTypeToJSONTyped(value?: PublishedDataSetDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Name': value['Name'],
        'DataSetFolder': value['DataSetFolder'],
        'DataSetMetaData': DataSetMetaDataTypeToJSON(value['DataSetMetaData']),
        'ExtensionFields': value['ExtensionFields'] == null ? undefined : ((value['ExtensionFields'] as Array<any>).map(KeyValuePairToJSON)),
        'DataSetSource': value['DataSetSource'],
    };
}

