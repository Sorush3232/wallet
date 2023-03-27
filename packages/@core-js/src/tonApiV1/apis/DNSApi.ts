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


import * as runtime from '../runtime';
import type {
  DnsRecord,
  DomainInfo,
  DomainNames,
} from '../models';
import {
    DnsRecordFromJSON,
    DnsRecordToJSON,
    DomainInfoFromJSON,
    DomainInfoToJSON,
    DomainNamesFromJSON,
    DomainNamesToJSON,
} from '../models';

export interface DnsBackResolveRequest {
    account: string;
}

export interface DnsResolveRequest {
    name: string;
}

export interface GetDomainInfoRequest {
    name: string;
}

export interface SearchDomainsRequest {
    domain: string;
}

/**
 * DNSApi - interface
 * 
 * @export
 * @interface DNSApiInterface
 */
export interface DNSApiInterface {
    /**
     * DNS back resolve for wallet address
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSApiInterface
     */
    dnsBackResolveRaw(requestParameters: DnsBackResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainNames>>;

    /**
     * DNS back resolve for wallet address
     */
    dnsBackResolve(requestParameters: DnsBackResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainNames>;

    /**
     * DNS resolve for domain name
     * @param {string} name domain name with .ton or .t.me
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSApiInterface
     */
    dnsResolveRaw(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DnsRecord>>;

    /**
     * DNS resolve for domain name
     */
    dnsResolve(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DnsRecord>;

    /**
     * domain info
     * @param {string} name domain name with .ton or .t.me
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSApiInterface
     */
    getDomainInfoRaw(requestParameters: GetDomainInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainInfo>>;

    /**
     * domain info
     */
    getDomainInfo(requestParameters: GetDomainInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainInfo>;

    /**
     * Search domains by the first letters
     * @param {string} domain 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSApiInterface
     */
    searchDomainsRaw(requestParameters: SearchDomainsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainNames>>;

    /**
     * Search domains by the first letters
     */
    searchDomains(requestParameters: SearchDomainsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainNames>;

}

/**
 * 
 */
export class DNSApi extends runtime.BaseAPI implements DNSApiInterface {

    /**
     * DNS back resolve for wallet address
     */
    async dnsBackResolveRaw(requestParameters: DnsBackResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainNames>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling dnsBackResolve.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/dns/backresolve`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainNamesFromJSON(jsonValue));
    }

    /**
     * DNS back resolve for wallet address
     */
    async dnsBackResolve(requestParameters: DnsBackResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainNames> {
        const response = await this.dnsBackResolveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * DNS resolve for domain name
     */
    async dnsResolveRaw(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DnsRecord>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling dnsResolve.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/dns/resolve`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DnsRecordFromJSON(jsonValue));
    }

    /**
     * DNS resolve for domain name
     */
    async dnsResolve(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DnsRecord> {
        const response = await this.dnsResolveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * domain info
     */
    async getDomainInfoRaw(requestParameters: GetDomainInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainInfo>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getDomainInfo.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/dns/getInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainInfoFromJSON(jsonValue));
    }

    /**
     * domain info
     */
    async getDomainInfo(requestParameters: GetDomainInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainInfo> {
        const response = await this.getDomainInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search domains by the first letters
     */
    async searchDomainsRaw(requestParameters: SearchDomainsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainNames>> {
        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling searchDomains.');
        }

        const queryParameters: any = {};

        if (requestParameters.domain !== undefined) {
            queryParameters['domain'] = requestParameters.domain;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/dns/domains/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainNamesFromJSON(jsonValue));
    }

    /**
     * Search domains by the first letters
     */
    async searchDomains(requestParameters: SearchDomainsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainNames> {
        const response = await this.searchDomainsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
