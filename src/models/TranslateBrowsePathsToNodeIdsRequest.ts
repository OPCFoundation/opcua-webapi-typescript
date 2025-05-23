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
import type { BrowsePath } from './BrowsePath';
import {
    BrowsePathFromJSON,
    BrowsePathFromJSONTyped,
    BrowsePathToJSON,
    BrowsePathToJSONTyped,
} from './BrowsePath';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.9.4/#5.9.4.2).
 * @export
 * @interface TranslateBrowsePathsToNodeIdsRequest
 */
export interface TranslateBrowsePathsToNodeIdsRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof TranslateBrowsePathsToNodeIdsRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {Array<BrowsePath>}
     * @memberof TranslateBrowsePathsToNodeIdsRequest
     */
    BrowsePaths?: Array<BrowsePath>;
}

/**
 * Check if a given object implements the TranslateBrowsePathsToNodeIdsRequest interface.
 */
export function instanceOfTranslateBrowsePathsToNodeIdsRequest(value: object): value is TranslateBrowsePathsToNodeIdsRequest {
    return true;
}

export function TranslateBrowsePathsToNodeIdsRequestFromJSON(json: any): TranslateBrowsePathsToNodeIdsRequest {
    return TranslateBrowsePathsToNodeIdsRequestFromJSONTyped(json, false);
}

export function TranslateBrowsePathsToNodeIdsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslateBrowsePathsToNodeIdsRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'BrowsePaths': json['BrowsePaths'] == null ? undefined : ((json['BrowsePaths'] as Array<any>).map(BrowsePathFromJSON)),
    };
}

  export function TranslateBrowsePathsToNodeIdsRequestToJSON(json: any): TranslateBrowsePathsToNodeIdsRequest {
      return TranslateBrowsePathsToNodeIdsRequestToJSONTyped(json, false);
  }

  export function TranslateBrowsePathsToNodeIdsRequestToJSONTyped(value?: TranslateBrowsePathsToNodeIdsRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'BrowsePaths': value['BrowsePaths'] == null ? undefined : ((value['BrowsePaths'] as Array<any>).map(BrowsePathToJSON)),
    };
}

