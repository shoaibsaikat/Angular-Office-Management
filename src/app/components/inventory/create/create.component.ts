import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { MessageService } from 'src/app/services/message/message.service';

import { AppComponent } from 'src/app/app.component';

import { Message } from '../../../shared/types/message';
import { Inventory } from 'src/app/shared/types/inventory';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  inventoryForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, ]),
    unit: new FormControl('', [Validators.required, ]),
    count: new FormControl('', [Validators.required, ]),
    description: new FormControl(),
  });
  get name() { return this.inventoryForm.get('name'); }
  get unit() { return this.inventoryForm.get('unit'); }
  get count() { return this.inventoryForm.get('count'); }
  get description() { return this.inventoryForm.get('description'); }

  constructor(private inventoryService: InventoryService, private messageService: MessageService, private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let item:Inventory = {
      id: -1,
      name: this.name?.value,
      count: this.count?.value,
      unit: this.unit?.value,
      description: this.description?.value,
    }
    // console.log('CreateComponent: item.name: ' + this.name?.value);
    this.inventoryService.createInventoryItem(item).subscribe(data => {
      let msg: Message = JSON.parse(JSON.stringify(data));
      this.messageService.add(msg.detail);
      this.appComponent.navigate('/inventory/list');
    });

  }

}
