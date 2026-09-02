import { LightningElement } from 'lwc';

export default class DateValidationExample extends LightningElement {
  eventStartDate = null;
  eventEndDate = null;

  handleDateChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    // Update the appropriate field value
    if (fieldName === 'eventStartDate') {
      this.eventStartDate = fieldValue;
    } else if (fieldName === 'eventEndDate') {
      this.eventEndDate = fieldValue;
    }

    this.validateDates();
  }

  validateDates() {
    const startInput = this.template.querySelector('lightning-input[name="eventStartDate"]');
    const endInput = this.template.querySelector('lightning-input[name="eventEndDate"]');

    // Clear previous validation messages
    startInput.setCustomValidity('');
    endInput.setCustomValidity('');

    if (this.eventStartDate && this.eventEndDate) {
      if (new Date(this.eventEndDate) < new Date(this.eventStartDate)) {
        endInput.setCustomValidity('Event End Date cannot be earlier than Event Start Date.');
      }
    }

    // Report validity to reflect updated validation state
    startInput.reportValidity();
    endInput.reportValidity();
  }
}
