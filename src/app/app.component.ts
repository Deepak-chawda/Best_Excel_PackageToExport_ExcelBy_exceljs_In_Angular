import { Component, VERSION } from '@angular/core';
import { ColumnWidth, ExcelService } from './excel.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private excelService: ExcelService) {}

  generateExcel() {
    this.excelService.generateExcel();
  }
  columnWidth: Array<ColumnWidth> = [
    {
      columnNumber: 1,
      width: 10,
    },
    {
      columnNumber: 2,
      width: 20,
    },
    {
      columnNumber: 3,
      width: 20,
    },
    {
      columnNumber: 4,
      width: 20,
    },
    {
      columnNumber: 5,
      width: 30,
    },
    {
      columnNumber: 6,
      width: 10,
    },
    {
      columnNumber: 7,
      width: 10,
    },
  ];
}
