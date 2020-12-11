import LayoutBase from '../components/layout'

const BreadCrumb = ["Home", "Perfil"]

const Profile = () => {
    const Actions = ""  //botao extrema direita

    return (
        <LayoutBase 
        breadcrumb={BreadCrumb} title="Perfil" actions={Actions} >
            <h1>teste Profile</h1>
        </LayoutBase>

    )
}

export default Profile;