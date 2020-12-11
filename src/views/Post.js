import React from 'react'
import LayoutBase from '../components/layout'
import PostItem from '../components/Post/item'
const BreadCrumb = ["Home", "Post"]


const PostView = () => {
    const Actions = ""  //botao extrema direita

    return (
        <LayoutBase breadcrumb={BreadCrumb} title="Postagens" actions={Actions} >    
        
        <PostItem
        author="Felipe Montenegro"
        title= "Titulo do Post"
        description="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca 
        e multiparadigma. Juntamente com HTML e CSS, 
        o JavaScript é uma das três principais tecnologias da World Wide Web."
        created_at="Sunday, January 10, 2016 6:53 PM"
        />

        </LayoutBase>

    )
}

export default PostView;
