import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerr',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registerr.component.html',
  styleUrl: './registerr.component.css'
})
export class RegisterrComponent {

subject:string="";
email:string="";
password:string="";
  constructor(private http: HttpClient, private router:Router )
  {
   
  }
registerr()
  {
  
    let bodyData = {
      "subject" : this.subject,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:4001/api/register",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registered Successfully");
        this.router.navigateByUrl('/login');
      
 
        this.subject = '';
      this.email = '';
        this.password  = '';
    });
  }

}

// export class RegisterComponent {

//   name: string ="";
//   address: string ="";
//   phone: Number =0;

//   constructor(private http: HttpClient )
//   {
   
//   }


//   register()
//   {
  
//     let bodyData = {
//       "name" : this.name,
//       "address" : this.address,
//       "phone" : this.phone
//     };
//     this.http.post("http://localhost:8086/user/create",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
//     {
//         console.log(resultData);
//         alert("Registered Successfully");
      
 
//         this.name = '';
//       this.address = '';
//         this.phone  = 0;
//     });
//   }

// }
