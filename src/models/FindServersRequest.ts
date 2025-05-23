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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.5.2/#5.5.2.2).
 * @export
 * @interface FindServersRequest
 */
export interface FindServersRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof FindServersRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {string}
     * @memberof FindServersRequest
     */
    EndpointUrl?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FindServersRequest
     */
    LocaleIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FindServersRequest
     */
    ServerUris?: Array<string>;
}

/**
 * Check if a given object implements the FindServersRequest interface.
 */
export function instanceOfFindServersRequest(value: object): value is FindServersRequest {
    return true;
}

export function FindServersRequestFromJSON(json: any): FindServersRequest {
    return FindServersRequestFromJSONTyped(json, false);
}

export function FindServersRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FindServersRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'EndpointUrl': json['EndpointUrl'] == null ? undefined : json['EndpointUrl'],
        'LocaleIds': json['LocaleIds'] == null ? undefined : json['LocaleIds'],
        'ServerUris': json['ServerUris'] == null ? undefined : json['ServerUris'],
    };
}

  export function FindServersRequestToJSON(json: any): FindServersRequest {
      return FindServersRequestToJSONTyped(json, false);
  }

  export function FindServersRequestToJSONTyped(value?: FindServersRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'EndpointUrl': value['EndpointUrl'],
        'LocaleIds': value['LocaleIds'],
        'ServerUris': value['ServerUris'],
    };
}

