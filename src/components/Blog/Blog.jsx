import PropTypes from 'prop-types';

// icon import
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark }) => {

    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;

    return (
        <div className='mb-20'>
            <img className='w-full mb-8 mt-4 rounded-lg' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-6'>
                <div className='flex gap-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p className=''>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    // map er 3 ta parameter thake
                    hashtags.map((hashtag, idx) => <span key={idx}> <a href=''>#{hashtag}</a> </span>)
                }
            </p>
        </div>
    );
};


Blog.propType = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}
export default Blog;