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
import type { ExtensionObject } from './ExtensionObject';
import {
    ExtensionObjectFromJSON,
    ExtensionObjectFromJSONTyped,
    ExtensionObjectToJSON,
    ExtensionObjectToJSONTyped,
} from './ExtensionObject';
import type { StatusCode } from './StatusCode';
import {
    StatusCodeFromJSON,
    StatusCodeFromJSONTyped,
    StatusCodeToJSON,
    StatusCodeToJSONTyped,
} from './StatusCode';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.13.3/#5.13.3.2).
 * @export
 * @interface MonitoredItemModifyResult
 */
export interface MonitoredItemModifyResult {
    /**
     * 
     * @type {StatusCode}
     * @memberof MonitoredItemModifyResult
     */
    StatusCode?: StatusCode;
    /**
     * 
     * @type {number}
     * @memberof MonitoredItemModifyResult
     */
    RevisedSamplingInterval?: number;
    /**
     * 
     * @type {number}
     * @memberof MonitoredItemModifyResult
     */
    RevisedQueueSize?: number;
    /**
     * 
     * @type {ExtensionObject}
     * @memberof MonitoredItemModifyResult
     */
    FilterResult?: ExtensionObject;
}

/**
 * Check if a given object implements the MonitoredItemModifyResult interface.
 */
export function instanceOfMonitoredItemModifyResult(value: object): value is MonitoredItemModifyResult {
    return true;
}

export function MonitoredItemModifyResultFromJSON(json: any): MonitoredItemModifyResult {
    return MonitoredItemModifyResultFromJSONTyped(json, false);
}

export function MonitoredItemModifyResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonitoredItemModifyResult {
    if (json == null) {
        return json;
    }
    return {
        
        'StatusCode': json['StatusCode'] == null ? undefined : StatusCodeFromJSON(json['StatusCode']),
        'RevisedSamplingInterval': json['RevisedSamplingInterval'] == null ? undefined : json['RevisedSamplingInterval'],
        'RevisedQueueSize': json['RevisedQueueSize'] == null ? undefined : json['RevisedQueueSize'],
        'FilterResult': json['FilterResult'] == null ? undefined : ExtensionObjectFromJSON(json['FilterResult']),
    };
}

  export function MonitoredItemModifyResultToJSON(json: any): MonitoredItemModifyResult {
      return MonitoredItemModifyResultToJSONTyped(json, false);
  }

  export function MonitoredItemModifyResultToJSONTyped(value?: MonitoredItemModifyResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'StatusCode': StatusCodeToJSON(value['StatusCode']),
        'RevisedSamplingInterval': value['RevisedSamplingInterval'],
        'RevisedQueueSize': value['RevisedQueueSize'],
        'FilterResult': ExtensionObjectToJSON(value['FilterResult']),
    };
}

