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
import { DistributorRequest } from './distributorRequest';


export interface PagedRequestDistributorRequest { 
    query?: DistributorRequest;
    /**
     * Номер сторінки
     */
    page?: number;
    /**
     * Кількість елементів на сторінці
     */
    pageSize?: number;
}
