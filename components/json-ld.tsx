/**
 * Renders a JSON-LD <script> tag. Server component — the structured data ships
 * in the initial HTML so crawlers and AI engines read it without executing JS.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
