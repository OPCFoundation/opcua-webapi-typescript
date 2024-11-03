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
 * @interface SetTriggeringRequest
 */
export interface SetTriggeringRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof SetTriggeringRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {number}
     * @memberof SetTriggeringRequest
     */
    SubscriptionId?: number;
    /**
     * 
     * @type {number}
     * @memberof SetTriggeringRequest
     */
    TriggeringItemId?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof SetTriggeringRequest
     */
    LinksToAdd?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof SetTriggeringRequest
     */
    LinksToRemove?: Array<number>;
}

/**
 * Check if a given object implements the SetTriggeringRequest interface.
 */
export function instanceOfSetTriggeringRequest(value: object): value is SetTriggeringRequest {
    return true;
}

export function SetTriggeringRequestFromJSON(json: any): SetTriggeringRequest {
    return SetTriggeringRequestFromJSONTyped(json, false);
}

export function SetTriggeringRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetTriggeringRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'SubscriptionId': json['SubscriptionId'] == null ? undefined : json['SubscriptionId'],
        'TriggeringItemId': json['TriggeringItemId'] == null ? undefined : json['TriggeringItemId'],
        'LinksToAdd': json['LinksToAdd'] == null ? undefined : json['LinksToAdd'],
        'LinksToRemove': json['LinksToRemove'] == null ? undefined : json['LinksToRemove'],
    };
}

  export function SetTriggeringRequestToJSON(json: any): SetTriggeringRequest {
      return SetTriggeringRequestToJSONTyped(json, false);
  }

  export function SetTriggeringRequestToJSONTyped(value?: SetTriggeringRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'SubscriptionId': value['SubscriptionId'],
        'TriggeringItemId': value['TriggeringItemId'],
        'LinksToAdd': value['LinksToAdd'],
        'LinksToRemove': value['LinksToRemove'],
    };
}

