function Login() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form
        action=""
        className="flex flex-col justify-center items-center bg-gray-800 my-4
         px-7  md:px-4 py-5 
        w-full
        sm:w-1/2
        sm:shadow-lg rounded-lg text-white space-y-6 text-lg capitalize
        md:w-1/3"
      >
        <h1 className="text-3xl font-bold uppercase  tracking-wider">
          Logueate
        </h1>
        <div className="flex flex-col space-y-2 font-semibold">
          <label htmlFor="user">usuario</label>
          <input
            type="text"
            placeholder="usuario"
            name="user"
            className="p-2 rounded-lg border border-slate-700"
          />
        </div>
        <div className="flex flex-col space-y-2 font-semibold">
          <label htmlFor="mail">Correo</label>
          <input
            type="email"
            name="mail"
            placeholder="example@example.co"
            className="p-2 rounded-lg border border-slate-700"
          />
        </div>
        <div className="flex flex-col space-y-2 font-semibold">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="p-2 rounded-lg border border-slate-700"
          />
        </div>
        <input type="submit" value="Ingresar" className="bg-white w-full" />
      </form>
    </div>
  );
}

export default Login;
