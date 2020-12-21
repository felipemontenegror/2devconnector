import React, { useEffect } from 'react'
import LayoutBase from '../components/layout'
import PostItem from '../components/post/item'
import Loading from '../components/loading/index'
import { useDispatch, useSelector } from 'react-redux'
import {getPostAll } from '../store/post/post.action'
import { Button } from 'antd'
import styled from 'styled-components'
const BreadCrumb = ["Home", "Post"]




const PostView = () => {
    const Actions = ""  //botao extrema direita
    const dispatch = useDispatch()

    //--Estado do redux--
    const loading = useSelector((state) => state.post.loading)
    const postAll = useSelector((state) => state.post.all)



    useEffect(() => {
    dispatch(getPostAll())
    }, [dispatch])

    const mountPosts = () => {
        if(postAll){
        return postAll.map((post, i) => (
        <PostItem
            key={i}
            author={post.author}
            title= {post.title}
            description={post.description}
            created_at={post.created_at}
        />
        ))
    }
    return;
    }

    const Paginator = () => (
        <>
        <PaginatorStyled>
        <Button type="primary">Anterior</Button>
        <Button type="primary">Próximo</Button>
        </PaginatorStyled>
        </>
    )
    return (
        <LayoutBase breadcrumb={BreadCrumb} title="Postagens" actions={Actions} >    
        {loading ? <Loading /> : mountPosts()}
        {Paginator()}
        </LayoutBase>
    )
}

export default PostView;


const PaginatorStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  button {
    margin: 5px;
  }
`
