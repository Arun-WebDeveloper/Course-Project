# Forms: 
 This is an example of how a form look like a simple login form to submit the required details.
Eg:
<form>
<label>Name</label>
<input type="text" name="name">
<label>Mail</label>
<input type="text" name="email">
<button class="btn btn-success">Save</button>
</form>

{
    valid{
        name:'arun'
        email:'arun@gmail.com'
    }
    valid: true;
}

-Forms offers two approaches 
 # Template-Driven: Angular infers the form object from the dom.
 # Reactive: Form is created programmatically and synchronized with the dom.

 # Submitting the form:
 - use (ngSubmit) on the form tag to give access to submitting the form 
eg: <form (ngSubmit)="methodName()">
-After that use ngForm #f refers to reference element-
 
-ngForm give access to the forms created by angular
-Returns whether the form submission has been triggered.
eg: <form (ngSubmit)="methodName(f)" #f="ngForm">

# Using @ViewChild :
Another alternative is that we can also implement by using viewchild directive 
eg:
<form (ngSubmit)="methodName()" #f="ngFor">
@ViewChild('f') - as we can pass this f as argument and give anyname to access it.
@ViewChild('f') signForm;
methodName(){
    console.log(this.signForm);
}

# Built-in Validators & Using HTML5 Validation
Which Validators do ship with Angular? 

Check out the Validators class: https://angular.io/api/forms/Validators - these are all built-in validators, though that are the methods which actually get executed (and which you later can add when using the reactive approach).

For the template-driven approach, you need the directives. You can find out their names, by searching for "validator" in the official docs: https://angular.io/api?type=directive - everything marked with "D" is a directive and can be added to your template.

Additionally, you might also want to enable HTML5 validation (by default, Angular disables it). You can do so by adding the ngNativeValidate  to a control in your template.

# Validators: Provides a set of built-in validators that can be used by form controls.
class Validators {
  static min(min: number): ValidatorFn
  static max(max: number): ValidatorFn
  static required(control: AbstractControl): ValidationErrors | null
  static requiredTrue(control: AbstractControl): ValidationErrors | null
  static email(control: AbstractControl): ValidationErrors | null
  static minLength(minLength: number): ValidatorFn
  static maxLength(maxLength: number): ValidatorFn
  static pattern(pattern: string | RegExp): ValidatorFn
  static nullValidator(control: AbstractControl): ValidationErrors | null
  static compose(validators: ValidatorFn[]): ValidatorFn | null
  static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn | null
}

-add required to the template to give valdition to a certain fields like
<input type="email"id="email"  class="form-control" ngModel name="email"required  email>
~ required and email are attributes provided by the angular.
-You can also add [disabled]="!f.valid" to disable the button f is reference element and valid is built in function.

# Styling the validation:
ng-invalid will give u red color all over the container and use ng-touched to show red color border whenever the user click the input fields that is why we used this procedure.
input.ng-invalid.ng-touched{
    border:solid 1px red:
}
 
# Outputting validation error messages:
For this add span tag with class help-block <span>-used for inline styling for the text or for appropriate styling
<span class="help-block">Plz enter email!</span>
After that use *ngIf="!email.valid" - this will show the message if the email input field is not valid red border will appears
*ngIf="!email.vaild && email.touched" - touched is another function in which when user touched the email field then the error message will appears.

# TextArea:
The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value.A simple example :
 <div class="form-group">
          <textarea class="form-control" name="questionAnswer" rows="3" [(ngModel)]="answer"></textarea>
        </div>
        <p>Your Reply:{{answer}}</p>
    </div>
answer = ''; - is a default so whatever user type it will get displayed.

# NgModelGroup:Grouping Form Controls
-This ngModelGroup will group the assigned div tags.Eg:
 <div id="user-data" ngModelGroup="user-data" #userData="ngModelGroup">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="form-control" ngModel name="usename" required="">
          </div>
          <button class="btn btn-default" type="button">Suggest an Username</button>
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="email" id="email" class="form-control" ngModel name="email" required email #email="ngModel">
            <span class="help-block" *ngIf="!email.valid && email.touched">Please Provide Valid Email!</span>
          </div>
  </div>
        <p *ngIf="!userData.valid && userData.touched">User Data is Invalid ?</p>

-As we can see the username and email is grouped in that we ngModelGroup as refernce name as userData 
-After that in paragraph we displayed a message that whenever when the user didnt fill in those username and email the error message will be shown via local reference name #userData.

