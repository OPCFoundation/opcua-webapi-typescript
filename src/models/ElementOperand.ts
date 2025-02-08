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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/7.7.4/#7.7.4.2).
 * @export
 * @interface ElementOperand
 */
export interface ElementOperand {
    /**
     * 
     * @type {number}
     * @memberof ElementOperand
     */
    _Index?: number;
}

/**
 * Check if a given object implements the ElementOperand interface.
 */
export function instanceOfElementOperand(value: object): value is ElementOperand {
    return true;
}

export function ElementOperandFromJSON(json: any): ElementOperand {
    return ElementOperandFromJSONTyped(json, false);
}

export function ElementOperandFromJSONTyped(json: any, ignoreDiscriminator: boolean): ElementOperand {
    if (json == null) {
        return json;
    }
    return {
        
        '_Index': json['Index'] == null ? undefined : json['Index'],
    };
}

  export function ElementOperandToJSON(json: any): ElementOperand {
      return ElementOperandToJSONTyped(json, false);
  }

  export function ElementOperandToJSONTyped(value?: ElementOperand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Index': value['_Index'],
    };
}

