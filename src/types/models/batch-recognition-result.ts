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
import { BatchRecognitionAlternative } from './batch-recognition-alternative';

/**
 * An ASR job output item. The primary item types are `word` and `punctuation`. Other item types may be present, for example to provide semantic information of different forms.
 * @export
 * @interface BatchRecognitionResult
 */
export interface BatchRecognitionResult {
  /**
   *
   * @type {Array<BatchRecognitionAlternative>}
   * @memberof BatchRecognitionResult
   */
  alternatives?: Array<BatchRecognitionAlternative>;
  /**
   *
   * @type {string}
   * @memberof BatchRecognitionResult
   */
  channel?: string;
  /**
   *
   * @type {number}
   * @memberof BatchRecognitionResult
   */
  end_time: number;
  /**
   * Whether the punctuation mark is an end of sentence character. Only applies to punctuation marks.
   * @type {boolean}
   * @memberof BatchRecognitionResult
   */
  is_eos?: boolean;
  /**
   *
   * @type {number}
   * @memberof BatchRecognitionResult
   */
  start_time: number;
  /**
   * New types of items may appear without being requested; unrecognized item types can be ignored.
   * @type {string}
   * @memberof BatchRecognitionResult
   */
  type: BatchRecognitionResultTypeEnum;
}

export const BatchRecognitionResultTypeEnum = {
  Word: 'word',
  Punctuation: 'punctuation',
} as const;

export type BatchRecognitionResultTypeEnum =
  typeof BatchRecognitionResultTypeEnum[keyof typeof BatchRecognitionResultTypeEnum];
