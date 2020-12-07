import LayoutBase from '../components/layout'

const BreadCrumb = ["Home", "Post"]

const Post = () => {
    const Actions = ""  //botao extrema direita

    return (
        <LayoutBase breadcrumb={BreadCrumb} title="Postagens" actions={Actions} >
            <h1>teste</h1>
        </LayoutBase>

    )
}

export default Post
