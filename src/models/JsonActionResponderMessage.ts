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
 * @interface JsonActionResponderMessage
 */
export interface JsonActionResponderMessage {
    /**
     * 
     * @type {string}
     * @memberof JsonActionResponderMessage
     */
    MessageId?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonActionResponderMessage
     */
    MessageType?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonActionResponderMessage
     */
    PublisherId?: string;
    /**
     * 
     * @type {Date}
     * @memberof JsonActionResponderMessage
     */
    Timestamp?: Date;
    /**
     * 
     * @type {PubSubConnectionDataType}
     * @memberof JsonActionResponderMessage
     */
    Connection?: PubSubConnectionDataType;
}

/**
 * Check if a given object implements the JsonActionResponderMessage interface.
 */
export function instanceOfJsonActionResponderMessage(value: object): value is JsonActionResponderMessage {
    return true;
}

export function JsonActionResponderMessageFromJSON(json: any): JsonActionResponderMessage {
    return JsonActionResponderMessageFromJSONTyped(json, false);
}

export function JsonActionResponderMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonActionResponderMessage {
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

  export function JsonActionResponderMessageToJSON(json: any): JsonActionResponderMessage {
      return JsonActionResponderMessageToJSONTyped(json, false);
  }

  export function JsonActionResponderMessageToJSONTyped(value?: JsonActionResponderMessage | null, ignoreDiscriminator: boolean = false): any {
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

