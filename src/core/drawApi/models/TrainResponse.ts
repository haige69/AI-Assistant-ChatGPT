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
 * TrainResponse
 * @export
 * @interface TrainResponse
 */
export interface TrainResponse {
    /**
     * Train info，Response string from train embedding or hypernetwork task.
     * @type {string}
     * @memberof TrainResponse
     */
    info: string;
}

export function TrainResponseFromJSON(json: any): TrainResponse {
    return TrainResponseFromJSONTyped(json, false);
}

export function TrainResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrainResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'info': json['info'],
    };
}

export function TrainResponseToJSON(value?: TrainResponse | null): any {
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


