import Head from "next/head";

export default function Meta({
  title = "Dub - Link Management for Modern Marketing Teams",
  description = "Dub is an open-source link management tool for modern marketing teams to create, share, and track short links.",
  image = "https://dub.sh/_static/thumbnail.png",
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/_static/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/_static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/_static/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="theme-color" content="#242424" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
