import React from 'react'
import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLE6_sfx_UTNk-N2Uk4URyNcxOK1oYOqz_jg&usqp=CAU"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum icabo saepe consectetur.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, perferendis aliquid? Omnis maxime laudantium obcaecati neque voluptatibus quisquam sit ipsam quia magni, quo incidunt. Voluptatem laudantium consectetur repellat ipsam pariatur!
            </p>
        </div>
    )
}
