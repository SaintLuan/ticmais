import { Input } from "@/components/form/Input";
import { AppLayout } from "@/layouts/AppLayout";
import { User, Lock, Hide } from 'react-iconly';

const Login = () =>{
    return(
        <AppLayout title="Logi">
            <h2>Login</h2>

            <form>
                <Input 
                    width={25}
                    icon={<User size={18}/>}
                    placeholder="Usuário"
                    className="sm"
                />

                <Input 
                    type='password' 
                    width={25}
                    icon={<Lock  size={18}/>}
                    iconRight={<Hide size={16} />}
                    placeholder="Senha"
                    className="sm"
                />
            </form>
        </AppLayout>
    );
}

export default Login;