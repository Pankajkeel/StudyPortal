import * as React from 'react';
import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { extractCritical } from '@emotion/server';

export default class AppDocument extends Document {
  static async getInitialProps(
    ctx
  ){
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </React.Fragment>
      ),
    };
  }

  render(){
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}