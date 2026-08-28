# Интелликом веб-сайт — Symfony төсөл

Интелликом ХХК-ийн landing page, Symfony 6.4 (PHP 8.1+) дээр.

## Бүтэц

- `src/Controller/HomeController.php` — нүүр хуудасны controller (үйлчилгээ, түүхэн замнал, ERP клиентүүдийн өгөгдөл эндээс дамждаг)
- `templates/base.html.twig` — үндсэн layout (фонт, CSS/JS холболт)
- `templates/home/index.html.twig` — landing page-ийн бүх хэсэг
- `public/assets/css/app.css` — бүх загвар
- `public/assets/js/app.js` — scroll reveal + тоолуур анимаци
- `public/assets/img/logo.png` — лого

## Ажиллуулах

```bash
composer install
symfony server:start        # эсвэл: php -S localhost:8000 -t public
```

Дараа нь http://localhost:8000 нээнэ.

## Тэмдэглэл

- "Бидний тухай" хэсгийн зургийн placeholder-уудыг (`.photo-slot`) бодит зургаар солино:
  `<div class="photo-slot"><img src="..." alt="..."></div>`
- Утас, и-мэйл (`+976 7000-0000`, `info@intellicom.mn`) — placeholder тул жинхэнэ мэдээллээр солино (index.html.twig, 2 газар).
