// ✅ Shared Angular Material UI Library module (use to import all angular-material-ui-components and make it easy to use them anywhere in your application by just importing this one module) [Shared]
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    MatPaginatorModule,
  ],
  exports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule, // MatPaginator is not a standalone component and cannot be imported directly into imports: [] like a standalone directive or pipe.
    MatPaginator // MatPaginator is a class, not a module. Only modules can go into the imports and exports arrays in NgModules
  ]
})

export class MaterialModule {}
