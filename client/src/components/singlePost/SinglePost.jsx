import React from 'react'
import './singlePost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/p526x296/261025267_4536251396487940_5585918025965582624_n.jpg?_nc_cat=109&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=HU06-2V2D8IAX8Xp49v&_nc_oc=AQksKjMprQy6WoscbqRtzELosHdg3bokdfYlfM5PyG2jtHfnyfSkhR07mf5zohrnAl8&_nc_ht=scontent.fhan2-3.fna&oh=b48ebe720cc70fdfd48bd1b714acd9d6&oe=61AC6E7D"
                    alt=""
                />
                <h1 className="siglePostTitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Ky</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, incidunt vero porro accusantium sapiente minima ea asperiores harum adipisci quibusdam facere quas numquam cumque voluptatum aspernatur voluptatem. Vitae, alias blanditiis.
                </p>
            </div>
        </div>
    )
}
