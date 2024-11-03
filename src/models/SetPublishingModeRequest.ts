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
 * @interface SetPublishingModeRequest
 */
export interface SetPublishingModeRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof SetPublishingModeRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {boolean}
     * @memberof SetPublishingModeRequest
     */
    PublishingEnabled?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof SetPublishingModeRequest
     */
    SubscriptionIds?: Array<number>;
}

/**
 * Check if a given object implements the SetPublishingModeRequest interface.
 */
export function instanceOfSetPublishingModeRequest(value: object): value is SetPublishingModeRequest {
    return true;
}

export function SetPublishingModeRequestFromJSON(json: any): SetPublishingModeRequest {
    return SetPublishingModeRequestFromJSONTyped(json, false);
}

export function SetPublishingModeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetPublishingModeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'PublishingEnabled': json['PublishingEnabled'] == null ? undefined : json['PublishingEnabled'],
        'SubscriptionIds': json['SubscriptionIds'] == null ? undefined : json['SubscriptionIds'],
    };
}

  export function SetPublishingModeRequestToJSON(json: any): SetPublishingModeRequest {
      return SetPublishingModeRequestToJSONTyped(json, false);
  }

  export function SetPublishingModeRequestToJSONTyped(value?: SetPublishingModeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'PublishingEnabled': value['PublishingEnabled'],
        'SubscriptionIds': value['SubscriptionIds'],
    };
}

