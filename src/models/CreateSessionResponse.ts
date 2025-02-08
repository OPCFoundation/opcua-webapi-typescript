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
import type { SignatureData } from './SignatureData';
import {
    SignatureDataFromJSON,
    SignatureDataFromJSONTyped,
    SignatureDataToJSON,
    SignatureDataToJSONTyped,
} from './SignatureData';
import type { ResponseHeader } from './ResponseHeader';
import {
    ResponseHeaderFromJSON,
    ResponseHeaderFromJSONTyped,
    ResponseHeaderToJSON,
    ResponseHeaderToJSONTyped,
} from './ResponseHeader';
import type { SignedSoftwareCertificate } from './SignedSoftwareCertificate';
import {
    SignedSoftwareCertificateFromJSON,
    SignedSoftwareCertificateFromJSONTyped,
    SignedSoftwareCertificateToJSON,
    SignedSoftwareCertificateToJSONTyped,
} from './SignedSoftwareCertificate';
import type { EndpointDescription } from './EndpointDescription';
import {
    EndpointDescriptionFromJSON,
    EndpointDescriptionFromJSONTyped,
    EndpointDescriptionToJSON,
    EndpointDescriptionToJSONTyped,
} from './EndpointDescription';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.7.2/#5.7.2.2).
 * @export
 * @interface CreateSessionResponse
 */
export interface CreateSessionResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof CreateSessionResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {string}
     * @memberof CreateSessionResponse
     */
    SessionId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSessionResponse
     */
    AuthenticationToken?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateSessionResponse
     */
    RevisedSessionTimeout?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateSessionResponse
     */
    ServerNonce?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSessionResponse
     */
    ServerCertificate?: string;
    /**
     * 
     * @type {Array<EndpointDescription>}
     * @memberof CreateSessionResponse
     */
    ServerEndpoints?: Array<EndpointDescription>;
    /**
     * 
     * @type {Array<SignedSoftwareCertificate>}
     * @memberof CreateSessionResponse
     */
    ServerSoftwareCertificates?: Array<SignedSoftwareCertificate>;
    /**
     * 
     * @type {SignatureData}
     * @memberof CreateSessionResponse
     */
    ServerSignature?: SignatureData;
    /**
     * 
     * @type {number}
     * @memberof CreateSessionResponse
     */
    MaxRequestMessageSize?: number;
}

/**
 * Check if a given object implements the CreateSessionResponse interface.
 */
export function instanceOfCreateSessionResponse(value: object): value is CreateSessionResponse {
    return true;
}

export function CreateSessionResponseFromJSON(json: any): CreateSessionResponse {
    return CreateSessionResponseFromJSONTyped(json, false);
}

export function CreateSessionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSessionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ResponseHeader': json['ResponseHeader'] == null ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'SessionId': json['SessionId'] == null ? undefined : json['SessionId'],
        'AuthenticationToken': json['AuthenticationToken'] == null ? undefined : json['AuthenticationToken'],
        'RevisedSessionTimeout': json['RevisedSessionTimeout'] == null ? undefined : json['RevisedSessionTimeout'],
        'ServerNonce': json['ServerNonce'] == null ? undefined : json['ServerNonce'],
        'ServerCertificate': json['ServerCertificate'] == null ? undefined : json['ServerCertificate'],
        'ServerEndpoints': json['ServerEndpoints'] == null ? undefined : ((json['ServerEndpoints'] as Array<any>).map(EndpointDescriptionFromJSON)),
        'ServerSoftwareCertificates': json['ServerSoftwareCertificates'] == null ? undefined : ((json['ServerSoftwareCertificates'] as Array<any>).map(SignedSoftwareCertificateFromJSON)),
        'ServerSignature': json['ServerSignature'] == null ? undefined : SignatureDataFromJSON(json['ServerSignature']),
        'MaxRequestMessageSize': json['MaxRequestMessageSize'] == null ? undefined : json['MaxRequestMessageSize'],
    };
}

  export function CreateSessionResponseToJSON(json: any): CreateSessionResponse {
      return CreateSessionResponseToJSONTyped(json, false);
  }

  export function CreateSessionResponseToJSONTyped(value?: CreateSessionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value['ResponseHeader']),
        'SessionId': value['SessionId'],
        'AuthenticationToken': value['AuthenticationToken'],
        'RevisedSessionTimeout': value['RevisedSessionTimeout'],
        'ServerNonce': value['ServerNonce'],
        'ServerCertificate': value['ServerCertificate'],
        'ServerEndpoints': value['ServerEndpoints'] == null ? undefined : ((value['ServerEndpoints'] as Array<any>).map(EndpointDescriptionToJSON)),
        'ServerSoftwareCertificates': value['ServerSoftwareCertificates'] == null ? undefined : ((value['ServerSoftwareCertificates'] as Array<any>).map(SignedSoftwareCertificateToJSON)),
        'ServerSignature': SignatureDataToJSON(value['ServerSignature']),
        'MaxRequestMessageSize': value['MaxRequestMessageSize'],
    };
}

