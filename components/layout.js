import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="mt-16 font-medium text-black-txt ">{children}</main>
      <Footer />
    </>
  );
}
