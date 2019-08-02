import React from 'react'
import postType from '../utils/postType';
import { Tag, Badge, FeaturedButton } from '../elements';

const FeaturedPost = ({ post }) => {
    return (
        <div className="featured-posts__main">
            <h3 className="son-ilanlar__title">Öne çıkan ilanlar</h3>
            <div className="featured-posts">

                <p className='featured-posts__title'>{post.position}</p>
                <p className='featured-posts__company'>{post.company.name}</p>
                <div className="featured-posts__location_type">
                    <div className='featured-posts__location'>
                        {post.location}
                    </div>
                    <Badge>
                        {postType(post.type)}
                    </Badge>
                </div>
                <div className="featured-posts__desc" dangerouslySetInnerHTML={{ __html: post.description.slice(0, 100) }} />
                <div className="featured-posts__tags">
                    {
                        post.tags.map(tag => (
                            <Tag key={tag.slug}>
                                {
                                    tag.name
                                }
                            </Tag>
                        ))
                    }
                </div>
                <div >
                    <FeaturedButton primary>Ilana git</FeaturedButton>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPost;