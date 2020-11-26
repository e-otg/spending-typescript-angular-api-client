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


export interface DicKekDto { 
    /**
     * ID запису
     */
    id?: number;
    /**
     * Код видатків бюджету за  економічною класифікацією
     */
    code?: string;
    /**
     * Найменування видатків бюджету за  економічною класифікацією
     */
    name?: string;
    /**
     * Батьківський код
     */
    parentCode?: string;
    /**
     * Рівень коду в ієрархії
     */
    level?: number;
    /**
     * Ознака детальний
     */
    details?: boolean;
    /**
     * Дата початку дії запису
     */
    beginDate?: string;
    /**
     * Підстава для створення запису
     */
    beginDoc?: string;
    /**
     * Дата припинення дії запису
     */
    endDate?: string;
    /**
     * Підстава для припинення дії запису
     */
    endDoc?: string;
}
