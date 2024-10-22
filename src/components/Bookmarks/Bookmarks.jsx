import React from "react";
import PropTypes from "prop-types";
import Bookmark from "../../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 p-4 mt-4 rounded-lg">
            <div>
                <h2 className="text-4xl bg-white text-center rounded-lg p-3">Reading Time: {readingTime}</h2>
            </div>
            <h2 className="text-3xl text-center bg-slate-400 rounded-lg p-3 m-3">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};


Bookmarks.propTypes ={
    bookmarks: PropTypes.object,
    readingTime: PropTypes.number
}
export default Bookmarks;