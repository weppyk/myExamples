function Avatar(props){
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}
function Userinfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
  );
}
function CommentExtract(props) {
    return (
      <div className="Comment">
        <Userinfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

  function formatDate(date) {
    return date.toLocaleDateString();
  }

  export default CommentExtract;