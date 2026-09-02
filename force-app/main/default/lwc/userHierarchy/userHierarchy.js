import { LightningElement, wire } from 'lwc';
import getAllUsers from '@salesforce/apex/UserHierarchyController.getAllUsers';

export default class UserHierarchy extends LightningElement {
    users = [];
    error;
    managerUsers = []; // To store users managed by the selected user
    activeSectionName = ''; // To track the expanded section
    isLoading = false; // To track loading state for the spinner

    @wire(getAllUsers)
    wiredUsers({ data, error }) {
        if (data) {
            this.users = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.users = [];
        }
    }

    // Method to handle click on user section
    onclickUser(event) {
        const selectedUserId = event.target.dataset.userid; // Get the clicked user ID

        // Show the spinner while fetching manager users
        this.isLoading = true;
        this.managerUsers = []; // Clear the previous list

        // Simulate loading data for the manager users (use actual logic if needed)
        setTimeout(() => {
            // Check if the clicked user is a manager (ManagerId is not null or empty)
            const isManager = this.users.some(user => user.ManagerId === selectedUserId);

            if (isManager) {
                // Filter and get users managed by the selected user
                this.managerUsers = this.users.filter(user => user.ManagerId === selectedUserId);
            }

            // Stop loading and hide the spinner
            this.isLoading = false;
            // Optionally, you can update the active section if needed
            this.activeSectionName = selectedUserId;
        }, 1000); // Simulate a delay of 1 second
    }
}