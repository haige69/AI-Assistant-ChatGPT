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
 * FaceRestorerItem
 * @export
 * @interface FaceRestorerItem
 */
export interface FaceRestorerItem {
    /**
     * Name
     * @type {string}
     * @memberof FaceRestorerItem
     */
    name: string;
    /**
     * Path
     * @type {string}
     * @memberof FaceRestorerItem
     */
    cmdDir?: string;
}

export function FaceRestorerItemFromJSON(json: any): FaceRestorerItem {
    return FaceRestorerItemFromJSONTyped(json, false);
}

export function FaceRestorerItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): FaceRestorerItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'cmdDir': !exists(json, 'cmd_dir') ? undefined : json['cmd_dir'],
    };
}

export function FaceRestorerItemToJSON(value?: FaceRestorerItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'cmd_dir': value.cmdDir,
    };
}


