# Angular: 
is a javaScript-framework allows u to create reactive single page application(SPAs).Angular is ofcourse not a tool to write static html file.

# strict Mode: 
Strict mode forces you to write more verbose code in some places (especially when it comes to class properties). If you enabled it by accident, you can also disable it by setting strict: false in your tsconfig.json file.If you just start a new project I highly recommend using strict mode in TypeScript. It will help you to avoid errors, typos, and mistakes in your code in the future. Strict mode constricts you in ways of writing your code. On other hand, you won't choose the way that will bring you to make a mistake.

# appModule: 
basically to tell angular which components or files belong to our app.

# data binding: 
using this {{ex: title}}.string interpolation {{data}} and property binding [property]="data" event binding (event)="expression" and two way data binding= [(ngModel)]="data"

# versions: 
Angular 11,12,13-small,incremental,backwards-compatible changes (Every 6 month the new version will be released)

#To create a project: use ng new command and project name,routing and select css for styles.

#Strict Mode: code will be bit easier to execute.

#typeScript:it is superset of javascript.

# decorators:
 is a typescript feature which allow you to enhance ur classes.Decorators are functions that allow a service, directive or filter to be modified prior to its usage.Decorators allow an efficient and understandable way of wrapping a piece of code with another function or another code

# bootstrap:
download npm install npm install --save bootstrap@3 and in angular.json add "node_modules/bootstrap/dist/css/bootstrap.min.css",

# imports:
allows u to add some other modules to this modules 

# AppModule-bundle 
different pieces of components of ur app into packages for eg: FormsModule for input text.whenever a user create a component it should be registered in the appmodule.

# `{backticks}`:
using Javascript template expressions, to be able to write multi-line strings in between there now.

#css in typescript for short style or for more style use external file i.e css.

#bootstrap classes: xs-12,

# Angular Data-Binding –
	Its basically a method of communication between a component typescript File and the template that is html that the user views in his screen, We send data from typescript file of the component to template of the component and this can be vice versa also

There are two methods for one-way data-binding and they are
String Interpolation -- {{ Data }}
Property Binding –  [ Property ] = “ Data ”

There is still a third way of Binding Data using Event Binding techniques 
Event Binding – ( event ) = “function or expression”

There is an another way of data binding called Two way Data binding and this a combination of both property binding and event binding.
 [ ( ngModel ) ] = “Data”

This is mostly used in reactive forms and you have to import Form Module in App Module component and also import the module there, this must be done for the binding technique to work 

# String Interpolation --
	A string is used within double curly braces and the data can be only a string. If we use other data type it will not work and in case of numbers it converts them into a string and if it is a complex multiplication it does add them but it return them as concatenated values for example adding two strings. An example is shown bellow
	
	@component. TS
	serverID: number = 10;
	serverStatus: string = “Its Online”;

	upServer() {
		Return this.serverStatus;
	}
@component.HTML
	< div class= “Row” >
		< p  >{{ServerID}}< /p >
		< p >{{ serverStatus }}< /p >  or   < p >{{ upServer()  }}< /p >  
	< /div >
What this example teaches us is we can either use variable or a function and we can even use one line condition statement that is used in javaScript as show bellow 
	< p > {{ ServerID? “10” : “20” }} < /p > or < p  > {{ ServerID. Length}} < /p >
We can use any kind of string operations

Using Property Binding
	This is used in using square brackets and inside it we give a property name and set the variable, function and etc behavior and for example we can use disabled attribute in the property.

	@component.TS   
	isDisabled: false

	Constructor () {
		setTimeout ( () => {
			this. isDisabled = true;
		}, 2000)
	}

	@component.HTML
	
	< button [ disabled ] = “ !isDisabled  ”> add < /buttom >

We can also use a inner text property to have the same effect

	< p [ innerText ] = “ isDisabled ” > < /p >

Or we can use string interpolation to

< button>{{!isDisabled }} < /buttom >

# Event Binding –
 This is used between the two parataxis in event bin=ding
 For example a code show bellow

@component.TS
serverCreation: ‘please click the button to create a server’;

onClick() {
	this. serverCreation = “ server is created  ”
}

@component.HTML
< span > {{ serverCreation  }} < /span >

< button [ disabled ] = “ !isDisabled ” ( click ) = “ onClick() “> add < /buttom >

This is called as event binding

Input Event 
	This is basically event binding technique used in input element of the html and this binding method syntax show bellow

@component.HTML
 
< Input 
Type = “text”
Class = “form-control”
( Input ) = “onServerNam ( $event  )” >
(( ServerName  ))


