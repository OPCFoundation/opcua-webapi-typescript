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
import type { Variant } from './Variant';
import {
    VariantFromJSON,
    VariantFromJSONTyped,
    VariantToJSON,
    VariantToJSONTyped,
} from './Variant';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.12.2/#5.12.2.2).
 * @export
 * @interface CallMethodRequest
 */
export interface CallMethodRequest {
    /**
     * 
     * @type {string}
     * @memberof CallMethodRequest
     */
    ObjectId?: string;
    /**
     * 
     * @type {string}
     * @memberof CallMethodRequest
     */
    MethodId?: string;
    /**
     * 
     * @type {Array<Variant>}
     * @memberof CallMethodRequest
     */
    InputArguments?: Array<Variant>;
}

/**
 * Check if a given object implements the CallMethodRequest interface.
 */
export function instanceOfCallMethodRequest(value: object): value is CallMethodRequest {
    return true;
}

export function CallMethodRequestFromJSON(json: any): CallMethodRequest {
    return CallMethodRequestFromJSONTyped(json, false);
}

export function CallMethodRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallMethodRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'ObjectId': json['ObjectId'] == null ? undefined : json['ObjectId'],
        'MethodId': json['MethodId'] == null ? undefined : json['MethodId'],
        'InputArguments': json['InputArguments'] == null ? undefined : ((json['InputArguments'] as Array<any>).map(VariantFromJSON)),
    };
}

  export function CallMethodRequestToJSON(json: any): CallMethodRequest {
      return CallMethodRequestToJSONTyped(json, false);
  }

  export function CallMethodRequestToJSONTyped(value?: CallMethodRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ObjectId': value['ObjectId'],
        'MethodId': value['MethodId'],
        'InputArguments': value['InputArguments'] == null ? undefined : ((value['InputArguments'] as Array<any>).map(VariantToJSON)),
    };
}

