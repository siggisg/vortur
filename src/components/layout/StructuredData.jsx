function StructuredData() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Vörtur",
      "url": "https://vortur.is",
      "description": "Swift örbylgjumeðferð við vörtum á Íslandi.",
      "areaServed": "Iceland",
      "medicalSpecialty": "Podiatry"
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
    );
  }
  
  export default StructuredData;