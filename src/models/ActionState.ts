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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part14/6.2.11/#6.2.11.2.1).
 * @export
 */
export const ActionState = {
    Idle: 0,
    Executing: 1,
    Done: 2
} as const;
export type ActionState = typeof ActionState[keyof typeof ActionState];


export function instanceOfActionState(value: any): boolean {
    for (const key in ActionState) {
        if (Object.prototype.hasOwnProperty.call(ActionState, key)) {
            if (ActionState[key as keyof typeof ActionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ActionStateFromJSON(json: any): ActionState {
    return ActionStateFromJSONTyped(json, false);
}

export function ActionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionState {
    return json as ActionState;
}

export function ActionStateToJSON(value?: ActionState | null): any {
    return value as any;
}

export function ActionStateToJSONTyped(value: any, ignoreDiscriminator: boolean): ActionState {
    return value as ActionState;
}

