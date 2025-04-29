import { Component, ViewChild, ElementRef , OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from "ag-grid-angular";
import { GridApi } from 'ag-grid-community';
import * as jspdf from 'jspdf';
import jsPDF from 'jspdf';
import { TranslateService } from '@ngx-translate/core';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-unite',
  templateUrl: './unite.component.html',
  styleUrls: ['./unite.component.css']
})
export class UniteComponent implements OnInit{
  public currentDate: string = new Date().toLocaleDateString();
  @ViewChild('agGrid') agGrid!: AgGridAngular;
 
//arabe ou nn
ngOnInit() {
  this.setLanguageDirection();
}

arabicLanguage!: boolean ;

setLanguageDirection() {
  const lang = localStorage.getItem('currentLang');
  this.arabicLanguage = (lang === 'ar');
}

  changeEventLang(event: any) {
    this.translate.use(event.target.value);
    if (event.target.value == 'ar') {
      this.arabicLanguage = true
    } else {
      this.arabicLanguage = false
    }
  }
//arabe ou nn


  public rowData: any[] = [];

  constructor(public translate: TranslateService,) {
    this.generateRandomData();
  }

  generateRandomData() {
    for (let i = 0; i < 100; i++) {
      const randomData = {
        VehID: 4243165 + i,
        VehDriver: this.getRandomNumber(10, 20), // Générer des nombres décimaux pour VehDriver
        VehCapacity: Math.random() * 10 ,
        VehLoad: Math.random() * 10 ,
        TravelDistance: Math.random() * 10 ,
        TravelCost: Math.random() * 10 ,
        NumberOfVisits:this.getRandomNumber(10, 20),  // Générer des nombres décimaux pour NumberOfVisits
      };
      this.rowData.push(randomData);
    }
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  public columnDefs: ColDef[] = [
    { field: "VehID" },
    { field: "VehDriver" },
    { field: "VehCapacity" },
    { field: "VehLoad" },
    { field: "TravelDistance" },
    { field: "TravelCost" },
    { field: "NumberOfVisits" },
  ];
  public defaultColDef: ColDef = {
    filter: "agTextColumnFilter",
    floatingFilter: true,
  };
  public rowSelection: "single" | "multiple" = "multiple";
  public paginationPageSize = 10;
  public paginationPageSizeSelector: number[] | boolean = [10, 25, 50];
  public themeClass: string =
    "ag-theme-quartz";



    private gridApi: GridApi | undefined;
  @ViewChild('contentToExport', { static: false }) contentToExport!: ElementRef;


 

   
  
  
  
    exportToPDF() {
      if (this.gridApi) {
        let filteredRows: any[] = [];
        this.gridApi.forEachNodeAfterFilter(node => {
          filteredRows.push(node.data);
        });
        console.log('Lignes affichées après filtrage : ', filteredRows);
        this.updateContentToExport(filteredRows);
        this.downloadPDF();
      } else {
        console.log('La grille n\'est pas encore prête.');
      }
    }
  
    updateContentToExport(filteredRows: any[]) {
      // Always include the table headers
      let tableHTML = '<table style="border-collapse: collapse; text-align: center; border: 1px solid #b7b7b7;"><thead><tr>';
      tableHTML += '<th style="padding-left:9px; padding-right: 9px;background-color: #d1d1d1">Veh ID</th>';
      tableHTML += '<th style="padding-left: 9px; padding-right: 9px;background-color: #d1d1d1">Veh Driver</th>';
      tableHTML += '<th style="padding-left: 9px; padding-right: 9px;background-color: #d1d1d1">Veh Capacity</th>';
      tableHTML += '<th style="padding-left: 9px; padding-right: 9px;background-color: #d1d1d1">Veh Load</th>';
      tableHTML += '<th style="padding-left: 9px; padding-right: 9px;background-color: #d1d1d1">Travel Distance</th>';
      tableHTML += '<th style="padding-left: 9px; padding-right: 9px;background-color: #d1d1d1">Travel Cost</th>';
      tableHTML += '<th style="padding-left: 9px; padding-right: 9px;background-color: #d1d1d1">Number of Visits</th>';
      tableHTML += '</tr></thead><tbody>';
    
      if (filteredRows.length === 0) {
        tableHTML += '<tr><td colspan="7" style="text-align: center; padding: 19px;">No data to display</td></tr>';
      } else {
        // Generate the table rows
        filteredRows.forEach(row => {
          tableHTML += '<tr>';
          tableHTML += `<td style="padding: 9px;">${row.VehID}</td>`;
          tableHTML += `<td style="padding: 9px;">${row.VehDriver}</td>`;
          tableHTML += `<td style="padding: 9px;">${row.VehCapacity}</td>`;
          tableHTML += `<td style="padding: 9px;">${row.VehLoad}</td>`;
          tableHTML += `<td style="padding: 9px;">${row.TravelDistance}</td>`;
          tableHTML += `<td style="padding: 9px;">${row.TravelCost}</td>`;
          tableHTML += `<td style="padding: 9px;">${row.NumberOfVisits}</td>`;
          tableHTML += '</tr>';
        });
      }
    
      tableHTML += '</tbody></table>';
      this.contentToExport.nativeElement.querySelector('.table-container').innerHTML = tableHTML;
    }
    
    
  
    downloadPDF() {
      const element = this.contentToExport.nativeElement;
      const options = {
        scale: 2,  // Increase scale for better quality
        useCORS: true,  // To handle cross-origin images
        backgroundColor: '#fff'  // Ensure background is white
      };
  
      html2canvas(element, options).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;  // Width of A4 page in mm
        const pageHeight = 295;  // Height of A4 page in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
  
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
  
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
  
        pdf.save('export.pdf');
      });
    }
  
    onGridReady(params: any) {
      this.gridApi = params.api;
    }
  
    
}
