import { Input } from "@/components/form/Input";
import { ProfileContainer, ProfileForm, ProfileImage } from "@/styles/profileStyles";
import Image from "next/image";
import { Calendar, ChevronDown, EditSquare, Message, User } from "react-iconly";
import brFlag from '@/assets/img/flags/br.svg';

import avatarDefault from '@/assets/img/avatar.svg';
import { AppLayout } from "@/layouts/AppLayout";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";

export const ProfilePage = () => {
    return(
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Header />
                <AppLayout>
                    <ProfileContainer>
                        <ProfileImage>
                            <Image src={avatarDefault} width={300} height={300} alt="Perfil de usuário - Usuário" />

                            <button>
                                <EditSquare set="bold" primaryColor="#F0C75E" secondaryColor="#ffffff"/>
                            </button>
                        </ProfileImage>

                        <ProfileForm>
                            <form>
                                <Input 
                                    width={100}
                                    placeholder="Nome completo"
                                    icon={<User />}
                                />

                                <Input 
                                    width={100}
                                    placeholder="Email"
                                    icon={<Message set="bold" primaryColor="#9E9E9E" />}
                                />

                                <aside className="phoneNasc">
                                    <Input 
                                        width={50}
                                        widthMobile={100}
                                        placeholder="Data de nascimento"
                                        iconRight={<Calendar primaryColor="#9E9E9E"  />}
                                    />

                                    <fieldset className="phone">
                                        <dl>
                                            <dt>
                                                <Image src={brFlag} alt="Brasil +55" width={65} height={65} />
                                                <ChevronDown primaryColor="#9E9E9E" size={18} />
                                            </dt>
                                        </dl>

                                        <Input 
                                            width={100}
                                            placeholder="+55 (99) 9 9999-0000"
                                        />
                                    </fieldset>
                                </aside>

                                
                                
                            </form>
                        </ProfileForm>
                    </ProfileContainer>
                </AppLayout>
            <Footer />
        </ThemeProvider>
    );
}

export default ProfilePage;