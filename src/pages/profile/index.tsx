import { AppLayout } from "@/layouts/AppLayout"
import { ProfileContainer } from "@/styles/profileStyles"

    export const Profile = () =>{
    return(
        <AppLayout title="Perfil">
            <ProfileContainer>
                <h2>Perfil</h2>
            </ProfileContainer>
        </AppLayout>
    );
}

export default Profile;