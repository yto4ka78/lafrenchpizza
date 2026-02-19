import { useLocation } from "react-router-dom";
import {
  RESTAURANT,
  WEBSITE,
  getBreadcrumbSchema,
} from "../../config/schemaConfig";
import { getFAQSchema } from "../../data/faqData";

export default function SchemaMarkup() {
  const { pathname } = useLocation();

  const graph = [
    WEBSITE,
    RESTAURANT,
    getBreadcrumbSchema(pathname),
    ...(pathname === "/faq" ? [getFAQSchema()] : []),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
