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



