import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ExampleComponent = dynamic(() => import('../pages/recoil/conter'));

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);
  const { t } = useTranslation()

  return (

    <>
    <Head>
        <title>My Page | Next.js SEO</title>
        <meta
          name="description"
          content="This is the meta description for My Page"
        />
        <link rel='icon' href='favicon.ico'></link>
      </Head>
     <h1>{t("HELLO_WORLD")}</h1>
     <button onClick={() => setShowComponent(true)}>Load Component</button>
      {showComponent && <ExampleComponent />}
    </>
  )
}

export async function getStaticProps({ locale }) {
  // If locale is not provided, you might want to set a default locale or handle it accordingly
  if (!locale) {
    // For example, you can set a default locale like this:
    locale = 'en';
    // Or you can return an error or handle it in any other way based on your application's requirements
    // return {
    //   notFound: true,
    // };
  }

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale, ['common'])), // 'common' corresponds to the namespace of your translation files
    },
  };
}