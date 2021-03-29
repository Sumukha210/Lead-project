import Head from "next/head";

const SEO = () => {
  const description = "lead project using nextjs";
  const image =
    "https://raw.githubusercontent.com/Sumukha210/Lead-project/main/public/main-img.png";
  const title = "lead-project";
  const twitterUsername = "sumukha210";
  const url = "https://lead-project.vercel.app";

  return (
    <div>
      <Head>
        <title>Lead project</title>
        <meta name="description" content="lead project using nextjs" />
        <meta name="keywords" content="nextjs" />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        {url && <meta property="og:url" content={url} />}
        <meta property="og:type" content="article" />
        {title && <meta property="og:title" content={title} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {image && <meta property="og:image" content={image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}
        {title && <meta name="twitter:title" content={title} />}
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        {image && <meta name="twitter:image" content={image} />}
      </Head>
    </div>
  );
};

export default SEO;
