import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterWrapperComponent } from './router-wrapper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RouterWrapperComponent],
  exports: [RouterWrapperComponent],
})
export class RouterWrapperModule {}
