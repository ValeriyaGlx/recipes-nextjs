import Head from 'next/head';

import Footer from '../../widgets/Footer/Footer';
import Header from '../../widgets/Header/Header';

const HomeLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="bg-teal-50 px-2 my-2 shadow-md rounded-md">{children}</main>
      <Footer />
    </>
  );
};
export default HomeLayout;