import { LightningElement,api } from 'lwc';

export default class UIRecor extends LightningElement {
    @api recordId;
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    handleSuccess(event) {
        console.log('onsuccess event recordEditForm', event.detail.id);
    }
    /**
     * 
     <template>
    <lightning-accordion allow-multiple-sections-open active-section-name={activeSection}>
        <lightning-accordion-section key={group.parent.Id} name={group.parent.Id} label={group.displayLabel}
            class={levelHeaderClass}>

            <div class={computedCardClass}>
                <div class="fields-grid-container">
                    <template for:each={group.parentFields} for:item="field">
                        <template if:true={field.visibility}>
                            <div key={field.fieldName} class="field-item">
                                <strong>{field.fieldName}</strong>
                                <template if:true={field.isNameField}>
                                    <span><a href={group.recordURL} target="_blank">{field.fieldValue}</a></span>
                                </template>
                                <template if:false={field.isNameField}>
                                    <span>{field.fieldValue}</span>
                                </template>
                            </div>
                        </template>
                    </template>
                </div>

                <div class="record-action-footer">
                    <template lwc:if={group.displayUPEdit}>
                        <lightning-button-icon icon-name="utility:edit" title="UP-Edit" onclick={handleUPEdit}
                            data-id={group.parent.Id} variant="bare" class="icon-button desktop-only">
                        </lightning-button-icon>
                    </template>
                    <template lwc:elseif={group.displayEdit}>
                        <lightning-button-icon icon-name="utility:edit" title="Edit" onclick={handleEdit}
                            data-id={group.parent.Id} variant="bare" class="icon-button desktop-only">
                        </lightning-button-icon>
                    </template>
                    <template if:true={group.displayRelation}>
                        <lightning-button-icon icon-name="utility:hierarchy" title="View Relationship"
                            onclick={handlePartnerRelationship} data-id={group.parent.Id} variant="bare"
                            class="icon-button">
                        </lightning-button-icon>

                         <lightning-button-icon icon-name="utility:cart" title="Create New Order"
                            onclick={handleNewOrder} data-id={group.parent.Id} variant="bare"
                            class="icon-button">
                        </lightning-button-icon>

                         <lightning-button-icon icon-name="utility:quote" title="Create New Quote"
                            onclick={handleQuote} data-id={group.parent.Id} variant="bare"
                            class="icon-button">
                        </lightning-button-icon>
                    </template>
                    <template if:true={group.displayUP}>
                        <lightning-button-icon icon-name="utility:add" title="Add Unloading Point"
                            onclick={handleUnloadingPoint} data-id={group.parent.Id} variant="bare"
                            class="icon-button desktop-only">
                        </lightning-button-icon>
                    </template>
                </div>
            </div>

            <template if:true={group.childFields.length}>
                <div class="child-card-wrapper slds-m-top_medium">
                    <lightning-accordion allow-multiple-sections-open>
                        <template for:each={group.childFields} for:item="child">
                            <c-relationship-display key={child.parent.Id} group={child} expanded={expanded}>
                            </c-relationship-display>
                        </template>
                    </lightning-accordion>
                </div>
            </template>

        </lightning-accordion-section>
    </lightning-accordion>
</template>
/**
 * @description Component to build nested structure for Tree-Grid.
 
import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// Importing newOrdalModal to display New Order Screen flow.
import NewOrderModal from 'c/newOrderModal';
// Flow API Name used for creating new Order
import NewOrderFlowApiName from '@salesforce/label/c.NewOrderFlowApiName';

export default class RelationshipDisplay extends LightningElement {
    // Stores the relationship group.
    @api group;
    // Stores the expand/collapse state of the section.
    @api expanded;

    /**
     * @description Returns the active section name.
     * @returns {string} activeSection
     
    get activeSection() {
        return this.expanded ? this.group.parent.Id : '';
    }

    /**
     * @description Returns the computed class for the card.
     * @returns {string} computedCardClass
     
    get computedCardClass() {
        return `fields-grid-container slds-box slds-m-bottom_medium level-${this.group.level}`;
    }

    /**
     * @description Returns the computed class for the header.
     * @returns {string} levelHeaderClass
     
    get levelHeaderClass() {
        return `accordion-section level-${this.group.level || 1}`;
    }

    /**
     * @description Handles partner relationship row click for navigation.
     * @param event view relationship custom event from Child component.
     
    handlePartnerRelationship(event) {
        const recordId = event.currentTarget.dataset.id;
        this.dispatchEvent(new CustomEvent('viewrelationship', {
            detail: { recordId },
            bubbles: true,
            composed: true
        }));
    }

    /**
     * @description Handles edit action of Unloading Point from UI.
     * @param event edit custom event from Child component.
     
    handleUPEdit(event) {
        const recordId = event.currentTarget.dataset.id;
        this.dispatchEvent(new CustomEvent('edituprecord', {
            detail: { recordId },
            bubbles: true,
            composed: true
        }));
    }

    /**
     * @description Handles edit action from UI.
     * @param event edit custom event from Child component.
     
    handleEdit(event) {
        const recordId = event.currentTarget.dataset.id;
        this.dispatchEvent(new CustomEvent('editrecord', {
            detail: { recordId },
            bubbles: true,
            composed: true
        }));
    }

    /**
     * @description Handles add unloading point action from UI.
     * @param event add unloading point custom event from Child component.
     
    handleUnloadingPoint(event) {
        const recordId = event.currentTarget.dataset.id;
        this.dispatchEvent(new CustomEvent('addunloadingpoint', {
            detail: { recordId },
            bubbles: true,
            composed: true
        }));
    }

    /**
     * @description Handles error.
     * @param {string} context
     * @param {object} error
     
    handleError(context, error) {
        const message = `Error in ${context}: ${error?.message || error}`;
        this.showToast('Error', message, 'error');
    }

    /**
     * @description Displays a toast message.
     * @param title heading of Toats.
     * @param msg information on Toast Banner.
     
    showToast(title, msg, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title,
            message: msg,
            variant,
        }));
    }

    /**
     * @description Handles the click event of the New Order button.
     * Opens a modal dialog containing the specified flow for order creation.
     * The modal is configured with medium size and displays the flow with predefined parameters.
     * @async
     
    async handleNewOrder() {
        // Open the New Order modal with configuration options
        await NewOrderModal.open({
            size: 'medium',          // Sets the modal size to medium
            label: 'New Order',      // Sets the modal header label
            recordId: this.group.parent.Id,  // Passes the parent (Sold To) customer ID
            flowName: NewOrderFlowApiName  // Specifies which flow to display in the modal
        });
    }
        <template for:each={nestedDisplay} for:item="group">
                    <c-relationship-display key={group.parent.Id} group={group} expanded={expandAll}
                        oneditrecord={handleEdit} onviewrelationship={handlePartnerRelationship}
                        onaddunloadingpoint={handleUnloadingPoint} onedituprecord={handleEditUP} >
                    </c-relationship-display>
                </template>
}*/
     
}