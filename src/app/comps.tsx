import { unstable_noStore as noStore } from "next/cache";

export async function fetchRevenue() {
  noStore();
  await new Promise((resolve) => setTimeout(resolve, 1243));
}

export async function Docs() {
  await fetchRevenue();
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      This gets streamed in
    </div>
  );
}
