import Image from "next/image";
import { Docs } from "./comps";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Shell
      <div>
        <Suspense fallback={"Loading..."}>
          <Docs />
        </Suspense>
      </div>
    </main>
  );
}
