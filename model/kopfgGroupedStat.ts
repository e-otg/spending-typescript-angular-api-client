/**
 * API spending.gov.ua
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Kopfg } from './kopfg';
import { KopfgStat } from './kopfgStat';


export interface KopfgGroupedStat { 
    count?: number;
    kopfg?: Kopfg;
    parts?: Array<KopfgStat>;
}