# SetValue : to set the whole form
we implemented a constant of suggestted name
 suggestUserName() {
    const suggestedName = 'Superuser';
    }
this.signInForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'Male'
    });
# patchValue: to override parts of the form
 suggestUserName() {
    const suggestedName = 'Superuser';
    }
this.signInForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    })

# Radio Button in forms: In this method bootstrap class has been used to display radio buttons and also used ngFor to loop the genders of male and female.Eg:
 genders = ['Male', 'Female']
<div class="radio" *ngFor="let gender of genders">
          <label>
            <input type="radio" name="gender" ngModel [value]="gender" required="">
            {{gender}}
          </label>
        </div>
   <button class="btn btn-success" type="submit" [disabled]="!f.valid">Submit</button>
   and also disabled the button using property binding when the form is incomplete.

# Submitting the form data: in this case we used ngIf to display the submitted data and also used a separate function for user 

user = {
    Username:"",
      Email:"",
      SecretQuestion:"",
      Answer:"",
      Gender:"",

  } the names are default because we are asking data from users.

<div class="row" *ngIf="submitted">
    <div class="col-xs-12">
      <h3>Your Data:</h3>
      <p>Username: {{user.Username}}</p>
      <p>Email: {{user.Email}}</p>
      <p>Secret Question: Your First {{user.SecretQuestion}}</p>
      <p>Answer: {{user.Answer}}</p>
      <p>Gender: {{user.Gender}}</p>
    </div>
  </div>

  And through (ngSubmit) we should get the users data.Eg:
  viewchild used for reference
  submitted = false;
  @ViewChild('f') signInForm: NgForm;
   <form (ngSubmit)="onSubmit()" #f="ngForm">
   onSubmit(){
    this.submitted = true;
    this.user.Username = this.signInForm.value.userData.username;
    this.user.Email = this.signInForm.value.userData.email;
    this.user.SecretQuestion = this.signInForm.value.secret;
    this.user.Answer = this.signInForm.value.questionAnswer
    this.user.Gender = this.signInForm.value.gender;

    this.signInForm.reset();
   }
   finally reset used to reset the form.

===================================================[Reactive-Forms]====================================================================

# What is the difference between template driven and reactive forms?
Template Driven Forms are based only on template directives, while Reactive forms are defined programmatically at the level of the component class. Reactive Forms are a better default choice for new applications, as they are more powerful and easier to use.

# Reactive forms
Reactive forms provide a model-driven approach to handling form inputs whose values change over time. This guide shows you how to create and update a basic form control, progress to using multiple controls in a group, validate form values, and create dynamic forms where you can add or remove controls at run time.

# Implementing Reactive Forms: Add ReactiveFormModule in the appRouting.
Create a name for the ReactiveForm 
genders = ['Male', 'Female']
signInForm : FormGroup;
FormGroup and FormControl needed to be imported and in ngOnInit implement
this.signInForm = new FormGroup({
  'username or anyname': new FormControl(null), # null refers to no value has been assigned should be added later
  'email': new FormControl(null),
  'gender': new FormControl('Male')

})
And important note add formControlName in the html and assign the value like this 
formControlName = "username"
formControlName = "email"
formControlName = "gender"

# Submitting the ReactiveForm:As we created the form name we need implement that in a property binding.
-onSubmit() method is created to submit the data
 <form [formGroup]="signUpForm" (ngSubmit)="onSubmit()">
 Eg:
 onSubmit(){
console.log(this.signUpForm)
 }

# styling:
input.ng-invalid.ng-touched{
    border: 1px solid red;
}

# Validators: ValidationErrors | null;
Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
     * only for types that have a numeric `length` property, such as strings or arrays. The
     * `minLength` validator logic is also not invoked for values when their `length` property is 0
     * (for example in case of an empty string or an empty array), to support optional controls. You
     * can use the standard `required` validator if empty values should not be considered valid.
  
# Using Error Codes:
Go to console 
controls->userData->controls again->username->errors (nameIsForbidden:true)

# valueChanges: Observable<any>;
     * A multicasting observable that emits an event every time the validation `status` of the control
     * recalculates.
 this.signUpForm.valueChanges.subscribe((value)=>console.log(value))
  }

# statusChanges: Observable<any>;
     * Reports the update strategy of the `AbstractControl` (meaning
     * the event on which the control updates itself).
     * Possible values: `'change'` | `'blur'` | `'submit'`
     * Default value: `'change'`

this.signUpForm.statusChanges.subscribe((status)=>console.log(status))
  }