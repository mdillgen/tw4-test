import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-start justify-center px-24 landscape:px-48 py-[8vmax] landscape:py-[12vmin]">
      <div className="">
        <h1 className="font-extrabold text-4xl mb-[.5em]">Tailwind CSS v4.0 Test</h1>
        <p>The ::first-letter pseudo-element reset. Select all text to see the issue.</p>
      </div>
    </main>
  );
}
