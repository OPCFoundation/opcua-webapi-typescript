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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.7.4/#5.7.4.2).
 * @export
 * @interface CloseSessionResponse
 */
export interface CloseSessionResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof CloseSessionResponse
     */
    ResponseHeader?: ResponseHeader;
}

/**
 * Check if a given object implements the CloseSessionResponse interface.
 */
export function instanceOfCloseSessionResponse(value: object): value is CloseSessionResponse {
    return true;
}

export function CloseSessionResponseFromJSON(json: any): CloseSessionResponse {
    return CloseSessionResponseFromJSONTyped(json, false);
}

export function CloseSessionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CloseSessionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ResponseHeader': json['ResponseHeader'] == null ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
    };
}

  export function CloseSessionResponseToJSON(json: any): CloseSessionResponse {
      return CloseSessionResponseToJSONTyped(json, false);
  }

  export function CloseSessionResponseToJSONTyped(value?: CloseSessionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value['ResponseHeader']),
    };
}

