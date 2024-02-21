import "@/styles/globals.css";
import { appWithTranslation } from 'next-i18next'
import { RecoilRoot } from 'recoil';

const App = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Component {...pageProps} />
    </RecoilRoot>
)

export default appWithTranslation(App)
