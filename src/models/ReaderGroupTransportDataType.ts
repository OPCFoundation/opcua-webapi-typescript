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
 * @interface ReaderGroupTransportDataType
 */
export interface ReaderGroupTransportDataType {
    /**
     * 
     * @type {string}
     * @memberof ReaderGroupTransportDataType
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the ReaderGroupTransportDataType interface.
 */
export function instanceOfReaderGroupTransportDataType(value: object): value is ReaderGroupTransportDataType {
    return true;
}

export function ReaderGroupTransportDataTypeFromJSON(json: any): ReaderGroupTransportDataType {
    return ReaderGroupTransportDataTypeFromJSONTyped(json, false);
}

export function ReaderGroupTransportDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReaderGroupTransportDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function ReaderGroupTransportDataTypeToJSON(json: any): ReaderGroupTransportDataType {
      return ReaderGroupTransportDataTypeToJSONTyped(json, false);
  }

  export function ReaderGroupTransportDataTypeToJSONTyped(value?: ReaderGroupTransportDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'UaTypeId': value['UaTypeId'],
    };
}
