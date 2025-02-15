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
import type { Variant } from './Variant';
import {
    VariantFromJSON,
    VariantFromJSONTyped,
    VariantToJSON,
    VariantToJSONTyped,
} from './Variant';
import type { DataSetMetaDataType } from './DataSetMetaDataType';
import {
    DataSetMetaDataTypeFromJSON,
    DataSetMetaDataTypeFromJSONTyped,
    DataSetMetaDataTypeToJSON,
    DataSetMetaDataTypeToJSONTyped,
} from './DataSetMetaDataType';
import type { KeyValuePair } from './KeyValuePair';
import {
    KeyValuePairFromJSON,
    KeyValuePairFromJSONTyped,
    KeyValuePairToJSON,
    KeyValuePairToJSONTyped,
} from './KeyValuePair';
import type { EndpointDescription } from './EndpointDescription';
import {
    EndpointDescriptionFromJSON,
    EndpointDescriptionFromJSONTyped,
    EndpointDescriptionToJSON,
    EndpointDescriptionToJSONTyped,
} from './EndpointDescription';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part14/6.2.9/#6.2.9.13.1).
 * @export
 * @interface DataSetReaderDataType
 */
export interface DataSetReaderDataType {
    /**
     * 
     * @type {string}
     * @memberof DataSetReaderDataType
     */
    Name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DataSetReaderDataType
     */
    Enabled?: boolean;
    /**
     * 
     * @type {Variant}
     * @memberof DataSetReaderDataType
     */
    PublisherId?: Variant;
    /**
     * 
     * @type {number}
     * @memberof DataSetReaderDataType
     */
    WriterGroupId?: number;
    /**
     * 
     * @type {number}
     * @memberof DataSetReaderDataType
     */
    DataSetWriterId?: number;
    /**
     * 
     * @type {DataSetMetaDataType}
     * @memberof DataSetReaderDataType
     */
    DataSetMetaData?: DataSetMetaDataType;
    /**
     * 
     * @type {number}
     * @memberof DataSetReaderDataType
     */
    DataSetFieldContentMask?: number;
    /**
     * 
     * @type {number}
     * @memberof DataSetReaderDataType
     */
    MessageReceiveTimeout?: number;
    /**
     * 
     * @type {number}
     * @memberof DataSetReaderDataType
     */
    KeyFrameCount?: number;
    /**
     * 
     * @type {string}
     * @memberof DataSetReaderDataType
     */
    HeaderLayoutUri?: string;
    /**
     * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part5/12.3.10).
     * @type {number}
     * @memberof DataSetReaderDataType
     */
    SecurityMode?: number;
    /**
     * 
     * @type {string}
     * @memberof DataSetReaderDataType
     */
    SecurityGroupId?: string;
    /**
     * 
     * @type {Array<EndpointDescription>}
     * @memberof DataSetReaderDataType
     */
    SecurityKeyServices?: Array<EndpointDescription>;
    /**
     * 
     * @type {Array<KeyValuePair>}
     * @memberof DataSetReaderDataType
     */
    DataSetReaderProperties?: Array<KeyValuePair>;
    /**
     * 
     * @type {object}
     * @memberof DataSetReaderDataType
     */
    TransportSettings?: object;
    /**
     * 
     * @type {object}
     * @memberof DataSetReaderDataType
     */
    MessageSettings?: object;
    /**
     * 
     * @type {object}
     * @memberof DataSetReaderDataType
     */
    SubscribedDataSet?: object;
}

/**
 * Check if a given object implements the DataSetReaderDataType interface.
 */
export function instanceOfDataSetReaderDataType(value: object): value is DataSetReaderDataType {
    return true;
}

export function DataSetReaderDataTypeFromJSON(json: any): DataSetReaderDataType {
    return DataSetReaderDataTypeFromJSONTyped(json, false);
}

export function DataSetReaderDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataSetReaderDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'Name': json['Name'] == null ? undefined : json['Name'],
        'Enabled': json['Enabled'] == null ? undefined : json['Enabled'],
        'PublisherId': json['PublisherId'] == null ? undefined : VariantFromJSON(json['PublisherId']),
        'WriterGroupId': json['WriterGroupId'] == null ? undefined : json['WriterGroupId'],
        'DataSetWriterId': json['DataSetWriterId'] == null ? undefined : json['DataSetWriterId'],
        'DataSetMetaData': json['DataSetMetaData'] == null ? undefined : DataSetMetaDataTypeFromJSON(json['DataSetMetaData']),
        'DataSetFieldContentMask': json['DataSetFieldContentMask'] == null ? undefined : json['DataSetFieldContentMask'],
        'MessageReceiveTimeout': json['MessageReceiveTimeout'] == null ? undefined : json['MessageReceiveTimeout'],
        'KeyFrameCount': json['KeyFrameCount'] == null ? undefined : json['KeyFrameCount'],
        'HeaderLayoutUri': json['HeaderLayoutUri'] == null ? undefined : json['HeaderLayoutUri'],
        'SecurityMode': json['SecurityMode'] == null ? undefined : json['SecurityMode'],
        'SecurityGroupId': json['SecurityGroupId'] == null ? undefined : json['SecurityGroupId'],
        'SecurityKeyServices': json['SecurityKeyServices'] == null ? undefined : ((json['SecurityKeyServices'] as Array<any>).map(EndpointDescriptionFromJSON)),
        'DataSetReaderProperties': json['DataSetReaderProperties'] == null ? undefined : ((json['DataSetReaderProperties'] as Array<any>).map(KeyValuePairFromJSON)),
        'TransportSettings': json['TransportSettings'] == null ? undefined : json['TransportSettings'],
        'MessageSettings': json['MessageSettings'] == null ? undefined : json['MessageSettings'],
        'SubscribedDataSet': json['SubscribedDataSet'] == null ? undefined : json['SubscribedDataSet'],
    };
}

  export function DataSetReaderDataTypeToJSON(json: any): DataSetReaderDataType {
      return DataSetReaderDataTypeToJSONTyped(json, false);
  }

  export function DataSetReaderDataTypeToJSONTyped(value?: DataSetReaderDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Name': value['Name'],
        'Enabled': value['Enabled'],
        'PublisherId': VariantToJSON(value['PublisherId']),
        'WriterGroupId': value['WriterGroupId'],
        'DataSetWriterId': value['DataSetWriterId'],
        'DataSetMetaData': DataSetMetaDataTypeToJSON(value['DataSetMetaData']),
        'DataSetFieldContentMask': value['DataSetFieldContentMask'],
        'MessageReceiveTimeout': value['MessageReceiveTimeout'],
        'KeyFrameCount': value['KeyFrameCount'],
        'HeaderLayoutUri': value['HeaderLayoutUri'],
        'SecurityMode': value['SecurityMode'],
        'SecurityGroupId': value['SecurityGroupId'],
        'SecurityKeyServices': value['SecurityKeyServices'] == null ? undefined : ((value['SecurityKeyServices'] as Array<any>).map(EndpointDescriptionToJSON)),
        'DataSetReaderProperties': value['DataSetReaderProperties'] == null ? undefined : ((value['DataSetReaderProperties'] as Array<any>).map(KeyValuePairToJSON)),
        'TransportSettings': value['TransportSettings'],
        'MessageSettings': value['MessageSettings'],
        'SubscribedDataSet': value['SubscribedDataSet'],
    };
}

