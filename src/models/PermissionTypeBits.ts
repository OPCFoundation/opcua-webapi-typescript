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


/**
 * 
 * @export
 */
export const PermissionTypeBits = {
    Browse: 1,
    ReadRolePermissions: 2,
    WriteAttribute: 4,
    WriteRolePermissions: 8,
    WriteHistorizing: 16,
    Read: 32,
    Write: 64,
    ReadHistory: 128,
    InsertHistory: 256,
    ModifyHistory: 512,
    DeleteHistory: 1024,
    ReceiveEvents: 2048,
    Call: 4096,
    AddReference: 8192,
    RemoveReference: 16384,
    DeleteNode: 32768,
    AddNode: 65536
} as const;
export type PermissionTypeBits = typeof PermissionTypeBits[keyof typeof PermissionTypeBits];


export function instanceOfPermissionTypeBits(value: any): boolean {
    for (const key in PermissionTypeBits) {
        if (Object.prototype.hasOwnProperty.call(PermissionTypeBits, key)) {
            if (PermissionTypeBits[key as keyof typeof PermissionTypeBits] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PermissionTypeBitsFromJSON(json: any): PermissionTypeBits {
    return PermissionTypeBitsFromJSONTyped(json, false);
}

export function PermissionTypeBitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionTypeBits {
    return json as PermissionTypeBits;
}

export function PermissionTypeBitsToJSON(value?: PermissionTypeBits | null): any {
    return value as any;
}

export function PermissionTypeBitsToJSONTyped(value: any, ignoreDiscriminator: boolean): PermissionTypeBits {
    return value as PermissionTypeBits;
}

