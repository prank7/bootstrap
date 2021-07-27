import Header from './Header';
import Footer from './Footer';

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          {children}
        </div>
      <Footer />
    </>
  );
}
