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
import type { StatusCode } from './StatusCode';
import {
    StatusCodeFromJSON,
    StatusCodeFromJSONTyped,
    StatusCodeToJSON,
    StatusCodeToJSONTyped,
} from './StatusCode';

/**
 * [Link to specification]().
 * @export
 * @interface JsonActionResponseMessage
 */
export interface JsonActionResponseMessage {
    /**
     * 
     * @type {number}
     * @memberof JsonActionResponseMessage
     */
    DataSetWriterId?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonActionResponseMessage
     */
    ActionTargetId?: number;
    /**
     * 
     * @type {string}
     * @memberof JsonActionResponseMessage
     */
    DataSetWriterName?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonActionResponseMessage
     */
    WriterGroupName?: string;
    /**
     * 
     * @type {ConfigurationVersionDataType}
     * @memberof JsonActionResponseMessage
     */
    MetaDataVersion?: ConfigurationVersionDataType;
    /**
     * 
     * @type {number}
     * @memberof JsonActionResponseMessage
     */
    MinorVersion?: number;
    /**
     * 
     * @type {Date}
     * @memberof JsonActionResponseMessage
     */
    Timestamp?: Date;
    /**
     * 
     * @type {StatusCode}
     * @memberof JsonActionResponseMessage
     */
    Status?: StatusCode;
    /**
     * 
     * @type {string}
     * @memberof JsonActionResponseMessage
     */
    MessageType?: string;
    /**
     * 
     * @type {number}
     * @memberof JsonActionResponseMessage
     */
    RequestId?: number;
    /**
     * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part14/6.2.11/#6.2.11.2.1).
     * @type {number}
     * @memberof JsonActionResponseMessage
     */
    ActionState?: number;
    /**
     * 
     * @type {object}
     * @memberof JsonActionResponseMessage
     */
    Payload?: object;
}

/**
 * Check if a given object implements the JsonActionResponseMessage interface.
 */
export function instanceOfJsonActionResponseMessage(value: object): value is JsonActionResponseMessage {
    return true;
}

export function JsonActionResponseMessageFromJSON(json: any): JsonActionResponseMessage {
    return JsonActionResponseMessageFromJSONTyped(json, false);
}

export function JsonActionResponseMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonActionResponseMessage {
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
        'Status': json['Status'] == null ? undefined : StatusCodeFromJSON(json['Status']),
        'MessageType': json['MessageType'] == null ? undefined : json['MessageType'],
        'RequestId': json['RequestId'] == null ? undefined : json['RequestId'],
        'ActionState': json['ActionState'] == null ? undefined : json['ActionState'],
        'Payload': json['Payload'] == null ? undefined : json['Payload'],
    };
}

  export function JsonActionResponseMessageToJSON(json: any): JsonActionResponseMessage {
      return JsonActionResponseMessageToJSONTyped(json, false);
  }

  export function JsonActionResponseMessageToJSONTyped(value?: JsonActionResponseMessage | null, ignoreDiscriminator: boolean = false): any {
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
        'Status': StatusCodeToJSON(value['Status']),
        'MessageType': value['MessageType'],
        'RequestId': value['RequestId'],
        'ActionState': value['ActionState'],
        'Payload': value['Payload'],
    };
}

