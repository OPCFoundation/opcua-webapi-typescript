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
 * 
 * @export
 * @interface X509IdentityToken
 */
export interface X509IdentityToken {
    /**
     * 
     * @type {string}
     * @memberof X509IdentityToken
     */
    CertificateData?: string;
    /**
     * 
     * @type {string}
     * @memberof X509IdentityToken
     */
    PolicyId?: string;
}

/**
 * Check if a given object implements the X509IdentityToken interface.
 */
export function instanceOfX509IdentityToken(value: object): value is X509IdentityToken {
    return true;
}

export function X509IdentityTokenFromJSON(json: any): X509IdentityToken {
    return X509IdentityTokenFromJSONTyped(json, false);
}

export function X509IdentityTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): X509IdentityToken {
    if (json == null) {
        return json;
    }
    return {
        
        'CertificateData': json['CertificateData'] == null ? undefined : json['CertificateData'],
        'PolicyId': json['PolicyId'] == null ? undefined : json['PolicyId'],
    };
}

  export function X509IdentityTokenToJSON(json: any): X509IdentityToken {
      return X509IdentityTokenToJSONTyped(json, false);
  }

  export function X509IdentityTokenToJSONTyped(value?: X509IdentityToken | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'CertificateData': value['CertificateData'],
        'PolicyId': value['PolicyId'],
    };
}

