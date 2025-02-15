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
import type { ResponseHeader } from './ResponseHeader';
import {
    ResponseHeaderFromJSON,
    ResponseHeaderFromJSONTyped,
    ResponseHeaderToJSON,
    ResponseHeaderToJSONTyped,
} from './ResponseHeader';
import type { NotificationMessage } from './NotificationMessage';
import {
    NotificationMessageFromJSON,
    NotificationMessageFromJSONTyped,
    NotificationMessageToJSON,
    NotificationMessageToJSONTyped,
} from './NotificationMessage';
import type { DiagnosticInfo } from './DiagnosticInfo';
import {
    DiagnosticInfoFromJSON,
    DiagnosticInfoFromJSONTyped,
    DiagnosticInfoToJSON,
    DiagnosticInfoToJSONTyped,
} from './DiagnosticInfo';
import type { StatusCode } from './StatusCode';
import {
    StatusCodeFromJSON,
    StatusCodeFromJSONTyped,
    StatusCodeToJSON,
    StatusCodeToJSONTyped,
} from './StatusCode';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.14.5/#5.14.5.2).
 * @export
 * @interface PublishResponse
 */
export interface PublishResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof PublishResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {number}
     * @memberof PublishResponse
     */
    SubscriptionId?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof PublishResponse
     */
    AvailableSequenceNumbers?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof PublishResponse
     */
    MoreNotifications?: boolean;
    /**
     * 
     * @type {NotificationMessage}
     * @memberof PublishResponse
     */
    NotificationMessage?: NotificationMessage;
    /**
     * 
     * @type {Array<StatusCode>}
     * @memberof PublishResponse
     */
    Results?: Array<StatusCode>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof PublishResponse
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the PublishResponse interface.
 */
export function instanceOfPublishResponse(value: object): value is PublishResponse {
    return true;
}

export function PublishResponseFromJSON(json: any): PublishResponse {
    return PublishResponseFromJSONTyped(json, false);
}

export function PublishResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ResponseHeader': json['ResponseHeader'] == null ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'SubscriptionId': json['SubscriptionId'] == null ? undefined : json['SubscriptionId'],
        'AvailableSequenceNumbers': json['AvailableSequenceNumbers'] == null ? undefined : json['AvailableSequenceNumbers'],
        'MoreNotifications': json['MoreNotifications'] == null ? undefined : json['MoreNotifications'],
        'NotificationMessage': json['NotificationMessage'] == null ? undefined : NotificationMessageFromJSON(json['NotificationMessage']),
        'Results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(StatusCodeFromJSON)),
        'DiagnosticInfos': json['DiagnosticInfos'] == null ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

  export function PublishResponseToJSON(json: any): PublishResponse {
      return PublishResponseToJSONTyped(json, false);
  }

  export function PublishResponseToJSONTyped(value?: PublishResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value['ResponseHeader']),
        'SubscriptionId': value['SubscriptionId'],
        'AvailableSequenceNumbers': value['AvailableSequenceNumbers'],
        'MoreNotifications': value['MoreNotifications'],
        'NotificationMessage': NotificationMessageToJSON(value['NotificationMessage']),
        'Results': value['Results'] == null ? undefined : ((value['Results'] as Array<any>).map(StatusCodeToJSON)),
        'DiagnosticInfos': value['DiagnosticInfos'] == null ? undefined : ((value['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoToJSON)),
    };
}

