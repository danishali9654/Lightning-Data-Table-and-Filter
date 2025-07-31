import { LightningElement, api } from 'lwc';

export default class PublicationTable extends LightningElement {
    @api columns;
    @api paginatedData;
    @api pageNumbers;
    @api currentPage;
    @api startRecord;
    @api endRecord;
    @api totalRecords;
    @api pageSizeOptions;
    @api pageSize;
    @api sortedBy;
    @api sortedDirection;
 renderedCallback() {
    // Remove activeTab from all tabs
    const tabs = this.template.querySelectorAll('.pagination-tab');
    tabs.forEach(tab => tab.classList.remove('activeTab'));

    // Add activeTab to the current page tab
    const activeTab = this.template.querySelector(`.pagination-tab[data-id="${this.currentPage}"]`);
    if (activeTab) {
        activeTab.classList.add('activeTab');
    }
}  


    handlePageChange(event) {
        const selectedPage = parseInt(event.target.dataset.id, 10);
        this.dispatchEvent(new CustomEvent('pagechange', { detail: selectedPage }));
            // Remove activeTab class from all tabs
            const tabs = this.template.querySelectorAll('.pagination-tab');
            tabs.forEach(tab => tab.classList.remove('activeTab'));

            // Add activeTab class to the clicked tab
            event.target.classList.add('activeTab');

    }

    handleLastPage() {
        this.dispatchEvent(new CustomEvent('lastpage'));
    }

    // handlePageSizeChange(event) {
    //     const newSize = parseInt(event.detail.value, 10);
    //     this.dispatchEvent(new CustomEvent('pagesizechange', { detail: newSize }));
    // }

    handleSort(event) {
        this.dispatchEvent(new CustomEvent('sort', { detail: event.detail }));
    }
}