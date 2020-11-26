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
import { AddendumDTO } from './addendumDTO';


export interface DocumentResultDTOAddendumDTO { 
    /**
     * Кількість знайдених документів у відповіді
     */
    size?: number;
    /**
     * Знайдено (або більше ніж, якщо moreThenCount = true)
     */
    count?: number;
    /**
     * Загальна кількість документів більша ніж зазначена в полі count
     */
    moreThenCount?: boolean;
    /**
     * Список документів
     */
    documents?: Array<AddendumDTO>;
}
