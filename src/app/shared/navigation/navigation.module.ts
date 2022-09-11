import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { NavComponent } from "./navigation";

@NgModule({
    declarations: [
        NavComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [NavComponent]
})
export class NavModule {
    title='Patatas Subscribers ToGo'
}
