import Link from "next/link";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import { GoArrowLeft } from "react-icons/go";

import ComponentShowcase from "@/components/UiLab/ComponentShowcase";
import { labEntries } from "@/components/UiLab/registry";

export async function generateStaticParams() {
  return labEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = labEntries.find((e) => e.slug === slug);

  if (!entry) {
    return {};
  }

  return { title: entry.name, description: entry.description };
}

export default async function UiLabDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = labEntries.find((e) => e.slug === slug);

  if (!entry) {
    notFound();
  }

  return (
    <section className="mt-20 flex flex-col gap-8">
      <Link
        href="/ui-lab"
        className="flex w-fit items-center gap-1.5 text-sm text-gray-500 underline underline-offset-2 transition-colors hover:text-black"
      >
        <GoArrowLeft className="h-4 w-4" />
        ui lab
      </Link>

      <div>
        <h1 className="text-2xl font-medium text-black">{entry.name}</h1>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {entry.detail}
        </p>
      </div>

      <ComponentShowcase name={entry.name} description={entry.description}>
        {entry.element}
      </ComponentShowcase>
    </section>
  );
}
