import { setGlobalState } from '@/stores/global.store';
import moment from 'moment';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider, useDispatch, useSelector } from 'react-redux';
// import enUS from 'antd/lib/locale/en_US';
// import zhCN from 'antd/lib//locale/zh_CN';
import koKR from 'antd/lib/locale/ko_KR';

import { localeConfig } from '@/locales';
import store from '@/stores';
import { ConfigProvider } from 'antd';

export default function MyApp({ Component, pageProps }: AppProps) {
  const locale = koKR;
  // const { locale } = useSelector(state => state.user);
  // const { theme, loading } = useSelector(state => state.global);
  // const dispatch = useDispatch();

  // const setTheme = (dark = true) => {
  //   dispatch(
  //     setGlobalState({
  //       theme: dark ? 'dark' : 'light',
  //     }),
  //   );
  // };

  /** initial theme */
  // useEffect(() => {
  //   setTheme(theme === 'dark');
  //   // watch system theme change
  //   if (!localStorage.getItem('theme')) {
  //     const mql = window.matchMedia('(prefers-color-scheme: dark)');

  //     function matchMode(e: MediaQueryListEvent) {
  //       setTheme(e.matches);
  //     }

  //     mql.addEventListener('change', matchMode);
  //   }
  // }, []);

  // set the locale for the user
  // more languages options can be added here
  // useEffect(() => {
  //   if (locale === 'en_US') {
  //     moment.locale('en');
  //   } else if (locale === 'zh_CN') {
  //     moment.locale('zh-cn');
  //   }
  // }, [locale]);

  /**
   * handler function that passes locale
   * information to ConfigProvider for
   * setting language across text components
   */
  // const getAntdLocale = () => {
  //   if (locale === 'en_US') {
  //     return enUS;
  //   } else if (locale === 'zh_CN') {
  //     return zhCN;
  //   }
  // };

  return (
    <Provider store={store}>
      <ConfigProvider locale={locale}>
        <IntlProvider locale={'en'} messages={localeConfig['en_US']}>
          <Component {...pageProps} />
        </IntlProvider>
      </ConfigProvider>
    </Provider>
  );
}
