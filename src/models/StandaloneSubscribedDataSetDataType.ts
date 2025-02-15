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

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part14/6.2.10/#6.2.10.5).
 * @export
 * @interface StandaloneSubscribedDataSetDataType
 */
export interface StandaloneSubscribedDataSetDataType {
    /**
     * 
     * @type {string}
     * @memberof StandaloneSubscribedDataSetDataType
     */
    Name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof StandaloneSubscribedDataSetDataType
     */
    DataSetFolder?: Array<string>;
    /**
     * 
     * @type {DataSetMetaDataType}
     * @memberof StandaloneSubscribedDataSetDataType
     */
    DataSetMetaData?: DataSetMetaDataType;
    /**
     * 
     * @type {object}
     * @memberof StandaloneSubscribedDataSetDataType
     */
    SubscribedDataSet?: object;
}

/**
 * Check if a given object implements the StandaloneSubscribedDataSetDataType interface.
 */
export function instanceOfStandaloneSubscribedDataSetDataType(value: object): value is StandaloneSubscribedDataSetDataType {
    return true;
}

export function StandaloneSubscribedDataSetDataTypeFromJSON(json: any): StandaloneSubscribedDataSetDataType {
    return StandaloneSubscribedDataSetDataTypeFromJSONTyped(json, false);
}

export function StandaloneSubscribedDataSetDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StandaloneSubscribedDataSetDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'Name': json['Name'] == null ? undefined : json['Name'],
        'DataSetFolder': json['DataSetFolder'] == null ? undefined : json['DataSetFolder'],
        'DataSetMetaData': json['DataSetMetaData'] == null ? undefined : DataSetMetaDataTypeFromJSON(json['DataSetMetaData']),
        'SubscribedDataSet': json['SubscribedDataSet'] == null ? undefined : json['SubscribedDataSet'],
    };
}

  export function StandaloneSubscribedDataSetDataTypeToJSON(json: any): StandaloneSubscribedDataSetDataType {
      return StandaloneSubscribedDataSetDataTypeToJSONTyped(json, false);
  }

  export function StandaloneSubscribedDataSetDataTypeToJSONTyped(value?: StandaloneSubscribedDataSetDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Name': value['Name'],
        'DataSetFolder': value['DataSetFolder'],
        'DataSetMetaData': DataSetMetaDataTypeToJSON(value['DataSetMetaData']),
        'SubscribedDataSet': value['SubscribedDataSet'],
    };
}

