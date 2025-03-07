import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { delay, Observable, of, throwError } from 'rxjs';

const productData = [
  {
    "id": 1,
    "title": "Wireless Noise-Canceling Headphones",
    "image_link": "headphones.jpg",
    "description": "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    "price": 199.99,
    "rating": 4.7
  },
  {
    "id": 2,
    "title": "Smartwatch with Fitness Tracking",
    "image_link": "smartwatch.jpg",
    "description": "A sleek smartwatch with heart rate monitoring, GPS, and 7-day battery life.",
    "price": 149.99,
    "rating": 4.5
  },
  {
    "id": 3,
    "title": "Mechanical Gaming Keyboard",
    "image_link": "keyboard.jpg",
    "description": "RGB-backlit mechanical keyboard with customizable keys and fast response time.",
    "price": 89.99,
    "rating": 4.6
  },
  {
    "id": 4,
    "title": "Ergonomic Office Chair",
    "image_link": "office-chair.jpg",
    "description": "Adjustable ergonomic chair with lumbar support and breathable mesh design.",
    "price": 229.99,
    "rating": 4.8
  },
  {
    "id": 5,
    "title": "Portable Bluetooth Speaker",
    "image_link": "speaker.jpg",
    "description": "Compact and waterproof Bluetooth speaker with 12-hour playtime.",
    "price": 59.99,
    "rating": 4.4
  },
  {
    "id": 6,
    "title": "4K Ultra HD Smart TV",
    "image_link": "smart-tv.jpg",
    "description": "55-inch 4K UHD smart TV with built-in streaming apps and voice control.",
    "price": 499.99,
    "rating": 4.7
  },
  {
    "id": 7,
    "title": "Laptop with Intel i7 Processor",
    "image_link": "laptop.jpg",
    "description": "Powerful laptop with Intel i7, 16GB RAM, and 512GB SSD.",
    "price": 1099.99,
    "rating": 4.6
  },
  {
    "id": 8,
    "title": "Wireless Charging Stand",
    "image_link": "charging-stand.jpg",
    "description": "Fast wireless charging stand compatible with iPhone and Android devices.",
    "price": 39.99,
    "rating": 4.5
  },
  {
    "id": 9,
    "title": "Gaming Mouse with Customizable Buttons",
    "image_link": "gaming-mouse.jpg",
    "description": "High-precision gaming mouse with programmable buttons and RGB lighting.",
    "price": 49.99,
    "rating": 4.7
  },
  {
    "id": 10,
    "title": "External Hard Drive 2TB",
    "image_link": "hard-drive.jpg",
    "description": "Portable external hard drive with 2TB storage and fast transfer speeds.",
    "price": 79.99,
    "rating": 4.6
  },
  {
    "id": 11,
    "title": "Smart Home Security Camera",
    "image_link": "security-camera.jpg",
    "description": "Wireless home security camera with night vision and motion detection.",
    "price": 99.99,
    "rating": 4.5
  },
  {
    "id": 12,
    "title": "Compact Air Fryer",
    "image_link": "air-fryer.jpg",
    "description": "Oil-free air fryer with a 3.5L capacity and multiple cooking modes.",
    "price": 89.99,
    "rating": 4.6
  },
  {
    "id": 13,
    "title": "Electric Standing Desk",
    "image_link": "standing-desk.jpg",
    "description": "Height-adjustable electric standing desk with memory presets.",
    "price": 349.99,
    "rating": 4.8
  },
  {
    "id": 14,
    "title": "Noise-Canceling Earbuds",
    "image_link": "earbuds.jpg",
    "description": "True wireless noise-canceling earbuds with a 24-hour battery life.",
    "price": 129.99,
    "rating": 4.7
  },
  {
    "id": 15,
    "title": "Smart LED Light Bulb",
    "image_link": "smart-bulb.jpg",
    "description": "Color-changing smart LED bulb compatible with Alexa and Google Assistant.",
    "price": 19.99,
    "rating": 4.5
  },
  {
    "id": 16,
    "title": "Robot Vacuum Cleaner",
    "image_link": "robot-vacuum.jpg",
    "description": "Smart robotic vacuum with app control and automatic recharging.",
    "price": 249.99,
    "rating": 4.6
  },
  {
    "id": 17,
    "title": "USB-C Hub with Multiple Ports",
    "image_link": "usb-hub.jpg",
    "description": "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery.",
    "price": 59.99,
    "rating": 4.6
  },
  {
    "id": 18,
    "title": "Electric Toothbrush with Smart Sensors",
    "image_link": "toothbrush.jpg",
    "description": "Rechargeable electric toothbrush with multiple brushing modes and pressure sensors.",
    "price": 79.99,
    "rating": 4.7
  },
  {
    "id": 19,
    "title": "Fitness Resistance Bands Set",
    "image_link": "resistance-bands.jpg",
    "description": "Set of 5 resistance bands with different tension levels for workouts.",
    "price": 29.99,
    "rating": 4.5
  },
  {
    "id": 20,
    "title": "Wireless Gaming Controller",
    "image_link": "gaming-controller.jpg",
    "description": "Ergonomic wireless gaming controller compatible with PC, Xbox, and PlayStation.",
    "price": 59.99,
    "rating": 4.7
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(productData).pipe(delay(2000));
  }

  getProductById(id: string | number): Observable<Product> {
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
    const product = productData.find(p => p.id === numericId);

    if (product) {
      return of(product).pipe(delay(500));
    } else {
      return throwError(() => new Error(`Product with id ${id} not found`));
    }
  }
}
