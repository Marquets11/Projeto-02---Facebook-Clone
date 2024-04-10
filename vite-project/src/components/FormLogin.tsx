import { FormEvent, useRef, useState } from "react";

export default function FormLogin() {
	const initialState = {
		email: "",
		password: "",
	};
	const [login, setlogin] = useState(initialState);
	const email = useRef();
	const password = useRef();

	const updateLogin = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setlogin({ ...login, [ev.target.id]: ev.target.value });
	};

	const validateLogin = (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		setlogin({
			email: "",
			password: "",
		});
	};

	return (
		<div>
			<form
				className="p-4 bg-white shadow-xl  shadow-slate-500 flex flex-col gap-4 w-96 rounded-lg max-sm:w-auto"
				onSubmit={(ev) => validateLogin(ev)}
			>
				<input
					type="text"
					name="email"
					id="email"
					value={login.email}
					ref={email.current}
					onChange={(ev) => updateLogin(ev)}
					placeholder="E-mail ou Telefone"
					className="border p-3 rounded-md"
				/>

				<input
					type="password"
					name="password"
					id="password"
					value={login.password}
					ref={password.current}
					onChange={(ev) => updateLogin(ev)}
					placeholder="Senha"
					className="border p-3 rounded-md"
				/>

				<button className="bg-blue-600 text-white rounded-md p-2 font-bold text-lg hover:bg-blue-800 duration-300">
					Entrar
				</button>
				<p className="w-auto text-blue-600 self-center hover:underline hover:cursor-pointer">
					Esqueceu a senha?
				</p>
				<hr />
				<button className="bg-green-600 text-white font-extrabold py-3 rounded-md w-40 self-center hover:bg-green-800 duration-300">
					Criar nova conta
				</button>
			</form>
		</div>
	);
}
