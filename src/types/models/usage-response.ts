/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Template
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { UsageDetails } from './usage-details';

/**
 *
 * @export
 * @interface UsageResponse
 */
export interface UsageResponse {
  /**
   *
   * @type {Array<UsageDetails>}
   * @memberof UsageResponse
   */
  details: Array<UsageDetails>;
  /**
   *
   * @type {string}
   * @memberof UsageResponse
   */
  since: string;
  /**
   *
   * @type {Array<UsageDetails>}
   * @memberof UsageResponse
   */
  summary: Array<UsageDetails>;
  /**
   *
   * @type {string}
   * @memberof UsageResponse
   */
  until: string;
}
