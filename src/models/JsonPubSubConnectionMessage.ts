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
import type { PubSubConnectionDataType } from './PubSubConnectionDataType';
import {
    PubSubConnectionDataTypeFromJSON,
    PubSubConnectionDataTypeFromJSONTyped,
    PubSubConnectionDataTypeToJSON,
    PubSubConnectionDataTypeToJSONTyped,
} from './PubSubConnectionDataType';

/**
 * 
 * @export
 * @interface JsonPubSubConnectionMessage
 */
export interface JsonPubSubConnectionMessage {
    /**
     * 
     * @type {string}
     * @memberof JsonPubSubConnectionMessage
     */
    MessageId?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonPubSubConnectionMessage
     */
    MessageType?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonPubSubConnectionMessage
     */
    PublisherId?: string;
    /**
     * 
     * @type {Date}
     * @memberof JsonPubSubConnectionMessage
     */
    Timestamp?: Date;
    /**
     * 
     * @type {PubSubConnectionDataType}
     * @memberof JsonPubSubConnectionMessage
     */
    Connection?: PubSubConnectionDataType;
}

/**
 * Check if a given object implements the JsonPubSubConnectionMessage interface.
 */
export function instanceOfJsonPubSubConnectionMessage(value: object): value is JsonPubSubConnectionMessage {
    return true;
}

export function JsonPubSubConnectionMessageFromJSON(json: any): JsonPubSubConnectionMessage {
    return JsonPubSubConnectionMessageFromJSONTyped(json, false);
}

export function JsonPubSubConnectionMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonPubSubConnectionMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'MessageId': json['MessageId'] == null ? undefined : json['MessageId'],
        'MessageType': json['MessageType'] == null ? undefined : json['MessageType'],
        'PublisherId': json['PublisherId'] == null ? undefined : json['PublisherId'],
        'Timestamp': json['Timestamp'] == null ? undefined : (new Date(json['Timestamp'])),
        'Connection': json['Connection'] == null ? undefined : PubSubConnectionDataTypeFromJSON(json['Connection']),
    };
}

  export function JsonPubSubConnectionMessageToJSON(json: any): JsonPubSubConnectionMessage {
      return JsonPubSubConnectionMessageToJSONTyped(json, false);
  }

  export function JsonPubSubConnectionMessageToJSONTyped(value?: JsonPubSubConnectionMessage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'MessageId': value['MessageId'],
        'MessageType': value['MessageType'],
        'PublisherId': value['PublisherId'],
        'Timestamp': value['Timestamp'] == null ? undefined : ((value['Timestamp']).toISOString()),
        'Connection': PubSubConnectionDataTypeToJSON(value['Connection']),
    };
}

