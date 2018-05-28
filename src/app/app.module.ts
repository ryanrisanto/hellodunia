import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { TestwoComponent } from './testwo/testwo.component';
import { AdvanceComponent } from './advance/advance.component';
import { AdvanceDetailComponent } from './advance-detail/advance-detail.component';
import { AdvanceService } from './advance.service';

@NgModule({
  declarations: [
    AppComponent,
    TestcompComponent,
    TestwoComponent,
    AdvanceComponent,
    AdvanceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AdvanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
