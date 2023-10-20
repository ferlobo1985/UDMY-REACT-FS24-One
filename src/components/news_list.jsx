import NewsListItem from "./news_list_item";

const NewsList = (props) => {

    console.log(props.news)
    return(
        <div>
            <NewsListItem/>
        </div>
    )
}

export default NewsList;