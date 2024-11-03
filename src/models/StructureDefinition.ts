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
import type { StructureField } from './StructureField';
import {
    StructureFieldFromJSON,
    StructureFieldFromJSONTyped,
    StructureFieldToJSON,
    StructureFieldToJSONTyped,
} from './StructureField';

/**
 * 
 * @export
 * @interface StructureDefinition
 */
export interface StructureDefinition {
    /**
     * 
     * @type {string}
     * @memberof StructureDefinition
     */
    DefaultEncodingId?: string;
    /**
     * 
     * @type {string}
     * @memberof StructureDefinition
     */
    BaseDataType?: string;
    /**
     * 
     * @type {number}
     * @memberof StructureDefinition
     */
    StructureType?: number;
    /**
     * 
     * @type {Array<StructureField>}
     * @memberof StructureDefinition
     */
    Fields?: Array<StructureField>;
}

/**
 * Check if a given object implements the StructureDefinition interface.
 */
export function instanceOfStructureDefinition(value: object): value is StructureDefinition {
    return true;
}

export function StructureDefinitionFromJSON(json: any): StructureDefinition {
    return StructureDefinitionFromJSONTyped(json, false);
}

export function StructureDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): StructureDefinition {
    if (json == null) {
        return json;
    }
    return {
        
        'DefaultEncodingId': json['DefaultEncodingId'] == null ? undefined : json['DefaultEncodingId'],
        'BaseDataType': json['BaseDataType'] == null ? undefined : json['BaseDataType'],
        'StructureType': json['StructureType'] == null ? undefined : json['StructureType'],
        'Fields': json['Fields'] == null ? undefined : ((json['Fields'] as Array<any>).map(StructureFieldFromJSON)),
    };
}

  export function StructureDefinitionToJSON(json: any): StructureDefinition {
      return StructureDefinitionToJSONTyped(json, false);
  }

  export function StructureDefinitionToJSONTyped(value?: StructureDefinition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'DefaultEncodingId': value['DefaultEncodingId'],
        'BaseDataType': value['BaseDataType'],
        'StructureType': value['StructureType'],
        'Fields': value['Fields'] == null ? undefined : ((value['Fields'] as Array<any>).map(StructureFieldToJSON)),
    };
}

