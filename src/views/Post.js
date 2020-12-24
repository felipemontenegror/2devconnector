import React, { useEffect, useState } from 'react'
import LayoutBase from '../components/layout'
import PostItem from '../components/post/item'
import Loading from '../components/loading/index'
import { useDispatch, useSelector } from 'react-redux'
import {getPostAll, createPost } from '../store/post/post.action'
import { Button, Modal } from 'antd'
import styled from 'styled-components'
import FormPost from '../components/post/form'

const BreadCrumb = ["Home", "Post"]


const limitPerPage = 7

const PostView = () => {
    const Actions = <Button onClick={() => setModal(true)}>Novo</Button>;
    const [modal, setModal] = useState(false)
    const [page, setPage] = useState(1)
    const [update, setUpdate] = useState(false);

    //--Estado do redux--
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.post.loading)
    const postAll = useSelector((state) => state.post.all)
    const total = useSelector((state) => state.post.total)



    useEffect(() => {
    dispatch(getPostAll(page, limitPerPage))
    }, [dispatch, page])

    const isFinalPage = () => {
        const totalPage = Math.ceil(total / limitPerPage)
        return page === totalPage
    }



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

    const changePage = (page) => (page >= 1 ? setPage(page) : false)

    const Paginator = () => {
        return !loading && total > limitPerPage ? (
        <PaginatorStyled>
        <Button onClick={() => changePage(page - 1)} 
        disabled={page === 1} 
        type="primary">Anterior</Button>

        <Button disable={isFinalPage()} 
        onClick={() => changePage(page + 1)} 
        type="primary">Próximo</Button>
        </PaginatorStyled>
        ) : (
         ""
        )
    }

    const handleCancel = () => setModal(false)

    const submitPost = (event, data) => {
        event.preventDefault();
        dispatch(createPost(data));
        handleCancel();
        setUpdate(true);
      };
    
    
    const ModalForm = () => (
        <Modal
          title="Nova Postagem"
          visible={modal}
          footer={false}
          onCancel={handleCancel}
        >
          <FormPost submit={submitPost} />
        </Modal>
      );
    
     return (
        <LayoutBase breadcrumb={BreadCrumb} title="Postagens" actions={Actions} >    
        <ModalForm />
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
