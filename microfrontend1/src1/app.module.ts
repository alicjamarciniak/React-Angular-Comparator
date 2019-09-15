import { NgModule } from '@angular/core';
import { App2 } from './app2.component.ts';


export const html = '<app2></app2>';

@NgModule({
    declarations: [ App2 ],
    bootstrap: [ App2 ]
})

export class AppModule { }
// export const AppModule = angular.module('app', [])
//     .component('app', App2.component)
//     .name;
