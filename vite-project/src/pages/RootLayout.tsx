import FormLogin from "../components/FormLogin";

export default function RootLayout() {
  return (
    <div className="flex gap-20 justify-center items-center h-screen bg-stone-300 py-5 px-40 max-md:flex-wrap max-md:gap-5 max-md:h-auto">
      <div>
        <h1 className="text-blue-700 text-6xl font-bold">facebook</h1>
        <p className="text-3xl font-mono text-justify">
          O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem
          parte da sua vida.
        </p>
      </div>

      <div>
        <FormLogin />
      </div>
    </div>
  );
}
