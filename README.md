# Morfo | Cocina Urbana Premium

**Giro:** Restaurante — Street Glam Food  
**Atmósfera:** oscuro · sensorial · irreverente  
**Cliente típico:** Profesionista leonés 25-42, busca experiencia de nivel CDMX en León  

---

## Colores

| Nombre     | Hex       | Uso                                  |
|------------|-----------|--------------------------------------|
| Negro      | `#0D0D0D` | Fondo dominante                      |
| Carmín     | `#C0392B` | Logo, accento único, CTAs            |
| Cognac     | `#A0714F` | Cuero de sillas, calidez             |
| Dorado     | `#C9A84C` | Lámparas, detalles tipográficos      |
| Madera     | `#8B6840` | Marcos de mesa, fachada              |
| Neutro     | `#1A1A1A` | Fondo de secciones alternas          |
| Texto      | `#E8E0D6` | Texto principal sobre negro          |
| Texto bajo | `#7A7068` | Texto secundario, horarios, detalles |

## Tipografía

- **Títulos:** Cormorant Garamond 700 — `clamp(72px, 10vw, 120px)` en hero
- **Cuerpo:** DM Sans 300/400
- **Acento cursivo:** Cormorant Garamond italic 300 — una vez por sección

## Firma visual

SVG de la mariposa-tenedor del logo (stroke-only, sin relleno), a 400 px de ancho,
`opacity: 0.04`, centrada detrás del texto del hero. Solo visible en desktop ≥ 1024 px.

## Lo que NO debe parecer

- Parrilla ejecutiva de hombre de negocios
- Restaurante familiar con fotos de stock
- Diseño que explique que es "cool" en vez de serlo
- Menú de fondo blanco con fotografía iluminada en JPEG

---

## Datos de contacto

- **Teléfono:** 479 153 1472
- **Dirección:** Blvd. Vicente Valtierra 7180, Fracciones Cañada de Alfaro, 37299 León de los Aldama, Gto.
- **Instagram:** [@morfo_mx](https://www.instagram.com/morfo_mx)
- **WhatsApp:** https://wa.me/524791531472

## Horarios

| Día                | Horario             |
|--------------------|---------------------|
| Martes – Miércoles | 2:00 pm – 11:00 pm  |
| Jueves – Sábado    | 2:00 pm – 12:00 am  |
| Domingo            | 2:00 pm – 8:00 pm   |
| Lunes              | Cerrado              |

---

## Archivos

```
morfo-sitio/
  index.html   ← página principal (9 secciones)
  menu.html    ← menú completo (7 tabs, 50+ platillos y bebidas)
  styles.css   ← todos los estilos (variables, componentes, responsive)
  main.js      ← navbar scroll, hamburger, tabs, fade-in observer
  README.md
```

## Pendientes del cliente

- [ ] Entregar logo en PNG con fondo transparente
- [ ] Confirmar precio del Ceviche en Coco
- [ ] Confirmar descripción de Pappardelle Artesanal y Rigatoni
- [ ] Confirmar descripción del Tiramisú
- [ ] Foto para og:image (interior o platillo estrella)
- [ ] Fotos reales de los 4 platillos destacados en index.html
- [ ] Foto del interior del restaurante (sección Ambiente)

## Deploy

```bash
cd ~/CLAUDE/agencia\ web\ pablo/morfo-sitio
gh repo create Pab-M24/morfo-sitio --public --source=. --remote=origin --push
npx vercel --prod
```

**URL Vercel:** <!-- PENDIENTE: agregar después del deploy -->  
**Dominio:** <!-- PENDIENTE: confirmar dominio con cliente -->
