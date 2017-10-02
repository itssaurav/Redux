import React from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './components/app';
import POST_Index from './components/post_index';
import PostsNew from './components/post_new'
import PostsShow from './components/posts_show'
export default (
<Route path='/' component={App}>
   <IndexRoute component={POST_Index}/>
   <Route path='posts/new' component={PostsNew}/>
   <Route path='posts/:id' component={PostsShow}/>
</Route>
);