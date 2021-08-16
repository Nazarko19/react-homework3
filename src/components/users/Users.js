import {useEffect, useState} from "react";
import {getuser} from "../../servis/user.fetch.servis";
import User from "../user/User";
import {getPostsofUsers} from "../../servis/post.servis";
import Posts from "../Posts/Posts";
export default function Users() {
    let [users,setUsers] = useState([])
    let [post,setPost] = useState(null)

    useEffect(()=>{
        getuser().then(value => setUsers([...value]))
    })
    
    
    const clickUser = (u) => {
        getPostsofUsers(u.id).then(value => setPost([...value]))

    }

    
    
    
  return (
   <div className={'wrap'}>
       <div className={'user'}>
       {
           users.map(value => <User
                             key={value.id}
                             item={value}
                             clickUser={clickUser}/>)
       }
           {post && (<div className={'posts'}>{post.map(value=> <Posts key={value.id} item={value}/>)}</div>)}
   </div>
   </div>
  );
}