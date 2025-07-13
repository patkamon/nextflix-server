# 🎬 NestJS Movie Service (TMDB Integration)

project นี้เป็นการสร้าง Movie Service ด้วย [NestJS](https://nestjs.com/) โดยใช้ **Clean Architecture** 
---

## 🚀 วิธีการติดตั้งและเริ่มต้นใช้งาน

### ✅ Prerequisites

- Node.js v18+
- npm หรือ yarn
- มีบัญชี TMDB พร้อม API Key

### 📦 ติดตั้งโปรเจกต์

```
git clone {{URL}}
cd nextflix-server
npm install
```

### เริ่มต้นใช้งาน
```
npm run start
```

## 🧠 สถาปัตยกรรม (Clean Architecture)

โครงสร้างโปรเจกต์ออกแบบให้แต่ละ layer มีหน้าที่เฉพาะตัว ลดการผูกติดกันระหว่าง module:
```
src/
├── show
|   ├── controller # จุดรับ HTTP requests
|   ├── service/ # เรียกใช้ function ต่างๆ
|   ├── domain/ # Entity และ interface กลาง เช่น Show
|        ├── utils/ # ฟังก์ชันช่วยเหลือ เช่น deterministic random
|        ├── entities/ # interface ของ internal data
|        ├── repositories/ # abstract ของ service
|   ├── data/ # ข้อมูลของ TMDB API และ mapping ข้อมูล
|        ├── dto/ # interface ของ external data
|        ├── mappers/ # map จาก external to internal
└── main.ts
```
---

## ✨ Features

✅ ดึงข้อมูลภาพยนตร์จาก TMDB API  
✅ ออกแบบตามแนวทาง Clean Architecture  
✅ ใช้ interface กลาง: `Show`  
✅ สุ่ม flag `status`, `isTop10`, `isNetflixOriginal` แบบ deterministic  
✅ ได้ผลลัพธ์เดิมจาก id เดิมทุกครั้ง  
✅ แยก business logic ออกจาก mapper เพื่อให้โค้ด maintain ง่ายขึ้น  

---

## 🧩 Interface: `Show`

```
export interface Show {
  id: string;
  name: string;
  backdropImage: string;
  image: string;
  description?: string;
  type?: 'anime' | 'tv' | 'movie';
  status?: ShowStatus;
  isTop10?: boolean;
  isNetflixOriginal?: boolean;
}
```

### Environment
```
API_TOKEN={{TMDB_TOKEN}}
IMAGE_BASE_URL={{IMAGE_PATH}}
FRONTEND_ORIGIN={{ORIGIN}}
```
