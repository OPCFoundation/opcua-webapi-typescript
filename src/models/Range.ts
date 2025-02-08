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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part8/5.6.2).
 * @export
 * @interface Range
 */
export interface Range {
    /**
     * 
     * @type {number}
     * @memberof Range
     */
    Low?: number;
    /**
     * 
     * @type {number}
     * @memberof Range
     */
    High?: number;
}

/**
 * Check if a given object implements the Range interface.
 */
export function instanceOfRange(value: object): value is Range {
    return true;
}

export function RangeFromJSON(json: any): Range {
    return RangeFromJSONTyped(json, false);
}

export function RangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Range {
    if (json == null) {
        return json;
    }
    return {
        
        'Low': json['Low'] == null ? undefined : json['Low'],
        'High': json['High'] == null ? undefined : json['High'],
    };
}

  export function RangeToJSON(json: any): Range {
      return RangeToJSONTyped(json, false);
  }

  export function RangeToJSONTyped(value?: Range | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Low': value['Low'],
        'High': value['High'],
    };
}

