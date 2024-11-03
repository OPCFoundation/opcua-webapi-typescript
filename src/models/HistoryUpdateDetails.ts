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
 * @interface HistoryUpdateDetails
 */
export interface HistoryUpdateDetails {
    /**
     * 
     * @type {string}
     * @memberof HistoryUpdateDetails
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the HistoryUpdateDetails interface.
 */
export function instanceOfHistoryUpdateDetails(value: object): value is HistoryUpdateDetails {
    return true;
}

export function HistoryUpdateDetailsFromJSON(json: any): HistoryUpdateDetails {
    return HistoryUpdateDetailsFromJSONTyped(json, false);
}

export function HistoryUpdateDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryUpdateDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function HistoryUpdateDetailsToJSON(json: any): HistoryUpdateDetails {
      return HistoryUpdateDetailsToJSONTyped(json, false);
  }

  export function HistoryUpdateDetailsToJSONTyped(value?: HistoryUpdateDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'UaTypeId': value['UaTypeId'],
    };
}

