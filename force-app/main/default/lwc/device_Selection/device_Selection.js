import { LightningElement, track } from 'lwc';

export default class Device_Selection extends LightningElement {
    @track phoneData = {
        Devices: [
            {
                Model: 'iPhone 14 Pro',
                Colors: [
                    { label: 'Space Black', value: 'Space Black' },
                    { label: 'Silver', value: 'Silver' },
                    { label: 'Gold', value: 'Gold' }
                ],
                Sizes: [
                    { label: '128GB', value: '128GB' },
                    { label: '256GB', value: '256GB' },
                    { label: '512GB', value: '512GB' }
                ],
                Children: true,
                Dependents: [
                    {
                        AccessoryType: 'AirPods Pro',
                        showToggle: true,
                        selectedAccessory: false,
                        Colors: [
                            { label: 'White', value: 'White' },
                            { label: 'Black', value: 'Black' }
                        ],
                        Sizes: [
                            { label: 'Standard', value: 'Standard' },
                            { label: 'Large', value: 'Large' }
                        ]
                    }
                ]
            },
            {
                Model: 'Samsung Galaxy S23',
                Colors: [
                    { label: 'Phantom Black', value: 'Phantom Black' },
                    { label: 'Cream', value: 'Cream' },
                    { label: 'Green', value: 'Green' }
                ],
                Sizes: [
                    { label: '256GB', value: '256GB' },
                    { label: '512GB', value: '512GB' }
                ],
                Children: false
            }
        ]
    };

    @track selectedDevices = [];
    @track deviceOptions = [];
    @track currentDevice;
    @track currentIndex = 0;
    @track showDeviceDetails = false;
    @track selectedColor = '';
    @track selectedSize = '';
    
    // Array to hold selected device details
    @track selectedValues = [];

    connectedCallback() {
        this.deviceOptions = this.phoneData.Devices.map((device) => ({
            label: device.Model,
            value: device.Model
        }));
    }

    handleDeviceChange(event) {
        this.selectedDevices = event.detail.value;
        console.log('Selected Devices:', this.selectedDevices);
        if (this.selectedDevices.length > 0) {
            this.currentIndex = 0;
            this.showDeviceDetails = true;
            this.currentDevice = this.phoneData.Devices.find(
                (device) => device.Model === this.selectedDevices[this.currentIndex]
            );
        }
    }

    handleColorChange(event) {
        this.selectedColor = event.detail.value;
        console.log('Selected Color:', this.selectedColor);
    }

    handleSizeChange(event) {
        this.selectedSize = event.detail.value;
        console.log('Selected Size:', this.selectedSize);
    }

    handleNext() {
        if (this.currentIndex < this.selectedDevices.length - 1) {
            this.storeSelectedValues();
            this.currentIndex++;
            this.currentDevice = this.phoneData.Devices.find(
                (device) => device.Model === this.selectedDevices[this.currentIndex]
            );
            this.selectedColor = '';
            this.selectedSize = '';
        } else if (this.currentIndex === this.selectedDevices.length - 1) {
            // Store values on the last device before finalizing
            this.storeSelectedValues();
            console.log('Final Selected Values:', this.selectedValues);
        }
    }

    handlePrevious() {
        if (this.currentIndex > 0) {
            this.storeSelectedValues();
            this.currentIndex--;
            this.currentDevice = this.phoneData.Devices.find(
                (device) => device.Model === this.selectedDevices[this.currentIndex]
            );
            this.selectedColor = '';
            this.selectedSize = '';
        }
    }

    // Method to store selected values into the array
    storeSelectedValues() {
        const existingValueIndex = this.selectedValues.findIndex(
            (value) => value.Model === this.selectedDevices[this.currentIndex]
        );
        
        const selectedValue = {
            Model: this.selectedDevices[this.currentIndex],
            Color: this.selectedColor,
            Size: this.selectedSize
        };

        if (existingValueIndex !== -1) {
            // Update existing entry
            this.selectedValues[existingValueIndex] = selectedValue;
        } else {
            // Add new entry
            this.selectedValues.push(selectedValue);
        }
    }

    get isFirstScreen() {
        return this.currentIndex === 0;
    }

    get isLastScreen() {
        return this.currentIndex === this.selectedDevices.length - 1;
    }
}



/* @track data = [
        { id: '1', Model: 'iPhone 14 Pro', Color: 'Space Black', Size: '256GB' },
        { id: '2', Model: 'Samsung Galaxy S23', Color: 'Phantom Black', Size: '512GB' },
        { id: '3', Model: 'Google Pixel 7', Color: 'Obsidian', Size: '128GB' },
        { id: '4', Model: 'OnePlus 11', Color: 'Eternal Green', Size: '256GB' }
        // Add more rows as needed
    ];

    columns = [
        { label: 'Model', fieldName: 'Model', sortable: true },
        { label: 'Color', fieldName: 'Color', sortable: true },
        { label: 'Size', fieldName: 'Size', sortable: true }
    ];

    @track currentPhoneIndex = 0;
    @track showChildren = false;

    selectedRecords = [];

    get currentPhone() {
        return this.phoneData.Devices[this.currentPhoneIndex];
    }

    get hasChildren() {
        return this.currentPhone.Children;
    }

    get isFirstScreen() {
        return this.currentPhoneIndex === 0;
    }

    get isLastScreen() {
        return this.currentPhoneIndex === this.phoneData.Devices.length - 1;
    }

    handleNext() {
        console.log(this.phoneData);
        this.saveCurrentSelection();
        if (this.hasChildren && !this.showChildren) {
            this.showChildren = true;
        } else {
            this.showChildren = false;
            if (this.currentPhoneIndex < this.phoneData.Devices.length - 1) {
                this.currentPhoneIndex += 1;
            }
        }
    }

    handlePrevious() {
        if (this.showChildren) {
            this.showChildren = false;
        } else {
            if (this.currentPhoneIndex > 0) {
                this.currentPhoneIndex -= 1;
            }
        }
    }

    handleToggleChange(event) {
        this.showChildren = event.target.checked;
    }

    handleColorChange(event) {
        this.currentPhone.selectedColor = event.detail.value;
    }

    handleSizeChange(event) {
        this.currentPhone.selectedSize = event.detail.value;
    }

    handleChildColorChange(event) {
        const childIndex = event.target.dataset.index;
        this.currentPhone.Dependents[childIndex].selectedColor = event.detail.value;
    }

    handleChildSizeChange(event) {
        const childIndex = event.target.dataset.index;
        this.currentPhone.Dependents[childIndex].selectedSize = event.detail.value;
    }

    saveCurrentSelection() {
        const currentPhone = this.currentPhone;
        const record = {
            Model: currentPhone.Model,
            Color: currentPhone.selectedColor || '',
            Size: currentPhone.selectedSize || '',
            Accessories: []
        };

        if (this.showChildren) {
            currentPhone.Dependents.forEach(dependent => {
                if (dependent.selectedAccessory) {
                    record.Accessories.push({
                        AccessoryType: dependent.AccessoryType,
                        Color: dependent.selectedColor || '',
                        Size: dependent.selectedSize || ''
                    });
                }
            });
        }

        this.selectedRecords[this.currentPhoneIndex] = record;
    }*/