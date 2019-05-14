import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpComponent } from '../simp/simp.component';
import { MathService } from '../math.service';

@NgModule({
  declarations: [
    SimpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimpComponent
  ],
  providers: [MathService],
})
export class SimpModModule { }
