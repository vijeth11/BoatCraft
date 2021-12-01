import { EventEmitter,  Component, Output  } from "@angular/core";

@Component({
    selector: 'Modal',
    templateUrl: 'modal.component.html',
    styleUrls:['modal.component.css']
})

export class ModalComponent {

    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    closeButton(){
        this.close.emit();
    }
}