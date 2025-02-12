import SocialMediaIcons from "@/components/SocialMediaIcons";

export default function Introduce() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center h-screen bg-gray-100 dark:bg-gray-900 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl">
        <p className="text-green-500 text-sm md:text-base font-mono tracking-wide mb-3">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
          Harish Prasad
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-green-500 mt-3 leading-tight">
          Full-stack Developer crafting delightful experiences on the Internet
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mt-4">
          I'm a Software Engineer based out of Bengaluru, India 🇮🇳
        </p>
        <div className="mt-6 flex justify-center">
          <SocialMediaIcons />
        </div>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block border border-green-500 text-green-500 px-6 py-3 rounded-md font-medium hover:bg-green-500 hover:text-white transition"
          >
            Say Hi :)
          </a>
        </div>
      </div>
    </section>
  );
}
