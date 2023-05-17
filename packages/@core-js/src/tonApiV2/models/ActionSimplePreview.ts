/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';

/**
 * 
 * @export
 * @interface ActionSimplePreview
 */
export interface ActionSimplePreview {
    /**
     * 
     * @type {string}
     * @memberof ActionSimplePreview
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof ActionSimplePreview
     */
    value?: number;
    /**
     * 
     * @type {Array<AccountAddress>}
     * @memberof ActionSimplePreview
     */
    accounts: Array<AccountAddress>;
}

/**
 * Check if a given object implements the ActionSimplePreview interface.
 */
export function instanceOfActionSimplePreview(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "accounts" in value;

    return isInstance;
}

export function ActionSimplePreviewFromJSON(json: any): ActionSimplePreview {
    return ActionSimplePreviewFromJSONTyped(json, false);
}

export function ActionSimplePreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionSimplePreview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'accounts': ((json['accounts'] as Array<any>).map(AccountAddressFromJSON)),
    };
}

export function ActionSimplePreviewToJSON(value?: ActionSimplePreview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'value': value.value,
        'accounts': ((value.accounts as Array<any>).map(AccountAddressToJSON)),
    };
}

