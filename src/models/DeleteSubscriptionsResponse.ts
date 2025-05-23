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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.14.8/#5.14.8.2).
 * @export
 * @interface DeleteSubscriptionsResponse
 */
export interface DeleteSubscriptionsResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof DeleteSubscriptionsResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {Array<StatusCode>}
     * @memberof DeleteSubscriptionsResponse
     */
    Results?: Array<StatusCode>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof DeleteSubscriptionsResponse
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the DeleteSubscriptionsResponse interface.
 */
export function instanceOfDeleteSubscriptionsResponse(value: object): value is DeleteSubscriptionsResponse {
    return true;
}

export function DeleteSubscriptionsResponseFromJSON(json: any): DeleteSubscriptionsResponse {
    return DeleteSubscriptionsResponseFromJSONTyped(json, false);
}

export function DeleteSubscriptionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteSubscriptionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ResponseHeader': json['ResponseHeader'] == null ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'Results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(StatusCodeFromJSON)),
        'DiagnosticInfos': json['DiagnosticInfos'] == null ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

  export function DeleteSubscriptionsResponseToJSON(json: any): DeleteSubscriptionsResponse {
      return DeleteSubscriptionsResponseToJSONTyped(json, false);
  }

  export function DeleteSubscriptionsResponseToJSONTyped(value?: DeleteSubscriptionsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value['ResponseHeader']),
        'Results': value['Results'] == null ? undefined : ((value['Results'] as Array<any>).map(StatusCodeToJSON)),
        'DiagnosticInfos': value['DiagnosticInfos'] == null ? undefined : ((value['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoToJSON)),
    };
}

