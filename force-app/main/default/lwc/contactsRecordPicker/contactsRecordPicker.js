import { LightningElement, api, track } from 'lwc';

export default class ContactsRecordPicker extends LightningElement {
    @api contactJson;  // Flow sends JSON string
    @api selectedContact;
    @track selectedContactName;
   connectedCallback() {
        console.log('contactJson in connectedCallback:', this.contactJson);

        // Parse and extract Ids safely
        if (this.contactJson) {
            try {
                const parsed = JSON.parse(this.contactJson);
                this.contactIds = parsed.map(c => c.Id).filter(id => !!id);
            } catch (e) {
                console.error('Invalid JSON:', e);
            }
        }

        console.log('Extracted Contact Ids:', this.contactIds);
    }
get filter() {
        if (!this.contactJson) {
            return null;    // avoid error on load
        }

        return {
            criteria: [
                {
                    fieldPath: 'AccountId',
                    operator: 'eq',       // single ID requires eq
                    value: this.contactJson
                }
            ]
        };
    }
    // Extract Id list from JSON
   

    handleChange(event) {
        console.log('Selected Contact Id:', event.detail.recordId);
        this.selectedContact =event.detail.recordId;
    }
}