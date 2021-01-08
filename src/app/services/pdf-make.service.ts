import { Injectable } from '@angular/core';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFont from 'pdfmake/build/vfs_fonts'

// pdfMake.vfs = pdfFont.pdfMake.vfs

@Injectable({
  providedIn: 'root'
})
export class PdfMakeService {
  pdfMake: any

  async loadPdfMaker(){
    if(!this.pdfMake){
      const pdfMakeModule = await import('pdfmake/build/pdfmake');
      const pdfFontsModule = await import('pdfmake/build/vfs_fonts');
      this.pdfMake = pdfMakeModule.default;
      this.pdfMake.vfs = pdfFontsModule.default.pdfMake.vfs;
    }
  }

  
  async generatePdf(data) {
    await this.loadPdfMaker();
    // const def = { content: 'A sample PDF document generated using Angular and PDFMake' };
    this.pdfMake.createPdf(data).open();
  }

  constructor() { }
}
