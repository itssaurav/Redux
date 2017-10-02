import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchPost} from '../actions/index';

class PostsShow extends Component{
    componentWillMount()
    {
       this.props.fetchPost(this.props.params.id);
    }
   
    render()
    {
        const {post} = this.props;
       if(!post)
        {
         return <div>Loading...</div>
        }
       return(
            
           <div>
                <h3>{post.title}</h3>
               <p>{post.categories}</p>
               <p>{post.content}</p> 
           </div>
        );
    }
}
function mapStateToProps(state)
{
    
    return {post:state.posts.post};
}
export default connect (mapStateToProps,{fetchPost})(PostsShow);
