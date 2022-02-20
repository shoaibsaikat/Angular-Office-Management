import { Component, OnInit } from '@angular/core';

import { ChartType } from 'angular-google-charts';

import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { MessageService } from 'src/app/services/message/message.service';

import { AppComponent } from 'src/app/app.component';

import { Message } from 'src/app/shared/types/message';
import { Inventory } from 'src/app/shared/types/inventory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Inventory';  
  type = ChartType.BarChart;
  data: any[] = [];
  columnNames = ['Item', 'Amount'];  
  options = { 'is3D': true, colors: ['#283142',] };  
  width = 800;  
  height = 500;

  constructor(private inventoryService: InventoryService, private messageService: MessageService, private appComponent: AppComponent) {
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.inventoryService.getInventoryChartList().subscribe({
      next: (v) => {
        // console.log('HomeComponent: ' + JSON.stringify(v));
        this.data = [];
        let objInventoryList: Inventory[] = JSON.parse(JSON.parse(JSON.stringify(v)).inventory_list);
        objInventoryList.forEach(element => {
          if (element) {
            let tmp = [];
            tmp.push(element.name);
            tmp.push(element.count);
            this.data.push(tmp);
          }
        });
      }
    });
  }

}
