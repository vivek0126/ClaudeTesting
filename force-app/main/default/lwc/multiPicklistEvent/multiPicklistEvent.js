import { LightningElement, api, track, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';

import PURPOSE_FIELD from '@salesforce/schema/Event.Purpose__c';

export default class MultiPicklistEvent extends LightningElement {
    @track options = [];
    @track selected = [];

    // Expose selected values to Flow
    @api get selectedValues() {
        return this.selected.join(';'); // semicolon-separated for Flow
    }

    // Fetch picklist values for Event.Purpose__c
    @wire(getPicklistValues, {  recordTypeId: '012000000000000AAA',  fieldApiName: PURPOSE_FIELD })
    wiredPurpose({ data, error }) {
        if (data) {
            this.options = data.values.map(item => ({
                label: item.label,
                value: item.value
            }));
        }
        if (error) {
            console.error('Error fetching Event Purpose picklist values:', error);
        }
    }

    handleChange(event) {
        this.selected = event.detail.value;
    }
}
