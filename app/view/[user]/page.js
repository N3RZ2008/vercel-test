import Link from "next/link";


export default function View({params} = {params : {user: string}}) {
    return (
        <>
            <p>Usuário: {params.user}</p>
            <Link href="/">Voltar</Link>
        </>
    )
}