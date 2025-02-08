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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part5/12.2.12/#12.2.12.9).
 * @export
 * @interface RolePermissionType
 */
export interface RolePermissionType {
    /**
     * 
     * @type {string}
     * @memberof RolePermissionType
     */
    RoleId?: string;
    /**
     * 
     * @type {number}
     * @memberof RolePermissionType
     */
    Permissions?: number;
}

/**
 * Check if a given object implements the RolePermissionType interface.
 */
export function instanceOfRolePermissionType(value: object): value is RolePermissionType {
    return true;
}

export function RolePermissionTypeFromJSON(json: any): RolePermissionType {
    return RolePermissionTypeFromJSONTyped(json, false);
}

export function RolePermissionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RolePermissionType {
    if (json == null) {
        return json;
    }
    return {
        
        'RoleId': json['RoleId'] == null ? undefined : json['RoleId'],
        'Permissions': json['Permissions'] == null ? undefined : json['Permissions'],
    };
}

  export function RolePermissionTypeToJSON(json: any): RolePermissionType {
      return RolePermissionTypeToJSONTyped(json, false);
  }

  export function RolePermissionTypeToJSONTyped(value?: RolePermissionType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RoleId': value['RoleId'],
        'Permissions': value['Permissions'],
    };
}

