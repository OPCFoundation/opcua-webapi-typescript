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
/**
 * 
 * @export
 * @interface DataTypeDescription
 */
export interface DataTypeDescription {
    /**
     * 
     * @type {string}
     * @memberof DataTypeDescription
     */
    DataTypeId?: string;
    /**
     * 
     * @type {string}
     * @memberof DataTypeDescription
     */
    Name?: string;
}

/**
 * Check if a given object implements the DataTypeDescription interface.
 */
export function instanceOfDataTypeDescription(value: object): value is DataTypeDescription {
    return true;
}

export function DataTypeDescriptionFromJSON(json: any): DataTypeDescription {
    return DataTypeDescriptionFromJSONTyped(json, false);
}

export function DataTypeDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataTypeDescription {
    if (json == null) {
        return json;
    }
    return {
        
        'DataTypeId': json['DataTypeId'] == null ? undefined : json['DataTypeId'],
        'Name': json['Name'] == null ? undefined : json['Name'],
    };
}

  export function DataTypeDescriptionToJSON(json: any): DataTypeDescription {
      return DataTypeDescriptionToJSONTyped(json, false);
  }

  export function DataTypeDescriptionToJSONTyped(value?: DataTypeDescription | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'DataTypeId': value['DataTypeId'],
        'Name': value['Name'],
    };
}

