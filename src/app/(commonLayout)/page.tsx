import HeroSection from "@/components/modules/home/HeroSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>Events & Activites. Here you can get the events to join </title>
        <meta
          name="description"
          content="Discover your interested events & activities . Find and join events to enjoy your day"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <main>

    <HeroSection />
    </main>
    </>
  )
}
