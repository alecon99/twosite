import React from 'react'

import NavigatioBar from '../components/NavigationBar/NavigationBar'
import Footer from '../components/Footer/Footer'
import JumbotronBlogSection from '../components/BlogSections/JumbotronBlogSection/JumbotronBlogSection'
import PostsSection from '../components/BlogSections/PostsSection/PostsSection'

const BlogPage = () => {
  return (
    <>
        <NavigatioBar />
        <JumbotronBlogSection />
        <PostsSection />
        <Footer />
    </>
  )
}

export default BlogPage