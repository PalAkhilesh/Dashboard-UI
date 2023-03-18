import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

interface TableRow {
  id: number;
  name: string;
  department: string;
  availableSDate: string;
  availableTDate: string;
}

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.css']
})
export class PhysicianComponent {
 
  displayedColumns: string[] = ['select','id', 'name', 'department', 'availableSDate', 'availableTDate','action'];
  dataSource = new MatTableDataSource<TableRow>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngOnInit() {
    this.dataSource.data = [
      {id: 1, name: 'John Doe', department: 'IT', availableSDate: '2023-03-18', availableTDate: '2023-03-20'},
      {id: 2, name: 'Jane Smith', department: 'HR', availableSDate: '2023-03-17', availableTDate: '2023-03-22'},
      {id: 3, name: 'Bob Johnson', department: 'Sales', availableSDate: '2023-03-19', availableTDate: '2023-03-25'},
      {id: 4, name: 'Mary Brown', department: 'Marketing', availableSDate: '2023-03-20', availableTDate: '2023-03-23'},
      {id: 5, name: 'Tom Wilson', department: 'Finance', availableSDate: '2023-03-21', availableTDate: '2023-03-24'},
      {id: 6, name: 'Ann Lee', department: 'Operations', availableSDate: '2023-03-22', availableTDate: '2023-03-26'},
    ];
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
    
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  selection = new SelectionModel<TableRow>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach((row: TableRow) => this.selection.select(row));
  }
  // onEdit(): void {
  //   console.log(`Editing user )`);
  //   // Add edit logic here
  // }
  // deleteRow(row:TableRow): void {
  //   const index = this.dataSource.data.indexOf(row);

  //   if (index >= 0) {
  //     this.dataSource.data.splice(index, 1);
  //     // this.dataSource.refreshData();
  //     this.snackBar.open('Row deleted successfully!', 'Close', {
  //       duration: 3000,
  //       verticalPosition: 'top'
  //     });
  //   }
  // }

  // onDelete() :void {
  //   console.log(`Deleting user )`);
  // }
}
