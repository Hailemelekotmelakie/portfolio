import "./rotatingBorder.css";

export default function RotatingBorder() {
  const services = [
    "Website Development",
    "Mobile App Development",
    "Deployment & Maintenance",
    "Software Development",
  ];
  return (
    <div class="logo-marquee">
      <div class="logo-marquee--gradient"> </div>
      <div class="logo-marquee--marquee">
        <div class="logo-marquee--marquee-group">
          {services.map((service, index) => (
            <h2 className="marque-item" key={index}>
              {service}
            </h2>
          ))}
        </div>
        <div aria-hidden="true" class="logo-marquee--marquee-group">
          {services.map((service, index) => (
            <h2 className="marque-item " key={index}>
              {service}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}
