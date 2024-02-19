import { LightningElement,track } from 'lwc';
import modalEndStage from 'c/modalEndStage';

export default class buttomOpp extends LightningElement {
    @track isShowModal = false;

    async handleClick(){
       const result = await modalEndStage.open({
        size: 'large',
        description: 'Accessible description of modal\'s purpose',
        content: 'Passed into content api',
       });
       console.log(result);
    }

    showModalBox() {  
        this.isShowModal = true;
    }


}