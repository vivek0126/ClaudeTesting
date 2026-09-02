import { LightningElement, track,api } from 'lwc';

export default class ContactRecordPicker extends LightningElement {
    
 @api selectedContactId; // Exposed to Flow
    @track selectedContactName; // Optional if you want to show name

    handleContactChange(event) {
        this.selectedContactId = event.detail.recordId;
        this.selectedContactName = event.detail.label;
        console.log('Selected Contact Id:', this.selectedContactId);
        console.log('Selected Contact Name:', this.selectedContactName);
    }
}