import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  generatePdf(data: any[]): void {
    const doc = new jsPDF.default(); // Use jsPDF.default instead of new jsPDF()

    // Loop through your data and add it to the PDF
    data.forEach((item, index) => {
      doc.text(`Item ${index + 1}: ${JSON.stringify(item)}`, 10, 10 + index * 10);
    });

    // Save the PDF
    doc.save('crud_data.pdf');
  }
}
