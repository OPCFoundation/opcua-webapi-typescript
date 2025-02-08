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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part11/6.9.2/#6.9.2.1).
 * @export
 * @interface UpdateDataDetails
 */
export interface UpdateDataDetails {
    /**
     * 
     * @type {string}
     * @memberof UpdateDataDetails
     */
    NodeId?: string;
    /**
     * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part11/6.8).
     * @type {number}
     * @memberof UpdateDataDetails
     */
    PerformInsertReplace?: number;
    /**
     * 
     * @type {Array<DataValue>}
     * @memberof UpdateDataDetails
     */
    UpdateValues?: Array<DataValue>;
}

/**
 * Check if a given object implements the UpdateDataDetails interface.
 */
export function instanceOfUpdateDataDetails(value: object): value is UpdateDataDetails {
    return true;
}

export function UpdateDataDetailsFromJSON(json: any): UpdateDataDetails {
    return UpdateDataDetailsFromJSONTyped(json, false);
}

export function UpdateDataDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateDataDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'NodeId': json['NodeId'] == null ? undefined : json['NodeId'],
        'PerformInsertReplace': json['PerformInsertReplace'] == null ? undefined : json['PerformInsertReplace'],
        'UpdateValues': json['UpdateValues'] == null ? undefined : ((json['UpdateValues'] as Array<any>).map(DataValueFromJSON)),
    };
}

  export function UpdateDataDetailsToJSON(json: any): UpdateDataDetails {
      return UpdateDataDetailsToJSONTyped(json, false);
  }

  export function UpdateDataDetailsToJSONTyped(value?: UpdateDataDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'NodeId': value['NodeId'],
        'PerformInsertReplace': value['PerformInsertReplace'],
        'UpdateValues': value['UpdateValues'] == null ? undefined : ((value['UpdateValues'] as Array<any>).map(DataValueToJSON)),
    };
}

