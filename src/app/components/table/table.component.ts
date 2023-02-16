import { AfterViewInit, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation:ViewEncapsulation.None
 
})
export class TableComponent implements AfterViewInit {

  isSlideChecked: boolean = true;
  toggleEvents: string[] =[];
  constructor(){}
  ngOnInit(): void{}
  toggleChanges(element:PeriodicElement){
    element.status =!element.status;
  }
  public displayedColumns: string[] = [
    'lastUpdated',
    'roleName',
    'roleDescription',
    'status',
    'actions',
];
public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


@ViewChild(MatPaginator) public paginator: MatPaginator | any;

public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
}
}

export interface PeriodicElement {
  lastUpdated:string;
roleName: string;
roleDescription: string;
status: boolean;
actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{
  lastUpdated:'Placeholder',
    roleName: 'Placeholder',
    roleDescription: 'Placeholder',
    status: true,
    actions: '',
},
{
  lastUpdated:'Placeholder',
    roleName: 'Placeholder',
    roleDescription: 'Placeholder',
    status: true,
    actions: '',
},
{
  lastUpdated:'Placeholder',
    roleName: 'Placeholder',
    roleDescription: 'Placeholder',
    status: false,
    actions: '',
},
{
  lastUpdated:'Placeholder',
    roleName: 'Placeholder',
    roleDescription: 'Placeholder',
    status: true,
    actions: '',
},
{
  lastUpdated:'Placeholder',
    roleName: 'Placeholder',
    roleDescription: 'Placeholder',
    status:true,
    actions: '',
},
{
  lastUpdated:'Placeholder',
    roleName: 'Placeholder',
    roleDescription: 'Placeholder',
    status:true,
    actions: '',
},
{
  lastUpdated:'Placeholder',
    roleName: 'Placeholder',
    roleDescription: 'Placeholder',
    status: true,
    actions: '',
},
{
  lastUpdated:'Placeholder',
    roleName: 'Placeholder',
    roleDescription: 'Placeholder',
    status: true,
    actions: '',
},
{
  lastUpdated:'Placeholder',
    roleName: 'Placeholder',
    roleDescription: 'Placeholder',
    status: true,
    actions: '',
},
{
  lastUpdated:'Placeholder',
    roleName: 'Placeholder',
    roleDescription: 'Placeholder',
    status: true,
    actions: '',
},

];

