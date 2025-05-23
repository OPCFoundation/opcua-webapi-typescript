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
import type { FieldMetaData } from './FieldMetaData';
import {
    FieldMetaDataFromJSON,
    FieldMetaDataFromJSONTyped,
    FieldMetaDataToJSON,
    FieldMetaDataToJSONTyped,
} from './FieldMetaData';
import type { SimpleTypeDescription } from './SimpleTypeDescription';
import {
    SimpleTypeDescriptionFromJSON,
    SimpleTypeDescriptionFromJSONTyped,
    SimpleTypeDescriptionToJSON,
    SimpleTypeDescriptionToJSONTyped,
} from './SimpleTypeDescription';
import type { LocalizedText } from './LocalizedText';
import {
    LocalizedTextFromJSON,
    LocalizedTextFromJSONTyped,
    LocalizedTextToJSON,
    LocalizedTextToJSONTyped,
} from './LocalizedText';
import type { EnumDescription } from './EnumDescription';
import {
    EnumDescriptionFromJSON,
    EnumDescriptionFromJSONTyped,
    EnumDescriptionToJSON,
    EnumDescriptionToJSONTyped,
} from './EnumDescription';
import type { StructureDescription } from './StructureDescription';
import {
    StructureDescriptionFromJSON,
    StructureDescriptionFromJSONTyped,
    StructureDescriptionToJSON,
    StructureDescriptionToJSONTyped,
} from './StructureDescription';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part14/6.2.3/#6.2.3.2.3).
 * @export
 * @interface DataSetMetaDataType
 */
export interface DataSetMetaDataType {
    /**
     * 
     * @type {string}
     * @memberof DataSetMetaDataType
     */
    Name?: string;
    /**
     * 
     * @type {LocalizedText}
     * @memberof DataSetMetaDataType
     */
    Description?: LocalizedText;
    /**
     * 
     * @type {Array<FieldMetaData>}
     * @memberof DataSetMetaDataType
     */
    Fields?: Array<FieldMetaData>;
    /**
     * 
     * @type {string}
     * @memberof DataSetMetaDataType
     */
    DataSetClassId?: string;
    /**
     * 
     * @type {ConfigurationVersionDataType}
     * @memberof DataSetMetaDataType
     */
    ConfigurationVersion?: ConfigurationVersionDataType;
    /**
     * 
     * @type {Array<string>}
     * @memberof DataSetMetaDataType
     */
    Namespaces?: Array<string>;
    /**
     * 
     * @type {Array<StructureDescription>}
     * @memberof DataSetMetaDataType
     */
    StructureDataTypes?: Array<StructureDescription>;
    /**
     * 
     * @type {Array<EnumDescription>}
     * @memberof DataSetMetaDataType
     */
    EnumDataTypes?: Array<EnumDescription>;
    /**
     * 
     * @type {Array<SimpleTypeDescription>}
     * @memberof DataSetMetaDataType
     */
    SimpleDataTypes?: Array<SimpleTypeDescription>;
}

/**
 * Check if a given object implements the DataSetMetaDataType interface.
 */
export function instanceOfDataSetMetaDataType(value: object): value is DataSetMetaDataType {
    return true;
}

export function DataSetMetaDataTypeFromJSON(json: any): DataSetMetaDataType {
    return DataSetMetaDataTypeFromJSONTyped(json, false);
}

export function DataSetMetaDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataSetMetaDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'Name': json['Name'] == null ? undefined : json['Name'],
        'Description': json['Description'] == null ? undefined : LocalizedTextFromJSON(json['Description']),
        'Fields': json['Fields'] == null ? undefined : ((json['Fields'] as Array<any>).map(FieldMetaDataFromJSON)),
        'DataSetClassId': json['DataSetClassId'] == null ? undefined : json['DataSetClassId'],
        'ConfigurationVersion': json['ConfigurationVersion'] == null ? undefined : ConfigurationVersionDataTypeFromJSON(json['ConfigurationVersion']),
        'Namespaces': json['Namespaces'] == null ? undefined : json['Namespaces'],
        'StructureDataTypes': json['StructureDataTypes'] == null ? undefined : ((json['StructureDataTypes'] as Array<any>).map(StructureDescriptionFromJSON)),
        'EnumDataTypes': json['EnumDataTypes'] == null ? undefined : ((json['EnumDataTypes'] as Array<any>).map(EnumDescriptionFromJSON)),
        'SimpleDataTypes': json['SimpleDataTypes'] == null ? undefined : ((json['SimpleDataTypes'] as Array<any>).map(SimpleTypeDescriptionFromJSON)),
    };
}

  export function DataSetMetaDataTypeToJSON(json: any): DataSetMetaDataType {
      return DataSetMetaDataTypeToJSONTyped(json, false);
  }

  export function DataSetMetaDataTypeToJSONTyped(value?: DataSetMetaDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Name': value['Name'],
        'Description': LocalizedTextToJSON(value['Description']),
        'Fields': value['Fields'] == null ? undefined : ((value['Fields'] as Array<any>).map(FieldMetaDataToJSON)),
        'DataSetClassId': value['DataSetClassId'],
        'ConfigurationVersion': ConfigurationVersionDataTypeToJSON(value['ConfigurationVersion']),
        'Namespaces': value['Namespaces'],
        'StructureDataTypes': value['StructureDataTypes'] == null ? undefined : ((value['StructureDataTypes'] as Array<any>).map(StructureDescriptionToJSON)),
        'EnumDataTypes': value['EnumDataTypes'] == null ? undefined : ((value['EnumDataTypes'] as Array<any>).map(EnumDescriptionToJSON)),
        'SimpleDataTypes': value['SimpleDataTypes'] == null ? undefined : ((value['SimpleDataTypes'] as Array<any>).map(SimpleTypeDescriptionToJSON)),
    };
}

