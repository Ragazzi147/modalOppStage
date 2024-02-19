import { LightningElement } from 'lwc';

export default class ModalEndStage extends LightningElement {
    selectedStatus = '';
    statusOptions = [
        { label: 'Closed Won', value: 'Closed Won' },
        { label: 'Closed Lost', value: 'Closed Lost' }
    ];

    confirmar() {

        this.dispatchEvent(new CustomEvent('confirm', { detail: this.selectedStatus }));
        this.fecharModal();
    }

    fecharModal() {
       
        this.dispatchEvent(new CustomEvent('fechar'));
    }
}