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
import { ContractorDTO } from './contractorDTO';
import { Procurement } from './procurement';
import { SignatureDTO } from './signatureDTO';
import { SpecificationDTO } from './specificationDTO';


export interface ContractDTO { 
    /**
     * id-документу
     */
    id?: number;
    /**
     * ЄДРПОУ-розпорядника
     */
    edrpou?: string;
    /**
     * Номер документу
     */
    documentNumber?: string;
    /**
     * Дата укладання документу
     */
    documentDate?: string;
    /**
     * Дата підписання (оприлюднення)
     */
    signDate?: string;
    /**
     * ЕЦП
     */
    signature?: SignatureDTO;
    /**
     * Вартість документу
     */
    amount?: number;
    /**
     * Валюта документу
     */
    currency?: string;
    /**
     * Еквівалент, грн. (для валютних документів)
     */
    currencyAmountUAH?: number;
    /**
     * Контрагенти
     */
    contractors?: Array<ContractorDTO>;
    /**
     * Строк дії договору з
     */
    fromDate?: string;
    /**
     * Строк дії договору по
     */
    toDate?: string;
    /**
     * Предмет договору
     */
    subject?: string;
    /**
     * Безстроковий
     */
    noTerm?: boolean;
    /**
     * з ПДВ/без ПДВ у вартості договору
     */
    pdvInclude?: boolean;
    /**
     * Сума ПДВ у вартості договору
     */
    pdvAmount?: number;
    /**
     * Тендерна процедура закупівлі
     */
    tender?: boolean;
    /**
     * Обґрунтування відсутності тендерної процедури закупівлі
     */
    reason?: string;
    /**
     * Специфікації
     */
    specifications?: Array<SpecificationDTO>;
    /**
     * з ПДВ/без ПДВ у ціні за одиницю специфікац
     */
    isCpvVat?: boolean;
    /**
     * Масив кодів за ДК 021:2015
     */
    procurementItems?: Array<Procurement>;
}
