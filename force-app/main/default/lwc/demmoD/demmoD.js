import { LightningElement, track } from 'lwc';

export default class DemmoD extends LightningElement {
    @track generateData = {
        "SC01": {
            "models": [
                {
                    "modelSetting": {
                        "Id": "m17Dh000000CahyIAC",
                        "DeveloperName": "Vascular_Flex",
                        "Screen__c": "SC01",
                        "Model_Type__c": "Vascular Flex",
                        "Label__c": "Vascular Flex",
                        "Help_Text__c": "This Includes: 4 Table Riser, 1 Demo Bag, 1 Brochure Bag, Gore Table Drape, Extension Cord, HDMI Cord, Power Strip",
                        "Order__c": 5,
                        "Max_Quantity__c": 20,
                        "Simulator_Group__c": "Vascular Flex"
                    },
                    "index": 0,
                    "_quantityOptions": [
                        {
                            "label": "0",
                            "value": "0"
                        },
                        {
                            "label": "1",
                            "value": "1"
                        },
                        {
                            "label": "2",
                            "value": "2"
                        },
                        {
                            "label": "3",
                            "value": "3"
                        },
                        {
                            "label": "4",
                            "value": "4"
                        },
                        {
                            "label": "5",
                            "value": "5"
                        },
                        {
                            "label": "6",
                            "value": "6"
                        },
                        {
                            "label": "7",
                            "value": "7"
                        },
                        {
                            "label": "8",
                            "value": "8"
                        },
                        {
                            "label": "9",
                            "value": "9"
                        },
                        {
                            "label": "10",
                            "value": "10"
                        },
                        {
                            "label": "11",
                            "value": "11"
                        },
                        {
                            "label": "12",
                            "value": "12"
                        },
                        {
                            "label": "13",
                            "value": "13"
                        },
                        {
                            "label": "14",
                            "value": "14"
                        },
                        {
                            "label": "15",
                            "value": "15"
                        },
                        {
                            "label": "16",
                            "value": "16"
                        },
                        {
                            "label": "17",
                            "value": "17"
                        },
                        {
                            "label": "18",
                            "value": "18"
                        },
                        {
                            "label": "19",
                            "value": "19"
                        },
                        {
                            "label": "20",
                            "value": "20"
                        }
                    ],
                    "selecetedQuantity": "0"
                },
                {
                    "modelSetting": {
                        "Id": "m17Dh000000Cai8IAC",
                        "DeveloperName": "Heart_Flex",
                        "Screen__c": "SC01",
                        "Model_Type__c": "Structural Heart Flex",
                        "Label__c": "Structural Heart Flex",
                        "Order__c": 10,
                        "Max_Quantity__c": 4,
                        "Simulator_Group__c": "Structural Heart Flex"
                    },
                    "index": 1,
                    "_quantityOptions": [
                        {
                            "label": "0",
                            "value": "0"
                        },
                        {
                            "label": "1",
                            "value": "1"
                        },
                        {
                            "label": "2",
                            "value": "2"
                        },
                        {
                            "label": "3",
                            "value": "3"
                        },
                        {
                            "label": "4",
                            "value": "4"
                        }
                    ],
                    "selecetedQuantity": "0"
                },
                {
                    "modelSetting": {
                        "Id": "m17Dh000000CaiAIAS",
                        "DeveloperName": "Heart_TabPro",
                        "Screen__c": "SC01",
                        "Model_Type__c": "Structural Heart Tab Pro",
                        "Label__c": "Structural Heart Tab Pro",
                        "Order__c": 15,
                        "Max_Quantity__c": 10,
                        "Simulator_Group__c": "Structural Heart Tab Pro"
                    },
                    "index": 2,
                    "_quantityOptions": [
                        {
                            "label": "0",
                            "value": "0"
                        },
                        {
                            "label": "1",
                            "value": "1"
                        },
                        {
                            "label": "2",
                            "value": "2"
                        },
                        {
                            "label": "3",
                            "value": "3"
                        },
                        {
                            "label": "4",
                            "value": "4"
                        },
                        {
                            "label": "5",
                            "value": "5"
                        },
                        {
                            "label": "6",
                            "value": "6"
                        },
                        {
                            "label": "7",
                            "value": "7"
                        },
                        {
                            "label": "8",
                            "value": "8"
                        },
                        {
                            "label": "9",
                            "value": "9"
                        },
                        {
                            "label": "10",
                            "value": "10"
                        }
                    ],
                    "selecetedQuantity": "0"
                },
                {
                    "dependentModels": [
                        {
                            "modelSetting": {
                                "Id": "m17Dh0000008OlvIAE",
                                "DeveloperName": "Heart_GCA_Benchtop_Wet_Accessory_Kit",
                                "Screen__c": "SC01",
                                "Model_Type__c": "Accessory Kit",
                                "Label__c": "Do you want an Structural Heart (GCA Benchtop) Wet Model Accessory Kit?",
                                "Help_Text__c": "This Includes: 1 Table Riser, 1 Demo Bag, 1 Brochure Bag, Gore Table Drape, Extension Cord, HDMI Cord, Power Strip",
                                "Order__c": 21,
                                "Depends_On__c": "Structural Heart (GCA Benchtop) Wet Model",
                                "Max_Quantity__c": 0,
                                "Simulator_Group__c": "Structural Heart (GCA Benchtop) Wet Model"
                            },
                            "index": 0
                        }
                    ],
                    "modelSetting": {
                        "Id": "m17Dh000000Cai9IAC",
                        "DeveloperName": "Heart_GCA_Benchtop_Wet_Model",
                        "Screen__c": "SC01",
                        "Model_Type__c": "Structural Heart (GCA Benchtop) Wet Model",
                        "Label__c": "Structural Heart (GCA Benchtop) Wet Model",
                        "Help_Text__c": "If you add Accessory Kit, This Includes: 1 Table Riser, 1 Demo Bag, 1 Brochure Bag, Gore Table Drape, Extension Cord, HDMI Cord, Power Strip",
                        "Order__c": 20,
                        "Max_Quantity__c": 4,
                        "Simulator_Group__c": "Structural Heart (GCA Benchtop) Wet Model"
                    },
                    "index": 3,
                    "_quantityOptions": [
                        {
                            "label": "0",
                            "value": "0"
                        },
                        {
                            "label": "1",
                            "value": "1"
                        },
                        {
                            "label": "2",
                            "value": "2"
                        },
                        {
                            "label": "3",
                            "value": "3"
                        },
                        {
                            "label": "4",
                            "value": "4"
                        }
                    ],
                    "selecetedQuantity": "0"
                }
            ],
            "screen": "SC01",
            "needPeripheral": true
        },
        "SC02": {
            "models": [
                {
                    "dependentModels": [
                        {
                            "modelSetting": {
                                "Id": "m17Dh000000CaimIAC",
                                "DeveloperName": "PE_AAA_Abdomen_Kit",
                                "Screen__c": "SC02",
                                "Model_Type__c": "AAA Abdominal Kit",
                                "Label__c": "How many Physician Experiences do you want?",
                                "Help_Text__c": "Each Experience Includes: 4 Large Needle Suture, 1 AAA Graft, 1 Abdominal Aortic Aneurysm Bio Tissue",
                                "Order__c": 5,
                                "Depends_On__c": "AAA Abdomen Kit",
                                "Max_Quantity__c": 30,
                                "Simulator_Group__c": "Physician Experience",
                                "Default_Quantity__c": 5
                            }
                        }
                    ],
                    "modelSetting": {
                        "Id": "m17Dh000000CaiDIAS",
                        "DeveloperName": "AAA_Abdomen_Kit",
                        "Screen__c": "SC02",
                        "Model_Type__c": "AAA Abdominal Kit",
                        "Label__c": "AAA Abdomen Kit",
                        "Help_Text__c": "This Includes: 1 Abdomen Simulator, 1 Abdomen Instrument Kit, 1 Lamp, 1 Large Surgical Table Drape, 1 Large Jar, 1 Abdomen Pump, 1 Bowl, 1 Extension Cord",
                        "Order__c": 5,
                        "Max_Quantity__c": 8,
                        "Simulator_Group__c": "Peripheral Open Simulator"
                    }
                },
                {
                    "dependentModels": [
                        {
                            "modelSetting": {
                                "Id": "m17Dh000000CainIAC",
                                "DeveloperName": "PE_AV_Arm_Kit",
                                "Screen__c": "SC02",
                                "Model_Type__c": "AV (Arm) Kit",
                                "Label__c": "How many Physician Experiences do you want?",
                                "Help_Text__c": "Each Experience Includes: 4 Small Needle Sutures, 1 AV Graft, Arm Artery Pack (Up to 5 Procedures)",
                                "Order__c": 10,
                                "Depends_On__c": "AV (Arm) Kit",
                                "Max_Quantity__c": 30,
                                "Simulator_Group__c": "Physician Experience",
                                "Default_Quantity__c": 5
                            }
                        }
                    ],
                    "modelSetting": {
                        "Id": "m17Dh000000CaiEIAS",
                        "DeveloperName": "AV_Arm_Kit",
                        "Screen__c": "SC02",
                        "Model_Type__c": "AV (Arm) Kit",
                        "Label__c": "AV (Arm) Kit",
                        "Help_Text__c": "This Includes: 1 Arm Simulator, 1 Arm Simulator Skin, 1 Standard Instrument Kit, 1 Lamp, 1 Large Surgical Table Drape, 1 Small Jar, 1 Standard Pump, 1 Bowl, 1 Extension Cord",
                        "Order__c": 10,
                        "Max_Quantity__c": 2,
                        "Simulator_Group__c": "Peripheral Open Simulator"
                    }
                },
                {
                    "dependentModels": [
                        {
                            "modelSetting": {
                                "Id": "m17Dh000000CaioIAC",
                                "DeveloperName": "PE_Head_Carotid_Kit",
                                "Screen__c": "SC02",
                                "Model_Type__c": "Head (Carotid) Kit",
                                "Label__c": "How many Physician Experiences do you want?",
                                "Help_Text__c": "Each Experience Includes: 2 Small Needle Sutures, 1 Carotid Patch, Carotid Artery Bio Tissue",
                                "Order__c": 15,
                                "Depends_On__c": "Head (Carotid) Kit",
                                "Max_Quantity__c": 30,
                                "Simulator_Group__c": "Physician Experience",
                                "Default_Quantity__c": 5
                            }
                        }
                    ],
                    "modelSetting": {
                        "Id": "m17Dh000000CaiFIAS",
                        "DeveloperName": "Head_Carotid_Kit",
                        "Screen__c": "SC02",
                        "Model_Type__c": "Head (Carotid) Kit",
                        "Label__c": "Head (Carotid) Kit",
                        "Help_Text__c": "This Includes: 1 Head Simulator, 1 Standard Instrument Kit, 1 Lamp, 1 Small Surgical Table Drape, 1 Small Jar, 1 Standard Pump, 1 Bowl, 1 Extension Cord",
                        "Order__c": 15,
                        "Max_Quantity__c": 2,
                        "Simulator_Group__c": "Peripheral Open Simulator"
                    }
                },
                {
                    "dependentModels": [
                        {
                            "modelSetting": {
                                "Id": "m17Dh000000CaipIAC",
                                "DeveloperName": "PE_Leg_Femoral_Kit",
                                "Screen__c": "SC02",
                                "Model_Type__c": "Leg (Femoral) Kit",
                                "Label__c": "How many Physician Experiences do you want?",
                                "Help_Text__c": "Each Experience Includes: 2 Small Needle Sutures, 1 Femoral Patch, 2 Femoral Artery Bio Tissue",
                                "Order__c": 20,
                                "Depends_On__c": "Leg (Femoral) Kit",
                                "Max_Quantity__c": 30,
                                "Simulator_Group__c": "Physician Experience",
                                "Default_Quantity__c": 5
                            }
                        }
                    ],
                    "modelSetting": {
                        "Id": "m17Dh000000CaiGIAS",
                        "DeveloperName": "Leg_Femoral_Kit",
                        "Screen__c": "SC02",
                        "Model_Type__c": "Leg (Femoral) Kit",
                        "Label__c": "Leg (Femoral) Kit",
                        "Help_Text__c": "This Includes: 1 Leg Simulator, 1 Standard Instrument Kit, 1 Lamp, 1 Large Surgical Table Drape, 1 Small Jar, 1 Standard Pump, 1 Bowl, 1 Extension Cord",
                        "Order__c": 20,
                        "Max_Quantity__c": 4,
                        "Simulator_Group__c": "Peripheral Open Simulator"
                    }
                },
                {
                    "dependentModels": [
                        {
                            "modelSetting": {
                                "Id": "m17Dh000000CaisIAC",
                                "DeveloperName": "PE_Wet_Box_Carotid",
                                "Screen__c": "SC02",
                                "Model_Type__c": "Wet Box (Carotid)",
                                "Label__c": "How many Carotid Physician Experiences do you want?",
                                "Help_Text__c": "Each Experience Includes: 2 Small Needle Sutures, 1 Carotid Patch, 1 Carotid Artery Bio Tissue",
                                "Order__c": 25,
                                "Depends_On__c": "Wet Box Kit",
                                "Max_Quantity__c": 30,
                                "Simulator_Group__c": "Physician Experience"
                            }
                        },
                        {
                            "modelSetting": {
                                "Id": "m17Dh000000CairIAC",
                                "DeveloperName": "PE_WB_Femoral_with_Artery_BioTissue",
                                "Screen__c": "SC02",
                                "Model_Type__c": "Wet Box (Femoral with Artery Bio Tissue)",
                                "Label__c": "How many Femoral - Bio Tissue Physician Experiences do you want?",
                                "Help_Text__c": "Each Experience Includes: 2 Small Needle Sutures, 1 Femoral Patch, 1 Femoral Artery Bio Tissue",
                                "Order__c": 26,
                                "Depends_On__c": "Wet Box Kit",
                                "Max_Quantity__c": 30,
                                "Simulator_Group__c": "Physician Experience"
                            }
                        },
                        {
                            "modelSetting": {
                                "Id": "m17Dh000000CaiqIAC",
                                "DeveloperName": "PE_WB_Embedded_Femoral_Arteries",
                                "Screen__c": "SC02",
                                "Model_Type__c": "Wet Box (Femoral with Embedded Femoral Arteries)",
                                "Label__c": "How many Femoral - Dermis Slab Physician Experiences do you want?",
                                "Help_Text__c": "Each Experience Includes: 2 Small Needle Sutures, 1 Femoral Patch, Embedded Femoral Arteries with Dermis (Up to 7 Procedures)",
                                "Order__c": 27,
                                "Depends_On__c": "Wet Box Kit",
                                "Max_Quantity__c": 30,
                                "Simulator_Group__c": "Physician Experience"
                            }
                        }
                    ],
                    "modelSetting": {
                        "Id": "m17Dh000000CaiHIAS",
                        "DeveloperName": "Wet_Box_Kit",
                        "Screen__c": "SC02",
                        "Model_Type__c": "Wet Box Kit",
                        "Label__c": "Wet Box Kit",
                        "Help_Text__c": "This Includes: 1 Wet Box Simulator, 1 Standard Instrument Kit, 1 Lamp, 1 Large Surgical Table Drape, 1 Bowl, 1 Extension Cord",
                        "Order__c": 25,
                        "Max_Quantity__c": 22,
                        "Simulator_Group__c": "Peripheral Open Simulator"
                    }
                }
            ],
            "screen": "SC02"
        },
        "SC03": {
            "models": [
                {
                    "modelSetting": {
                        "Id": "m17Dh0000008OlnIAE",
                        "DeveloperName": "Blue_Surgical_Table_Drapes",
                        "Screen__c": "SC03",
                        "Model_Type__c": "Blue Surgical Table Drapes",
                        "Label__c": "Blue Surgical Table Drapes",
                        "Order__c": 5,
                        "Max_Quantity__c": 30,
                        "Simulator_Group__c": "Accessories"
                    }
                },
                {
                    "modelSetting": {
                        "Id": "m17Dh0000008OltIAE",
                        "DeveloperName": "Table_Risers",
                        "Screen__c": "SC03",
                        "Model_Type__c": "Table Risers",
                        "Label__c": "Table Risers",
                        "Order__c": 10,
                        "Max_Quantity__c": 30,
                        "Simulator_Group__c": "Accessories"
                    }
                },
                {
                    "modelSetting": {
                        "Id": "m17Dh0000008OlsIAE",
                        "DeveloperName": "Gore_Table_Drapes",
                        "Screen__c": "SC03",
                        "Model_Type__c": "Gore Table Drapes",
                        "Label__c": "Gore Table Drapes",
                        "Order__c": 15,
                        "Max_Quantity__c": 30,
                        "Simulator_Group__c": "Accessories"
                    }
                }
            ],
            "screen": "SC03"
        }
    };
    @track screenSetup = {
        Title: "Simulator Group Selection",
        Next: "Next", Back: "Previous", buttonDisabled: false,
        1: 'SC01', SC01: "Vascular Flex & Structural Heart Simulators",
        2: 'SC02', SC02: "Peripheral Open & Physician Experience Simulators",
        3: 'SC03', SC03: "Accessories"
    };
    connectedCallback() {
        this.getScreenSetup();
    }

