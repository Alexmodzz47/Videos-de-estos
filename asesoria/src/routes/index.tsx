import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { useState } from "react";
import martaImg from "@/assets/marta.jpg";
import videoThumb from "@/assets/video-thumb.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clase Gratis de Ciberseguridad — Securiters Academy" },
      {
        name: "description",
        content:
          "Vídeo gratis de 12 minutos. Descubre el método para formarte en ciberseguridad y conseguir tu primer empleo.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [playing, setPlaying] = useState(false);

  return (
    <main
      className="min-h-screen w-full"
      style={{ background: "var(--gradient-bg)" }}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center md:py-24">
        {/* Logo */}
        <a href="#" className="mb-10 inline-flex items-center gap-2 text-3xl font-extrabold tracking-tight">
          <span
            className="inline-block h-9 w-9 rounded-full"
            style={{ background: "var(--gradient-cta)" }}
            aria-hidden
          />
          <span className="text-foreground">ecuriters</span>
        </a>

        <p className="text-sm tracking-wider text-foreground/80">
          · VÍDEO <strong className="font-bold">GRATIS</strong> DE 12 MINUTOS ·
        </p>

        <h1 className="mt-6 text-2xl font-bold leading-snug text-foreground md:text-[1.85rem] md:leading-[1.35]">
          <strong>Descubre el método</strong> para{" "}
          <strong>formarte en ciberseguridad</strong>, y entrar en uno de los
          sectores mejor remunerados del mundo, con un método{" "}
          <strong>realista y efectivo</strong>, con el que conseguir{" "}
          <strong>tu primer empleo.</strong>
        </h1>

        <p className="mt-6 text-base text-foreground/70 md:text-lg">
          …de forma online y con un tutor individual que te guiará
          <br className="hidden md:block" /> hasta conseguir empleo.
        </p>

        {/* Video */}
        <div className="mt-10 w-full overflow-hidden rounded-xl shadow-2xl">
          {playing ? (
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Clase gratis"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="group relative block w-full"
              aria-label="Reproducir vídeo"
            >
              <img
                src={videoThumb}
                alt="Trabaja en Ciber"
                width={1280}
                height={736}
                className="block w-full"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/90 bg-white/10 backdrop-blur-sm transition-transform group-hover:scale-110 md:h-24 md:w-24">
                  <Play className="ml-1 h-8 w-8 fill-white text-white md:h-10 md:w-10" />
                </span>
              </span>
            </button>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={() => setPlaying(true)}
          className="mt-10 inline-flex w-full max-w-md items-center justify-center rounded-full px-10 py-5 text-base font-bold uppercase tracking-wider text-white shadow-xl transition-transform hover:scale-[1.02] active:scale-[0.99]"
          style={{ background: "var(--gradient-cta)" }}
        >
          Ver vídeo gratis
        </button>

        {/* Marta */}
        <section className="mt-24 flex flex-col items-center">
          <img
            src={martaImg}
            alt="Marta Barrio"
            width={160}
            height={160}
            loading="lazy"
            className="h-40 w-40 rounded-full object-cover shadow-lg ring-4 ring-white"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-foreground">
            Marta Barrio
          </h2>
          <p className="mt-1 text-sm font-medium text-foreground/70">
            Directora Académica de Securiters Academy
          </p>
          <div className="mt-6 space-y-4 text-left text-foreground/80 md:text-center">
            <p>
              Marta Barrio, Pentester Senior, ha trabajado para empresas como
              Oracle, Deloitte o NTT Data, y ha formado a más de 500
              profesionales dentro de la industria.
            </p>
            <p>
              El método formativo que te enseñará en el vídeo es el único método
              que todos los profesionales de la ciberseguridad usan para
              formarse y emplearse.
            </p>
            <p>
              Es el único mecanismo para desarrollar criterio, práctica real y
              una base sólida para estar a la altura de lo que exige este
              emocionante sector.
            </p>
            <p className="font-semibold">
              Al ver el vídeo, entenderás por qué funciona.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer
        className="mt-12 px-6 py-10 text-center text-sm text-white"
        style={{ background: "linear-gradient(90deg,#1a1033,#3b1d6e,#7a1d6a)" }}
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span
              className="inline-block h-6 w-6 rounded-full"
              style={{ background: "var(--gradient-cta)" }}
              aria-hidden
            />
            <span>ecuriters</span>
          </div>
          <p>2026 Securiters Academy. Todos los derechos reservados.</p>
          <p className="text-white/80">
            <a href="#" className="hover:underline">Aviso Legal</a> /{" "}
            <a href="#" className="hover:underline">Política de Privacidad</a> /{" "}
            <a href="#" className="hover:underline">Política de Cookies</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
