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
import type { RequestHeader } from './RequestHeader';
import {
    RequestHeaderFromJSON,
    RequestHeaderFromJSONTyped,
    RequestHeaderToJSON,
    RequestHeaderToJSONTyped,
} from './RequestHeader';

/**
 * 
 * @export
 * @interface DeleteMonitoredItemsRequest
 */
export interface DeleteMonitoredItemsRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof DeleteMonitoredItemsRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {number}
     * @memberof DeleteMonitoredItemsRequest
     */
    SubscriptionId?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof DeleteMonitoredItemsRequest
     */
    MonitoredItemIds?: Array<number>;
}

/**
 * Check if a given object implements the DeleteMonitoredItemsRequest interface.
 */
export function instanceOfDeleteMonitoredItemsRequest(value: object): value is DeleteMonitoredItemsRequest {
    return true;
}

export function DeleteMonitoredItemsRequestFromJSON(json: any): DeleteMonitoredItemsRequest {
    return DeleteMonitoredItemsRequestFromJSONTyped(json, false);
}

export function DeleteMonitoredItemsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteMonitoredItemsRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'SubscriptionId': json['SubscriptionId'] == null ? undefined : json['SubscriptionId'],
        'MonitoredItemIds': json['MonitoredItemIds'] == null ? undefined : json['MonitoredItemIds'],
    };
}

  export function DeleteMonitoredItemsRequestToJSON(json: any): DeleteMonitoredItemsRequest {
      return DeleteMonitoredItemsRequestToJSONTyped(json, false);
  }

  export function DeleteMonitoredItemsRequestToJSONTyped(value?: DeleteMonitoredItemsRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'SubscriptionId': value['SubscriptionId'],
        'MonitoredItemIds': value['MonitoredItemIds'],
    };
}

