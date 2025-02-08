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
import type { HistoryReadValueId } from './HistoryReadValueId';
import {
    HistoryReadValueIdFromJSON,
    HistoryReadValueIdFromJSONTyped,
    HistoryReadValueIdToJSON,
    HistoryReadValueIdToJSONTyped,
} from './HistoryReadValueId';
import type { ExtensionObject } from './ExtensionObject';
import {
    ExtensionObjectFromJSON,
    ExtensionObjectFromJSONTyped,
    ExtensionObjectToJSON,
    ExtensionObjectToJSONTyped,
} from './ExtensionObject';
import type { RequestHeader } from './RequestHeader';
import {
    RequestHeaderFromJSON,
    RequestHeaderFromJSONTyped,
    RequestHeaderToJSON,
    RequestHeaderToJSONTyped,
} from './RequestHeader';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.11.3/#5.11.3.2).
 * @export
 * @interface HistoryReadRequest
 */
export interface HistoryReadRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof HistoryReadRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {ExtensionObject}
     * @memberof HistoryReadRequest
     */
    HistoryReadDetails?: ExtensionObject;
    /**
     * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/7.40).
     * @type {number}
     * @memberof HistoryReadRequest
     */
    TimestampsToReturn?: number;
    /**
     * 
     * @type {boolean}
     * @memberof HistoryReadRequest
     */
    ReleaseContinuationPoints?: boolean;
    /**
     * 
     * @type {Array<HistoryReadValueId>}
     * @memberof HistoryReadRequest
     */
    NodesToRead?: Array<HistoryReadValueId>;
}

/**
 * Check if a given object implements the HistoryReadRequest interface.
 */
export function instanceOfHistoryReadRequest(value: object): value is HistoryReadRequest {
    return true;
}

export function HistoryReadRequestFromJSON(json: any): HistoryReadRequest {
    return HistoryReadRequestFromJSONTyped(json, false);
}

export function HistoryReadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryReadRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'HistoryReadDetails': json['HistoryReadDetails'] == null ? undefined : ExtensionObjectFromJSON(json['HistoryReadDetails']),
        'TimestampsToReturn': json['TimestampsToReturn'] == null ? undefined : json['TimestampsToReturn'],
        'ReleaseContinuationPoints': json['ReleaseContinuationPoints'] == null ? undefined : json['ReleaseContinuationPoints'],
        'NodesToRead': json['NodesToRead'] == null ? undefined : ((json['NodesToRead'] as Array<any>).map(HistoryReadValueIdFromJSON)),
    };
}

  export function HistoryReadRequestToJSON(json: any): HistoryReadRequest {
      return HistoryReadRequestToJSONTyped(json, false);
  }

  export function HistoryReadRequestToJSONTyped(value?: HistoryReadRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'HistoryReadDetails': ExtensionObjectToJSON(value['HistoryReadDetails']),
        'TimestampsToReturn': value['TimestampsToReturn'],
        'ReleaseContinuationPoints': value['ReleaseContinuationPoints'],
        'NodesToRead': value['NodesToRead'] == null ? undefined : ((value['NodesToRead'] as Array<any>).map(HistoryReadValueIdToJSON)),
    };
}

