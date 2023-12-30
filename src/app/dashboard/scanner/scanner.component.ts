import {Component, inject, OnInit} from '@angular/core';
import {AlertController} from "@ionic/angular";
import {Barcode, BarcodeScanner} from "@capacitor-mlkit/barcode-scanning";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent  implements OnInit {
  public isSupported: boolean;
  public barcode: Barcode;

  private alertController = inject(AlertController);
  public ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
      BarcodeScanner.addListener('barcodeScanned',async (res): Promise<void> => {
        this.barcode = res.barcode;
        document.querySelector("body")?.classList.remove("barcode-scanning-active");
        await BarcodeScanner.stopScan();
      });
  }

  public async startScan(): Promise<void> {
    document.querySelector("body")?.classList.add("barcode-scanning-active");
    await BarcodeScanner.startScan();
    const granted = await this.requestPermissions();
    if (!granted) {
      await this.presentAlert();
      return;
    }
    await BarcodeScanner.scan();
  }

  public async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  public async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
