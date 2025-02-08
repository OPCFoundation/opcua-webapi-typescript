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
import type { BrowseResult } from './BrowseResult';
import {
    BrowseResultFromJSON,
    BrowseResultFromJSONTyped,
    BrowseResultToJSON,
    BrowseResultToJSONTyped,
} from './BrowseResult';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.9.3/#5.9.3.2).
 * @export
 * @interface BrowseNextResponse
 */
export interface BrowseNextResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof BrowseNextResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {Array<BrowseResult>}
     * @memberof BrowseNextResponse
     */
    Results?: Array<BrowseResult>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof BrowseNextResponse
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the BrowseNextResponse interface.
 */
export function instanceOfBrowseNextResponse(value: object): value is BrowseNextResponse {
    return true;
}

export function BrowseNextResponseFromJSON(json: any): BrowseNextResponse {
    return BrowseNextResponseFromJSONTyped(json, false);
}

export function BrowseNextResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrowseNextResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ResponseHeader': json['ResponseHeader'] == null ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'Results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(BrowseResultFromJSON)),
        'DiagnosticInfos': json['DiagnosticInfos'] == null ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

  export function BrowseNextResponseToJSON(json: any): BrowseNextResponse {
      return BrowseNextResponseToJSONTyped(json, false);
  }

  export function BrowseNextResponseToJSONTyped(value?: BrowseNextResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value['ResponseHeader']),
        'Results': value['Results'] == null ? undefined : ((value['Results'] as Array<any>).map(BrowseResultToJSON)),
        'DiagnosticInfos': value['DiagnosticInfos'] == null ? undefined : ((value['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoToJSON)),
    };
}

