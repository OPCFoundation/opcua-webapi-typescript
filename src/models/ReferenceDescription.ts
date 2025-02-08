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
import type { LocalizedText } from './LocalizedText';
import {
    LocalizedTextFromJSON,
    LocalizedTextFromJSONTyped,
    LocalizedTextToJSON,
    LocalizedTextToJSONTyped,
} from './LocalizedText';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/7.30).
 * @export
 * @interface ReferenceDescription
 */
export interface ReferenceDescription {
    /**
     * 
     * @type {string}
     * @memberof ReferenceDescription
     */
    ReferenceTypeId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReferenceDescription
     */
    IsForward?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReferenceDescription
     */
    NodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReferenceDescription
     */
    BrowseName?: string;
    /**
     * 
     * @type {LocalizedText}
     * @memberof ReferenceDescription
     */
    DisplayName?: LocalizedText;
    /**
     * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part5/12.2.5/#12.2.5.2).
     * @type {number}
     * @memberof ReferenceDescription
     */
    NodeClass?: number;
    /**
     * 
     * @type {string}
     * @memberof ReferenceDescription
     */
    TypeDefinition?: string;
}

/**
 * Check if a given object implements the ReferenceDescription interface.
 */
export function instanceOfReferenceDescription(value: object): value is ReferenceDescription {
    return true;
}

export function ReferenceDescriptionFromJSON(json: any): ReferenceDescription {
    return ReferenceDescriptionFromJSONTyped(json, false);
}

export function ReferenceDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceDescription {
    if (json == null) {
        return json;
    }
    return {
        
        'ReferenceTypeId': json['ReferenceTypeId'] == null ? undefined : json['ReferenceTypeId'],
        'IsForward': json['IsForward'] == null ? undefined : json['IsForward'],
        'NodeId': json['NodeId'] == null ? undefined : json['NodeId'],
        'BrowseName': json['BrowseName'] == null ? undefined : json['BrowseName'],
        'DisplayName': json['DisplayName'] == null ? undefined : LocalizedTextFromJSON(json['DisplayName']),
        'NodeClass': json['NodeClass'] == null ? undefined : json['NodeClass'],
        'TypeDefinition': json['TypeDefinition'] == null ? undefined : json['TypeDefinition'],
    };
}

  export function ReferenceDescriptionToJSON(json: any): ReferenceDescription {
      return ReferenceDescriptionToJSONTyped(json, false);
  }

  export function ReferenceDescriptionToJSONTyped(value?: ReferenceDescription | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ReferenceTypeId': value['ReferenceTypeId'],
        'IsForward': value['IsForward'],
        'NodeId': value['NodeId'],
        'BrowseName': value['BrowseName'],
        'DisplayName': LocalizedTextToJSON(value['DisplayName']),
        'NodeClass': value['NodeClass'],
        'TypeDefinition': value['TypeDefinition'],
    };
}

