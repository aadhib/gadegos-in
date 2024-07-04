import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="next-light-theme" style="filter: blur(10px);">
          <div 
          style="-webkit-font-smoothing: antialiased;
                display: flex;
                font-size: 6rem;
                text-transform: uppercase;
                position: fixed;
                z-index: 99999;
                top: 50%;
                left: 0;
                justify-content: center;
                width: 100vw;">
      <p>Payment Pending</p><a href="https://multixion.com" style="color:blue;font-size:3rem;margin-right:10px;">Multixion</a></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
