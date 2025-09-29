"use client";
import { I18nProviderClient, useCurrentLocale } from "@/locales/client";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentLocale = useCurrentLocale();

  return (
    <I18nProviderClient locale={currentLocale}>
      <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900  overflow-hidden">
        {children}
      </div>
    </I18nProviderClient>
  );
}
