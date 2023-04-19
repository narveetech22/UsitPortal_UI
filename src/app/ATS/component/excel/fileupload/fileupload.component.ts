import { Component, OnInit } from '@angular/core';
import { read, utils, writeFile } from 'xlsx';
import * as XLSX from 'xlsx'
import { EmployeeService } from 'src/app/ATS/service/employee.service';
import { Excel } from '../excel';
import { HttpClient } from '@angular/common/http';
import { Vendor2 } from 'src/app/ATS/modal/vendor2';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  movies: any[] = [];
  file!:any;
  baseUrl = "http://localhost:8090/";
   excel2 : Vendor2[] = [];
  // ExcelData: any[] = [];
   constructor(private service:EmployeeService,private https:HttpClient) { }
  // excelHeaders:string[] = ["Name","Age","Email","Contact Number","Location"];
  // templateToExcel:string[][] = [this.excelHeaders,[]];
  // data: any[] = [];
  // isExcelFile = false;

  ngOnInit(): void {
  }

  handleImport2(event:any){
    this.file = event.target.files[0];
    const files = event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event: any) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;
                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                   // if(rows.toString)
                    this.movies = rows;
                  //  this.excel2 = rows;
                    console.log(rows)
                }
            }
            reader.readAsArrayBuffer(file);
        }
  }
  handleImport(event: any) {
    /*
    //validating file extension
    this.isExcelFile = !!event.target.files[0].name.match(/(.xls|.xlsx)/);
   // console.log(isExcelFile+" llllllll")
    let workBook = null;
    const files = event.target.files;
    this.file = event.target.files[0];
    console.log(" jjjjjjjjjj "+this.file)
   
    if (files.length) {
        const file = files[0];
      //  console.log(file)
        const reader = new FileReader();
        reader.onload = (event: any) => {
            const wb = read(event.target.result);
            const sheets = wb.SheetNames;
            if (sheets.length) {
                const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                this.movies = rows;
                this.file =rows;
                this.excel2 = utils.sheet_to_json(wb.Sheets[sheets[0]]);;
                console.log(JSON.stringify(rows))

                this.service.createEmp2(rows).subscribe(
                  (response : any)=>{
                    console.log(response+" jjjjjjjjjj "+JSON.stringify(this.file))
                  }
                )
               
            }
        }
        reader.readAsArrayBuffer(file);
    }
   */
}


uploadfile(){
  let formData = new FormData();
    
  formData.append("file",this.file );
  this.service.createEmp2(formData).subscribe(
    (data)=>{
      console.log(data)
    },
    (error) =>{
      console.log(error)
    }
  );
  console.log("hhhh "+this.file)
  console.log(this.file )

}
// upload(){
  
//   let formData = new FormData();
//   console.log("hhhh "+this.file)
//   formData.append("file",this.file );
//   this.service.createEmp2(formData).subscribe(
//     (response : any)=>{
//       console.log(response+" jjjjjjjjjj "+JSON.stringify(this.file))
//     }
//   )
// }

handleExport() {
  const headings = [[
      'Movie',
      'Category',
      'Director',
      'Rating'
  ]];
  const wb = utils.book_new();
  const ws: any = utils.json_to_sheet([]);
  utils.sheet_add_aoa(ws, headings);
  utils.sheet_add_json(ws, this.movies, { origin: 'A2', skipHeader: true });
  utils.book_append_sheet(wb, ws, 'Report');
  writeFile(wb, 'Movie Report.xlsx');
}

/*
ExcelUpload()  
{  
    let message = "";  
    let result = null;  
    var httpRequest = HttpContext.Current.Request;  
    using (AngularDBEntities objEntity = new AngularDBEntities())  
    {  

        if (httpRequest.Files.Count > 0)  
        {  
            HttpPostedFile file = httpRequest.Files[0];  
            Stream stream = file.InputStream;  

            IExcelDataReader reader = null;  

            if (file.FileName.EndsWith(".xls"))  
            {  
                reader = ExcelReaderFactory.CreateBinaryReader(stream);  
            }  
            else if (file.FileName.EndsWith(".xlsx"))  
            {  
                reader = ExcelReaderFactory.CreateOpenXmlReader(stream);  
            }  
            else  
            {  
                message = "This file format is not supported";  
            }  

            DataSet excelRecords = reader.AsDataSet();  
            reader.Close();  

            var finalRecords = excelRecords.Tables[0];  
            for (int i = 0; i < finalRecords.Rows.Count; i++)  
            {  
                UserDetail objUser = new UserDetail();  
                objUser.UserName = finalRecords.Rows[i][0].ToString();  
                objUser.EmailId = finalRecords.Rows[i][1].ToString();  
                objUser.Gender = finalRecords.Rows[i][2].ToString();  
                objUser.Address = finalRecords.Rows[i][3].ToString();  
                objUser.MobileNo = finalRecords.Rows[i][4].ToString();  
                objUser.PinCode = finalRecords.Rows[i][5].ToString();  

                objEntity.UserDetails.Add(objUser);  

            }  

            int output = objEntity.SaveChanges();  
            if (output > 0)  
            {  
                message = "Excel file has been successfully uploaded";  
            }  
            else  
            {  
                message = "Excel file uploaded has fiald";  
            }  

        }  

        else  
        {  
            result = Request.CreateResponse(HttpStatusCode.BadRequest);  
        }  
    }  
    return message;  
}  

*/

}
