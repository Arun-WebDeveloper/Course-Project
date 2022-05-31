==========================================================[Pipes]======================================================================
# pipes: 
Pipes are a useful feature in Angular. They are a simple way to transform values in an Angular template. There are some built in pipes, but you can also build your own pipes. A pipe takes in a value or values and then returns a value.

# To Learn more about pipes:
https://angular.io/api?query=pipe-go this link

# Changing multiple pipes:
to implement multiple pipe simply you can add 
Eg:
<h2>{{server.status | date: 'fullDate'| uppercase}</h2>
:-colon indicates that pipes are been parameterized.

===============================================================[Http]==================================================================
# Http Req:
Descriptionlink. HttpRequest represents an outgoing request, including URL, method, headers, body, and other request configuration options. Instances should be assumed to be immutable.

The asynchronous method sends an HTTP request, and returns an Observable that emits the requested data when the response is received. The return type varies based on the observe and responseType values that you pass to the call.

# Backend Database(Firebase):
The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.Create a project as ng-angular-http after create a real time database in the build section.

# Http Requests:  The following table lists all the supported methods in HTTP.
GET
The GET method is used to retrieve information from the given server using a given URL. Requests using GET should only retrieve data and should have no other effect on the data.

HEAD:
Same as GET, but it transfers the status line and the header section only.

POST:
A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.

PUT:
Replaces all the current representations of the target resource with the uploaded content.

DELETE:
Removes all the current representations of the target resource given by URI.

CONNECT:
Establishes a tunnel to the server identified by a given URI.

OPTIONS:
Describe the communication options for the target resource.

TRACE:
Performs a message loop back test along with the path to the target resource.

# Eg: to use http request for sending data  means post method needs to be used.
# Important Note: That requests are only sent when you subscribe.
syntax:
this.http.post('urlDatabaseLink/posts.json').subscribe(responseData =>{
    console.log(responseData)
})
# Delete A Request:
Removes all the posts request
Eg:
Create a method in service and return that method dont subcribe and call it in your typescript then subscribe.
deletePost(){
    return this.http.delete("urlLink")
}
In the typescript file-
clearPost(){
    this.postService.deletePost().subscribe(()=>
    //pass some message like
    confirm('Posts has been Deleted');
    )
}
# Adding Http headers and queryParams: To add httpheaders we can simple pass as an argument in any requests method same goes for params as well.Eg given below 

headers: new HttpHeaders({ "Custom-Headers": "HttpHeaders" }),
params: new HttpParams().set("params","loading"), - while using params set method needs to be used,another method for adding params is
params: newParams
let newParams = new HttpParams;
newParams = newParams.append('print','pretty');
newParams = newParams.append('custom','params');
by using this alternative we can create as many custom queryParams on our own.


# Interceptors:
The Angular HTTP Interceptor is introduced along with the new HTTPClientModule. The Interceptor helps us to modify the HTTP Request by intercepting it before the Request is sent to the back end. The Interceptor can be useful for adding custom headers to the outgoing request, logging the incoming response, etc.

# Create Intercerptor:Npm install interceptor

=================================================[Authentication]======================================================================
# authentication:
 service is used to login & logout of the Angular app, it notifies other components when the user logs in & out, and allows access the currently logged in user. RxJS Subjects and Observables are used to store the current user object and notify other components when the user logs in and out of the app.
 
 # How to use authentication step by step:
 1.Create a auth component for signup using cli or manually ng g c auth.
 2.Set up a form which contains email,password and two buttons using bootstrap and apply routing to that component.
 3.Configure that form into template driven or reactive approach after that console log the value also add validation and reset the form while submitting.
 4.Enable email/password in authentication firebase database and change read and write to auth !=null in database
 5.Create a service and send a post request in required link given by firebase.Eg 
 signUp(email: string, password: string) {
         return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAZ4gBDeMIsnPfD_nQ5T6KBZ3zirYKmwh0',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }

        )
    }
subcribe it in the authComponent 
 onSubmit(form: NgForm) {

        if (!form.valid) { // this statement checks if form is not valid it should return.
            return;
        }
        const email = form.value.email; // creating email,password 
        const password = form.value.password;
        this.isLoading = !this.isLoading
        if (this.isLoginMode) {
            //..
        } else {
            this.authService.signUp(email, password).subscribe(resData => { //email and password as an argument we pass on the service
                console.log(resData);
                this.isLoading = false;//spinners will stop
            }, errorRes => {
                console.log(errorRes);
                switch(errorRes.error.error.message){ //or another method is we can use this error handling in service as well.
                   case "EMAIL_EXISTS": this.error = "This Email Exists already !"
                }
                this.isLoading = false//spinners will stop
            });
        }

        form.reset();
    }

# Observable:
Observable in Angular is a feature that provides support for delivering messages between different parts of your single-page application. This feature is frequently used in Angular because it is responsible for handling multiple values, asynchronous programming in Javascript, and also event handling processes.

Angular makes use of observables as an interface to handle a variety of common asynchronous operations. For example:

# You can define custom events that send observable output data from a child to a parent component
# The HTTP module uses observables to handle AJAX requests and responses
# The Router and Forms modules use observables to listen for and respond to user-input events
