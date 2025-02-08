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
import type { DataValue } from './DataValue';
import {
    DataValueFromJSON,
    DataValueFromJSONTyped,
    DataValueToJSON,
    DataValueToJSONTyped,
} from './DataValue';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part11/6.9.3/#6.9.3.1).
 * @export
 * @interface UpdateStructureDataDetails
 */
export interface UpdateStructureDataDetails {
    /**
     * 
     * @type {string}
     * @memberof UpdateStructureDataDetails
     */
    NodeId?: string;
    /**
     * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part11/6.8).
     * @type {number}
     * @memberof UpdateStructureDataDetails
     */
    PerformInsertReplace?: number;
    /**
     * 
     * @type {Array<DataValue>}
     * @memberof UpdateStructureDataDetails
     */
    UpdateValues?: Array<DataValue>;
}

/**
 * Check if a given object implements the UpdateStructureDataDetails interface.
 */
export function instanceOfUpdateStructureDataDetails(value: object): value is UpdateStructureDataDetails {
    return true;
}

export function UpdateStructureDataDetailsFromJSON(json: any): UpdateStructureDataDetails {
    return UpdateStructureDataDetailsFromJSONTyped(json, false);
}

export function UpdateStructureDataDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateStructureDataDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'NodeId': json['NodeId'] == null ? undefined : json['NodeId'],
        'PerformInsertReplace': json['PerformInsertReplace'] == null ? undefined : json['PerformInsertReplace'],
        'UpdateValues': json['UpdateValues'] == null ? undefined : ((json['UpdateValues'] as Array<any>).map(DataValueFromJSON)),
    };
}

  export function UpdateStructureDataDetailsToJSON(json: any): UpdateStructureDataDetails {
      return UpdateStructureDataDetailsToJSONTyped(json, false);
  }

  export function UpdateStructureDataDetailsToJSONTyped(value?: UpdateStructureDataDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'NodeId': value['NodeId'],
        'PerformInsertReplace': value['PerformInsertReplace'],
        'UpdateValues': value['UpdateValues'] == null ? undefined : ((value['UpdateValues'] as Array<any>).map(DataValueToJSON)),
    };
}

