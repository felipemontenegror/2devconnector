import React, { useEffect, useState } from 'react'
import LayoutBase from '../components/layout'
import PostItem from '../components/Post/item'
import Loading from '../components/loading/index'
import { useDispatch, useSelector } from 'react-redux'
import {getPostAll, createPost } from '../store/Post/post.action'
import { Button, Modal } from 'antd'
//import styled from 'styled-components'
import Form from '../components/Post/form'

const BreadCrumb = ["Home", "Post"]


const PostView = () => {
  const [modal, showModal] = useState(false);

  // Estado do redux -----------------------------------
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.post.loading);
  const postAll = useSelector((state) => state.post.all);

  // -----------------------------------
  useEffect(() => {
    dispatch(getPostAll());
  }, [dispatch])

  const Actions = <Button onClick={() => showModal(true)}> Novo </Button>;

  const handleCancel = () => {
    showModal(false);
  }

  const handleSubmit = (form, e) => {
    e.preventDefault();
    dispatch(createPost(form));
    handleCancel();
  };
  const mountPosts = () => {
    if (postAll) {
      return postAll.map((post, i) => (
        
        <PostItem
          key={i}
          author={post.author}//"Algum autor"}//{post.name}
          title={post.title}
          description={post.description}//{post.content}
          created_at={post.created_at}
        />
        
      ))
    };
    
    return;
  }
  
  const ModalForm = () => (
    <Modal
      title="Nova Postagem"
      visible={modal}
      footer={false}
      onCancel={handleCancel}
    >
      <Form submit={handleSubmit} closeModal={handleCancel} />
    </Modal>
  )

  return (
    <LayoutBase breadcrumb={BreadCrumb} title="Postagens" actions={Actions}>
      <ModalForm />
      {loading ? <Loading /> : mountPosts()}
    </LayoutBase>
  )
};

export default PostView;
