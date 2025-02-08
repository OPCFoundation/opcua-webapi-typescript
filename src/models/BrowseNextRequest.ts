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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.9.3/#5.9.3.2).
 * @export
 * @interface BrowseNextRequest
 */
export interface BrowseNextRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof BrowseNextRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {boolean}
     * @memberof BrowseNextRequest
     */
    ReleaseContinuationPoints?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof BrowseNextRequest
     */
    ContinuationPoints?: Array<string>;
}

/**
 * Check if a given object implements the BrowseNextRequest interface.
 */
export function instanceOfBrowseNextRequest(value: object): value is BrowseNextRequest {
    return true;
}

export function BrowseNextRequestFromJSON(json: any): BrowseNextRequest {
    return BrowseNextRequestFromJSONTyped(json, false);
}

export function BrowseNextRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrowseNextRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'ReleaseContinuationPoints': json['ReleaseContinuationPoints'] == null ? undefined : json['ReleaseContinuationPoints'],
        'ContinuationPoints': json['ContinuationPoints'] == null ? undefined : json['ContinuationPoints'],
    };
}

  export function BrowseNextRequestToJSON(json: any): BrowseNextRequest {
      return BrowseNextRequestToJSONTyped(json, false);
  }

  export function BrowseNextRequestToJSONTyped(value?: BrowseNextRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'ReleaseContinuationPoints': value['ReleaseContinuationPoints'],
        'ContinuationPoints': value['ContinuationPoints'],
    };
}

