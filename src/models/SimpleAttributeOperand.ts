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
/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/7.7.4/#7.7.4.5).
 * @export
 * @interface SimpleAttributeOperand
 */
export interface SimpleAttributeOperand {
    /**
     * 
     * @type {string}
     * @memberof SimpleAttributeOperand
     */
    TypeDefinitionId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SimpleAttributeOperand
     */
    BrowsePath?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof SimpleAttributeOperand
     */
    AttributeId?: number;
    /**
     * 
     * @type {string}
     * @memberof SimpleAttributeOperand
     */
    IndexRange?: string;
}

/**
 * Check if a given object implements the SimpleAttributeOperand interface.
 */
export function instanceOfSimpleAttributeOperand(value: object): value is SimpleAttributeOperand {
    return true;
}

export function SimpleAttributeOperandFromJSON(json: any): SimpleAttributeOperand {
    return SimpleAttributeOperandFromJSONTyped(json, false);
}

export function SimpleAttributeOperandFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimpleAttributeOperand {
    if (json == null) {
        return json;
    }
    return {
        
        'TypeDefinitionId': json['TypeDefinitionId'] == null ? undefined : json['TypeDefinitionId'],
        'BrowsePath': json['BrowsePath'] == null ? undefined : json['BrowsePath'],
        'AttributeId': json['AttributeId'] == null ? undefined : json['AttributeId'],
        'IndexRange': json['IndexRange'] == null ? undefined : json['IndexRange'],
    };
}

  export function SimpleAttributeOperandToJSON(json: any): SimpleAttributeOperand {
      return SimpleAttributeOperandToJSONTyped(json, false);
  }

  export function SimpleAttributeOperandToJSONTyped(value?: SimpleAttributeOperand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'TypeDefinitionId': value['TypeDefinitionId'],
        'BrowsePath': value['BrowsePath'],
        'AttributeId': value['AttributeId'],
        'IndexRange': value['IndexRange'],
    };
}

