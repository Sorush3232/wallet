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
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';

/**
 * 
 * @export
 * @interface Transactions
 */
export interface Transactions {
    /**
     * 
     * @type {Array<Transaction>}
     * @memberof Transactions
     */
    transactions: Array<Transaction>;
}

/**
 * Check if a given object implements the Transactions interface.
 */
export function instanceOfTransactions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transactions" in value;

    return isInstance;
}

export function TransactionsFromJSON(json: any): Transactions {
    return TransactionsFromJSONTyped(json, false);
}

export function TransactionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transactions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactions': ((json['transactions'] as Array<any>).map(TransactionFromJSON)),
    };
}

export function TransactionsToJSON(value?: Transactions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactions': ((value.transactions as Array<any>).map(TransactionToJSON)),
    };
}

