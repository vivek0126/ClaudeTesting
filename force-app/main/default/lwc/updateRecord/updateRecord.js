import {
    LightningElement,
    track,api,wire
    } from 'lwc';
    import {
    ShowToastEvent
    } from 'lightning/platformShowToastEvent';
    import Constituency_Name__c from '@salesforce/schema/Candidate__c';
    import Election__c from '@salesforce/schema/Candidate__c';
    import Party__c from '@salesforce/schema/Candidate__c';
     
     
    import {
    getRecord,
    updateRecord,
    generateRecordInputForUpdate,
    getFieldValue,
    } from 'lightning/uiRecordApi';
    import {
    CurrentPageReference
    } from 'lightning/navigation';
     
     
    export default class Updaterecord extends LightningElement {
    @api recordId;
    @track CandidateId;
    @track name = 'Demo Candidate';
    @track Election__c;
    @track Party__c ;
    @track Constituency_Name__c;
     
    handleNameChange(event) {
        this.CandidateId = undefined;
        console.log('label values --->>' + event.target.label);
        if (event.target.label === 'Name') {
            this.name = event.target.value;
        }
        if (event.target.label === 'Election') {
            this.annualrev = event.target.value;
        }
        if (event.target.label === 'Party') {
            this.fax = event.target.value;
        }
        if (event.target.label === 'ConstituencyName') {
            this.phone = event.target.value;
        }
     
    }
     
     
    updateCandidate() {
        let record = {
            fields: {
                Id: this.recordId,
                Name: this.name,
                Election__c:this.Election ,
                Party__c:this.Party ,
                Constituency_Name__c:this.ConstituencyName,
            },
        };
        updateRecord(record)
            // eslint-disable-next-line no-unused-vars
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Record Is Updated',
                        variant: 'sucess',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error on data save',
                        message: error.message.body,
                        variant: 'error',
                    }),
                );
            });
     
     
    }
     
    }