import { LightningElement, api } from 'lwc';

export default class AccountDataTable extends LightningElement {

    @api listAccounts;
    columns = [  
        { label: 'Id', fieldName: 'Id' }, 
        { label: 'Name', fieldName: 'Name' }, 
        { label: 'Industry', fieldName: 'Industry' }, 
        { label: 'Account Number', fieldName: 'AccountNumber' }, 
        { label: 'Type', fieldName: 'Type' } 
    ];  

}