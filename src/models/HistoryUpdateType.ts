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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part11/6.7).
 * @export
 */
export const HistoryUpdateType = {
    Insert: 1,
    Replace: 2,
    Update: 3,
    Delete: 4
} as const;
export type HistoryUpdateType = typeof HistoryUpdateType[keyof typeof HistoryUpdateType];


export function instanceOfHistoryUpdateType(value: any): boolean {
    for (const key in HistoryUpdateType) {
        if (Object.prototype.hasOwnProperty.call(HistoryUpdateType, key)) {
            if (HistoryUpdateType[key as keyof typeof HistoryUpdateType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function HistoryUpdateTypeFromJSON(json: any): HistoryUpdateType {
    return HistoryUpdateTypeFromJSONTyped(json, false);
}

export function HistoryUpdateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryUpdateType {
    return json as HistoryUpdateType;
}

export function HistoryUpdateTypeToJSON(value?: HistoryUpdateType | null): any {
    return value as any;
}

export function HistoryUpdateTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): HistoryUpdateType {
    return value as HistoryUpdateType;
}

