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
import { SentimentSegment } from './sentiment-segment';
// May contain unused imports in some cases
// @ts-ignore
import { SentimentSummary } from './sentiment-summary';

/**
 * Holds the detailed sentiment analysis information.
 * @export
 * @interface SentimentAnalysisResultSentimentAnalysis
 */
export interface SentimentAnalysisResultSentimentAnalysis {
  /**
   * An array of objects that represent a segment of text and its associated sentiment.
   * @type {Array<SentimentSegment>}
   * @memberof SentimentAnalysisResultSentimentAnalysis
   */
  segments?: Array<SentimentSegment>;
  /**
   *
   * @type {SentimentSummary}
   * @memberof SentimentAnalysisResultSentimentAnalysis
   */
  summary?: SentimentSummary;
}
