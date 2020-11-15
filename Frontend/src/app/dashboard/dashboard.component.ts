import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ServiceService } from '../shared/services/service.service';
import { IProduct } from '../shared/interfaces/product';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  itemData: IProduct[] = [];
  subscriptions: Subscription[] = [];

  constructor(private _services: ServiceService, public router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.subscriptions.push(this._services.getAllList().subscribe((result) => {
      this.itemData = result;
    }));
  }

  addProduct() {
    this.router.navigateByUrl("dashboard/add-product");
  }

  viewProduct(item: any) {
    this.router.navigate(["dashboard/add-product", { id: item.id }]);
  }

  deleteProduct(item: any) {
    this.subscriptions.push(this._services.deleteById(item.id).subscribe(() => {
      this._snackBar.open("Deleted Successfully.", "", {
        duration: 3000,
      });
      this.ngOnInit();
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }
}
