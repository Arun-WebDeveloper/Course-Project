# Dynamic component:
Dynamic means, that the components location in the application is not defined at buildtime.Component templates are not always fixed. An application might need to load new components at runtime.

# How do I create a dynamic component in Angular app?
In our project we created a alert message thats shows the error whenever the user enter the wrong credentials i.e email and password.
1.Create a component name alert using cli or manually and import it in the appModules(manually).
2.Create a alert message.
<div class="div backdrop"></div>
    <div class="alert-box">
        <p>{{message}}</p>
        <div class="alert-box-actions">
            <button class="btn btn primary">okay</button>
        </div>
    </div>
 @Input() message: string - in typeScript file to use this component from outside.
 error:string=null;-error should be null.
 <app-alert [message]="error" *ngIf="error"></app-alert>-use this component whenever you want to show that message and add some css styles.This is how dynamic components work.

 # Create components programmatically:
 private showAlertError(message: string) {
        const alertCmp = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostContainerRef = this.alertHost.viewContainerRef;
        hostContainerRef.clear();
        const componentRef = hostContainerRef.createComponent(alertCmp);
        componentRef.instance.message = message;
        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            hostContainerRef.clear();
        })
    }