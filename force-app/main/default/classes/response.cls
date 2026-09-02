public with sharing class response {
   /**{
    "Header": {
        "ReqDelDateH": "2025-07-17T00:00:00.000",
        "CustomerPoH": "Sales Order Simulation",
        "DivsionH": "03",
        "SalesOrgH": "4001",
        "DisChannelH": "10",
        "DeliveryDateH": "",
        "SalesDocTypeH": "ZLFU",
        "UnloadPointH": "",
        "OrderBlockH": "",
        "ShipToPartyH": "",
        "SoldToPartyH": "1000131491",
        "PoDateH": "",
        "ItemSet": [
            {
                "Item": {
                    "CumQtyI": "1.000",
                    "ReqDelDateI": "2025-07-17T00:00:00.000",
                    "MaterialNoI": "0N05A",
                    "PoDateI": "",
                    "CustomerPoI": "",
                    "CondSet": {
                        "Cond": [
                            {
                                "CondPUnt": "1",
                                "CondUnit": "",
                                "Currency": "EUR",
                                "CondValue": "188.000000000",
                                "CondTotalValue": "188.000000000",
                                "ItmNumber": "000001",
                                "CondType": "ZP01",
                                "CustomerpoC": ""
                            },
                            {
                                "CondPUnt": "1",
                                "CondUnit": "",
                                "Currency": "EUR",
                                "CondValue": "188.000000000",
                                "CondTotalValue": "188.000000000",
                                "ItmNumber": "000001",
                                "CondType": "ZP09",
                                "CustomerpoC": ""
                            },
                            {
                                "CondPUnt": "0",
                                "CondUnit": "",
                                "Currency": "",
                                "CondValue": "21.000000000",
                                "CondTotalValue": "0E-9",
                                "ItmNumber": "000001",
                                "CondType": "MWST",
                                "CustomerpoC": ""
                            }
                        ]
                    },
                    "SchdulinesSet": {
                        "Schdulines": [
                            {
                                "ReqQty": "0000000000001",
                                "SalesUnit": "BX",
                                "ConfirQty": "0000000000000",
                                "ItmNumber": "000001",
                                "CustomerpoS": "",
                                "ReqDate": "2025-07-17T00:00:00.000"
                            },
                            {
                                "ReqQty": "0000000000000",
                                "SalesUnit": "BX",
                                "ConfirQty": "0000000000001",
                                "ItmNumber": "000001",
                                "CustomerpoS": "",
                                "ReqDate": "2025-07-30T00:00:00.000"
                            }
                        ]
                    },
                    "CarrierI": "",
                    "ItemNoI": "000001"
                }
            }
        ]
    }
}public static SapSimulationResult simulateQuote(String quoteId) {
        SapSimulationResult result = new SapSimulationResult();
        String requestPayload = '';
        HttpRequest req = null;
        HttpResponse response = null;
        
        try {
            // Set scenario for this transaction
            Logger.setScenario('SAP Quote Simulation');
            
            // Query Quote for basic validation and UI display
            Quote QuoteRecord = getQuoteForValidation(quoteId);
            
            // Validate that the Quote was found
            if (QuoteRecord == null) {
                result.success = false;
                result.errorMessage = 'Quote not found';
                
                Logger.error('Quote not found for ID: ' + quoteId)
                    .setRecord(quoteId)
                    .addTag('SAP Integration')
                    .addTag('Quote Error');
                
                Logger.saveLog();
                return result;
            }
            
            // Store additional Quote information for UI display
            result.QuoteNumber = QuoteRecord.Name;
            
            // Build the SAP-formatted payload using the utility class
            List<String> payloadList = quoteSimulationUtil.getQuotePayloadQuote(new List<String>{quoteId},true,false);
            requestPayload = payloadList.isEmpty() ? '{}' : payloadList[0];           
            system.debug('payloadList >> '+payloadList);
            system.debug('requestPayload>> '+requestPayload);
            
            response = quoteSimulationUtil.callSAPQuoteService(requestPayload);
            
            system.debug('response '+ response);
            system.debug('response getBody '+ response.getBody());
            // Process and parse the SAP response
            result = processResponse(response, result);
            
            // Create comprehensive log entry using Nebula Logger's built-in HTTP logging
            if (result.success) {
                Logger.info('SAP Quote Simulation completed successfully for Quote: ' + result.QuoteNumber)
                    .setRecord(quoteId)
                    .addTag('SAP Integration')
                    .addTag('Success')
                    .setHttpRequestDetails(req)
                    .setHttpResponseDetails(response);
            } else {
                Logger.error('SAP Quote Simulation failed for Quote: ' + result.QuoteNumber + ' - ' + result.errorMessage)
                    .setRecord(quoteId)
                    .addTag('SAP Integration')
                    .addTag('Failed')
                    .setHttpRequestDetails(req)
                    .setHttpResponseDetails(response);
            }
            
        } catch (Exception e) {
            // Handle any unexpected errors during the simulation process
            result.success = false;
            result.errorMessage = 'Error: ' + e.getMessage();
            
            Logger.error('SAP Simulation Exception: ' + e.getMessage() + ' | Stack Trace: ' + e.getStackTraceString())
                .setRecord(quoteId)
                .addTag('SAP Integration')
                .addTag('Exception')
                .setHttpRequestDetails(req)
                .setHttpResponseDetails(response);
            
            System.debug('SAP Simulation Error: ' + e.getMessage());
            System.debug('Stack Trace: ' + e.gkTraceString());
        }
        
        // Save all logs for this transaction
        Logger.saveLog();
        
        return result;
    } 
                string response  = '{"Header":{"ReqDelDateH":"2025-07-17T00:00:00.000","CustomerPoH":"Sales Order Simulation","DivsionH":"03","SalesOrgH":"4001","DisChannelH":"10","DeliveryDateH":"","SalesDocTypeH":"ZLFU","UnloadPointH":"","OrderBlockH":"","ShipToPartyH":"","SoldToPartyH":"1000131491","PoDateH":"","ItemSet":[{"Item":{"CumQtyI":"1.000","ReqDelDateI":"2025-07-17T00:00:00.000","MaterialNoI":"0N05A","PoDateI":"","CustomerPoI":"","CondSet":{"Cond":[{"CondPUnt":"1","CondUnit":"","Currency":"EUR","CondValue":"188.000000000","CondTotalValue":"188.000000000","ItmNumber":"000001","CondType":"ZP01","CustomerpoC":""},{"CondPUnt":"1","CondUnit":"","Currency":"EUR","CondValue":"188.000000000","CondTotalValue":"188.000000000","ItmNumber":"000001","CondType":"ZP09","CustomerpoC":""},{"CondPUnt":"0","CondUnit":"","Currency":"","CondValue":"21.000000000","CondTotalValue":"0E-9","ItmNumber":"000001","CondType":"MWST","CustomerpoC":""}]},"SchdulinesSet":{"Schdulines":[{"ReqQty":"0000000000001","SalesUnit":"BX","ConfirQty":"0000000000000","ItmNumber":"000001","CustomerpoS":"","ReqDate":"2025-07-17T00:00:00.000"},{"ReqQty":"0000000000000","SalesUnit":"BX","ConfirQty":"0000000000001","ItmNumber":"000001","CustomerpoS":"","ReqDate":"2025-07-30T00:00:00.000"}]},"CarrierI":"","ItemNoI":"000001"}}]}}';

public class QuoteLineUpdater {
    public static void updateQuoteLinesFromSAPResponse(Id quoteId, String responseJson) {
        // Parse the JSON into a Map
        Map<String, Object> parsed = (Map<String, Object>) JSON.deserializeUntyped(responseJson);

        // Navigate to ItemSet
        Map<String, Object> header = (Map<String, Object>) parsed.get('Header');
        List<Object> itemSet = (List<Object>) header.get('ItemSet');

        // Build MaterialNoI → Price/Tax data
        Map<String, Map<String, Decimal>> materialMap = new Map<String, Map<String, Decimal>>();

        for (Object itemWrapObj : itemSet) {
            Map<String, Object> itemWrap = (Map<String, Object>) itemWrapObj;
            Map<String, Object> item = (Map<String, Object>) itemWrap.get('Item');

            String materialNo = (String) item.get('MaterialNoI');
            Map<String, Object> condSet = (Map<String, Object>) item.get('CondSet');
            List<Object> condList = (List<Object>) condSet.get('Cond');

            Decimal zp09Value = 0;
            Decimal taxPercentage = 0;
            Decimal vat = 0;

            for (Object condObj : condList) {
                Map<String, Object> cond = (Map<String, Object>) condObj;
                String condType = (String) cond.get('CondType');
                String condValStr = (String) cond.get('CondValue');
                String condPUntStr = (String) cond.get('CondPUnt');

                if (condType == 'ZP09') {
                    zp09Value = Decimal.valueOf(condValStr);
                } else if (condType == 'MWST') {
                    taxPercentage = Decimal.valueOf(condValStr); // Interpret 21.000 as 21%
                    vat = Decimal.valueOf(condPUntStr);
                }
            }

            Map<String, Decimal> values = new Map<String, Decimal>{
                'ZP09' => zp09Value,
                'Tax' => taxPercentage,
                'VAT' => vat
            };
            materialMap.put(materialNo, values);
        }

        // Query QuoteLineItems
        List<QuoteLineItem> qliList = [
            SELECT Id, Product2.Name 
                 , Tax__c, VAT__c, Net_Unit_Price__c, Net_Unit_Price_With_Tax__c 
            FROM QuoteLineItem 
            WHERE QuoteId = :quoteId
        ];

        List<QuoteLineItem> updateList = new List<QuoteLineItem>();

        for (QuoteLineItem qli : qliList) {
            String material = qli.Product2.Name;
            if (materialMap.containsKey(material)) {
                Map<String, Decimal> values = materialMap.get(material);

                Decimal unitPrice = values.get('ZP09');
                Decimal tax = values.get('Tax');
                Decimal vat = values.get('VAT');
                Decimal unitPriceWithTax = unitPrice + (unitPrice * (tax / 100));

                qli.Net_Unit_Price__c = unitPrice;
                qli.Tax__c = tax;
                qli.VAT__c = vat;
                qli.Net_Unit_Price_With_Tax__c = unitPriceWithTax;

                updateList.add(qli);
            }
        }

        if (!updateList.isEmpty()) {
            update updateList;
        }
    }
}
<template>
    <lightning-card title="Updating Quote Line Items...">
        <div class="slds-p-around_medium">
            <lightning-spinner alternative-text="Loading" size="medium"></lightning-spinner>
        </div>
    </lightning-card>
</template>
import { LightningElement, api } from 'lwc';
import updateQuoteLineItems from '@salesforce/apex/QuotePriceUpdater.updateQuoteLineItems';

export default class UpdateQuoteLines extends LightningElement {
    @api recordId;

    connectedCallback() {
        if (this.recordId) {
            updateQuoteLineItems({ quoteId: this.recordId })
                .then(() => {
                    console.log('Quote lines updated successfully');
                    this.closeQuickAction();
                })
                .catch(error => {
                    console.error('Error updating quote lines', error);
                    this.closeQuickAction();
                });
        } else {
            console.error('No Quote ID provided');
            this.closeQuickAction();
        }
    }

    closeQuickAction() {
        const closeEvent = new CustomEvent('close');
        this.dispatchEvent(closeEvent);
    }
}
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>59.0</apiVersion> <!-- Use your org's API version -->
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__RecordPage</target>
        <target>lightning__RecordAction</target>
    </targets>
    <targetConfigs>
        <targetConfig targets="lightning__RecordAction">
            <actionType>Action</actionType>
            <objects>
                <object>Quote</object>
            </objects>
        </targetConfig>
    </targetConfigs>
</LightningComponentBundle>
<template>
    <lightning-card>
        <!-- Title -->
        <div class="custom-title slds-text-align_center slds-text-color_default">
            Quote Simulation in progress - the quote lines will be updated to reflect the contracted pricing
        </div>
        <br/>
        <template if:true={showSpinner}>
            <div class="slds-p-around_medium slds-text-align_center">
                <lightning-spinner
                    alternative-text="Loading"
                    size="medium"
                    class="blue-spinner"
                    variant="">
                </lightning-spinner>
            </div>
        </template>

        <!-- Error Messages -->
        <div class="slds-p-around_medium">
            <template if:true={hasErrors}>
                <div class="slds-m-top_medium">
                    <template for:each={errorMessages} for:item="msg">
                        <div key={msg} class="slds-grid slds-grid_align-start slds-m-bottom_x-small">
                            <lightning-icon
                                icon-name="utility:error"
                                alternative-text="Error"
                                size="x-small"
                                class="slds-m-right_x-small">
                            </lightning-icon>
                            <p class="error-message">{msg}</p>
                        </div>
                    </template>
                </div>
            </template>
        </div>
    </lightning-card>
</template>
public class ApproverInfo {

  public class OutputWrapper {
        @InvocableVariable public String aorticuserName;
        @InvocableVariable public String aorticApprovalLevel;

        @InvocableVariable public String cardiacuserName;
        @InvocableVariable public String cardiacApprovalLevel;

        @InvocableVariable public String peripheraluserName;
        @InvocableVariable public String peripheralApprovalLevel;
    }

    @InvocableMethod(label='Extract Approvers by BU')
    public static List<OutputWrapper> extractApproverDetails(List<List<String>> jsonInputs) {
        OutputWrapper output = new OutputWrapper();

        try {
            for (List<String> innerList : jsonInputs) {
                for (String jsonInput : innerList) {
                    List<Object> outerList = (List<Object>) JSON.deserializeUntyped(jsonInput);

                    if (!outerList.isEmpty()) {
                        List<Object> approverArray = (List<Object>) outerList[0];

                        for (Object item : approverArray) {
                            if (item instanceof Map<String, Object>) {
                                Map<String, Object> approverMap = (Map<String, Object>) item;
                                String bu = (String) approverMap.get('businessUnit');

                                if (bu == 'Aortic') {
                                    output.aorticuserName = (String) approverMap.get('username');
                                    output.aorticApprovalLevel = (String) approverMap.get('approvalLevel');
                                } else if (bu == 'Cardiac & Surgical Solutions' || bu == 'Cardiac') {
                                    output.cardiacuserName = (String) approverMap.get('username');
                                    output.cardiacApprovalLevel = (String) approverMap.get('approvalLevel');
                                } else if (bu == 'Peripheral' || bu == 'CPeripheripal') {
                                    output.peripheraluserName = (String) approverMap.get('username');
                                    output.peripheralApprovalLevel = (String) approverMap.get('approvalLevel');
                                }
                            }
                        }
                    }
                }
            }
        } catch (Exception e) {
            System.debug('Error parsing JSON: ' + e.getMessage());
            
        }

        return new List<OutputWrapper>{ output };
    }
}


                */
}