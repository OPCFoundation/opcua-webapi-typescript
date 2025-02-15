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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part5/12.2.5/#12.2.5.2).
 * @export
 */
export const NodeClass = {
    Unspecified: 0,
    Object: 1,
    Variable: 2,
    Method: 4,
    ObjectType: 8,
    VariableType: 16,
    ReferenceType: 32,
    DataType: 64,
    View: 128
} as const;
export type NodeClass = typeof NodeClass[keyof typeof NodeClass];


export function instanceOfNodeClass(value: any): boolean {
    for (const key in NodeClass) {
        if (Object.prototype.hasOwnProperty.call(NodeClass, key)) {
            if (NodeClass[key as keyof typeof NodeClass] === value) {
                return true;
            }
        }
    }
    return false;
}

export function NodeClassFromJSON(json: any): NodeClass {
    return NodeClassFromJSONTyped(json, false);
}

export function NodeClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeClass {
    return json as NodeClass;
}

export function NodeClassToJSON(value?: NodeClass | null): any {
    return value as any;
}

export function NodeClassToJSONTyped(value: any, ignoreDiscriminator: boolean): NodeClass {
    return value as NodeClass;
}