First method in typescript file
@component.TS
onServerNam(event: any) {
	console.log (event);
}

Second method in typescript file
@component.TS
ServerName = ‘’;

onServerNam (event: Event) {
	This. ServerName = < htmlInputElement >event.target.value;
}
# Structural directives * ngIf
	This is a build in directive of angular this either creates the element in DOM or completely remove it from the DOM (document object model) and usage the directive is to use a star at the front and followed by ng with a capital I and smaller f.
	This is a structural directives that completely changes the DOM
Now for an example we use the previous code as shown bellow


@component.HTML
 
< Input 
Type = “text”
Class = “form-control”
( Input ) = “onServerNam ( $event  )” >
(( ServerName  ))

< button
 [ disabled ] = “ !isDisabled ”
 ( click ) = “ onClick() “> add < /buttom >

< p *ngIf=”serverCreated”>
Server was created and server name is 
{{ serverName  }} < /p >

The paragraph is not created unless we click the button

@component.TS
ServerCreated= false;

onServerNam (event: Event) {
	this. ServerCreated = true;
	This. ServerName = < htmlInputElement >event.target.value;
}

The marked elements are the once we are creating


# Structural directives * ngIf and else
This else block uses a angular drive div called < ngTemplate > this is basically toggle between different dives in the same DOM space, this is basically mentioned in the ngIf statement itself a detailed code example is shown bellow

@component.HTML

 < p *ngIf=”serverCreated;  else  noServer”>
Server was created and server name is 
{{ serverName  }} < /p >
< ngTemplate  #noServer >
	< p > Server creation Failed < /p>
< /ngTemplate >

Creating Dynamic 
The above data are all static so we are going create data in dynamic by using simple condition in the constructor itself

@component.TS
Constructor() {
	This.serverStatus = math.random() = 0.5 ? ‘on-line’ : ‘off-line’
}
With this server should show either offline or online
And we are going to make the background color a dynamic also, like online is blue and offline is red and we use build-in directive called as ngStyle

 # NgStyle
Note that ngStyle is not a binding but with square bracket we use them to bind with a property name and write functionalities

ngStyle always uses a javaScript object style like a key and value pair
key is the CSS property name example” background-color” and we can use camel casing 
like this “backgroundColor”
followed by its value name of the color like ”red, green, blue etc’ 
this is example using camel casing [ngStyle]=”{backgroundColor: ‘red’}”
or you can also use a method like this [ngStyle]=”{backgroundColor: getColor()}”
getColor() {
	returm this.serverStatus === ‘on-line’ ? ‘green’ :  ‘red’;
}

# NgClass
Is also like ngStyle but uses CSS class directly and we can add and remove the class conditionally 
we first create a class in component.css and then we use them in ngClass
the syntax is [ngClass]=”{ ‘colorCode’: serverStatus.valid  }” 
another example [ngClass]=”{ ‘colorCode’: serverStatu === ‘online’ }”
online is the dynamic status we created in constructor ()
the key is the css class and value is the variable condition that is created
‘colorCode’ is the kry and a css class
serverStatus.valid   is the value and serverStaus is the variable that is created .valid is a conation operator


NgClass
   ngFor is a build in directive that is useful in creating a dynamic data and we can multiple the items with a iteration 

@component.TS

ServerName = ‘Test-Server’;
Services = [‘test-server-1’, ‘text-server-2’]; 

ngCreateserver() {
	this.Services.push(this.serverName);
}


@component.HTML

<app-server *ngFor = “let create of services”></app-server>

Another example

< div *ngFor = “let create of services”>{{create }}> /div>

We can use another method of iterating the values and that is by using index values
Were we use

@component.HTML
< div *ngFor = “let create of services; let I = index ”>{{create }}> /div        [ngStyle]="{backgroundColor: i >= 4 ? 'blue' : 'ehite}"
 [ngClass]="{'colorWhite': i >= 4}"


@component.TS
  onChange(){
      setTimeout(() => {
        this.displayDetails = true;
      }, 1000)
    this.log.push(new Date());
  }



# Deep Dive into Property Binding

Property binding use cases –
1. HTML elements 
Native properties and events
2. Directives – custom property or angular specific properties and events
3. Components – custom properties and angular way of manipulating the DOM

Custom Property Binding 
We first create a property in the component we create for example we create a property called
‘Element’ and we assign multiple types by initializing inside an object as shown bellow

 	element: {type: string, name: string, content: string} 

