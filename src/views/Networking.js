import LayoutBase from '../components/layout'

const BreadCrumb = ["Home", "Minha Rede"]

const Networking = () => {
    const Actions = ""  //botao extrema direita

    return (
        <LayoutBase 
        breadcrumb={BreadCrumb} title="Minha Rede" actions={Actions} >
            <h1>teste Networking</h1>
        </LayoutBase>

    )
}

export default Networking;