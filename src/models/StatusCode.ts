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
 * @interface StatusCode
 */
export interface StatusCode {
    /**
     * 
     * @type {number}
     * @memberof StatusCode
     */
    Code?: number;
    /**
     * 
     * @type {string}
     * @memberof StatusCode
     */
    Symbol?: string;
}

/**
 * Check if a given object implements the StatusCode interface.
 */
export function instanceOfStatusCode(value: object): value is StatusCode {
    return true;
}

export function StatusCodeFromJSON(json: any): StatusCode {
    return StatusCodeFromJSONTyped(json, false);
}

export function StatusCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusCode {
    if (json == null) {
        return json;
    }
    return {
        
        'Code': json['Code'] == null ? undefined : json['Code'],
        'Symbol': json['Symbol'] == null ? undefined : json['Symbol'],
    };
}

  export function StatusCodeToJSON(json: any): StatusCode {
      return StatusCodeToJSONTyped(json, false);
  }

  export function StatusCodeToJSONTyped(value?: StatusCode | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Code': value['Code'],
        'Symbol': value['Symbol'],
    };
}
