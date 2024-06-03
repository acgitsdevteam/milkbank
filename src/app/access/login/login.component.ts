import { Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , OnDestroy{
  form: any = {
    useremail: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  @Output() closePopup = new EventEmitter<void>();

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router,private fb:FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  loginForm = this.fb.group(
    {
      useremail:this.fb.control(null,[Validators.required,Validators.email]),
      password:this.fb.control(null,[Validators.required])
    },
  )
  
  onSubmit(): void {
    // const { useremail, password } = this.form;
    if(!this.loginForm.valid){
      this.toastr.error('Enter full details','ERROR')
      return;
    }

    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
       // this.reloadPage();
       this.toastr.success('Login Success','SUCCESS')
       setTimeout(() => {
        this.router.navigate(["/dashboard"]);
       }, 500);
      },
      err => {
        let errMsg = err.error.message;
        this. toastr.error(errMsg,'ERROR');
      }
    );
  }

  reloadPage(): void {
    window.location.reload();

  }
  ngOnDestroy(): void {
    
  }

  close() {
    this.closePopup.emit();
  }
}
