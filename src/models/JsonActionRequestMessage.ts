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
import type { ConfigurationVersionDataType } from './ConfigurationVersionDataType';
import {
    ConfigurationVersionDataTypeFromJSON,
    ConfigurationVersionDataTypeFromJSONTyped,
    ConfigurationVersionDataTypeToJSON,
    ConfigurationVersionDataTypeToJSONTyped,
} from './ConfigurationVersionDataType';

/**
 * [Link to specification]().
 * @export
 * @interface JsonActionRequestMessage
 */
export interface JsonActionRequestMessage {
    /**
     * 
     * @type {number}
     * @memberof JsonActionRequestMessage
     */
    DataSetWriterId?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonActionRequestMessage
     */
    ActionTargetId?: number;
    /**
     * 
     * @type {string}
     * @memberof JsonActionRequestMessage
     */
    DataSetWriterName?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonActionRequestMessage
     */
    WriterGroupName?: string;
    /**
     * 
     * @type {ConfigurationVersionDataType}
     * @memberof JsonActionRequestMessage
     */
    MetaDataVersion?: ConfigurationVersionDataType;
    /**
     * 
     * @type {number}
     * @memberof JsonActionRequestMessage
     */
    MinorVersion?: number;
    /**
     * 
     * @type {Date}
     * @memberof JsonActionRequestMessage
     */
    Timestamp?: Date;
    /**
     * 
     * @type {string}
     * @memberof JsonActionRequestMessage
     */
    MessageType?: string;
    /**
     * 
     * @type {number}
     * @memberof JsonActionRequestMessage
     */
    RequestId?: number;
    /**
     * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part14/6.2.11/#6.2.11.2.1).
     * @type {number}
     * @memberof JsonActionRequestMessage
     */
    ActionState?: number;
    /**
     * 
     * @type {object}
     * @memberof JsonActionRequestMessage
     */
    Payload?: object;
}

/**
 * Check if a given object implements the JsonActionRequestMessage interface.
 */
export function instanceOfJsonActionRequestMessage(value: object): value is JsonActionRequestMessage {
    return true;
}

export function JsonActionRequestMessageFromJSON(json: any): JsonActionRequestMessage {
    return JsonActionRequestMessageFromJSONTyped(json, false);
}

export function JsonActionRequestMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonActionRequestMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'DataSetWriterId': json['DataSetWriterId'] == null ? undefined : json['DataSetWriterId'],
        'ActionTargetId': json['ActionTargetId'] == null ? undefined : json['ActionTargetId'],
        'DataSetWriterName': json['DataSetWriterName'] == null ? undefined : json['DataSetWriterName'],
        'WriterGroupName': json['WriterGroupName'] == null ? undefined : json['WriterGroupName'],
        'MetaDataVersion': json['MetaDataVersion'] == null ? undefined : ConfigurationVersionDataTypeFromJSON(json['MetaDataVersion']),
        'MinorVersion': json['MinorVersion'] == null ? undefined : json['MinorVersion'],
        'Timestamp': json['Timestamp'] == null ? undefined : (new Date(json['Timestamp'])),
        'MessageType': json['MessageType'] == null ? undefined : json['MessageType'],
        'RequestId': json['RequestId'] == null ? undefined : json['RequestId'],
        'ActionState': json['ActionState'] == null ? undefined : json['ActionState'],
        'Payload': json['Payload'] == null ? undefined : json['Payload'],
    };
}

  export function JsonActionRequestMessageToJSON(json: any): JsonActionRequestMessage {
      return JsonActionRequestMessageToJSONTyped(json, false);
  }

  export function JsonActionRequestMessageToJSONTyped(value?: JsonActionRequestMessage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'DataSetWriterId': value['DataSetWriterId'],
        'ActionTargetId': value['ActionTargetId'],
        'DataSetWriterName': value['DataSetWriterName'],
        'WriterGroupName': value['WriterGroupName'],
        'MetaDataVersion': ConfigurationVersionDataTypeToJSON(value['MetaDataVersion']),
        'MinorVersion': value['MinorVersion'],
        'Timestamp': value['Timestamp'] == null ? undefined : ((value['Timestamp']).toISOString()),
        'MessageType': value['MessageType'],
        'RequestId': value['RequestId'],
        'ActionState': value['ActionState'],
        'Payload': value['Payload'],
    };
}

