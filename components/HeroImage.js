/**
 * Desktop/Wide Image:
 *   https://unsplash.com/photos/ExnAdmi-Asc
 *   Photo by Todd Steitle, https://unsplash.com/@tsteitle
 *
 * Mobile/Tall Image:
 *   https://unsplash.com/photos/hzvbslx-rls
 *   Photo by Dennis Buchner, https://unsplash.com/@baitman
 */

export default function HeroImage() {
  return (
    <picture>
      <source
        media="(orientation: landscape), (min-width: 768px)"
        srcSet="/owls/todd-steitle/1024.jpg 1024w, /owls/todd-steitle/1600.jpg 1600w"
      />
      <source srcSet="/owls/dennis-buchner/400.jpg 400w, /owls/dennis-buchner/600.jpg 600w, /owls/dennis-buchner/800.jpg 800w" />
      <img src="/owls/todd-steitle/1024.jpg" alt="Snowy Owl" />
    </picture>
  );
}
