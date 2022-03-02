function Post({name, photoUser, date, text, photoPost, liked}) {
    return(
        <>
            <main className="post">
                <header className="post-header">
                    <div>
                        <img src={photoUser}
                            alt={name}
                            className="user-image">
                        </img>
                    </div>
                    <div className="user-info">
                        <h2>{name}</h2>
                        <span>{date}</span>
                    </div> 
                    <div>
                        <span className=""></span>
                    </div>
                </header>
                <section className="post-section">
                    <p>{text}</p>
                    <img 
                        src={photoPost}
                        alt={name}
                        className="post-image">
                    </img>
                    <div className="actions">
                        <button className="btn-like">
                            <div className="like">

                            </div>
                        </button>
                        <div className="share-comment">
                            <button className="comment">
                                Comments
                            </button>      
                            <button >
                                Share
                            </button>
                        </div>    
                    </div>
                    <div className="liked">
                        <span>Liked by <span className="liked-user">{liked}</span></span>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Post;