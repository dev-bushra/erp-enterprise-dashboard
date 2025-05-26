// ✅ Shared module that import and exports CommonModule so shared directives like ngIf, ngFor, etc., can be reused across all app modules [Shared]
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CommonModule]
})
export class SharedModule {}