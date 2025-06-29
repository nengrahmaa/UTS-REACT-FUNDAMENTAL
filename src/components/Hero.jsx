export default function Hero({
  title,
  description,
  imageUrl,
  buttonText,
  buttonHref,
}) {
  return (
    <section className="relative h-screen w-full font-poppins">
      {/* Gambar Latar */}
      <img
        src={imageUrl}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Konten */}
      <div className="relative z-10 flex h-full items-end justify-start px-8 pb-24 sm:px-16">
        <div className="max-w-2xl text-white space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 drop-shadow-sm">
            {description}
          </p>
          <a
            href={buttonHref}
            className="inline-block bg-[#002fff] hover:bg-blue-700 transition px-6 py-3 rounded-full text-sm font-semibold shadow"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
