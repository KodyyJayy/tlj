import "../css/banner.css";

const Banner = (props) => {
    return (
        <div className="banner">
            <p className="content">
                {props.text || ""} 

                {props.url ? (
                    <>
                        {" "}
                        <a href={props.url.url}>{props.url.coverText}</a>
                    </>
                ) : (
                    <></>
                )}
            </p>
        </div>
    );
}

export default Banner;
