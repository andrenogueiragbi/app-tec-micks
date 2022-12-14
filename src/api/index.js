import axios from "axios";


const login = async (email,password) => {

    const config = {
        method: 'post',
        url: 'https://appdev.micks.com.br:8106/appLogin',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer andre-eyJhbGciOiJIUzI1NiJ9.YW5kcmU.uI6gW3BwXcKp0FcPuYJFyPl3HNOfIpVqCUAj9WesjUo1'
        },
        data: {
            email,
            password


        }

    }


    try {
        let res = await axios(config);


        return {
            ok: true,
            result: res.data
        }

    } catch (erro) {

        return {
            ok: false,
            result: "Erro API",
            erro
        }
    }
}


export default { login }
