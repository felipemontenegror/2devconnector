import LayoutBase from '../components/layout'

const BreadCrumb = ["Home", "Painel"]

const Panel = () => {
    const Actions = ""  //botao extrema direita

    return (
        <LayoutBase 
        breadcrumb={BreadCrumb} title="Painel" actions={Actions} >
            <h1>teste Panel</h1>
        </LayoutBase>

    )
}

export default Panel;