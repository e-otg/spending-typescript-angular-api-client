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
import { DocumentDTO } from './documentDTO';


export interface PageResultDocumentDTO { 
    /**
     * Список елементів
     */
    elements?: Array<DocumentDTO>;
    /**
     * Номер сторінки
     */
    number?: number;
    pageSize?: number;
    /**
     * Елементів на сторінці
     */
    size?: number;
    /**
     * Всього документів
     */
    totalElements?: number;
    /**
     * Всього сторінок
     */
    totalPages?: number;
}
