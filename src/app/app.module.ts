import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { BindingComponent } from './components/binding/binding.component';
import { TimerWatchComponent } from './timer-watch/timer-watch.component';

@NgModule({
  declarations: [AppComponent, BindingComponent, TimerWatchComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
