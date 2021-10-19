const ContentList = ({content}) => {
    return (
        <ul>
            {content.map( c  => <div key={c.id}>
                <span>
                    <div>
                        <img src={c.image} alt=""/>
                    </div>
                    <div>
                        <p>{c.name}</p>
                    </div>
                </span>
            </div>
            )}
        </ul>
    );
};

export default ContentList;
/* TODO: Display content */

/*{console.info(`Available content: ${content}`)}*/
