# LumenOS Uygulama Mağazası Deposu
Public mağaza deposu. İletişim: haslooytr@gmail.com

## Nasıl uygulama eklenir? (5 dakika)
1. Bu repoyu fork'layın.
2. `apps/benim-uygulamam/` klasörü açın, içine şunları koyun:
   - `manifest.json` (aşağıdaki şablona birebir uyun)
   - `icon.png` — **ZORUNLU logo** (en az 256x256)
   - `cover.png` — **ZORUNLU kapak** (en az 800x450)
   - `app.html` veya harici `entryUrl` (iframe ile açılır)
3. `apps/index.json` dosyasına manifestinizi ekleyin.
4. Pull Request açın. CI (`validate`) logo+kapak kontrolü yapar, hatalıysa PR kırmızı olur.
5. Onaylanınca tüm kullanıcılara **otomatik (60 sn içinde)** düşer.

## manifest.json şablonu
```json
{
  "id": "benim-uygulamam",
  "name": "Benim Uygulamam",
  "description": "En az 10 karakter açıklama yazın.",
  "version": "1.0.0",
  "author": "Adınız",
  "email": "epostanız",
  "icon": "https://raw.githubusercontent.com/KULLANICI/lumenos-apps/main/apps/benim-uygulamam/icon.png",
  "cover": "https://raw.githubusercontent.com/KULLANICI/lumenos-apps/main/apps/benim-uygulamam/cover.png",
  "entryUrl": "https://raw.githack.com/KULLANICI/lumenos-apps/main/apps/benim-uygulamam/app.html",
  "category": "Araçlar",
  "permissions": []
}
```

Kurallar: `id` küçük harf+tire, `version` semver (1.0.0), `icon`+`cover` zorunlu görsel URL, `entryUrl` https.
