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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part5/12.3.15/#12.3.15.2).
 * @export
 * @interface IssuedIdentityToken
 */
export interface IssuedIdentityToken {
    /**
     * 
     * @type {string}
     * @memberof IssuedIdentityToken
     */
    TokenData?: string;
    /**
     * 
     * @type {string}
     * @memberof IssuedIdentityToken
     */
    EncryptionAlgorithm?: string;
    /**
     * 
     * @type {string}
     * @memberof IssuedIdentityToken
     */
    PolicyId?: string;
}

/**
 * Check if a given object implements the IssuedIdentityToken interface.
 */
export function instanceOfIssuedIdentityToken(value: object): value is IssuedIdentityToken {
    return true;
}

export function IssuedIdentityTokenFromJSON(json: any): IssuedIdentityToken {
    return IssuedIdentityTokenFromJSONTyped(json, false);
}

export function IssuedIdentityTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssuedIdentityToken {
    if (json == null) {
        return json;
    }
    return {
        
        'TokenData': json['TokenData'] == null ? undefined : json['TokenData'],
        'EncryptionAlgorithm': json['EncryptionAlgorithm'] == null ? undefined : json['EncryptionAlgorithm'],
        'PolicyId': json['PolicyId'] == null ? undefined : json['PolicyId'],
    };
}

  export function IssuedIdentityTokenToJSON(json: any): IssuedIdentityToken {
      return IssuedIdentityTokenToJSONTyped(json, false);
  }

  export function IssuedIdentityTokenToJSONTyped(value?: IssuedIdentityToken | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'TokenData': value['TokenData'],
        'EncryptionAlgorithm': value['EncryptionAlgorithm'],
        'PolicyId': value['PolicyId'],
    };
}

