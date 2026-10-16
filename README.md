# todo-app

React ve JavaScript kullanılarak geliştirilmiş, kullanıcıların günlük görevlerini yönetmesini sağlayan basit ve kullanıcı dostu bir yapılacaklar listesi uygulamasıdır.

Bu proje; React'in temel özelliklerini, durum yönetimini, CRUD işlemlerini ve tarayıcıda veri saklama yöntemlerini öğrenmek ve uygulamak amacıyla geliştirilmiştir.

## Özellikler

- **Görev Ekleme:** Başlık ve açıklama bilgileriyle yeni görevler oluşturma.
- **Görevleri Listeleme:** Eklenen görevleri düzenli bir liste içerisinde görüntüleme.
- **Görev Düzenleme:** Mevcut görevlerin başlık ve açıklama bilgilerini güncelleme.
- **Görev Silme:** Onay penceresi aracılığıyla görevleri silme.
- **Tamamlanma Durumu:** Görevleri tamamlandı veya tamamlanmadı olarak işaretleme.
- **Veri Kalıcılığı:** Görevleri tarayıcının `localStorage` alanında saklayarak sayfa yenilendiğinde korunmalarını sağlama.
- **Oluşturulma Tarihi:** Her görev için oluşturulma tarihini otomatik olarak kaydetme.

## Kullanılan Teknolojiler

- **HTML5:** Sayfanın temel yapısını oluşturmak için.
- **CSS3:** Sayfa tasarımı ve düzeni için.
- **JavaScript (ES6+):** Uygulamanın işlevselliğini sağlamak için.
- **React:** Kullanıcı arayüzünü ve uygulama durumunu yönetmek için.
- **Vite:** Geliştirme sunucusu ve üretim derlemesi için.
- **localStorage:** Görev verilerini tarayıcıda saklamak için.

## Kurulum

Projeyi kendi bilgisayarında çalıştırmak için aşağıdaki adımları takip edebilirsin.

### Gereksinimler

- [Node.js](https://nodejs.org/) kurulu olmalıdır.
- npm, Node.js ile birlikte gelir.

### 1. Proje klasörüne gir

```bash
cd todo-app
```

### 2. Bağımlılıkları yükle

```bash
npm install
```

### 3. Geliştirme sunucusunu başlat

```bash
npm run dev
```

### 4. Uygulamayı aç

Terminalde gösterilen yerel adresi tarayıcında aç. Varsayılan adres genellikle şöyledir:

```text
http://localhost:5173/
```

## Veri Saklama

Uygulama, görev bilgilerini tarayıcının `localStorage` alanında saklar. Bu sayede görevler sayfa yenilendiğinde korunur.

Uygulama herhangi bir sunucuya veya harici veritabanına ihtiyaç duymaz. Veriler kullanıcının kendi tarayıcısında saklandığı için farklı tarayıcılar veya cihazlar arasında otomatik olarak senkronize edilmez. Tarayıcı verilerinin silinmesi, kaydedilen görevlerin kaybolmasına neden olabilir.

## Proje Hakkında

Bu proje, temel React bilgilerini ve CRUD (oluşturma, görüntüleme, güncelleme ve silme) işlemlerini uygulamak amacıyla geliştirilmiş, yalnızca frontend tarafında çalışan bir uygulamadır.

Kullanıcı hesabı, backend sunucusu veya veritabanı gerektirmez.
