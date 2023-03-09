import "../styles/chatbox.css";

function Chatbox() {
  return (
    <section id="chatbox">
      <div id="nav">
        <div id="contact-details">
          <div id="contact-pfp"></div>
          <div id="contact-user-name">
            <h4>Max Chen</h4>
            <h6>active</h6>
          </div>
        </div>
        <div id="chat-options">
          <i className="material-symbols-outlined">call</i>
          <i className="material-symbols-outlined">video_call</i>
          <i className="material-symbols-outlined">star</i>
        </div>
      </div>
      <div className="convo-box"></div>
      <div className="send-msg-row">
        <div id="input-cont" >
          <i className="material-symbols-outlined">sentiment_satisfied</i>
          <input
            type="text"
            className="send-msg-input"
            placeholder="Type a message"
          />
          <i className="material-symbols-outlined">attach_file</i>
        </div>
      </div>
    </section>
  );
}

export default Chatbox;
