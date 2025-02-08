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
import type { EndpointDescription } from './EndpointDescription';
import {
    EndpointDescriptionFromJSON,
    EndpointDescriptionFromJSONTyped,
    EndpointDescriptionToJSON,
    EndpointDescriptionToJSONTyped,
} from './EndpointDescription';
import type { ApplicationDescription } from './ApplicationDescription';
import {
    ApplicationDescriptionFromJSON,
    ApplicationDescriptionFromJSONTyped,
    ApplicationDescriptionToJSON,
    ApplicationDescriptionToJSONTyped,
} from './ApplicationDescription';

/**
 * [Link to specification]().
 * @export
 * @interface JsonServerEndpointsMessage
 */
export interface JsonServerEndpointsMessage {
    /**
     * 
     * @type {string}
     * @memberof JsonServerEndpointsMessage
     */
    MessageId?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonServerEndpointsMessage
     */
    MessageType?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonServerEndpointsMessage
     */
    PublisherId?: string;
    /**
     * 
     * @type {Date}
     * @memberof JsonServerEndpointsMessage
     */
    Timestamp?: Date;
    /**
     * 
     * @type {ApplicationDescription}
     * @memberof JsonServerEndpointsMessage
     */
    Description?: ApplicationDescription;
    /**
     * 
     * @type {Array<EndpointDescription>}
     * @memberof JsonServerEndpointsMessage
     */
    Endpoints?: Array<EndpointDescription>;
}

/**
 * Check if a given object implements the JsonServerEndpointsMessage interface.
 */
export function instanceOfJsonServerEndpointsMessage(value: object): value is JsonServerEndpointsMessage {
    return true;
}

export function JsonServerEndpointsMessageFromJSON(json: any): JsonServerEndpointsMessage {
    return JsonServerEndpointsMessageFromJSONTyped(json, false);
}

export function JsonServerEndpointsMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonServerEndpointsMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'MessageId': json['MessageId'] == null ? undefined : json['MessageId'],
        'MessageType': json['MessageType'] == null ? undefined : json['MessageType'],
        'PublisherId': json['PublisherId'] == null ? undefined : json['PublisherId'],
        'Timestamp': json['Timestamp'] == null ? undefined : (new Date(json['Timestamp'])),
        'Description': json['Description'] == null ? undefined : ApplicationDescriptionFromJSON(json['Description']),
        'Endpoints': json['Endpoints'] == null ? undefined : ((json['Endpoints'] as Array<any>).map(EndpointDescriptionFromJSON)),
    };
}

  export function JsonServerEndpointsMessageToJSON(json: any): JsonServerEndpointsMessage {
      return JsonServerEndpointsMessageToJSONTyped(json, false);
  }

  export function JsonServerEndpointsMessageToJSONTyped(value?: JsonServerEndpointsMessage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'MessageId': value['MessageId'],
        'MessageType': value['MessageType'],
        'PublisherId': value['PublisherId'],
        'Timestamp': value['Timestamp'] == null ? undefined : ((value['Timestamp']).toISOString()),
        'Description': ApplicationDescriptionToJSON(value['Description']),
        'Endpoints': value['Endpoints'] == null ? undefined : ((value['Endpoints'] as Array<any>).map(EndpointDescriptionToJSON)),
    };
}

