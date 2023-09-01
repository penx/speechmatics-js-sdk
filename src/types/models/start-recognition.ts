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
import { AudioFormat } from './audio-format';
// May contain unused imports in some cases
// @ts-ignore
import { RealtimeTranscriptionConfig } from './realtime-transcription-config';
// May contain unused imports in some cases
// @ts-ignore
import { RealtimeTranslationConfig } from './realtime-translation-config';

/**
 *
 * @export
 * @interface StartRecognition
 */
export interface StartRecognition {
  /**
   *
   * @type {AudioFormat}
   * @memberof StartRecognition
   */
  audio_format: AudioFormat;
  /**
   *
   * @type {string}
   * @memberof StartRecognition
   */
  message: StartRecognitionMessageEnum;
  /**
   *
   * @type {RealtimeTranscriptionConfig}
   * @memberof StartRecognition
   */
  transcription_config: RealtimeTranscriptionConfig;
  /**
   *
   * @type {RealtimeTranslationConfig}
   * @memberof StartRecognition
   */
  translation_config?: RealtimeTranslationConfig;
}

export const StartRecognitionMessageEnum = {
  StartRecognition: 'StartRecognition',
} as const;

export type StartRecognitionMessageEnum =
  typeof StartRecognitionMessageEnum[keyof typeof StartRecognitionMessageEnum];
