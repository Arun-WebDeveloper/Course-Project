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

