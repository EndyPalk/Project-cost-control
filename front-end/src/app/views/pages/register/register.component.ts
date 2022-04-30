import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private authService: AuthService) { }

  ngOnInit(){
    console.log("Register page work");
    this.authService.getPage().subscribe(data => {
      console.log('after subscribe')
      console.log(data)
    }, err => {
      console.log('ERROR')
      console.log(err)
    })
  }
}