    getScreenSetup() {
        screenSetup({})
            .then(data => {
                let screenMap = JSON.parse(JSON.stringify(data));
                console.group('screenMap>',screenMap);
            }).catch(error => {
                console.log('Error', 'Error occurred while doing server call (MPD_NASimulatorController.getScreenSetup)', JSON.stringify(error));
            })
    }
    /*
  import { api, LightningElement, track, wire } from 'lwc';
import { CloseActionScreenEvent } from "lightning/actions";
import { updateRecord } from 'lightning/uiRecordApi';
import { getRecord } from 'lightning/uiRecordApi';
import splitOpportunity from '@salesforce/apex/SplitOpportunityController.splitOpportunity';
import splitOpportunityfieldsets from '@salesforce/apex/SplitOpportunityController.getOpportunityFieldSetFields';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import DO_NOT_INCLUDE_IN_FORECAST from '@salesforce/schema/Opportunity.Do_Not_Include_In_Forecast__c';

  connectedCallback(){
        console.log('Connectedcallback');
        splitOpportunityfieldsets().then(result => {
            console.log('result++',result);
            this.parentOpportunityFields = JSON.parse(JSON.stringify(result));
            console.log('this.parentOpportunityFields11:',this.parentOpportunityFields);
            const fetch = this.parentOpportunityFields.map(field => field.fieldApiName);
            this.oppFieldsToFetch = fetch;
            console.log('this.oppFieldsToFetch:',this.oppFieldsToFetch);
        });
    }
                        this.oppFieldsToFetch = this.parentOpportunityFields.map(field => `Opportunity.${field.fieldApiName}`);

export default class SplitOpportunity extends LightningElement {
    @api recordId;
    isLoading = false;

    ParentTitle = 'Parent Opportunity Information';
    ChildTitle = 'Child Opportunity Information';
    objectName = 'Opportunity';
    parentOpportunityFields = [];
    @track doNotIncludeInForecast = false;
    oppFieldsValue = {};
    opportunityData = [];

    @wire(splitOpportunityfieldsets, {})
    wiredOpportunityFieldSetFields({ error, data }) {
        this.isLoading = true;
        if (data) {
            this.parentOpportunityFields = data;
            this.isLoading = false;
        } else if (error) {
            console.error('Error fetching Opportunity fieldsets:', error);
        }
    }
    @wire(getRecord, { recordId: '$recordId', fields: [DO_NOT_INCLUDE_IN_FORECAST] })
    wiredOpportunity({ error, data }) {
        if (data) {
            this.doNotIncludeInForecast = data.fields.Do_Not_Include_In_Forecast__c.value;
            this.oppFieldsValue['Do_Not_Include_In_Forecast__c'] = this.doNotIncludeInForecast;
            this.oppFieldsValue['Id'] = this.recordId;
        } else if (error) {
            this.showToast('Error fetching Opportunity data:', error, 'error');
        }
    }
    // Track the rows array with an initial row
    @track rows = [{
        id: Date.now(),
        AccountId: ''
    }];

    // Method to add a new row

    handleAddRow() {
        const emptyRow = {
            id: Date.now(),
            AccountId: ''
        }
        this.rows = [...this.rows, emptyRow];
    }

    // Method to delete a row
    handleDeleteRow(event) {
        const rowId = event.target.dataset.id;
        this.rows = this.rows.filter(row => row.id !== parseInt(rowId));

        if (this.rows.length === 0) {
            this.handleAddRow();
        }
    }

    handleFieldChange(event) {
        const { value, fieldName } = event.target;
        const rowId = event.target.dataset.rowId;

        console.log(value, fieldName, rowId);

        // Find the row index that matches the rowId
        const rowIndex = this.rows.findIndex(row => row.id === parseInt(rowId));

        if (rowIndex !== -1) {
            this.rows[rowIndex][fieldName] = value;
        }
    }

    updateRowErrorClasses() {
        this.rows = this.rows.map(row => {
            return {
                ...row,
                errorClass: row.AccountId ? '' : 'slds-has-error'
            };
        });
    }
    handleBooleanChange(event) {
        
        console.log('this.oppFieldsValue1>>>', JSON.stringify(this.oppFieldsValue));

        const fieldNameOp = event.target.fieldName;
        const fieldvalueO = event.target.value;
        this.oppFieldsValue[fieldNameOp] = fieldvalueO;
        console.log('this.oppFieldsValue2>>>', JSON.stringify(this.oppFieldsValue));
        const stringfy = JSON.stringify(this.oppFieldsValue)
        this.doNotIncludeInForecast = event.target.value;
    }
    handleupdate(recordInput){
        updateRecord(recordInput).then(() => {
          
    }) .catch(error => {
        this.showToast('Error Updating parent ppportunity data:', error, 'error');
    });
    }
   
    
    
    // Method to handle save and print row values to the console
    async handleSave() {

    try {

        const errorRows = this.rows.filter(row => !row.AccountId);
        this.updateRowErrorClasses();
        if (errorRows.length > 0) {
            this.showToast('Account/s not selected!!', 'Please select account or delete row/s.', 'error');
            return;
        }
        this.isLoading = true;

        const accountIds = this.rows
            .map(row => row.AccountId)
            .filter(accountId => accountId !== "");

        // console.log('accountIds:', JSON.stringify(accountIds, null, 2));

        const status = await splitOpportunity({
            opportunityId: this.recordId,
            accountIds: accountIds,
            forecastCheck: this.doNotIncludeInForecast
        });
        try {
            this.handleupdate(this.oppFieldsValue);
        } catch (error) {
            this.showToast('Error Updating parent oppportunity data:', error, 'error');
        }
        
        
        this.showToast('Split Opportunity Success!!', 'Child Opportunities are Created.', 'success');
        //this.dispatchEvent(new CloseActionScreenEvent());
        const refreshEvent = new CustomEvent('refreshpage', { bubbles: true, composed: true });
        this.dispatchEvent(refreshEvent);
        const closeEvent = new CustomEvent('close', { bubbles: true, composed: true });
        this.dispatchEvent(closeEvent);
        return refreshApex(this.wiredOpportunity);
        

    } catch (error) {
        this.isLoading = false;
        // console.log(error)
        this.showToast('Split Opportunity Error!!', error.body.message, 'error');
    }

}

// Method to handle cancel
handleCancel() {
    const closeEvent = new CustomEvent('close', { bubbles: true, composed: true });
    this.dispatchEvent(closeEvent);
}

// Show toast notification
showToast(title, message, variant) {
    this.dispatchEvent(new ShowToastEvent({
        title: title,
        message: message,
        variant: variant,
    }));
}
}


*/
}