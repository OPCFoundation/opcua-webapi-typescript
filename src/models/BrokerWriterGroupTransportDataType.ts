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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part14/6.4.2/#6.4.2.3.5).
 * @export
 * @interface BrokerWriterGroupTransportDataType
 */
export interface BrokerWriterGroupTransportDataType {
    /**
     * 
     * @type {string}
     * @memberof BrokerWriterGroupTransportDataType
     */
    QueueName?: string;
    /**
     * 
     * @type {string}
     * @memberof BrokerWriterGroupTransportDataType
     */
    ResourceUri?: string;
    /**
     * 
     * @type {string}
     * @memberof BrokerWriterGroupTransportDataType
     */
    AuthenticationProfileUri?: string;
    /**
     * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part14/6.4.2/#6.4.2.1).
     * @type {number}
     * @memberof BrokerWriterGroupTransportDataType
     */
    RequestedDeliveryGuarantee?: number;
}

/**
 * Check if a given object implements the BrokerWriterGroupTransportDataType interface.
 */
export function instanceOfBrokerWriterGroupTransportDataType(value: object): value is BrokerWriterGroupTransportDataType {
    return true;
}

export function BrokerWriterGroupTransportDataTypeFromJSON(json: any): BrokerWriterGroupTransportDataType {
    return BrokerWriterGroupTransportDataTypeFromJSONTyped(json, false);
}

export function BrokerWriterGroupTransportDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrokerWriterGroupTransportDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'QueueName': json['QueueName'] == null ? undefined : json['QueueName'],
        'ResourceUri': json['ResourceUri'] == null ? undefined : json['ResourceUri'],
        'AuthenticationProfileUri': json['AuthenticationProfileUri'] == null ? undefined : json['AuthenticationProfileUri'],
        'RequestedDeliveryGuarantee': json['RequestedDeliveryGuarantee'] == null ? undefined : json['RequestedDeliveryGuarantee'],
    };
}

  export function BrokerWriterGroupTransportDataTypeToJSON(json: any): BrokerWriterGroupTransportDataType {
      return BrokerWriterGroupTransportDataTypeToJSONTyped(json, false);
  }

  export function BrokerWriterGroupTransportDataTypeToJSONTyped(value?: BrokerWriterGroupTransportDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'QueueName': value['QueueName'],
        'ResourceUri': value['ResourceUri'],
        'AuthenticationProfileUri': value['AuthenticationProfileUri'],
        'RequestedDeliveryGuarantee': value['RequestedDeliveryGuarantee'],
    };
}