And now makes this element into a property binding directives or a custom directives

After we creates this in our component we export this element in a different component as a custom property binding technique
An example used in a different component that the elements

	<app-server-element>
		*ngFor=”let SRElement of serverElements”
		[element]=”SRElement”
	< / app-server-element>


This approach won’t work because if you want to use a variable outside of the component that the variable is created we need a angular decorative called @input() from angular core -----   and we them as shown bellow

Import { input }from ‘angular/core’;


And the syntax is 

@Input() element: {type: string, name: string, content: string}

And the syntax of html component you are using
	<app-server-element>
		*ngFor=”let SRElement of serverElements”
		[element]=”SRElement”
	< / app-server-element>
This is how we use a component outside of its parent component


Using Aliases in @input() this happens in native component. ts
@Input( “serverElemt” ) element: {type: string, name: string, content: string}


And the usage of the property on the component that needs it
	<app-server-element>
		*ngFor=”let SRElement of serverElements”
		[serverElemt]=”SRElement”
	< / app-server-element>

This is we use alias 

Binding a Custom Event –

Now we create two Functions to add a new server

onServerAdd( serverData: {serverName: string, serverCreated: string) {
	this.serverElement.push({
		type: “server”,
		name: this.serverData.ServerName,
		content: this.serverData.ServerContent
});
}

onBlueprintAdded(BlueprinData: {serverName: string, serverCreated: string ) {
	this.serverElement.push({
		type: “Blueprint”,
		name: this. BlueprinData .ServerName,
		content: this. BlueprinData .ServerContent
});
}

And the output of the component that we are going to use for custom event binding
<app-cockpit
( serverCreated ) = “onServerAdd($event)”
( BlueprintCreated ) = “onBlueprintAdded($event)”

 >< /app-cockpit>

EventEmitter
After these steps go to our project main component or like cockpit Component
We create two new variables or property here

serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>() :
BlueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>():

The above part we created a emitter initialization and bellow we will create a method for it

onAddserver() {
	this.serverCreated.emit({
	serverName: this.newServerName,
	serverContent: this.newServerContent
});
}

onAddBlueprint () {
	this.blueprintCreated.emit({
	serverName: this.newServerName,
	serverContent: this.newServerContent
});
}

After this we output the component and its emitters
An example is show bellow

@Output() serverCreated = 
new EventEmitter<{ serverName: string, serverContent: string }>() :
@Output() BlueprintCreated = 
new EventEmitter<{ serverName: string, serverContent: string }>():

Like @input() we can use alias on the @Output(), an example is shown bellow

@Output(‘bpCreated’) BlueprintCreated =
new EventEmitter<{ serverName: string, serverContent: string }>() :

An example in component were u want to output html

<app-cockpit>
	(serverCreated) = “onServerAdded($event)”
	(bpCreated’) = “onBlueprintAdded($event)”
< / app-cockpit>

Using encapsulation 
 We have three methods for this and we can encapsulate style for all the elements we specify. This method allows us to apply style to all the element we specify like label, paragraph, text so on.

Using Reference
  A reference is used in places were we use [(ngModel)] = “serverName”
We can just replace the element with this

#serverNameInput

The syntax is adding # before name that can anything you choice and this is a local reference
And this can added before any element

Not that it can be used like this

<input 
Type= “text”
Class=”form-control’
#serverNameInput>

Using in event-binding
< button
Class = “btn btn-primary”
(click) = “onAddServer(serverNameInput)” 

Remember local referencing can only be used in template html only not on component typescript file
We can even get ites value by using this in typescript code
onAddServer(nameInput) {
	console.log(nameInput.value)
} 
Or you can also use it inside the templateto get value as shown bellow
<input 
Type= “text”
Class=”form-control’
#serverNameInput.value>
We can also use it like this inside typescript like
onAddServer(nameInput: HTMLInputElement) {
	this.serverCreated.emit({
	serverName: nameInput.value,
	serverContent: newServerContent
});
} 

onAddBlueprint (nameInput: HTMLInputElement) {
	this.serverCreated.emit({
	serverName: nameInput.value,
	serverContent: newServerContent
});
} 

After this remove the newservername  and use the new approach

=======================================================================================================================================

# Constructor: 
which is simply method executed at the point of time a component is created by the angular.

Important: For events, you don't bind to onclick but only to click (=> (click)).

=>:es6 arrow function.eg:
setTimeout(()=>{
    this.addName = true or false;
},2000)

# Ng Directives:
[(ngModel)]:ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

*ngIf:eg:<p *ngIf="serverStart; else noServer">Server was created</p>
<ng-template #noServer>
    <p>No server Created</p>
</ng-template>

*ngFor:eg:*ngFor="let server of servers"

[ngStyle]:eg:[ngStyle]="{backgroundColor: getColor()}"

# ($event):which gives us access to event data

# <HTMLInputElement>:
we assign this value to our server name, what we can now do is in the HTML file here,we can output this for now.
So with string interpolation, we could output the server name below the input.

ng-content: is used when we want to insert the content dynamically inside the component that helps to increase component reusability. Using ng-content we can pass content inside the component selector and when angular parses that content that appears at the place of ng-content.<ng-content></ng-content>

======================================================[Project-Implementation]=========================================================
Header and root component(i.e appComponent)
Shopping list component:shopping list and edit component
recipe book component:recipe list,item and details component.

In Angular 8+, the @ViewChild() syntax which you'll see in the next lecture needs to be changed slightly:

#@ViewChild('serverContentInput') serverContentInput: ElementRef;
use

@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
The same change (add { static: true } as a second argument) needs to be applied to ALL usages of @ViewChild() (and also @ContentChild() 
which you'll learn about later) IF you plan on accessing the selected element inside of ngOnInit().

If you DON'T access the selected element in ngOnInit (but anywhere else in your component), set static: false instead!

# &event:
this protected name we could use in the template to get access to any data an event passes to us.

# ===: is to check something eg:true or false

# this.elementRef.nativeElement:basic example for reference of the element.

# working of @HostListener();Eg-
@HostListener("mouseenter") mouserover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', );

  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', );
  }

  # another type is @HostBinding:Eg-

  @HostBinding('style.backgroundColor') backgroundColor: string = 'white';
@HostListener("mouseenter") mouserover(eventData: Event) {
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'white';
  }

  # Binding directive from outside:
   @Input() defaultColor: string = 'white';
  @Input('appBetterhighlight') highlightColor: string = "blue";
  using ng template we can bind [ngIf] like this.

  # @Input decorator:
   is used to pass data (property binding) from parent to child component.  
  The component property should be annotated with @Input decorator to act as input property.

 # @Output decorator:
  is used to pass the data from child to parent component.
  @Output decorator binds a property of a component, to send data from one component to the calling component. 
  @Output binds a property of the type of angular EventEmitter class.
  syntax:@Output() myOutput:EventEmitter<string>= new EventEmitter(); 
  this.myOutput.emit(this.outputMessage);   
  link for:'https://www.c-sharpcorner.com/article/input-and-output-decorator-in-angular/'
  
# Hierarchial Injections-
# AppModule: 
same instance of service is available for application wide.
# AppComponents: 
for all components but not for other services.
# AnyOtherComponent:
same instance  of service is available for the component and all its child components.

# Dependency Injection:
To inject a dependency in a component's constructor(), supply a constructor argument with the dependency type. The following example specifies the HeroService in the HeroListComponent constructor. The type of heroService is HeroService.

# Cross-Component communication:
We have multiple components/controls in the same sub tree with validation and some buttons need to be enabled/disabled in dependency of components/controls validation statuses. To avoid complexity using @Input and @Output it is better to create Subject service, which will act like a local private...

# slice(start?: number, end?: number): T[];
  
     * Sorts an array in place.
     * This method mutates the array and returns a reference to the same array.


===================================================[ServiceComponent]=================================================================

# Introduction to services and dependency injection:
Service is a broad category encompassing any value, function, or feature that an application needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.

Angular distinguishes components from services to increase modularity and reusability. By separating a component's view-related functionality from other kinds of processing, you can make your component classes lean and efficient.

# Service examples
Here's an example of a service class that logs to the browser console.

src/app/logger.service.ts (class)

export class Logger {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
}

# Dependency injection (DI)
 When Angular creates a new instance of a component class, it determines which services or other dependencies that component needs by looking at the constructor parameter types. For example, the constructor of HeroListComponent needs HeroService.

src/app/hero-list.component.ts (constructor)
constructor(private service: HeroService) { }

====================================================[Routing]========================================================================

# RouterModule
NGMODULE
Adds directives and providers for in-app navigation among views defined in an application. Use the Angular Router service to declaratively specify application states and manage state transitions.

# The forRoot():
 method creates an NgModule that contains all the directives, the given routes, and the Router service itself.
 eg:@NgModule({
  imports: [RouterModule.forRoot(ROUTES)or(anyName)]
})
class MyNgModule {}

# RouterOutlet:
Acts as a placeholder that Angular dynamically fills based on the current router state.

Each outlet can have a unique name, determined by the optional name attribute. The name cannot be set or changed dynamically. If not set, default value is "primary".

Eg:
<router-outlet></router-outlet>
<router-outlet name='left'></router-outlet>
<router-outlet name='right'></router-outlet>

# RouterLink:
# absolutepath: with '/' at he beginning
# relativepath: without a '/' or './'.
When applied to an element in a template, makes that element a link that initiates navigation to a route. Navigation opens one or more routed components in one or more <router-outlet> locations on the page.
Eg:
Given a route configuration [{ path: 'user/:name', component: UserCmp }], the following creates a static link to the route: <a routerLink="/user/bob">link to user component</a> or we can also add as a property binding like this [routerLink]="['/user/bob']".

# RouterLinkActive:
Tracks whether the linked route of an element is currently active, and allows you to specify one or more CSS classes to add to the element when the linked route is active.
Eg:
Use this directive to create a visual distinction for elements associated with an active route. For example, the following code highlights the word "Bob" when the router activates the associated route:
<a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>

# RouterLinkActiveOptions:
It would be useful in the cases where a component is loaded on different routes. For example, in my case, I have a route /dashboard that gets loaded at / for the logged in users and for non logged in users we load the landing page at /. Now in the sidebar on dashboard, I have the router link that looks like below.
<a routerLink="/" [routerLinkOptions]="{exact: true}">Dashboard</a>

# Navigate:
The router navigate() method is used to programmatically navigate the user from one page to another.
Eg: router.navigate(['/'])

# AcivatedRoute:
First, we have to add the dynamic part in the approuting  i.e { path: 'users/:id/:name', component: UserComponent }
the object we injected i.e ActivatedRoute will give access to the id passed in the url ==> selected user.
Eg:
this.user || anyName = {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };
another method by using subscribe if we click a link or button it will get automatically load details of the user 
Eg:i have assigned a button with a routerlink via property binding like this
<button class="btn btn-success" [routerLink]="['/users','20','ArunR']">Load Myname</button>
and it TypeScript
this.route.Params.subscribr(
  (params:Params) => {
    this.user.id = params['id']
    this.user.name = params['name']
  }
)
by using this method when u click the button it will loaded as in users page 20 and ArunR will get displayed.

# OnDestroy {
     * A callback method that performs custom clean-up, invoked immediately
     * before a directive, pipe, or service instance is destroyed.
     
# queryParams?: Params | null;
     * Sets the hash fragment for the URL.
     * // Navigate to /results#top
     * this.router.navigate(['/results'], { fragment: 'top' });
  
 # fragment?: string;
     * How to handle query parameters in the router link for the next navigation.
     * One of:
     * * `preserve` : Preserve current parameters.
     * * `merge` : Merge new with current parameters.
     * The "preserve" option discards any new query params:
    
     * // from /view1?page=1 to/view2?page=1
     * this.router.navigate(['/view2'], { queryParams: { page: 2 },  queryParamsHandling: "preserve"
     * });
     * ```
     * The "merge" option appends new query params to the params from the current URL:
     * ```
     * // from /view1?page=1 to/view2?page=1&otherKey=2
     * this.router.navigate(['/view2'], { queryParams: { otherKey: 2 },  queryParamsHandling: "merge"
     * });
     * ```
     * In case of a key collision between current parameters and those in the `queryParams` object,
     * the new value is used.
  
#  snapshot: ActivatedRouteSnapshot;
    /** The configuration used to match this route. */

 # queryParamsHandling?: QueryParamsHandling | null;
     * When true, preserves the URL fragment for the next navigation
     * // Preserve fragment from /results#top to /view#top
     * this.router.navigate(['/view'], { preserveFragment: true });

# queryParamsHandling?: QueryParamsHandling | null;
     * When true, preserves the URL fragment for the next navigation
     * // Preserve fragment from /results#top to /view#top
     * this.router.navigate(['/view'], { preserveFragment: true });
  Eg:
  allowEdit(){
this.router.navigate(['edit'], { relativeTo: this.route,queryParamsHandling:'preserve' })
  }
  
# WildCard Routes:
using astreik symbol eg:
 { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }

# Important: Redirection Path Matching
In our example, we didn't encounter any issues when we tried to redirect the user. But that's not always the case when adding redirections.

By default, Angular matches paths by prefix. That means, that the following route will match both /recipes  and just / 

{ path: '', redirectTo: '/somewhere-else' } 

Actually, Angular will give you an error here, because that's a common gotcha: This route will now ALWAYS redirect you! Why?

Since the default matching strategy is "prefix" , Angular checks if the path you entered in the URL does start with the path specified in the route. Of course every path starts with ''  (Important: That's no whitespace, it's simply "nothing").

To fix this behavior, you need to change the matching strategy to "full" :

{ path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } 

Now, you only get redirected, if the full path is ''  (so only if you got NO other content in your path in this example).

# interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.

# AuthGuard:
 is a class which implements the interface CanActivate , to decide whether the user has access/permission to view specific page / route / path in the application or not. This will be useful when we need authentication/authorization based control over the application.
 implement canActivate method in authGurad service.

# CanDeactivate:
create a property on ur own and set that to false i.e anyName = true;

# relativeTo?: ActivatedRoute | null;
     * Sets query parameters to the URL.
     * // Navigate to /results?page=1
     * this.router.navigate(['/results'], { queryParams: { page: 1 } });
     
# Setting up Routes
choose the given path to the app-routing and add routing will be added in creating a project or u can create it manually.
Eg:{path:'',component:'/recipes, pathMatch:'full'}
Add the router-outlet in app-component and in header implement routerLink='/recipes'
Add routerLinkActive='active' it will mark as active routes when we click links in the header.

# Reload Pages:
to fix that remove the href='#' anchor tag and replace with cursor:pointer;
eg:
<a style="cursor:pointer;"></a>

# setting up childroutes:
Add children in respective path i.e recipescomponent implement empty path with new component created and give routeroutlet
to component where you want the new component to display
Eg:
{path:'recipes',component:RecipesComponent} - this is parent routes 
{path:'recipes',component:RecipesComponent ,children:[ - children routes will be implemented inside the parent routes
  {path:'',component:NewComponent},
  {path:':id',component:RecipeDetail} -That path should be :id, so a dynamic segment added after /recipes
  All child routes always come after the path of the parent route.so all these routes here will have /recipes in front of it. So at /recipes/id 
  ]}

# Route parameters: implement activated route in the constructor and give propety id as number and (+) sign to defines that the variable you are going to use is a number variable.

//subscribe will allow to display the details while clicking
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.food = this.recipeService.getRecipe(this.id)
    })
  }
  and in service create a method and return it.
  Eg:
  getRecipe(index:number)
  return this.recepies[index] // recipes:Recipe[]=[]

  # Dynamic Parameter
  declacre property -
  put @Input index or anyName:number and use that in child components via as property binding [routerLink]='[index]'
  after use ngFor loop to call the input from parent component
  like this *ngFor = "let i = index or anyName"
  [index]='i' also add routerLinkActive='active'

  # Navigating to pages:
  to navigate button implement (click)='onNew()'
  and declare this method in ts like 
  onNew(){
this.router.navigate(['new'],{relativeTo:this.route})
  }
  navigate through a button 
  loadServer(){
    this.router.navigate(['/servers'])
  }
  
  # routerLinkActiveOptions: {
        exact: boolean;
    } | IsActiveMatchOptions;
     * You can use the output `isActiveChange` to get notified each time the link becomes
     * active or inactive.
     *
     * Emits:
     * true  -> Route is active
     * false -> Route is inactive

# relativeTo?: ActivatedRoute | null;

     * Sets query parameters to the URL.
     * // Navigate to /results?page=1
     * this.router.navigate(['/results'], { queryParams: { page: 1 } });
     */

 ====================================================[Observable]==================================================================== 
 # Observables:
 -various datasources
 -(user input) Events,Http req, triggered in code.
 -u write the code which gets executed to handle data,error,completion.
 -params is also a observable in which we subscribe

 # RxJS:
 In order to follow along smoothly with the course examples, make sure you install RxJS v6 by running

npm install --save rxjs@6
In addition, also install the rxjs-compat package:

npm install --save rxjs-compat

# core of observables:
to prevent memory leaks unsubscribe() the value in u r not interested
-Subscription
A flag to indicate whether this Subscription has already been unsubscribed.
-OnDestroy
A callback method that performs custom clean-up, invoked immediately

# Build a custom Observable:
to create observable manually: implement as below
private obsSubs : Subscription;
after
const anyName = Observable.create(observe =>{
  let count = 0;
  setInterval(()={
    observer.next(count)
  },1000)
});
this.obsSubs=anyName.subscribe(urWish=>{
  console.log(urWish);
})

=======================================================================================================================================

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
# patchValue: to override parts of the form