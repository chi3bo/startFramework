import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

myForm:FormGroup = new FormGroup({

  userName: new FormControl(null),
  userEmail: new FormControl(null),
  userPhone: new FormControl(null),
  userPassword: new FormControl(null),

})

isfull(el:HTMLInputElement){
if (el.value != '' ){
  return true
}
else{
  return false
}

}

}
