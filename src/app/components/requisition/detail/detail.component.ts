import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { RequisitionService } from 'src/app/services/requisition/requisition.service';

import { AppComponent } from 'src/app/app.component';

import { Common } from 'src/app/shared/common';
import { User } from 'src/app/shared/types/user';
import { Requisition } from 'src/app/shared/types/requisition';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  approvalForm: FormGroup = new FormGroup({
    distributor: new FormControl('', [Validators.required, ]),
  });
  get distributor() { return this.approvalForm.get('distributor'); }

  state: number = Common.DETAIL_NORMAL;
  requisition?: Requisition;
  distributorList: User[] = [];

  constructor(private activatedRoute: ActivatedRoute, private requisitionService: RequisitionService, private appComponent: AppComponent) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.state = Number(params.get('state'));
    });
  }

  ngOnInit(): void {
    this.requisition = this.requisitionService.getCurrentRequisition();
    this.distributorList = this.requisitionService.getDistributorList();
  }

  isApproval(): boolean {
    return true ? this.state == Common.DETAIL_APPROVAL : false;
  }

  isDistribution(): boolean {
    return true ? this.state == Common.DETAIL_DISTRIBUTION : false;
  }

  onClick(): void {
    if (this.isApproval() && this.requisition && this.distributor) {
      this.requisitionService.approve(this.requisition.id, this.distributor.value).subscribe(data => {
        this.appComponent.navigate('requisition/approval');
      });
    } else if (this.isDistribution() && this.requisition) {
      this.requisitionService.distribute(this.requisition.id).subscribe(data => {
        this.appComponent.navigate('requisition/distribution');
      });
    }
  }
}
