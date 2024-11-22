import { Component } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.css']
})
export class QrGeneratorComponent {
  textToEncode: string = ''; // Texte saisi par l'utilisateur
  qrCodeImage: string | null = null; // Image du QR code générée

  async generateQRCode(): Promise<void> {
    if (this.textToEncode.trim() !== '') {
      try {
        // Génération de l'image QR code
        this.qrCodeImage = await QRCode.toDataURL(this.textToEncode);
      } catch (err) {
        console.error('Erreur lors de la génération du QR code :', err);
      }
    } else {
      this.qrCodeImage = null; // Réinitialisez si aucun texte n'est entré
      alert('Veuillez entrer un texte pour générer un QR code.');
    }
  }
}
