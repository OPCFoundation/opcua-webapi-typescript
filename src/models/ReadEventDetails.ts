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
import type { EventFilter } from './EventFilter';
import {
    EventFilterFromJSON,
    EventFilterFromJSONTyped,
    EventFilterToJSON,
    EventFilterToJSONTyped,
} from './EventFilter';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part11/6.5.2/#6.5.2.1).
 * @export
 * @interface ReadEventDetails
 */
export interface ReadEventDetails {
    /**
     * 
     * @type {number}
     * @memberof ReadEventDetails
     */
    NumValuesPerNode?: number;
    /**
     * 
     * @type {Date}
     * @memberof ReadEventDetails
     */
    StartTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ReadEventDetails
     */
    EndTime?: Date;
    /**
     * 
     * @type {EventFilter}
     * @memberof ReadEventDetails
     */
    Filter?: EventFilter;
}

/**
 * Check if a given object implements the ReadEventDetails interface.
 */
export function instanceOfReadEventDetails(value: object): value is ReadEventDetails {
    return true;
}

export function ReadEventDetailsFromJSON(json: any): ReadEventDetails {
    return ReadEventDetailsFromJSONTyped(json, false);
}

export function ReadEventDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadEventDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'NumValuesPerNode': json['NumValuesPerNode'] == null ? undefined : json['NumValuesPerNode'],
        'StartTime': json['StartTime'] == null ? undefined : (new Date(json['StartTime'])),
        'EndTime': json['EndTime'] == null ? undefined : (new Date(json['EndTime'])),
        'Filter': json['Filter'] == null ? undefined : EventFilterFromJSON(json['Filter']),
    };
}

  export function ReadEventDetailsToJSON(json: any): ReadEventDetails {
      return ReadEventDetailsToJSONTyped(json, false);
  }

  export function ReadEventDetailsToJSONTyped(value?: ReadEventDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'NumValuesPerNode': value['NumValuesPerNode'],
        'StartTime': value['StartTime'] == null ? undefined : ((value['StartTime']).toISOString()),
        'EndTime': value['EndTime'] == null ? undefined : ((value['EndTime']).toISOString()),
        'Filter': EventFilterToJSON(value['Filter']),
    };
}

