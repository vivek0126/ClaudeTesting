import { LightningElement,api , track} from 'lwc';
import {FlowAttributeChangeEvent, FlowNavigationNextEvent} from 'lightning/flowSupport';


export default class CreateAccountLWC extends LightningElement {
    @api accountsToCreate;
    @track accountName = '';
    @track accountPhone = '';
    @track accountAddress = '';

    handleInputChange(event) {
        const field = event.target.dataset.field;
        if (field === 'Name') {
            this.accountName = event.target.value;
        } else if (field === 'Phone') {
            this.accountPhone = event.target.value;
        } else if (field === 'Address') {
            this.accountAddress = event.target.value;
        }
    }

    createAccount() {
        // Create JSON object
        this.accountsToCreate = [{
            Name: this.accountName,
            Phone: this.accountPhone,
            Address: this.accountAddress
        }];
        console.log(this.accountsToCreate);
        const navigateNextEvent = new FlowNavigationNextEvent();
        this.dispatchEvent(navigateNextEvent);

        // Dispatch event with JSON data
      
        
    
    }

}