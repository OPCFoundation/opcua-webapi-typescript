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
 * 
 * @export
 * @interface UnregisterNodesResponse
 */
export interface UnregisterNodesResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof UnregisterNodesResponse
     */
    ResponseHeader?: ResponseHeader;
}

/**
 * Check if a given object implements the UnregisterNodesResponse interface.
 */
export function instanceOfUnregisterNodesResponse(value: object): value is UnregisterNodesResponse {
    return true;
}

export function UnregisterNodesResponseFromJSON(json: any): UnregisterNodesResponse {
    return UnregisterNodesResponseFromJSONTyped(json, false);
}

export function UnregisterNodesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnregisterNodesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ResponseHeader': json['ResponseHeader'] == null ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
    };
}

  export function UnregisterNodesResponseToJSON(json: any): UnregisterNodesResponse {
      return UnregisterNodesResponseToJSONTyped(json, false);
  }

  export function UnregisterNodesResponseToJSONTyped(value?: UnregisterNodesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value['ResponseHeader']),
    };
}

