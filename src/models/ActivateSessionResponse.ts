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
import type { DiagnosticInfo } from './DiagnosticInfo';
import {
    DiagnosticInfoFromJSON,
    DiagnosticInfoFromJSONTyped,
    DiagnosticInfoToJSON,
    DiagnosticInfoToJSONTyped,
} from './DiagnosticInfo';
import type { StatusCode } from './StatusCode';
import {
    StatusCodeFromJSON,
    StatusCodeFromJSONTyped,
    StatusCodeToJSON,
    StatusCodeToJSONTyped,
} from './StatusCode';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.7.3/#5.7.3.2).
 * @export
 * @interface ActivateSessionResponse
 */
export interface ActivateSessionResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof ActivateSessionResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {string}
     * @memberof ActivateSessionResponse
     */
    ServerNonce?: string;
    /**
     * 
     * @type {Array<StatusCode>}
     * @memberof ActivateSessionResponse
     */
    Results?: Array<StatusCode>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof ActivateSessionResponse
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the ActivateSessionResponse interface.
 */
export function instanceOfActivateSessionResponse(value: object): value is ActivateSessionResponse {
    return true;
}

export function ActivateSessionResponseFromJSON(json: any): ActivateSessionResponse {
    return ActivateSessionResponseFromJSONTyped(json, false);
}

export function ActivateSessionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivateSessionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ResponseHeader': json['ResponseHeader'] == null ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'ServerNonce': json['ServerNonce'] == null ? undefined : json['ServerNonce'],
        'Results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(StatusCodeFromJSON)),
        'DiagnosticInfos': json['DiagnosticInfos'] == null ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

  export function ActivateSessionResponseToJSON(json: any): ActivateSessionResponse {
      return ActivateSessionResponseToJSONTyped(json, false);
  }

  export function ActivateSessionResponseToJSONTyped(value?: ActivateSessionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value['ResponseHeader']),
        'ServerNonce': value['ServerNonce'],
        'Results': value['Results'] == null ? undefined : ((value['Results'] as Array<any>).map(StatusCodeToJSON)),
        'DiagnosticInfos': value['DiagnosticInfos'] == null ? undefined : ((value['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoToJSON)),
    };
}

