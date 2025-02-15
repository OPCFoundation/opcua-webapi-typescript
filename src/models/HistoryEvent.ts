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
import type { HistoryEventFieldList } from './HistoryEventFieldList';
import {
    HistoryEventFieldListFromJSON,
    HistoryEventFieldListFromJSONTyped,
    HistoryEventFieldListToJSON,
    HistoryEventFieldListToJSONTyped,
} from './HistoryEventFieldList';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part11/6.6.4).
 * @export
 * @interface HistoryEvent
 */
export interface HistoryEvent {
    /**
     * 
     * @type {Array<HistoryEventFieldList>}
     * @memberof HistoryEvent
     */
    Events?: Array<HistoryEventFieldList>;
}

/**
 * Check if a given object implements the HistoryEvent interface.
 */
export function instanceOfHistoryEvent(value: object): value is HistoryEvent {
    return true;
}

export function HistoryEventFromJSON(json: any): HistoryEvent {
    return HistoryEventFromJSONTyped(json, false);
}

export function HistoryEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryEvent {
    if (json == null) {
        return json;
    }
    return {
        
        'Events': json['Events'] == null ? undefined : ((json['Events'] as Array<any>).map(HistoryEventFieldListFromJSON)),
    };
}

  export function HistoryEventToJSON(json: any): HistoryEvent {
      return HistoryEventToJSONTyped(json, false);
  }

  export function HistoryEventToJSONTyped(value?: HistoryEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Events': value['Events'] == null ? undefined : ((value['Events'] as Array<any>).map(HistoryEventFieldListToJSON)),
    };
}

