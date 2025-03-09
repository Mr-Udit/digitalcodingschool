import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className=""> hello this is home page</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
         <h1>this is footer of the page </h1>
      </footer>
    </div>
  );
}
