import "./App.css";

function App() {
  return (
    <main className="w-[100vw] h-[100vh] bg-Light-gray flex justify-center items-center">
      <article className="p-[16px] rounded-2xl bg-white flex justify-center flex-col items-center basis-72">
        <img className="rounded-3xl" src="/images/image-qr-code.png" alt="" />
        <h1 className="font-Outfit font-bold text-center py-5 px-2 text-xl">Improve your front-end skills by building projects</h1>
        <p className="font-Outfit text-Grayish-blue text-center text-m py-4">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </article>
    </main>
  );
}

export default App;
