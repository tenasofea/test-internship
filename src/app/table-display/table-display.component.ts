import { Component, OnInit } from '@angular/core';

interface TableData {
  'Index #': string;
  Value: number;
}

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements OnInit {
  table1Data: TableData[] = [];
  table2Data: any = {
    Alpha: 0,
    Beta: 0,
    Charlie: 0
  };

  ngOnInit() {
    this.fetchTable1Data();
  }

  fetchTable1Data() {
    const table1Url = 'assets/table1.json';

    fetch(table1Url)
      .then(response => response.json())
      .then(data => {
        this.table1Data = data;
        this.calculateTable2();
      });
  }

  calculateTable2() {
    const findValue = (index: string) => this.table1Data.find(item => item['Index #'] === index)?.Value || 0;

    const A5 = findValue('A5');
    const A20 = findValue('A20');
    const A15 = findValue('A15');
    const A7 = findValue('A7');
    const A13 = findValue('A13');
    const A12 = findValue('A12');

    this.table2Data.Alpha = A5 + A20;
    this.table2Data.Beta = A15 / A7;
    this.table2Data.Charlie = A13 * A12;
  }
}
