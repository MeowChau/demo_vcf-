import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import BlogWithSidebarContent from '@/components/blog/BlogWithSidebarContent';
import React from 'react';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Consulting Business - Blog With Sidebar"
}

const BlogWithSidebarPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="blog-with-sidebar" title="Blog With Sidebar">
                <BlogWithSidebarContent />
            </LayoutStyle7>
        </>
    );
};

export default BlogWithSidebarPage;
