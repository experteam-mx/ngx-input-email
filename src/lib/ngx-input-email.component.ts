import { Component, OnInit, Input, AfterViewInit, AfterContentInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from "@angular/forms";
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-input-email',
  templateUrl: './ngx-input-email.component.html',
  styleUrls: ['./ngx-input-email.component.sass']
})
export class NgxInputEmailComponent implements OnInit {

  constructor() { }

  @ViewChild('inputElement') inputElement!: ElementRef;

  @Input() control!: FormControl
  @Input() autofocus: any = false
  @Input() idForLabel: any = ""
  @Input() addClass: any = "form-control"

  inputMask = createMask({
    regex: "^[a-z0-9._%+-]{3,30}@[a-z0-9-_]{3,20}\\.[a-z]{2,4}(\\.[a-z]{2,4})?$"
  })

  placeholder = "___@___.__"

  ngAfterViewInit(): void {
    if( this.autofocus ){
      setTimeout(()=>{
        this.inputElement.nativeElement.focus();
      })
    }
  }

  ngAfterContentInit(): void {
  }

  ngOnInit(): void {
  }

}
