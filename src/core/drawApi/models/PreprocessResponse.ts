/* tslint:disable */
/* eslint-disable */
/**
 * sdapiv1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * PreprocessResponse
 * @export
 * @interface PreprocessResponse
 */
export interface PreprocessResponse {
    /**
     * Preprocess info，Response string from preprocessing task.
     * @type {string}
     * @memberof PreprocessResponse
     */
    info: string;
}

export function PreprocessResponseFromJSON(json: any): PreprocessResponse {
    return PreprocessResponseFromJSONTyped(json, false);
}

export function PreprocessResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreprocessResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'info': json['info'],
    };
}

export function PreprocessResponseToJSON(value?: PreprocessResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'info': value.info,
    };
}


