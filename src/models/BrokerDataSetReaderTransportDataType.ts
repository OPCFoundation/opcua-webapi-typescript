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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part14/6.4.2/#6.4.2.6.6).
 * @export
 * @interface BrokerDataSetReaderTransportDataType
 */
export interface BrokerDataSetReaderTransportDataType {
    /**
     * 
     * @type {string}
     * @memberof BrokerDataSetReaderTransportDataType
     */
    QueueName?: string;
    /**
     * 
     * @type {string}
     * @memberof BrokerDataSetReaderTransportDataType
     */
    ResourceUri?: string;
    /**
     * 
     * @type {string}
     * @memberof BrokerDataSetReaderTransportDataType
     */
    AuthenticationProfileUri?: string;
    /**
     * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part14/6.4.2/#6.4.2.1).
     * @type {number}
     * @memberof BrokerDataSetReaderTransportDataType
     */
    RequestedDeliveryGuarantee?: number;
    /**
     * 
     * @type {string}
     * @memberof BrokerDataSetReaderTransportDataType
     */
    MetaDataQueueName?: string;
}

/**
 * Check if a given object implements the BrokerDataSetReaderTransportDataType interface.
 */
export function instanceOfBrokerDataSetReaderTransportDataType(value: object): value is BrokerDataSetReaderTransportDataType {
    return true;
}

export function BrokerDataSetReaderTransportDataTypeFromJSON(json: any): BrokerDataSetReaderTransportDataType {
    return BrokerDataSetReaderTransportDataTypeFromJSONTyped(json, false);
}

export function BrokerDataSetReaderTransportDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrokerDataSetReaderTransportDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'QueueName': json['QueueName'] == null ? undefined : json['QueueName'],
        'ResourceUri': json['ResourceUri'] == null ? undefined : json['ResourceUri'],
        'AuthenticationProfileUri': json['AuthenticationProfileUri'] == null ? undefined : json['AuthenticationProfileUri'],
        'RequestedDeliveryGuarantee': json['RequestedDeliveryGuarantee'] == null ? undefined : json['RequestedDeliveryGuarantee'],
        'MetaDataQueueName': json['MetaDataQueueName'] == null ? undefined : json['MetaDataQueueName'],
    };
}

  export function BrokerDataSetReaderTransportDataTypeToJSON(json: any): BrokerDataSetReaderTransportDataType {
      return BrokerDataSetReaderTransportDataTypeToJSONTyped(json, false);
  }

  export function BrokerDataSetReaderTransportDataTypeToJSONTyped(value?: BrokerDataSetReaderTransportDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'QueueName': value['QueueName'],
        'ResourceUri': value['ResourceUri'],
        'AuthenticationProfileUri': value['AuthenticationProfileUri'],
        'RequestedDeliveryGuarantee': value['RequestedDeliveryGuarantee'],
        'MetaDataQueueName': value['MetaDataQueueName'],
    };
}

