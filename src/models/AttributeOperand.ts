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
import type { RelativePath } from './RelativePath';
import {
    RelativePathFromJSON,
    RelativePathFromJSONTyped,
    RelativePathToJSON,
    RelativePathToJSONTyped,
} from './RelativePath';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/7.7.4/#7.7.4.4).
 * @export
 * @interface AttributeOperand
 */
export interface AttributeOperand {
    /**
     * 
     * @type {string}
     * @memberof AttributeOperand
     */
    NodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof AttributeOperand
     */
    Alias?: string;
    /**
     * 
     * @type {RelativePath}
     * @memberof AttributeOperand
     */
    BrowsePath?: RelativePath;
    /**
     * 
     * @type {number}
     * @memberof AttributeOperand
     */
    AttributeId?: number;
    /**
     * 
     * @type {string}
     * @memberof AttributeOperand
     */
    IndexRange?: string;
}

/**
 * Check if a given object implements the AttributeOperand interface.
 */
export function instanceOfAttributeOperand(value: object): value is AttributeOperand {
    return true;
}

export function AttributeOperandFromJSON(json: any): AttributeOperand {
    return AttributeOperandFromJSONTyped(json, false);
}

export function AttributeOperandFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeOperand {
    if (json == null) {
        return json;
    }
    return {
        
        'NodeId': json['NodeId'] == null ? undefined : json['NodeId'],
        'Alias': json['Alias'] == null ? undefined : json['Alias'],
        'BrowsePath': json['BrowsePath'] == null ? undefined : RelativePathFromJSON(json['BrowsePath']),
        'AttributeId': json['AttributeId'] == null ? undefined : json['AttributeId'],
        'IndexRange': json['IndexRange'] == null ? undefined : json['IndexRange'],
    };
}

  export function AttributeOperandToJSON(json: any): AttributeOperand {
      return AttributeOperandToJSONTyped(json, false);
  }

  export function AttributeOperandToJSONTyped(value?: AttributeOperand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'NodeId': value['NodeId'],
        'Alias': value['Alias'],
        'BrowsePath': RelativePathToJSON(value['BrowsePath']),
        'AttributeId': value['AttributeId'],
        'IndexRange': value['IndexRange'],
    };
}

