import { LightningElement } from 'lwc';

export default class ButtomOpp extends LightningElement {
    mostrarModal = false;

    abrirModal() {
        this.mostrarModal = true;
    }
}