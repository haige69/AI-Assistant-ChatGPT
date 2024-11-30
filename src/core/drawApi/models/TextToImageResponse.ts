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
 * TextToImageResponse
 * @export
 * @interface TextToImageResponse
 */
export interface TextToImageResponse {
    /**
     * Image，The generated image in base64 format.
     * @type {Array<string>}
     * @memberof TextToImageResponse
     */
    images?: Array<string>;
    /**
     * Parameters
     * @type {object}
     * @memberof TextToImageResponse
     */
    parameters: object;
    /**
     * Info
     * @type {string}
     * @memberof TextToImageResponse
     */
    info: string;
}

export function TextToImageResponseFromJSON(json: any): TextToImageResponse {
    return TextToImageResponseFromJSONTyped(json, false);
}

export function TextToImageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextToImageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'images': !exists(json, 'images') ? undefined : json['images'],
        'parameters': json['parameters'],
        'info': json['info'],
    };
}

export function TextToImageResponseToJSON(value?: TextToImageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'images': value.images,
        'parameters': value.parameters,
        'info': value.info,
    };
}


