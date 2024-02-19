import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class ModalEndStage extends LightningModal {
    @api content;
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

    handleOkay() {
        this.close('okay');
    }


}