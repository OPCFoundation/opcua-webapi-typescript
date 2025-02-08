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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.13.4/#5.13.4.2).
 * @export
 * @interface SetMonitoringModeResponse
 */
export interface SetMonitoringModeResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof SetMonitoringModeResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {Array<StatusCode>}
     * @memberof SetMonitoringModeResponse
     */
    Results?: Array<StatusCode>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof SetMonitoringModeResponse
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the SetMonitoringModeResponse interface.
 */
export function instanceOfSetMonitoringModeResponse(value: object): value is SetMonitoringModeResponse {
    return true;
}

export function SetMonitoringModeResponseFromJSON(json: any): SetMonitoringModeResponse {
    return SetMonitoringModeResponseFromJSONTyped(json, false);
}

export function SetMonitoringModeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetMonitoringModeResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ResponseHeader': json['ResponseHeader'] == null ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'Results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(StatusCodeFromJSON)),
        'DiagnosticInfos': json['DiagnosticInfos'] == null ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

  export function SetMonitoringModeResponseToJSON(json: any): SetMonitoringModeResponse {
      return SetMonitoringModeResponseToJSONTyped(json, false);
  }

  export function SetMonitoringModeResponseToJSONTyped(value?: SetMonitoringModeResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value['ResponseHeader']),
        'Results': value['Results'] == null ? undefined : ((value['Results'] as Array<any>).map(StatusCodeToJSON)),
        'DiagnosticInfos': value['DiagnosticInfos'] == null ? undefined : ((value['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoToJSON)),
    };
}

