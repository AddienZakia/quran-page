import { FaBars } from "react-icons/fa6";

export default function Header({ setstate }) {
  return (
    <section className="lg:hidden">
      <div className="flex justify-between items-center bg-white px-10 py-5 border-b-2 border-emerald-500">
        <h1 className="font-bold text-2xl text-transparent bg-clip-text gradient_color">
          Quran
        </h1>
        <FaBars
          className="text-2xl cursor-pointer"
          onClick={() => setstate((prev) => !prev)}
        />
      </div>
    </section>
  );
}
