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
import type { ResponseHeader } from './ResponseHeader';
import {
    ResponseHeaderFromJSON,
    ResponseHeaderFromJSONTyped,
    ResponseHeaderToJSON,
    ResponseHeaderToJSONTyped,
} from './ResponseHeader';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.7.5/#5.7.5.2).
 * @export
 * @interface CancelResponse
 */
export interface CancelResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof CancelResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {number}
     * @memberof CancelResponse
     */
    CancelCount?: number;
}

/**
 * Check if a given object implements the CancelResponse interface.
 */
export function instanceOfCancelResponse(value: object): value is CancelResponse {
    return true;
}

export function CancelResponseFromJSON(json: any): CancelResponse {
    return CancelResponseFromJSONTyped(json, false);
}

export function CancelResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ResponseHeader': json['ResponseHeader'] == null ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'CancelCount': json['CancelCount'] == null ? undefined : json['CancelCount'],
    };
}

  export function CancelResponseToJSON(json: any): CancelResponse {
      return CancelResponseToJSONTyped(json, false);
  }

  export function CancelResponseToJSONTyped(value?: CancelResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value['ResponseHeader']),
        'CancelCount': value['CancelCount'],
    };
}

