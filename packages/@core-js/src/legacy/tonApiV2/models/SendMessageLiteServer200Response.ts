/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SendMessageLiteServer200Response
 */
export interface SendMessageLiteServer200Response {
    /**
     * 
     * @type {number}
     * @memberof SendMessageLiteServer200Response
     */
    code: number;
}

/**
 * Check if a given object implements the SendMessageLiteServer200Response interface.
 */
export function instanceOfSendMessageLiteServer200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function SendMessageLiteServer200ResponseFromJSON(json: any): SendMessageLiteServer200Response {
    return SendMessageLiteServer200ResponseFromJSONTyped(json, false);
}

export function SendMessageLiteServer200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendMessageLiteServer200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
    };
}

export function SendMessageLiteServer200ResponseToJSON(value?: SendMessageLiteServer200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
    };
}

