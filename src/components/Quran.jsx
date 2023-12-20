import React from "react";
import { twMerge } from "tailwind-merge";

function Verses({ verse, surah_name }) {
  return (
    <div className="py-10">
      <p className="px-5 opacity-40">
        Q.S {surah_name}: {verse.number.inSurah}
      </p>

      <div className="px-5 mt-3">
        <h1 className="text-right font-bold text-2xl sm:text-3xl leading-relaxed lg:leading-loose">
          {verse.text.arab}
        </h1>
        <p className="font-medium text-md sm:text-xl lg:text-lg mt-10 text-gray-700">
          {verse.text.transliteration.en}
        </p>
        <p className="font-normal text-sm sm:text-md leading-relaxed opacity-60">
          {verse.translation.id}
        </p>
      </div>
    </div>
  );
}

export default function Quran({ data }) {
  const surahName = data.name.transliteration.id;
  return (
    <section>
      <h1
        className={twMerge(
          "font-bold text-3xl text-transparent bg-clip-text gradient_color",
          "text-center mt-20"
        )}
      >
        {surahName}
      </h1>

      <div className="flex justify-center items-center font-semibold mt-1">
        <p>{data.name.translation.id}</p>
        <p>, {data.numberOfVerses} Ayat</p>
      </div>

      <div className="px-7 divide-y-2 mt-10">
        {data.verses.map((x, i) => {
          return (
            <div key={i}>
              <Verses verse={x} surah_name={surahName} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
