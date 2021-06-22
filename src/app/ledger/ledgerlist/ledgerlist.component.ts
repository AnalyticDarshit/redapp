import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ledgerlist',
  templateUrl: './ledgerlist.component.html',
  styleUrls: ['./ledgerlist.component.css']
})
export class LedgerlistComponent implements OnInit {

  ledgerList : Array<any> = [];
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 0;
  dtOptions: any = {};

  constructor(private http:HttpClient) { 
    
  }

  ngOnInit(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
      dom: 'lBfrtip',
      buttons: [
          'copy', 'csv', 'pdf', 'excel' , 'print'
      ]
    };
      this.getdata();
  }
  getdata(){
    let url ='https://demo.dxinfosystems.com/shiv_pratap/rest/app/ledger_by_parrent.php?parrent=640&all=0';
    this.http.get<any>(url).subscribe((data:any) => {
      console.log(data);
      for (const key in data){
        if(data.hasOwnProperty(key)){
          this.ledgerList.push(data[key]);
        }
      }
      console.log(this.ledgerList);
      this.collectionSize = this.ledgerList.length;
      
    });
    
    
  }

}
