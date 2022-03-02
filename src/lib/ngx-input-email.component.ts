import { Component, OnInit, Input, AfterViewInit, AfterContentInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from "@angular/forms";
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-input-email',
  templateUrl: './ngx-input-email.component.html',
  styleUrls: ['./ngx-input-email.component.sass']
})
export class NgxInputEmailComponent implements OnInit, OnDestroy {

  @ViewChild('inputElement') inputElement!: ElementRef;

  @Input() control!: FormControl
  @Input() autofocus: any = false
  @Input() idForLabel: any = ""
  @Input() addClass: any = "form-control"

  constructor() {
  }

  inputMask = createMask({
    regex: "^[a-zA-Z0-9._%+-]{2,30}@[a-zA-Z0-9-_]{2,20}\\.[a-zA-Z]{2,4}(\\.[a-zA-Z]{2,4})?$",
    //alias: 'email'
    clearIncomplete: true,
    onincomplete: ()=>{
      this.control.setValue(null)
    }
  })

  placeholder = "__@__.__"

  ngAfterViewInit(): void {
    if( this.autofocus ){
      setTimeout(()=>{
        this.inputElement.nativeElement.focus();
      })
    }
  }

  ngAfterContentInit(): void {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
