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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part5/12.2.12/#12.2.12.7).
 * @export
 * @interface EnumField
 */
export interface EnumField {
    /**
     * 
     * @type {string}
     * @memberof EnumField
     */
    Name?: string;
    /**
     * 
     * @type {number}
     * @memberof EnumField
     */
    Value?: number;
    /**
     * 
     * @type {LocalizedText}
     * @memberof EnumField
     */
    DisplayName?: LocalizedText;
    /**
     * 
     * @type {LocalizedText}
     * @memberof EnumField
     */
    Description?: LocalizedText;
}

/**
 * Check if a given object implements the EnumField interface.
 */
export function instanceOfEnumField(value: object): value is EnumField {
    return true;
}

export function EnumFieldFromJSON(json: any): EnumField {
    return EnumFieldFromJSONTyped(json, false);
}

export function EnumFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumField {
    if (json == null) {
        return json;
    }
    return {
        
        'Name': json['Name'] == null ? undefined : json['Name'],
        'Value': json['Value'] == null ? undefined : json['Value'],
        'DisplayName': json['DisplayName'] == null ? undefined : LocalizedTextFromJSON(json['DisplayName']),
        'Description': json['Description'] == null ? undefined : LocalizedTextFromJSON(json['Description']),
    };
}

  export function EnumFieldToJSON(json: any): EnumField {
      return EnumFieldToJSONTyped(json, false);
  }

  export function EnumFieldToJSONTyped(value?: EnumField | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Name': value['Name'],
        'Value': value['Value'],
        'DisplayName': LocalizedTextToJSON(value['DisplayName']),
        'Description': LocalizedTextToJSON(value['Description']),
    };
}

