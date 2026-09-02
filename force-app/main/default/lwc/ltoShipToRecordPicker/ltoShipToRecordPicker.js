
    import { LightningElement,api, wire, track} from 'lwc';
export default class LtoShipToRecordPicker extends LightningElement {
   
    @api accountIdFromFlow = '001GC00003jwrgXYAQ';
    @api SelectedLocation;

    get filter() {
        if (!this.accountIdFromFlow) {
            return null;    // avoid error on load
        }

        return {
            criteria: [
                {
                    fieldPath: 'RootLocationId',
                    operator: 'eq',       // single ID requires eq
                    value: '131GC000000lQ5RYAU'
                }
            ]
        };
    }
     handleChange(event) {
        this.SelectedLocation = event.detail.recordId;
    }

}
