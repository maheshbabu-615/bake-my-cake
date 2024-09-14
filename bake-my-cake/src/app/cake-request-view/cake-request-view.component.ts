import { Component, OnInit, ViewChild } from '@angular/core';
import { CakeRequest } from '../model/cake-request';
import { CakeRequestService } from '../services/cake-request.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cake-request-view',
  templateUrl: './cake-request-view.component.html',
  styleUrls: ['./cake-request-view.component.css']
})

  export class CakeRequestViewComponent implements OnInit {

  displayedColumns: string[] = ['orderDate','id','quantity','totalAmount','customerName','customerPhone','customerEmail','customerflatNo','customerstreet','customercity','customerstate','customerpincode'];
  cakeRequests: CakeRequest[] = [];
  dataSource: any;
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;

  constructor(private cakeRequestService: CakeRequestService) { }

  ngOnInit(): void {
    this.cakeRequestService.getAllCakeReqeusts().subscribe({
      
      next: data => {
        this.cakeRequests = data;
         this.dataSource = new MatTableDataSource(this.cakeRequests);
         this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(data);
      },
      error: err => {
        alert(err);
      }
    });
  }
}