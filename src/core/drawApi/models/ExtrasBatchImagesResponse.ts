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
 * ExtrasBatchImagesResponse
 * @export
 * @interface ExtrasBatchImagesResponse
 */
export interface ExtrasBatchImagesResponse {
    /**
     * HTML info，A series of HTML tags containing the process info.
     * @type {string}
     * @memberof ExtrasBatchImagesResponse
     */
    htmlInfo: string;
    /**
     * Images，The generated images in base64 format.
     * @type {Array<string>}
     * @memberof ExtrasBatchImagesResponse
     */
    images: Array<string>;
}

export function ExtrasBatchImagesResponseFromJSON(json: any): ExtrasBatchImagesResponse {
    return ExtrasBatchImagesResponseFromJSONTyped(json, false);
}

export function ExtrasBatchImagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtrasBatchImagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'htmlInfo': json['html_info'],
        'images': json['images'],
    };
}

export function ExtrasBatchImagesResponseToJSON(value?: ExtrasBatchImagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'html_info': value.htmlInfo,
        'images': value.images,
    };
}


