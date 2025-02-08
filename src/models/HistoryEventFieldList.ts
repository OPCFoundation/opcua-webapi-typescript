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

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part11/6.6.4).
 * @export
 * @interface HistoryEventFieldList
 */
export interface HistoryEventFieldList {
    /**
     * 
     * @type {Array<Variant>}
     * @memberof HistoryEventFieldList
     */
    EventFields?: Array<Variant>;
}

/**
 * Check if a given object implements the HistoryEventFieldList interface.
 */
export function instanceOfHistoryEventFieldList(value: object): value is HistoryEventFieldList {
    return true;
}

export function HistoryEventFieldListFromJSON(json: any): HistoryEventFieldList {
    return HistoryEventFieldListFromJSONTyped(json, false);
}

export function HistoryEventFieldListFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryEventFieldList {
    if (json == null) {
        return json;
    }
    return {
        
        'EventFields': json['EventFields'] == null ? undefined : ((json['EventFields'] as Array<any>).map(VariantFromJSON)),
    };
}

  export function HistoryEventFieldListToJSON(json: any): HistoryEventFieldList {
      return HistoryEventFieldListToJSONTyped(json, false);
  }

  export function HistoryEventFieldListToJSONTyped(value?: HistoryEventFieldList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'EventFields': value['EventFields'] == null ? undefined : ((value['EventFields'] as Array<any>).map(VariantToJSON)),
    };
}

